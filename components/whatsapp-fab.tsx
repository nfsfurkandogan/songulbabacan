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
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/90 px-2.5 py-2 text-sm font-semibold text-ink shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lift md:bottom-8 md:right-8 md:gap-3 md:px-3 md:py-2.5"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow ring-2 ring-white/90 transition group-hover:scale-105 md:h-11 md:w-11">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden whitespace-nowrap pr-1 text-sm md:inline">WhatsApp</span>
    </Link>
  );
}
