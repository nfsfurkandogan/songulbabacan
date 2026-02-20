export interface ContactSubmitPayload {
  name: string;
  email?: string;
  phone?: string;
  message: string;
  city?: string;
  address?: string;
}

const ENDPOINTS = ["/contact.php", "/api/contact"] as const;

export async function submitContact(payload: ContactSubmitPayload): Promise<void> {
  let lastError = "Form gönderilemedi";

  for (const endpoint of ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        return;
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        const data = (await response.json()) as { error?: string };
        if (data?.error) {
          lastError = data.error;
        }
      } else {
        const text = (await response.text()).trim();
        if (text) {
          lastError = text;
        }
      }
    } catch (error) {
      if (error instanceof Error && error.message) {
        lastError = error.message;
      }
    }
  }

  throw new Error(lastError);
}
