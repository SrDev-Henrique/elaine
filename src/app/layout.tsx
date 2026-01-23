import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hellen Massoterapeuta",
  description:
    "Sou Hellen, massoterapeuta especializada em massagem nuru, tântrica, mix tântrico e vivência em Campinas, Avenida Brasil. Tenho mais de 2 anos de experiência na área da massagem sensual em campinas.",
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
      <body className="bg-foreground antialiased">{children}</body>
    </html>
  );
}
