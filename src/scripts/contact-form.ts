export {};

type ContactField = "name" | "email" | "subject" | "message";
type StatusType = "success" | "error" | null;

const fields: ContactField[] = ["name", "email", "subject", "message"];
let runController: AbortController | undefined;

function cleanupContactForm() {
  runController?.abort();
  runController = undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function initContactForm() {
  cleanupContactForm();

  const form = document.getElementById("contact-form");
  if (!(form instanceof HTMLFormElement)) return;

  const controller = new AbortController();
  const { signal } = controller;
  runController = controller;

  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const submitText = form.querySelector<HTMLElement>(".submit-text");
  const submitSpinner = form.querySelector<HTMLElement>(".submit-spinner");
  const statusElement = form.querySelector<HTMLDivElement>(".form-status");
  if (!submitButton || !submitText || !submitSpinner || !statusElement) return;

  let submitting = false;
  form.noValidate = true;

  const getField = (name: ContactField) => form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
  const getErrorElement = (name: ContactField) => document.getElementById(`contact-${name}-error`);

  const setStatus = (type: StatusType, message = "") => {
    statusElement.classList.remove(
      "hidden",
      "form-status-success",
      "form-status-error",
      "border-emerald-500/30",
      "bg-emerald-500/10",
      "text-emerald-200",
      "border-red-500/30",
      "bg-red-500/10",
      "text-red-200",
    );

    if (!type) {
      statusElement.classList.add("hidden");
      statusElement.textContent = "";
      return;
    }

    statusElement.classList.add(
      type === "success" ? "form-status-success" : "form-status-error",
      type === "success" ? "border-emerald-500/30" : "border-red-500/30",
      type === "success" ? "bg-emerald-500/10" : "bg-red-500/10",
      type === "success" ? "text-emerald-200" : "text-red-200",
    );
    statusElement.textContent = message;
  };

  if (new URLSearchParams(window.location.search).get("sent") === "1") {
    setStatus("success", form.dataset.success ?? "Message sent.");
  }

  const clearFieldErrors = () => {
    fields.forEach((name) => {
      const field = getField(name);
      const error = getErrorElement(name);
      field?.setAttribute("aria-invalid", "false");
      if (error) {
        error.classList.add("hidden");
        error.textContent = "";
      }
      if (error) error.textContent = "";
    });
  };

  const setFieldError = (name: ContactField, message: string) => {
    const field = getField(name);
    const error = getErrorElement(name);
    field?.setAttribute("aria-invalid", "true");
    if (error) {
      error.textContent = message;
      error.classList.remove("hidden");
    }
  };

  const localMessageFor = (name: ContactField, code: string) => {
    if (name === "email" || code === "invalid_email") return form.dataset.invalidEmail ?? "Please enter a valid email address.";
    if (name === "name") return form.dataset.invalidName ?? "Please enter your name.";
    if (name === "subject") return form.dataset.invalidSubject ?? "Please enter a subject.";
    return form.dataset.invalidMessage ?? "Please add a little more detail.";
  };

  const setLoading = (loading: boolean) => {
    submitButton.disabled = loading;
    submitButton.setAttribute("aria-busy", String(loading));
    submitText.classList.toggle("hidden", loading);
    submitSpinner.classList.toggle("hidden", !loading);
  };

  fields.forEach((name) => {
    getField(name)?.addEventListener("input", () => {
      const field = getField(name);
      const error = getErrorElement(name);
      field?.setAttribute("aria-invalid", "false");
      error?.classList.add("hidden");
    }, { signal });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitting) return;

    clearFieldErrors();
    setStatus(null);

    const formData = new FormData(form);
    const values = Object.fromEntries(fields.map((name) => [name, String(formData.get(name) ?? "").trim()]));
    const invalidFields = fields.filter((name) => !values[name]);

    if (invalidFields.length) {
      invalidFields.forEach((name) => setFieldError(name, localMessageFor(name, "required")));
      setStatus("error", form.dataset.required ?? "Please fill in all fields.");
      getField(invalidFields[0])?.focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setFieldError("email", localMessageFor("email", "invalid_email"));
      setStatus("error", form.dataset.invalidEmail ?? "Please enter a valid email address.");
      getField("email")?.focus();
      return;
    }

    submitting = true;
    setLoading(true);
    const requestController = new AbortController();
    const timeout = window.setTimeout(() => requestController.abort(), 10000);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
        signal: requestController.signal,
      });

      const result: unknown = await response.json().catch(() => null);
      if (response.ok && isRecord(result) && result.success === true) {
        setStatus("success", form.dataset.success ?? "Message sent.");
        form.reset();
        clearFieldErrors();
        return;
      }

      const errorCode = isRecord(result) && typeof result.errorCode === "string" ? result.errorCode : "";
      const fieldErrors = isRecord(result) && isRecord(result.fieldErrors) ? result.fieldErrors : null;
      let firstInvalidField: ContactField | undefined;

      if (fieldErrors) {
        fields.forEach((name) => {
          const code = fieldErrors[name];
          if (typeof code === "string") {
            setFieldError(name, localMessageFor(name, code));
            firstInvalidField ??= name;
          }
        });
      }

      const message = errorCode === "RATE_LIMITED"
        ? form.dataset.rateLimit
        : errorCode === "CONTACT_UNAVAILABLE"
          ? form.dataset.unavailable
          : errorCode === "CONTACT_TIMEOUT"
            ? form.dataset.timeout
            : errorCode === "VALIDATION_FAILED"
              ? form.dataset.required
              : errorCode === "CONTACT_DELIVERY_FAILED" || errorCode === "INTERNAL_ERROR"
                ? form.dataset.error
          : isRecord(result) && typeof result.error === "string"
            ? result.error
            : form.dataset.error;

      setStatus("error", message ?? form.dataset.unexpected ?? "Unexpected response.");
      if (firstInvalidField) getField(firstInvalidField)?.focus();
    } catch (error) {
      const message = error instanceof DOMException && error.name === "AbortError"
        ? form.dataset.timeout
        : form.dataset.network ?? form.dataset.error;
      setStatus("error", message ?? "Please try again.");
    } finally {
      window.clearTimeout(timeout);
      submitting = false;
      setLoading(false);
    }
  }, { signal });
}

document.addEventListener("astro:before-swap", cleanupContactForm);
document.addEventListener("astro:page-load", initContactForm);

if (document.readyState !== "loading") initContactForm();
