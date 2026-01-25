import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import JoinTrigger from "@/components/join-trigger";
import { Button } from "@/components/ui/button";
import { prImages } from "@/lib/pr-images";

export const metadata = createMetadata({
  title: "Başarı Hikayem",
  description:
    "Network marketing ve kişisel gelişim yolculuğum: zorlukları öğrenme fırsatına çevirmek, liderlik ve dijital stratejiler.",
  path: "/basari-hikayem"
});

const introText =
  "Merhaba, ben Songül Babacan. Kariyerime adım attığım ilk günden beri, hem kişisel gelişimime yatırım yapmayı hem de başkalarının hayatlarına dokunmayı amaç edindim. Bugün, network marketing ve kişisel gelişim alanında edindiğim tecrübelerle insanlara ilham vermeye ve onları başarıya taşımaya devam ediyorum.";

const originStory =
  "Network marketing ile ilk tanıştığımda bu sektörün dinamiklerini ve insanlara sunduğu fırsatları derinlemesine anlamaya karar verdim. Eğitim, bu yolda en büyük rehberim oldu. Kendimi sürekli olarak geliştirerek, hem iş stratejilerini hem de kişisel gelişim yollarını keşfettim. İş hayatımda karşılaştığım zorlukları fırsatlara çevirmenin en iyi yolu, kararlı olmak ve doğru stratejiler geliştirmekti.";

const journeySteps = [
  {
    title: "Zorluklar, öğrenme fırsatlarına dönüştü",
    desc: "İlk zamanlar, network marketing işimin her adımında zorluklarla karşılaştım. Her zorluk bana yeni bir şey öğretti. Ekip kurma ve liderlik konusunda kendimi geliştirdikçe, başarının takımın başarısıyla şekillendiğini fark ettim."
  },
  {
    title: "Kişisel gelişim, başarının anahtarı",
    desc: "Kendini geliştirmeyen biri, başkalarına liderlik edemez. Bu düşünceyle motivasyon, öz disiplin ve zaman yönetimi üzerine çalışarak hem iş hayatımda hem de özel hayatımda daha dengeli bir çizgi yakaladım."
  },
  {
    title: "Liderlik & ekip kurma",
    desc: "Bir ekibi motive etmek, doğru stratejilerle rehberlik etmek ve her bireyin potansiyelini açığa çıkarmak en güçlü yanlarım arasında. Bu süreçte hem kendi liderliğimi geliştirdim hem de ekip arkadaşlarımı başarıya taşıdım."
  },
  {
    title: "Dijital stratejiler",
    desc: "Sosyal medya ve dijital pazarlama stratejileri üzerinde yoğunlaştım. Dijitalde görünürlüğümü artırarak daha geniş kitlelere ulaştım ve bu alanda nasıl daha etkili olunacağını öğretiyorum."
  }
];

const serviceItems = [
  {
    title: "Network marketing eğitimleri",
    desc: "Bu sektörde nasıl başarıya ulaşacağınızı ve takımınızı nasıl büyüteceğinizi öğrenin."
  },
  {
    title: "Kişisel gelişim programları",
    desc: "Kendinizi geliştirerek iş hayatında daha motive ve başarılı bir insan olun."
  },
  {
    title: "Liderlik ve ekip kurma koçluğu",
    desc: "Güçlü bir lider olup ekibinizi başarıya taşıyın."
  },
  {
    title: "Dijital pazarlama ve strateji geliştirme",
    desc: "Online platformlarda daha etkin olun ve işinizi dijitale taşıyın."
  }
];

const heroImage = prImages[3];
const supportImage = prImages[8];

export default function SuccessStoryPage() {
  return (
    <>
      <section className="section bg-hero-sheen">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="section-kicker">Başarı Hikayem</p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Network Marketing ve Kişisel Gelişim Yolculuğum
            </h1>
            <p className="max-w-2xl text-ink-muted md:text-lg">
              {introText}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/iletisim">Benimle Çalış</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/farmasi">Farmasi</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <Image
              src={heroImage}
              alt="Songül Babacan"
              width={520}
              height={520}
              className="rounded-2xl border border-white/60 object-cover shadow-lift"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Başarı Yolculuğum</p>
            <h2 className="section-title">Başarı yolculuğum nasıl başladı?</h2>
            <p className="text-ink-muted">
              {originStory}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {journeySteps.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="section-kicker">Bugün Sunduğum Hizmetler</p>
            <h2 className="section-title">Hizmetlerim arasında</h2>
            <p className="text-ink-muted">
              songulbabacan.com üzerinden, network marketing ve kişisel gelişim alanındaki bilgi
              ve tecrübelerimi paylaşıyor, bu yolculukta başarılı olmanız için rehberlik ediyorum.
            </p>
            <div className="grid gap-4">
              {serviceItems.map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <JoinTrigger>Kayıt Ol</JoinTrigger>
              <Button asChild variant="ghost">
                <Link href={`tel:${siteConfig.contact.phone}`}>Ara</Link>
              </Button>
            </div>
          </div>
          <div className="glass-card p-6">
            <Image
              src={supportImage}
              alt="Songül Babacan etkinlik fotoğrafı"
              width={420}
              height={520}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-card space-y-4 p-8">
            <p className="text-sm font-semibold text-brand">Başarıya Ulaşmak İçin Benimle Yola Çıkın</p>
            <p className="text-sm text-ink-muted md:text-base">
              Benim yolculuğum, cesaret, azim ve öğrenme isteğiyle dolu. Eğer siz de network
              marketing dünyasında başarılı olmak, kendinizi geliştirmek ve hedeflerinize ulaşmayı
              talep ediyorsanız, size yardımcı olmak için buradayım. Bana ulaşarak kendi başarı
              hikayenizi yazmaya başlayabilirsiniz.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/iletisim">İletişime Geç</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/hizmetlerim">Hizmetlerim</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Başarı Hikayem",
          author: {
            "@type": "Person",
            name: siteConfig.name
          },
          url: `${siteConfig.url}/basari-hikayem`
        }}
      />
    </>
  );
}
