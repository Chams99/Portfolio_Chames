import type { APIRoute } from "astro";

export const prerender = false;

const TELEGRAM_BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.TELEGRAM_CHAT_ID;

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000,
  blockDurationMs: 60 * 60 * 1000,
};

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "")
    .substring(0, 2000);
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validateInput(
  name: string,
  email: string,
  subject: string,
  message: string,
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!name || name.length < 2 || name.length > 50) {
    errors.push("Name must be between 2 and 50 characters");
  }

  if (!validateEmail(email)) {
    errors.push("Please enter a valid email address");
  }

  if (!subject || subject.length < 3 || subject.length > 100) {
    errors.push("Subject must be between 3 and 100 characters");
  }

  if (!message || message.length < 5 || message.length > 2000) {
    errors.push("Message must be between 5 and 2000 characters");
  }

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

  const allText = `${name} ${email} ${subject} ${message}`;
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(allText)) {
      errors.push("Suspicious content detected");
      break;
    }
  }

  return { valid: errors.length === 0, errors };
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const current = rateLimitMap.get(ip);

  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return {
      allowed: true,
      remaining: RATE_LIMIT.maxRequests - 1,
      resetTime: now + RATE_LIMIT.windowMs,
    };
  }

  if (current.count >= RATE_LIMIT.maxRequests) {
    if (now < current.resetTime + RATE_LIMIT.blockDurationMs) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: current.resetTime + RATE_LIMIT.blockDurationMs,
      };
    }
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return {
      allowed: true,
      remaining: RATE_LIMIT.maxRequests - 1,
      resetTime: now + RATE_LIMIT.windowMs,
    };
  }

  current.count++;
  rateLimitMap.set(ip, current);

  return {
    allowed: true,
    remaining: RATE_LIMIT.maxRequests - current.count,
    resetTime: current.resetTime,
  };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const ip = clientAddress ?? "unknown";
    const rateLimit = checkRateLimit(ip);

    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Too many requests. Please try again later.",
          retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          },
        },
      );
    }

    const body = await request.json().catch(() => ({}));
    const { name, email, subject, message } = body;

    const sanitizedName = sanitizeInput(name ?? "");
    const sanitizedEmail = sanitizeInput(email ?? "");
    const sanitizedSubject = sanitizeInput(subject ?? "");
    const sanitizedMessage = sanitizeInput(message ?? "");

    const validation = validateInput(
      sanitizedName,
      sanitizedEmail,
      sanitizedSubject,
      sanitizedMessage,
    );

    if (!validation.valid) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Validation failed",
          details: validation.errors,
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.log("Telegram not configured, logging contact form submission:");
      console.log("Name:", sanitizedName);
      console.log("Email:", sanitizedEmail);
      console.log("Subject:", sanitizedSubject);
      console.log("Message:", sanitizedMessage);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Message received (Telegram not configured)",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }

    const telegramMessage = `📧 New Portfolio Contact Form Submission:

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

IP: ${ip}
Time: ${new Date().toISOString()}`;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Portfolio-Contact-Form/1.0",
      },
      body: new URLSearchParams({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "HTML",
      }).toString(),
    });

    const telegramResult = await telegramResponse.json();

    if (telegramResponse.ok && telegramResult.ok) {
      return new Response(
        JSON.stringify({ success: true, message: "Message sent successfully!" }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }

    console.error("Telegram API error:", telegramResult);

    if (telegramResult.error_code === 400 && telegramResult.description?.includes("chat not found")) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Telegram bot not found in chat. Please add the bot to your chat or check the chat ID.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send message via Telegram",
        telegramError: telegramResult.description || "Unknown Telegram error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server error occurred. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
