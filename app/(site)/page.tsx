import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CtaStrip from "@/components/cta-strip";
import FarmasiKayitFormuForm from "@/components/farmasi-kayit-formu-form";
import { siteConfig } from "@/lib/siteConfig";
import JsonLd from "@/components/json-ld";
import { prImages } from "@/lib/pr-images";
import heroImage from "@/assets/img/portrait.jpg";
import valueImage from "@/assets/img/portrait.jpg";
import trafikImage from "@/assets/img/trafik.jpeg";
import uzmanlikImage from "@/assets/img/uzmanlik.jpeg";
import farmasiAracImage from "@/assets/img/farmasi-arac.jpeg";
import kisiselHikayeImage from "@/assets/img/kisisel-hikaye.jpeg";
import nedenBenImage from "@/assets/img/neden-ben.jpeg";

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

const galleryImages = [prImages[1], prImages[2], prImages[4], prImages[5], prImages[8], prImages[10]];

const experienceItems = [
  {
    icon: "🗓️",
    title: "20+ Yıl Deneyim",
    description:
      "Yirmi yılı aşkın saha tecrübesiyle girişimcilik ve network marketing alanında güçlü bir birikim."
  },
  {
    icon: "📈",
    title: "Sistemli Büyüme Modeli",
    description: "Disiplinli, ölçülebilir ve sürdürülebilir gelir sistemleri kurma yaklaşımı."
  },
  {
    icon: "👥",
    title: "Ekip ve Liderlik Uzmanlığı",
    description:
      "Ekip kurma, lider yetiştirme ve kalıcı organizasyon yapıları oluşturma uzmanlığı."
  }
];

