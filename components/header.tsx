"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import JoinTrigger from "@/components/join-trigger";
import { cn } from "@/lib/utils";

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
          <img src="/logo.png" alt="Songül Babacan" className="h-10 w-auto" />
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
        </div>
      </div>
    </header>
  );
}
