import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Organizasyon Semasi",
  description: "Farmasi ekip yapisi ve organizasyon semasi hakkinda genel bakis.",
  path: "/organizasyon-semasi"
});

export default function OrgChartPage() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6">
          <p className="section-kicker">Organizasyon Semasi</p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Ekip yapinizi gorunur kilacak net bir organizasyon semasi.
          </h1>
          <p className="text-ink-muted">
            Ekip rollerini ve liderlik seviyelerini birlikte planlayarak, buyumeyi daha kolay takip
            edebilirsiniz. Semayi sizin hedeflerinize gore ozellestirebiliriz.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp ile Talep Et
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/iletisim">Iletisim Formu</Link>
            </Button>
          </div>
        </div>
        <div className="glass-card flex flex-col items-center justify-center gap-4 p-6 text-center text-sm text-ink-muted">
          <Image src="/hero-handshake.png" alt="Organizasyon semasi" width={360} height={260} />
          <p>
            Organizasyon semasi gorselini sizinle paylasabiliriz. Hazir gorseliniz varsa buraya
            ekleyebilirim.
          </p>
        </div>
      </div>
    </section>
  );
}
