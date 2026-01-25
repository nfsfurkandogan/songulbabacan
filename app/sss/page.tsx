import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqsGeneral = [
  {
    q: "Farmasi nedir?",
    a: "Farmasi, 1950 yilinda Dr. Cevdet Tuna tarafindan kurulan bir kozmetik ve kisisel bakim markasidir. Turkiye'den dunyaya acilan bir uretim ve satis ekosistemine sahiptir."
  },
  {
    q: "Farmasi urunleri guvenilir mi?",
    a: "Evet. Urunler dermatolojik testlerden gecmistir ve guvenilir iceriklerle uretilir."
  },
  {
    q: "Farmasi urunleri hangi kategorileri kapsar?",
    a: "Cilt bakimi, makyaj, sac bakimi, kisisel bakim, temizlik ve takviye kategorilerini kapsar."
  },
  {
    q: "Farmasi'ye nasil uye olabilirim?",
    a: "Kayit sayfamizdaki formu doldurarak basvuru yapabilirsiniz. Uyeliginiz ucretsizdir."
  },
  {
    q: "Network marketing modeli nasil isler?",
    a: "Danismanlar urun satisindan kazanc elde eder, ekip kurdukca liderlik ve prim gelirleri artar."
  },
  {
    q: "Farmasi urunleri vegan mi?",
    a: "Bir cok urun vegan formulasyona sahiptir. Detaylari katalog uzerinden paylasiyoruz."
  },
  {
    q: "Farmasi urunleri uygun fiyatli mi?",
    a: "Kalite-fiyat dengesi yuksektir. Danismanlar icin indirimli alisveris imkani vardir."
  },
  {
    q: "Farmasi urunlerini nereden satin alabilirim?",
    a: "Resmi Farmasi web sitesi veya yetkili danismanlar uzerinden satin alabilirsiniz."
  },
  {
    q: "Danisman olarak nasil gelir saglarim?",
    a: "Urun satisindan kar elde eder, ekip buyudukce prim ve liderlik odulleri kazanirsiniz."
  },
  {
    q: "Farmasi'nin cevre dostu yaklasimi nedir?",
    a: "Geri donusumlu ambalaj ve hayvanlar uzerinde test yapilmayan urunlere odaklanir."
  },
  {
    q: "Farmasi ile nasil daha basarili olabilirim?",
    a: "Duzenli egitim, planli satis ve dijital stratejiyle basariyi hizlandirabilirsiniz."
  },
  {
    q: "Kimler uye olabilir?",
    a: "18 yasini dolduran herkes Farmasi girisimcisi olabilir."
  }
];

const faqsOps = [
  {
    q: "Uyeligin askiya alinma sebebi nedir?",
    a: "180 gun aktif olmayan uyelikler askiya alinabilir. Destek icin bizimle iletisime gecebilirsiniz."
  },
  {
    q: "Siparisim ne zaman teslim edilir?",
    a: "Siparisler yogunluga gore 3-7 is gunu icinde teslim edilir."
  },
  {
    q: "Farmasi danismani nedir?",
    a: "Urunleri tavsiye ederek satis yapan ve kendi ekibini kurabilen girisimcilere denir."
  },
  {
    q: "Farmasi sponsoru nedir?",
    a: "Bir uyeyi sisteme kazandiran kisi, yeni uyenin sponsoru olur."
  },
  {
    q: "Danisman/sponsor olmak icin sartlar nelerdir?",
    a: "18 yasini doldurmak ve TC kimlik numarasina sahip olmak yeterlidir."
  },
  {
    q: "Sifremi unuttum, nasil yenileyebilirim?",
    a: "farmasi.com.tr uzerinden " +
      "Sifremi Unuttum" +
      " adimini kullanabilirsiniz."
  },
  {
    q: "Alt ekip olusturabilir miyim?",
    a: "Evet, sponsorluk kodunuzla yeni uyeler kaydederek ekibinizi kurabilirsiniz."
  },
  {
    q: "Askiya alinmak ne anlama gelir?",
    a: "Uzun sure aktif olmayan uyelikler gecici olarak pasife alinabilir."
  },
  {
    q: "Uyeligi devir etmek mumkun mu?",
    a: "Aile bireyleri arasinda devir islemleri yapilabilir."
  },
  {
    q: "Internet uzerinden nasil siparis verebilirim?",
    a: "Danisman kodunuzla giris yapip hizli siparis bolumunu kullanabilirsiniz."
  },
  {
    q: "Kargo sifirlama urunu nedir?",
    a: "Belirli limitin altindaki siparislerde ucretsiz kargo icin eklenen urundur."
  },
  {
    q: "Iade ve degisim nasil yapilir?",
    a: "Kullanilmamis urunler icin 14 gun icinde iade talebi olusturabilirsiniz."
  }
];

export const metadata = createMetadata({
  title: "SSS",
  description: "Farmasi, uyelik ve siparis sureci hakkinda sik sorulan sorular.",
  path: "/sss"
});

export default function FaqPage() {
  return (
    <section className="section">
      <div className="container space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="section-kicker">SSS</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Sikca sorulan sorular</h1>
          <p className="text-ink-muted">
            Farmasi hakkinda merak ettiklerinizi ve uyelik surecini burada topladik.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp ile Sor
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/iletisim">Iletisim Formu</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold">Farmasi genel</h2>
            <Accordion type="multiple" className="mt-4">
              {faqsGeneral.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold">Uyelik ve siparis</h2>
            <Accordion type="multiple" className="mt-4">
              {faqsOps.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
