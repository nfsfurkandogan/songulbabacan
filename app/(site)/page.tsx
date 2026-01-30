import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JoinTrigger from "@/components/join-trigger";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CtaStrip from "@/components/cta-strip";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import { prImages } from "@/lib/pr-images";

const faqItems = [
  {
    question: "Farmasi sistemi kimler için uygundur?",
    answer:
      "Kendi gelir modelini kurmak isteyen, esnek çalışmayı tercih eden ve ekip yönetimine açık herkes için uygundur."
  },
  {
    question: "Başlangıç için eğitim veriliyor mu?",
    answer:
      "Evet. İlk günden itibaren ürün bilgisi, satış kanalları, dijital strateji ve ekip kurma eğitimleri sunuyorum."
  },
  {
    question: "Kazanç ne kadar sürede görünür hale gelir?",
    answer:
      "Sistemi uygulama hızınıza göre değişir. Disiplinli bir başlangıç yapan üyeler ilk ay içerisinde gelir yaratmaya başlayabiliyor."
  }
];

const heroImage = prImages[0];
const galleryImages = [prImages[1], prImages[2], prImages[4], prImages[5], prImages[8], prImages[10]];

export default function HomePage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <div className="flex flex-wrap gap-2">
              <Badge variant="soft">PR • Farmasi • Mentorluk</Badge>
              <Badge variant="muted">Premium Mentorluk</Badge>
            </div>
            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
              Kazanmak için başla.
            </h1>
            <p className="text-lg text-ink-muted md:text-xl">
              Farmasi ile kendi gelirini kur. Kadın girişimci topluluğumuzda mentorlukla büyü.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile İletişim
                </Link>
              </Button>
              <JoinTrigger variant="outline">Üye Ol</JoinTrigger>
              <Button asChild variant="ghost">
                <Link href="/kazanc-plani">Kazanç Planı</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: "Mentorluk", desc: "Kişisel yol haritası" },
                { title: "Ekip", desc: "Topluluk ve eğitim" },
                { title: "Altyapı", desc: "Farmasi gücü" }
              ].map((item) => (
                <div key={item.title} className="glass-card p-4">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-ink-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-lilac/20 blur-2xl" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-lift lg:mx-0">
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
        <div className="container space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Neden Farmasi</p>
            <h2 className="section-title">Marka gücü + stratejik mentorluk</h2>
            <p className="text-ink-muted">
              Farmasi’nin global gücünü, satış ve ekip yönetiminde kanıtlanmış yöntemlerle
              birleştiriyorum. Net hedefler ve ölçülebilir adımlarla ilerliyoruz.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ücretsiz üyelik",
                desc: "Giriş bariyeri yok; eğitim ve destek ilk günden başlar."
              },
              {
                title: "Kişisel yol haritası",
                desc: "Hedefine göre haftalık takip ve performans planı."
              },
              {
                title: "Dijital görünürlük",
                desc: "Sosyal medya ve içerik planı ile sürdürülebilir büyüme."
              }
            ].map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="section-kicker">Nasıl Başlanır</p>
            <h2 className="section-title">3 adımda güvenli başlangıç</h2>
            <p className="text-ink-muted">
              İlk görüşmeden itibaren sizi ve hedeflerinizi analiz ediyor, başarıya giden adımları
              netleştiriyoruz.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Tanışma & analiz",
                  desc: "Hedeflerinizi ve mevcut kaynaklarınızı birlikte değerlendiriyoruz."
                },
                {
                  step: "02",
                  title: "Kurulum & eğitim",
                  desc: "Farmasi sistemini kuruyor, dijital altyapınızı hazırlıyoruz."
                },
                {
                  step: "03",
                  title: "Büyüme & liderlik",
                  desc: "Ekip kurma, satış takibi ve sürdürülebilir liderlik planı."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="text-sm text-ink-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="glass-card p-6">
              <p className="text-sm text-ink-muted">Topluluk gücü</p>
              <p className="mt-2 text-lg font-semibold">Başarıyı tek başınıza değil, doğru ekiple yakalayın.</p>
              <p className="mt-3 text-sm text-ink-muted">
                Haftalık toplantılar, içerik önerileri ve takip sistemiyle yalnız kalmazsınız.
              </p>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm text-ink-muted">Premium kaynaklar</p>
              <p className="mt-2 text-lg font-semibold">Ürün eğitimi, satış stratejisi ve liderlik içerikleri.</p>
              <p className="mt-3 text-sm text-ink-muted">
                Özel PDF ve video içeriklerle süreci hızlandırın.
              </p>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm text-ink-muted">Bire bir takip</p>
              <p className="mt-2 text-lg font-semibold">Hedef odaklı performans görüşmeleri.</p>
              <p className="mt-3 text-sm text-ink-muted">
                Süreç boyunca strateji güncellemeleri ve motivasyon desteği.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Başarı Hikayeleri</p>
            <h2 className="section-title">Gerçek deneyimler, gerçek dönüşüm</h2>
            <p className="text-ink-muted">
              Mentorluk programı ile yol alan kadın girişimcilerden ilham alın.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Elif C.",
                result: "İlk 2 ayda düzenli gelir",
                quote:
                  "Ekip kurma stratejileri sayesinde hem gelir hem de özgüven kazandım."
              },
              {
                name: "Zeynep A.",
                result: "Dijital satışta %35 artış",
                quote: "Planlı içerik takvimi ile satışım istikrarlı hale geldi."
              },
              {
                name: "Merve T.",
                result: "Liderlik rolüne yükseldi",
                quote: "Mentorluk desteği, cesur kararlar almamı sağladı."
              }
            ].map((item) => (
              <div key={item.name} className="glass-card p-6">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-brand">{item.result}</p>
                <p className="mt-3 text-sm text-ink-muted">“{item.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Topluluk</p>
            <h2 className="section-title">Eğitim ve ekip buluşmalarından kareler</h2>
            <p className="text-ink-muted">
              Gerçek sahneler, gerçek enerji. Ekibimizle buluştuğumuz anlardan seçmeler.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-soft"
              >
                <Image
                  src={src}
                  alt={`Songül Babacan etkinlik fotoğrafı ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <p className="section-kicker">Sık Sorulan Sorular</p>
            <h2 className="section-title">Merak ettiklerini netleştirelim</h2>
            <p className="text-ink-muted">
              Program, gelir modeli ve çalışma düzeni hakkında kısa ve net cevaplar.
            </p>
            <div className="space-y-2 text-sm text-ink-muted">
              <p className="font-semibold text-ink">Öne çıkan başlıklar</p>
              <p>Üyelik süreci, eğitim desteği, kazancın görünür olması.</p>
            </div>
            <div className="text-sm text-ink-muted">
              Daha detaylı görüşmek istersen{" "}
              <Link href="/iletisim" className="font-semibold text-ink hover:text-brand">
                iletişim
              </Link>{" "}
              sayfasından yazabilirsin.
            </div>
          </div>
          <Accordion type="single" collapsible className="glass-card p-6">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="section-kicker">İletişim</p>
            <h2 className="section-title">Sorularını birlikte netleştirelim</h2>
            <p className="text-ink-muted">
              Size uygun mentorluk planını belirlemek ve kazanç hedefinizi netleştirmek için
              hızlıca iletişime geçebilirsiniz.
            </p>
            <div className="space-y-2 text-sm text-ink-muted">
              <p className="font-semibold text-ink">Neleri konuşuyoruz?</p>
              <ul className="space-y-2">
                {[
                  "Hedeflerinize göre mentorluk planı",
                  "Kazanç planı ve ilk adımlar",
                  "Üyelik ve başvuru süreci"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp ile Yaz
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/iletisim">İletişim Formu</Link>
              </Button>
            </div>
          </div>
          <div className="glass-card space-y-4 p-6 text-sm text-ink-muted">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                İletişim Bilgileri
              </p>
              <p className="text-ink">Telefon</p>
              <p>{siteConfig.contact.phoneDisplay}</p>
            </div>
            <div className="space-y-1">
              <p className="text-ink">E-posta</p>
              <p>{siteConfig.contact.email}</p>
            </div>
            <div className="space-y-1">
              <p className="text-ink">Çalışma Alanı</p>
              <p>Türkiye genelinde dijital mentorluk</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <CtaStrip
            title="Kendi kazanç sistemini kurmaya hazır mısın?"
            description="Hedeflerini birlikte netleştirelim, sürdürülebilir gelir planını oluşturalım."
          />
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/blog?query={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }}
      />
    </>
  );
}
