import Link from "next/link";
import { Button } from "@/components/ui/button";
import JoinTrigger from "@/components/join-trigger";

interface CtaStripProps {
  title: string;
  description: string;
}

export default function CtaStrip({ title, description }: CtaStripProps) {
  return (
    <div className="cta-card grid gap-6 p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
      <div>
        <p className="section-kicker">Mentorluk</p>
        <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm text-ink-muted">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3 md:justify-end">
        <JoinTrigger>Üye Ol</JoinTrigger>
        <Button asChild variant="outline">
          <Link href="/iletisim">İletişime Geç</Link>
        </Button>
      </div>
    </div>
  );
}
