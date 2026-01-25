import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container grid gap-6 text-center">
        <p className="section-kicker">404</p>
        <h1 className="text-3xl font-semibold md:text-4xl">Aradığınız sayfa bulunamadı.</h1>
        <p className="text-ink-muted">URL'yi kontrol edin veya anasayfaya dönün.</p>
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/">Anasayfaya dön</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