const successStories = [
  {
    name: "Ayşe K.",
    city: "Ankara",
    quote:
      "Evden çalışarak düzenli gelir elde edebileceğimi düşünmezdim. Planlı ilerlemeyi öğrenince süreç netleşti ve güvenim arttı."
  },
  {
    name: "Zeynep T.",
    city: "İzmir",
    quote:
      "En büyük değişim rastgele çalışmayı bırakmam oldu. Sistemli ilerleyince gelirim daha istikrarlı hale geldi."
  },
  {
    name: "Fatma Y.",
    city: "Bursa",
    quote:
      "Burada sadece ürün anlatılmıyor, gerçek bir iş modeli öğretiliyor. Bakış açım tamamen değişti."
  },
  {
    name: "Elif A.",
    city: "İstanbul",
    quote:
      "Ekip kurma süreci gözümü korkutuyordu. Adım adım ilerleyince aslında zor olmadığını gördüm."
  },
  {
    name: "Merve D.",
    city: "Antalya",
    quote:
      "Sosyal medyayı bilinçli kullanmayı öğrendim. Artık paylaşım değil, strateji yapıyorum."
  },
  {
    name: "Hatice G.",
    city: "Konya",
    quote:
      "Daha önce denemiştim ama sürdürememiştim. Bu kez sistemli çalıştığım için istikrarlı devam ediyorum."
  },
  {
    name: "Seda B.",
    city: "Kayseri",
    quote:
      "Evden gelir modeli sayesinde hem aileme hem işime zaman ayırabiliyorum. Bu denge benim için çok kıymetli."
  },
  {
    name: "Gülcan E.",
    city: "Gaziantep",
    quote:
      "Mentorluk desteği en büyük fark oldu. Süreci yalnız yürümek zorunda olmadığımı hissettim."
  },
  {
    name: "Neslihan Ö.",
    city: "Samsun",
    quote:
      "İlk ay büyük kazanç hedeflemedik; sağlam temel kurduk. Bu yaklaşım bana güven verdi."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section bg-hero-sheen hero-compact">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
              Evden Para Kazanma ve Sürdürülebilir Gelir Sistemleri | Dijital Girişimcilik
            </h1>
            <p className="text-sm font-semibold text-ink">Songül Babacan</p>
            <p className="text-lg text-ink-muted md:text-xl">
              20 yıllık girişimcilik deneyimimle, evden sistemli gelir kurmak ve network marketing
              alanında güçlü bir yapı oluşturmak isteyenlere yol gösteriyorum.
            </p>
            <p className="text-sm text-ink-muted">
              Başarı şansa değil, doğru sisteme dayanır. Disiplinli çalışma, güçlü liderlik ve
              sürdürülebilir stratejilerle evden gelir kurmak mümkündür. Bu süreci size adım adım
              öğretiyorum.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/egitimler">Ücretsiz Eğitime Başla</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/farmasi-uyelik-formu">Ekibime Katıl</Link>
              </Button>
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
        <div className="container space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Deneyim</p>
            <h2 className="section-title">Sistemli büyüme için güvenilir rehberlik</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {experienceItems.map((item) => (
              <div key={item.title} className="glass-card p-6 text-center">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink-muted">
            20 yıllık deneyimimle, girişimcilerin sistemli ve sürdürülebilir gelir yapıları kurmasına
            öncülük ediyorum.
          </p>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Değer Önerisi</p>
            <h2 className="section-title">
              Evden Para Kazanmak ve Kendi Dijital Gelir Sistemini Kurmak Mümkün
            </h2>
            <p className="text-ink-muted">
              Düşük maliyetle dijital iş kurabilir, sosyal medya üzerinden güçlü bir müşteri ağı
              oluşturabilir ve ekip sistemiyle gelirinizi sürdürülebilir şekilde büyütebilirsiniz.
            </p>
            <p className="text-ink-muted">
              Başarı tesadüf değildir. Doğru strateji, sistemli çalışma ve istikrarlı liderlik ile
              evden gelir modeli kurmak mümkündür.
            </p>
            <p className="text-ink-muted">
              Bu süreci size adım adım, uygulanabilir ve ölçülebilir bir sistemle öğretiyorum.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-lilac/20 blur-2xl" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-lift lg:mx-0">
              <Image
                src={valueImage}
                alt="Dijital girişimcilik danışmanlığı"
                width={520}
                height={640}
                className="h-[420px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Trafik Çeken Bölüm</p>
            <h2 className="section-title">Evden Para Kazanmak Gerçekten Mümkün mü?</h2>
            <p className="text-ink font-semibold">Evet, mümkündür.</p>
            <p className="text-ink-muted">
              Network marketing ve doğrudan satış modeli; evden gelir elde etmek, kendi işini kurmak
              ve dijital dünyada sürdürülebilir kazanç oluşturmak isteyenler için güçlü bir iş
              modelidir.
            </p>
            <p className="text-ink-muted">
              Doğru strateji, sistemli bir büyüme planı ve güçlü mentorluk desteği ile bu model;
              geçici kazançtan kalıcı gelir sistemine dönüşebilir.
            </p>
            <p className="text-ink-muted">
              Önemli olan rastgele ilerlemek değil, ölçülebilir ve uygulanabilir bir yapı ile
              hareket etmektir. Başarı; planlama, disiplin ve doğru liderlikle inşa edilir.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-lilac/20 blur-2xl" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-lift lg:mx-0">
              <Image
                src={trafikImage}
                alt="Evden para kazanma modeli"
                width={520}
                height={640}
                className="h-[420px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative lg:order-1">
            <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-lilac/20 blur-2xl" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-lift lg:mx-0">
              <Image
                src={uzmanlikImage}
                alt="Network marketing uzmanlık alanı"
                width={520}
                height={640}
                className="h-[420px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
          <div className="space-y-5 lg:order-2">
            <p className="section-kicker">Uzmanlık Alanı</p>
            <h2 className="section-title">Network Marketing ile Sürdürülebilir Gelir Modeli</h2>
            <p className="text-ink-muted">
              Network marketing; ürün satışı, ekip kurma ve performans temelli kazanç sistemi üzerine
              kurulu güçlü bir iş modelidir.
            </p>
            <p className="text-ink-muted">
              Doğru ürün konumlandırması, etkili sosyal medya satış stratejileri ve sistemli ekip
              yapılanması ile gelir istikrarlı ve sürdürülebilir şekilde büyütülebilir.
            </p>
            <p className="text-ink-muted">
              Bu model; düşük maliyetle dijital girişimcilik yapmak, evden para kazanmak ve uzun
              vadeli gelir sistemi oluşturmak isteyenler için profesyonel bir fırsat sunar.
            </p>
            <p className="text-ink-muted">
              Başarı; planlı ilerleme, liderlik gelişimi ve disiplinli sistem yönetimi ile mümkündür.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Farmasi (Araç Olarak)</p>
            <h2 className="section-title">Farmasi İş Modeli ile Stratejik ve Sürdürülebilir Büyüme</h2>
            <p className="text-ink-muted">
              Farmasi iş modeli; satış kârı ve ekip prim sistemi üzerine kurulu performans temelli
              bir gelir yapısı sunar.
            </p>
            <p className="text-ink-muted">
              Doğru ürün konumlandırması, sistemli ekip yapılanması ve etkili sosyal medya satış
              stratejileri ile bu model istikrarlı bir büyüme fırsatına dönüşebilir.
            </p>
            <p className="text-ink-muted">
              20 yıllık saha deneyimimle, Farmasi iş modelini plansız bir deneme süreci olmaktan
              çıkarıp, stratejik ve sürdürülebilir bir gelir sistemine dönüştürmenize rehberlik
              ediyorum.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-lilac/20 blur-2xl" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-lift lg:mx-0">
              <Image
                src={farmasiAracImage}
                alt="Farmasi iş modeli"
                width={520}
                height={640}
                className="h-[420px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-section-glow">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative lg:order-1">
            <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-lilac/20 blur-2xl" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-lift lg:mx-0">
              <Image
                src={kisiselHikayeImage}
                alt="Kişisel hikaye"
                width={520}
                height={640}
                className="h-[420px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
          <div className="space-y-5 lg:order-2">
            <p className="section-kicker">Kişisel Hikâye</p>
            <h2 className="section-title">Bu Yolculuk Nasıl Başladı?</h2>
            <p className="text-ink-muted">
              Girişimcilik yolculuğum 20 yıl önce, kendi ayaklarımın üzerinde durma kararıyla
              başladı. Farklı sistemleri deneyimledim, ekipler kurdum, hatalar yaptım ve her
              deneyimden güçlü dersler çıkardım.
            </p>
            <p className="text-ink-muted">
              Zamanla şunu fark ettim: Başarı tesadüf değil, sistem işidir. Disiplin, doğru liderlik
              ve sürdürülebilir bir model olmadan gelir kalıcı olmaz.
            </p>
            <p className="text-ink-muted">
              Bugün edindiğim saha tecrübesini paylaşarak, girişimcilerin daha sağlam, daha bilinçli
              ve sistemli adımlar atmasına rehberlik ediyorum. Amacım sadece kazandırmak değil;
              kalıcı bir yapı kurdurmak.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Neden Ben?</p>
            <h2 className="section-title">Neden Songül Babacan ile Çalışmalısınız?</h2>
            <p className="text-ink-muted">
              20 yılı aşkın saha deneyimimle, network marketing ve dijital satış alanında
              sürdürülebilir sistemler kurmaya odaklanıyorum.
            </p>
            <p className="text-ink-muted">
              Benimle çalıştığınızda yalnızca bir iş modeli değil; planlı, ölçülebilir ve uzun
              vadeli bir gelir yapısı inşa etmeyi öğrenirsiniz.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-lilac/20 blur-2xl" />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-lift lg:mx-0">
              <Image
                src={nedenBenImage}
                alt="Songül Babacan ile çalışma"
                width={520}
                height={640}
                className="h-[420px] w-full object-cover md:h-[480px]"
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

      <section className="section bg-[#f7f2ea]">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-kicker">Başarı Hikâyeleri</p>
            <h2 className="section-title">Girişimcilik yolculuğunda gerçek deneyimler</h2>
            <p className="text-ink-muted">
              Sistemli çalışma, doğru mentorluk ve planlı ilerlemenin sonuçları.
            </p>
          </div>
          <div className="marquee">
            <div className="marquee-track gap-6">
              {[...successStories, ...successStories].map((item, index) => {
                const initials = item.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2);

                return (
                  <article
                    key={`${item.name}-${index}`}
                    className="w-[260px] flex-shrink-0 rounded-2xl border border-white/60 bg-white p-5 shadow-soft"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-ink">
                        {initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.name}</p>
                        <p className="text-xs text-ink-muted">{item.city}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-ink-muted line-clamp-4">
                      “{item.quote}”
                    </p>
                  </article>
                );
              })}
            </div>
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
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="section-kicker">Dönüşüm Alanı</p>
            <h2 className="section-title">Gelir Sistemini Kurmaya Hazır mısınız?</h2>
            <p className="text-ink-muted">
              Evden para kazanmak, dijital girişimcilik yolunda ilerlemek ve sürdürülebilir bir
              gelir modeli oluşturmak için ilk adımı bugün atabilirsiniz.
            </p>
            <p className="text-ink-muted">
              Doğru sistem, planlı ilerleme ve mentorluk desteği ile bu süreci birlikte
              yapılandıralım.
            </p>
          </div>
          <div className="gradient-border rounded-3xl p-[1px]">
            <div className="glass-card p-6">
              <p className="mb-3 text-xs text-ink-muted">
                Bilgileriniz gizli tutulur. Süreç tamamen bilgilendirme amaçlıdır.
              </p>
              <FarmasiKayitFormuForm />
            </div>
          </div>
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
