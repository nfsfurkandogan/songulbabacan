import Script from "next/script";

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsId = "AW-16941296221";
  const primaryId = gaId ?? adsId;
  if (!primaryId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="beforeInteractive"
      />
      <Script id="ga-init" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
${gaId ? `gtag('config', '${gaId}', { anonymize_ip: true });` : ""}
gtag('config', '${adsId}');`}
      </Script>
    </>
  );
}
