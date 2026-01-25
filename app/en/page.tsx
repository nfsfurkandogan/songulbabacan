import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "English",
  description: "The English version of the site is being prepared.",
  path: "/en",
  noIndex: true
});

const highlights = [
  {
    title: "Full translation",
    description: "All pages are being translated to English."
  },
  {
    title: "Fresh updates",
    description: "New content, updates, and guides will follow."
  },
  {
    title: "Direct support",
    description: "You can contact us for help while we finalize the English site."
  }
];

export default function EnglishLandingPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container space-y-6">
          <p className="section-kicker">English</p>
          <h1 className="text-4xl font-semibold md:text-5xl">English version is on the way.</h1>
          <p className="max-w-2xl text-ink-muted md:text-lg">
            We are preparing the full English site. Until then, you can use the Turkish site or
            contact us for quick support.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/">Go to Turkish Site</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/iletisim">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
