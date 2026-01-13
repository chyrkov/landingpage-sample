import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Design + Vibe Coding in NYC | Framer & AI Websites That Convert",
  description:
    "NYC web design & AI/no-code builds for real estate, legal & finance. 13+ years experience. Fast launches, SEO-ready. Book a free discovery call.",
  keywords: [
    "web design agency NYC",
    "Framer web design NYC",
    "no-code web development NYC",
    "AI website design NYC",
    "real estate website design NYC",
    "law firm website design NYC",
    "finance website design NYC",
  ],
  openGraph: {
    title: "Web Design + Vibe Coding in NYC | Framer & AI Websites That Convert",
    description:
      "NYC web design & AI/no-code builds for real estate, legal & finance. 13+ years experience. Fast launches, SEO-ready.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Web Design + Vibe Coding",
              description:
                "NYC web design & AI/no-code builds for real estate, legal & finance",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
              areaServed: [
                "Manhattan",
                "Brooklyn",
                "Queens",
                "Bronx",
                "Staten Island",
                "NYC Metro",
              ],
              serviceType: [
                "Web Design",
                "Framer Development",
                "No-Code Development",
                "AI-assisted Builds",
                "Landing Pages",
                "SEO Foundations",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
