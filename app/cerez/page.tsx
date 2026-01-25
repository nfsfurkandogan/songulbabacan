import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Çerez Politikası",
  description: "Çerez politikası metni için yer tutucu.",
  path: "/cerez"
});

export default function CookiePage() {
  return (
    <section className="section">
      <div className="container space-y-4">
        <h1 className="text-3xl font-semibold">Çerez Politikası</h1>
        <p className="text-ink-muted">
          Çerez politikası metni burada yer alacak. İçerik hazırlandığında güncellenecektir.
        </p>
      </div>
    </section>
  );
}
