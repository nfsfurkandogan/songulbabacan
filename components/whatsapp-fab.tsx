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
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
