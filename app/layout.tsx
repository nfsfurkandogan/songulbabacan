import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { createMetadata } from "@/lib/seo";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFab from "@/components/whatsapp-fab";
import Analytics from "@/components/analytics";
import JoinModal from "@/components/join-modal";
import ConditionalSongulAssistant from "@/components/conditional-songul-assistant";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const sans = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8S5M23D');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8S5M23D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:shadow-soft"
          href="#main"
        >
          İçeriğe atla
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ConditionalSongulAssistant />
        <WhatsAppFab />
        <JoinModal />
        <Analytics />
      </body>
    </html>
  );
}
