import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Hellen Massoterapeuta",
  description:
    "Sou Hellen, massoterapeuta especializada em massagem nuru, tântrica, mix tântrico e vivência em Campinas, Avenida Brasil. Tenho mais de 2 anos de experiência na área da massagem sensual em campinas.",
};

const businessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hellen — Massagista",
  description:
    "Massagem tântrica, Nuru, Mix Tântrico e Vivência em ambiente privativo na Av. Brasil, Campinas. Técnica, discrição e atendimento personalizado.",
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
      </body>
    </html>
  );
}
