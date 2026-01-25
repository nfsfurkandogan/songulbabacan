import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Politikalar",
  description: "Politika metinleri için yer tutucu.",
  path: "/politikalar"
});

export default function PoliciesPage() {
  return (
    <section className="section">
      <div className="container space-y-4">
        <h1 className="text-3xl font-semibold">Politikalar</h1>
        <p className="text-ink-muted">
          Politika metinleri burada yer alacak. İçerik hazırlandığında güncellenecektir.
        </p>
      </div>
    </section>
  );
}
