import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { WhatsappFixedButton } from "@/components/whatsapp-fixed-button";

export const metadata: Metadata = {
  title: "Hellen Massoterapeuta",
  description:
    "Sou Hellen, massoterapeuta especializada em massagens corporais sensoriais, Campinas. Tenho mais de 2 anos de experiência em massagens relaxantes e terapêuticas em Campinas.",
};

const businessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hellen — Massagista",
  description:
    "Sessões de massagem corporal sensorial e terapêutica em ambiente privativo na Av. Brasil, Campinas. Técnicas focadas em relaxamento profundo, alívio de tensão e bem-estar. Agende uma masssagem.",
  url: "https://hellenmassagista.com/",
  image: "https://hellenmassagista.com/images/me.webp",
  telephone: "+55 19 99006-8060",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Brasil",
    addressLocality: "Campinas",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: "Campinas, SP",
  priceRange: "R$400–R$1200",
  openingHours: ["Mo-Fr 10:00-19:00", "Sa 10:00-18:00", "Su 10:00-18:00"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <link
        rel="preload"
        href="/fonts/nunito-v32-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/roboto-v50-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/roboto-v50-latin-600.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/bodoni-moda-v28-latin-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <body className="bg-foreground antialiased">
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(businessLd)}
        </script>
        <Navigation />
        {children}
        <Footer />
        <WhatsappFixedButton />
      </body>
    </html>
  );
}
