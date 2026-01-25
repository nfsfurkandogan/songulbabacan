import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppFab() {
  return (
    <Link
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişim"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-white/60 bg-white/85 px-3 py-2 text-sm font-semibold text-ink shadow-lift backdrop-blur transition hover:-translate-y-0.5 md:bottom-8 md:right-8 md:pr-4"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition group-hover:scale-105">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden whitespace-nowrap pr-1 md:inline">WhatsApp</span>
    </Link>
  );
}
