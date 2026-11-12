import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Aquarium Service`,
    template: `%s | ${site.shortName}`,
  },
  description:
    `${site.name} provides aquarium service, installation, and maintenance for saltwater and freshwater tanks throughout ${site.serviceAreaSummary}. ${site.fictitiousNameNotice}`,
  metadataBase: new URL(`https://${site.domain}`),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: site.name }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.tagline,
  url: `https://${site.domain}`,
  email: site.email,
  areaServed: site.serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: `${area.name}, Florida`,
  })),
  parentOrganization: {
    "@type": "Organization",
    name: site.legalName,
  },
  slogan: site.fictitiousNameNotice,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={outfit.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
