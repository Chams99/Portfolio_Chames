import type { APIRoute } from "astro";
import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";

export const prerender = false;

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const MAX_BODY_BYTES = 12_000;
const PROVIDER_TIMEOUT_MS = 8_000;

type ContactField = "name" | "email" | "subject" | "message";
type FieldErrors = Partial<Record<ContactField, string>>;

interface RateLimitEntry {
  count: number;
  windowResetAt: number;
  blockedUntil: number;
  lastSeenAt: number;
}

const rateLimitStorePath = process.env.CONTACT_RATE_LIMIT_FILE ?? join(tmpdir(), "portfolio-contact-rate-limit.json");
let rateLimitQueue: Promise<void> = Promise.resolve();
const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000,
  blockDurationMs: 60 * 60 * 1000,
};

function jsonResponse(payload: Record<string, unknown>, status: number, headers: HeadersInit = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function isHtmlRequest(request: Request) {
  return request.headers.get("accept")?.includes("text/html") === true;
}

function formPath(request: Request) {
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      if (new URL(referer).pathname.startsWith("/fr")) return "/fr/contact";
    } catch {
      // Fall back to the default locale when the browser sends an invalid referer.
    }
  }
  return "/contact";
}

function reply(
  request: Request,
  payload: Record<string, unknown>,
  status: number,
  headers: HeadersInit = {},
) {
  if (!isHtmlRequest(request)) return jsonResponse(payload, status, headers);

  if (payload.success === true) {
    const redirectUrl = new URL(`${formPath(request)}?sent=1`, request.url);
    return Response.redirect(redirectUrl, 303);
  }

  const message = typeof payload.error === "string" ? payload.error : "Please check the form and try again.";
  const backUrl = new URL(formPath(request), request.url).toString();
  return new Response(
    `<!doctype html><html lang="en"><meta charset="utf-8"><title>Contact form</title><body><main><h1>Message not sent</h1><p>${escapeHtml(message)}</p><p><a href="${escapeHtml(backUrl)}">Return to the contact form</a></p></main></body></html>`,
    {
      status,
      headers: { "Content-Type": "text/html; charset=utf-8", ...headers },
    },
  );
}

type RateLimitStore = Record<string, RateLimitEntry>;

function rateLimitKey(ip: string) {
  return createHash("sha256").update(ip).digest("hex");
}

async function readRateLimitStore(): Promise<RateLimitStore> {
  try {
    const content = await readFile(rateLimitStorePath, "utf8");
    const parsed: unknown = JSON.parse(content);
    return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)
      ? parsed as RateLimitStore
      : {};
  } catch {
    return {};
  }
}

async function writeRateLimitStore(store: RateLimitStore) {
  await mkdir(dirname(rateLimitStorePath), { recursive: true });
  const temporaryPath = `${rateLimitStorePath}.${process.pid}.tmp`;
  await writeFile(temporaryPath, JSON.stringify(store), { encoding: "utf8", mode: 0o600 });
  await rename(temporaryPath, rateLimitStorePath);
}

async function checkRateLimit(ip: string) {
  const operation = rateLimitQueue.then(async () => {
    const now = Date.now();
    const store = await readRateLimitStore();

    for (const [key, entry] of Object.entries(store)) {
      if (now > entry.lastSeenAt + RATE_LIMIT.blockDurationMs && now > entry.windowResetAt) {
        delete store[key];
      }
    }

    const entries = Object.entries(store).sort(([, first], [, second]) => second.lastSeenAt - first.lastSeenAt);
    entries.slice(1000).forEach(([key]) => delete store[key]);

    const key = rateLimitKey(ip);
    const current = store[key];
    if (current?.blockedUntil && now < current.blockedUntil) {
      current.lastSeenAt = now;
      await writeRateLimitStore(store);
      return { allowed: false, retryAfter: Math.ceil((current.blockedUntil - now) / 1000) };
    }

    if (!current || now >= current.windowResetAt) {
      store[key] = {
        count: 1,
        windowResetAt: now + RATE_LIMIT.windowMs,
        blockedUntil: 0,
        lastSeenAt: now,
      };
      await writeRateLimitStore(store);
      return { allowed: true, retryAfter: 0 };
    }

    current.lastSeenAt = now;
    current.count += 1;
    if (current.count > RATE_LIMIT.maxRequests) {
      current.blockedUntil = now + RATE_LIMIT.blockDurationMs;
      await writeRateLimitStore(store);
      return { allowed: false, retryAfter: Math.ceil(RATE_LIMIT.blockDurationMs / 1000) };
    }

    await writeRateLimitStore(store);
    return { allowed: true, retryAfter: 0 };
  });

  rateLimitQueue = operation.then(() => undefined, () => undefined);
  return operation;
}

function parsePayload(body: string, contentType: string): { value: unknown } | { error: "MALFORMED_JSON" } {
  if (contentType.startsWith("application/json")) {
    try {
      return { value: JSON.parse(body) };
    } catch {
      return { error: "MALFORMED_JSON" };
    }
  }

  const params = new URLSearchParams(body);
  return { value: Object.fromEntries(params.entries()) };
}

async function readBodyWithinLimit(request: Request, maxBytes: number): Promise<string | null> {
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;
      totalBytes += value.byteLength;
      if (totalBytes > maxBytes) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder().decode(body);
}

