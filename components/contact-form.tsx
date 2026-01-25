"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message")
        })
      });

      if (!response.ok) throw new Error("Form gönderilemedi");
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="name" placeholder="Ad Soyad" required />
        <Input name="email" type="email" placeholder="E-posta" required />
      </div>
      <Input name="phone" placeholder="Telefon" />
      <Textarea name="message" placeholder="Mesajınız" required />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Gönderiliyor..." : "Gönder"}
      </Button>
      {status === "success" && (
        <p className="text-sm text-ink-muted">Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Bir hata oluştu. Lütfen tekrar deneyin.</p>
      )}
    </form>
  );
}
