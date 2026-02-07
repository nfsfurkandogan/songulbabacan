/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/blog/index.html", destination: "/blog", permanent: true },
      { source: "/farmasi/index.html", destination: "/farmasi", permanent: true },
      { source: "/basari-hikayem/index.html", destination: "/basari-hikayem", permanent: true },
      { source: "/kayit-ol/index.html", destination: "/kayit-ol", permanent: true },
      { source: "/iletisim/index.html", destination: "/iletisim", permanent: true },
      {
        source: "/farmasi-google-ads",
        destination: "/farmasi-kayit-formu",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