function validatePayload(value: unknown): { data?: Record<ContactField, string>; fieldErrors: FieldErrors } {
  const fieldErrors: FieldErrors = {};
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return { fieldErrors: { name: "invalid_type" } };
  }

  const input = value as Record<string, unknown>;
  const data = {} as Record<ContactField, string>;
  const fields: ContactField[] = ["name", "email", "subject", "message"];

  for (const field of fields) {
    if (typeof input[field] !== "string") {
      fieldErrors[field] = "invalid_type";
      continue;
    }
    data[field] = input[field].trim();
  }

  if (typeof data.name === "string" && (data.name.length < 2 || data.name.length > 50)) {
    fieldErrors.name = data.name.length < 2 ? "too_short" : "too_long";
  }
  if (typeof data.email === "string" && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254)) {
    fieldErrors.email = "invalid_email";
  }
  if (typeof data.subject === "string" && (data.subject.length < 3 || data.subject.length > 100)) {
    fieldErrors.subject = data.subject.length < 3 ? "too_short" : "too_long";
  }
  if (typeof data.message === "string" && (data.message.length < 5 || data.message.length > 2000)) {
    fieldErrors.message = data.message.length < 5 ? "too_short" : "too_long";
  }

  const allText = fields.map((field) => data[field] ?? "").join(" ");
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /eval\(/i,
    /document\./i,
    /window\./i,
    /alert\(/i,
    /prompt\(/i,
  ];

  if (suspiciousPatterns.some((pattern) => pattern.test(allText))) {
    fieldErrors.message ??= "suspicious_content";
  }

  return Object.keys(fieldErrors).length ? { fieldErrors } : { data, fieldErrors };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  const isJson = contentType.startsWith("application/json");
  const isForm = contentType.startsWith("application/x-www-form-urlencoded");

  if (!isJson && !isForm) {
    return reply(request, {
      success: false,
      errorCode: "UNSUPPORTED_MEDIA_TYPE",
      error: "Please submit the contact form using a supported format.",
    }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return reply(request, {
      success: false,
      errorCode: "PAYLOAD_TOO_LARGE",
      error: "Your message is too large. Please shorten it and try again.",
    }, 413);
  }

  const ip = clientAddress ?? "unknown";
  let rateLimit: { allowed: boolean; retryAfter: number };
  try {
    rateLimit = await checkRateLimit(ip);
  } catch {
    console.error("Contact rate-limit storage is unavailable.");
    return reply(request, {
      success: false,
      errorCode: "CONTACT_UNAVAILABLE",
      error: "Contact delivery is temporarily unavailable. Please use the email link instead.",
    }, 503);
  }
  if (!rateLimit.allowed) {
    return reply(request, {
      success: false,
      errorCode: "RATE_LIMITED",
      error: "Too many messages. Please try again later.",
      retryAfter: rateLimit.retryAfter,
    }, 429, {
      "Retry-After": String(rateLimit.retryAfter),
    });
  }

  try {
    const rawBody = await readBodyWithinLimit(request, MAX_BODY_BYTES);
    if (rawBody === null) {
      return reply(request, {
        success: false,
        errorCode: "PAYLOAD_TOO_LARGE",
        error: "Your message is too large. Please shorten it and try again.",
      }, 413);
    }

    const parsed = parsePayload(rawBody, contentType);
    if ("error" in parsed) {
      return reply(request, {
        success: false,
        errorCode: parsed.error,
        error: "The submitted data could not be read. Please try again.",
      }, 400);
    }

    const validation = validatePayload(parsed.value);
    if (!validation.data) {
      return reply(request, {
        success: false,
        errorCode: "VALIDATION_FAILED",
        error: "Please check the highlighted fields.",
        fieldErrors: validation.fieldErrors,
      }, 400);
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Contact delivery is not configured: missing Telegram credentials.");
      return reply(request, {
        success: false,
        errorCode: "CONTACT_UNAVAILABLE",
        error: "Contact delivery is not configured yet. Please use the email link instead.",
      }, 503);
    }

    const { name, email, subject, message } = validation.data;
    const telegramMessage = [
      "New Portfolio Contact Form Submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
      "",
      `Time: ${new Date().toISOString()}`,
    ].join("\n");

    const providerController = new AbortController();
    const timeout = setTimeout(() => providerController.abort(), PROVIDER_TIMEOUT_MS);
    let telegramResponse: Response;

    try {
      telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Portfolio-Contact-Form/1.0",
        },
        body: new URLSearchParams({ chat_id: TELEGRAM_CHAT_ID, text: telegramMessage }).toString(),
        signal: providerController.signal,
      });
    } catch (error) {
      clearTimeout(timeout);
      if (error instanceof DOMException && error.name === "AbortError") {
        return reply(request, {
          success: false,
          errorCode: "CONTACT_TIMEOUT",
          error: "Contact delivery timed out. Please try again.",
        }, 504);
      }

      console.error("Contact provider request failed.");
      return reply(request, {
        success: false,
        errorCode: "CONTACT_DELIVERY_FAILED",
        error: "Your message could not be delivered. Please try again.",
      }, 502);
    }

    let providerResult: unknown = null;
    try {
      providerResult = await telegramResponse.json();
    } catch {
      providerResult = null;
    } finally {
      clearTimeout(timeout);
    }

    if (telegramResponse.ok && typeof providerResult === "object" && providerResult !== null && "ok" in providerResult && providerResult.ok === true) {
      return reply(request, { success: true, message: "Message sent successfully." }, 200);
    }

    console.error("Contact provider returned a non-success response.");
    return reply(request, {
      success: false,
      errorCode: "CONTACT_DELIVERY_FAILED",
      error: "Your message could not be delivered. Please try again.",
    }, 502);
  } catch (error) {
    console.error("Contact form request failed.", error instanceof Error ? error.name : "unknown");
    return reply(request, {
      success: false,
      errorCode: "INTERNAL_ERROR",
      error: "Something went wrong. Please try again later.",
    }, 500);
  }
};
