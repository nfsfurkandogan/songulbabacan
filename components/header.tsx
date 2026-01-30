"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import JoinTrigger from "@/components/join-trigger";
import { cn } from "@/lib/utils";

type LanguageMenuProps = {
  variant?: "desktop" | "mobile";
  onSelect?: () => void;
};

const languageItems = [
  { label: "Türkçe", href: "/" },
  { label: "English", href: "/en" }
];

function LanguageMenu({ variant = "desktop", onSelect }: LanguageMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const isEnglish = pathname.startsWith("/en");
  const currentLanguage = isEnglish ? "English" : "Türkçe";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleSelect = () => {
    setOpen(false);
    onSelect?.();
  };

  const isActiveLanguage = (href: string) => (href === "/en" ? isEnglish : !isEnglish);
  const buttonClassName =
    variant === "desktop"
      ? "flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-2 text-sm font-semibold text-ink-muted transition hover:bg-white hover:text-ink"
      : "flex w-full items-center justify-between rounded-2xl border border-border bg-white/90 px-4 py-2 text-sm font-semibold text-ink-muted transition hover:text-ink";
  const menuPositionClass =
    variant === "desktop"
      ? "absolute right-0 top-full mt-2 w-44 origin-top-right"
      : "mt-2 w-full origin-top";

  return (
    <div ref={menuRef} className={cn("relative", variant === "mobile" && "w-full")}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(buttonClassName, open && "text-ink")}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span>{currentLanguage}</span>
        <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          menuPositionClass,
          "rounded-2xl border border-border bg-white/95 p-1 shadow-lift backdrop-blur transition",
          variant === "desktop"
            ? open
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
            : open
              ? "block"
              : "hidden"
        )}
        role="menu"
      >
        {languageItems.map((item) => {
          const isActive = isActiveLanguage(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition",
                isActive ? "bg-brand/10 text-ink" : "text-ink-muted hover:bg-brand/5 hover:text-ink"
              )}
              onClick={handleSelect}
              role="menuitem"
            >
              <span>{item.label}</span>
              {isActive && <Check className="h-4 w-4 text-brand" />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="sr-only">Songül Babacan</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 bg-white/80 text-brand shadow-soft">
            <Sparkles className="h-4 w-4" />
          </span>
          <img src="/logo.png" alt="Songül Babacan" className="h-11 w-auto md:h-12" />
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/90 text-ink md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menüyü aç"
          aria-expanded={open}
        >
          <span className="flex flex-col items-center gap-1">
            <span className="block h-0.5 w-5 rounded-full bg-ink" />
            <span className="block h-0.5 w-5 rounded-full bg-ink" />
          </span>
          <span className="sr-only">Menü</span>
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-ink-muted transition hover:text-ink",
                isActive(item.href) && "text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline">
            <Link href="/kazanc-plani">Kazanç Planı</Link>
          </Button>
          <JoinTrigger>Üye Ol</JoinTrigger>
          <LanguageMenu />
        </nav>
      </div>
      <div
        className={cn(
          "border-t border-border bg-white/95 px-6 py-6 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium text-ink-muted",
                isActive(item.href) && "text-ink"
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kazanc-plani"
            className="rounded-full border border-border px-4 py-2 text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Kazanç Planı
          </Link>
          <JoinTrigger className="w-full justify-center" onClick={() => setOpen(false)}>
            Üye Ol
          </JoinTrigger>
          <LanguageMenu variant="mobile" onSelect={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
}
