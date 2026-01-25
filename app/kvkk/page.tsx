import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "KVKK",
  description: "KVKK metni için yer tutucu.",
  path: "/kvkk"
});

export default function KvkkPage() {
  return (
    <section className="section">
      <div className="container space-y-4">
        <h1 className="text-3xl font-semibold">KVKK</h1>
        <p className="text-ink-muted">
          KVKK metni burada yer alacak. İçerik hazırlandığında güncellenecektir.
        </p>
      </div>
    </section>
  );
}
