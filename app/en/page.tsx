import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { prImages } from "@/lib/pr-images";
import Image from "next/image";

export const metadata = createMetadata({
  title: "English | Songül Babacan",
  description:
    "Mentorship, Farmasi opportunities, and a clear earnings plan for modern women entrepreneurs.",
  path: "/en"
});

const highlights = [
  {
    title: "Personal mentorship",
    description: "A clear roadmap tailored to your goals."
  },
  {
    title: "Team growth",
    description: "Community, training, and leadership support."
  },
  {
    title: "Brand strength",
    description: "Farmasi infrastructure and product power."
  }
];

const steps = [
  {
    title: "Start & plan",
    description: "We clarify your goals and build a simple weekly plan."
  },
  {
    title: "Set up & train",
    description: "Products, sales channels, and team setup."
  },
  {
    title: "Grow & lead",
    description: "Track results, build momentum, and lead your team."
  }
];

const faqItems = [
  {
    question: "Who is this system for?",
    answer: "Anyone who wants to build a sustainable income with a flexible schedule."
  },
  {
    question: "Is training provided?",
    answer: "Yes. You’ll receive product, sales, and team-building guidance from day one."
  },
  {
    question: "When can I see results?",
    answer: "It depends on your pace. Consistent action can show results within the first month."
  }
];

const heroImage = prImages[0];
const galleryImages = [prImages[1], prImages[2], prImages[4], prImages[5]];

export default function EnglishLandingPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="soft">Mentorship</Badge>
              <Badge variant="muted">Farmasi</Badge>
            </div>
            <p className="section-kicker">English</p>
            <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
              Start earning with confidence.
            </h1>
            <p className="max-w-2xl text-ink-muted md:text-lg">
              Build your income system with Farmasi, join a supportive women-entrepreneur
              community, and grow with structured mentorship.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/iletisim">Contact</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kazanc-plani">Earnings Plan</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/">Go to Turkish Site</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-lilac/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-lift">
              <Image
                src={heroImage}
                alt="Songül Babacan"
                width={520}
                height={640}
                className="h-[420px] w-full object-cover md:h-[480px]"
                priority
              />
            </div>
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

      <section className="section bg-section-glow">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="section-kicker">How It Works</p>
            <h2 className="section-title">A simple 3-step growth plan</h2>
            <p className="text-ink-muted">
              We focus on clarity, steady action, and measurable results.
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Community</p>
            <h2 className="section-title">Moments from trainings & meetups</h2>
            <p className="text-ink-muted">
              Real people, real momentum. A few snapshots from our community.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-soft"
              >
                <Image
                  src={src}
                  alt={`Community photo ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-kicker">FAQ</p>
            <h2 className="section-title">Quick answers</h2>
            <p className="text-ink-muted">Program details, earnings model, and schedule.</p>
          </div>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <div key={item.question} className="glass-card p-5">
                <p className="text-sm font-semibold">{item.question}</p>
                <p className="mt-2 text-sm text-ink-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-card flex flex-col items-start gap-4 p-7 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-brand-600">
                Ready to build your earnings plan?
              </p>
              <p className="text-sm text-ink-muted md:text-base">
                Let’s clarify your goals and map the next steps together.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/iletisim">Contact</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kazanc-plani">Earnings Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
