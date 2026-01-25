import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gizlilik",
  description: "Gizlilik politikası metni için yer tutucu.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container space-y-4">
        <h1 className="text-3xl font-semibold">Gizlilik</h1>
        <p className="text-ink-muted">
          Gizlilik politikası metni burada yer alacak. İçerik hazırlandığında güncellenecektir.
        </p>
      </div>
    </section>
  );
}
