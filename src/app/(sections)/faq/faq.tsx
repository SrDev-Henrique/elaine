import Script from "next/script";
import FaqAccordion, { faq } from "./components/accordion";

export function Faq() {
  return (
    <section
      id="faq-massagem-campinas"
      aria-labelledby="faq-heading"
      className="mx-auto h-fit w-full max-w-[1130px] space-y-6"
    >
      <h2
        id="faq-heading"
        className="text-center font-bold text-3xl sm:text-4xl"
      >
        Perguntas Frequentes
      </h2>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })}
      </Script>
      <FaqAccordion />
    </section>
  );
}
