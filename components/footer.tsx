import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/70">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <img src="/logo.png" alt="Songül Babacan" className="h-10 w-auto" />
          <p className="text-sm text-ink-muted">
            Modern kadın girişimciler için yapılandırılmış mentor programları, Farmasi fırsatları
            ve sürdürülebilir kazanç sistemleri.
          </p>
          <div className="flex items-center gap-3">
            {siteConfig.social.instagram && (
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            )}
            {siteConfig.social.telegram && (
              <Link
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80"
              >
                <Send className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Hızlı Linkler
          </p>
          <ul className="space-y-2 text-sm">
            {siteConfig.footerLinks.quick.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
            İletişim
          </p>
          <div className="space-y-3 text-sm text-ink-muted">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-ink">
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ink">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4" />
              <span>Türkiye genelinde dijital mentorluk & ekip yönetimi</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/40">
        <div className="container flex flex-col items-start justify-between gap-4 py-6 text-xs text-ink-soft md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Songül Babacan. Tüm hakları saklıdır.</span>
          <div className="flex flex-wrap gap-4">
            {siteConfig.footerLinks.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
