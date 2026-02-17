import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppFab() {
  return (
    <a
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişim"
      className="group fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/90 px-2.5 py-2 text-sm font-semibold text-ink shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lift md:bottom-8 md:left-8 md:gap-3 md:px-3 md:py-2.5"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow ring-2 ring-white/90 transition group-hover:scale-105 md:h-11 md:w-11">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.1.55 4.15 1.6 5.96L0 24l6.35-1.66a11.8 11.8 0 0 0 5.7 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.14-3.4-8.3Zm-8.46 18.3h-.01a9.8 9.8 0 0 1-5-1.37l-.35-.2-3.77.98 1-3.67-.23-.38a9.86 9.86 0 0 1 1.5-12.27 9.78 9.78 0 0 1 6.86-2.84c5.38 0 9.77 4.39 9.77 9.78 0 5.39-4.39 9.77-9.77 9.77Zm5.36-7.33c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.47.13-.62.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.1 3.2 5.08 4.5.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.42-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </span>
      <span className="hidden whitespace-nowrap pr-1 text-sm md:inline">WhatsApp</span>
    </a>
  );
}
