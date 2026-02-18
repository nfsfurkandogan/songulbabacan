import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppFab() {
  const whatsappNumber = siteConfig.contact.phone.replace(/\D/g, "");
  const whatsappHref = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

  return (
    <a
      href={whatsappHref}
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.015-1.04 2.48 0 1.463 1.065 2.877 1.213 3.075.149.198 2.095 3.2 5.077 4.487.711.307 1.265.49 1.697.629.713.227 1.363.195 1.876.118.572-.085 1.758-.718 2.005-1.41.248-.694.248-1.29.173-1.41-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.867 9.867 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.441 4.43-9.87 9.875-9.87 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.443-4.432 9.872-9.877 9.872m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892a11.81 11.81 0 0 0 1.588 5.945L0 24l6.304-1.654a11.859 11.859 0 0 0 5.741 1.467h.005c6.555 0 11.89-5.335 11.893-11.893a11.823 11.823 0 0 0-3.48-8.431z" />
        </svg>
      </span>
      <span className="hidden whitespace-nowrap pr-1 text-sm md:inline">WhatsApp</span>
    </a>
  );
}
