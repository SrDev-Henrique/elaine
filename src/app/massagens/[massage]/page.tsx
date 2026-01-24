import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ScheduleButton } from "@/components/dialog-schedule";
import { massageDetails } from "@/lib/massages-details";

type MassageSlug = "nuru" | "tantrica" | "mix-tantrico" | "vivencia" | string;

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export async function generateMetadata({
  params,
}: {
  params: { massage: MassageSlug };
}): Promise<Metadata> {
  const awaitedParams = await params;
  const slug = normalizeSlug(decodeURIComponent(awaitedParams.massage));
  const detail = massageDetails.find(
    (item) => normalizeSlug(item.slug) === slug,
  );
  if (!detail) {
    return {
      title: "Massagem em Campinas",
      description: "Sessões sensoriais e privativas em Campinas.",
    };
  }

  const title = `Massagem ${detail.name} em Campinas | Hellen`;
  const description =
    detail.description?.[0] ??
    "Sessão exclusiva com foco em presença, relaxamento e sensorialidade em Campinas.";
  const url = `https://hellenmassagista.com/massagens/${detail.slug}`;
  const image = "/images/hellen(1).jpeg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: image, alt: `${detail.name} - massagem em Campinas` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function MassagePage({
  params,
}: {
  params: { massage: MassageSlug };
}) {
  const awaitedParams = await params;
  const slug = normalizeSlug(decodeURIComponent(awaitedParams.massage));
  const detail = massageDetails.find((item) => {
    const nameSlug = normalizeSlug(item.slug);
    return slug === nameSlug;
  });

  if (!detail) return notFound();

  const heroTitle = `Massagem ${detail.name}`;
  const shortDescription =
    detail.description?.[0] ??
    "Sessão exclusiva com foco em presença, relaxamento e sensorialidade em Campinas.";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-4 py-12 md:px-6 lg:py-16">
      <section className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 font-semibold text-primary-foreground text-sm">
            {detail.name}
          </div>
          <h1 className="text-balance font-bold text-4xl md:text-5xl lg:text-6xl">
            {heroTitle} em Campinas
          </h1>
          <p className="text-lg text-muted-bright-foreground md:text-xl">
            {shortDescription}
          </p>
          <div className="flex flex-wrap gap-3">
            <ScheduleButton massage={detail.name} text="Agendar sessão" />
            <div className="rounded-full border border-primary/60 px-4 py-2 text-muted-bright-foreground text-sm">
              Ambiente privativo, discreto e higienizado
            </div>
          </div>
        </div>
        <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-primary/20 bg-foreground shadow-lg">
          <Image
            src="/images/hellen(1).jpeg"
            alt={`${heroTitle} em Campinas - ambiente privativo`}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/90 to-transparent" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-2xl text-primary-foreground md:text-3xl">
          Sobre a experiência
        </h2>
        <div className="space-y-3 text-muted-bright-foreground leading-relaxed">
          {detail.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-primary/30 bg-foreground/40 p-5 backdrop-blur">
          <h3 className="font-semibold text-primary-foreground text-xl">
            Benefícios
          </h3>
          <ul className="space-y-2 text-muted-bright-foreground">
            {detail.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-primary/30 bg-foreground/40 p-5 backdrop-blur">
          <h3 className="font-semibold text-primary-foreground text-xl">
            Indicações
          </h3>
          <ul className="space-y-2 text-muted-bright-foreground">
            {detail.indicatedFor.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-primary/30 bg-foreground/40 p-6 backdrop-blur">
        <h3 className="font-semibold text-2xl text-primary-foreground">
          Como funciona cada sessão
        </h3>
        <ol className="space-y-3 text-muted-bright-foreground">
          {detail.sessionFlow.map((step, idx) => (
            <li key={step} className="flex gap-3">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-semibold text-2xl text-primary-foreground">
          Dúvidas frequentes
        </h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {detail.commonDoubts.map((faq) => (
            <div
              key={faq.question}
              className="space-y-2 rounded-2xl border border-primary/30 bg-foreground/50 p-4"
            >
              <p className="font-semibold text-primary-foreground">
                {faq.question}
              </p>
              <p className="text-muted-bright-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-primary/40 bg-foreground/50 p-6 shadow-md backdrop-blur">
        <div className="space-y-2">
          <p className="text-primary-foreground/80 text-sm uppercase tracking-wide">
            Pronto para sua sessão?
          </p>
          <h4 className="font-semibold text-2xl text-primary-foreground">
            Agende sua Massagem {detail.name} em Campinas
          </h4>
          <p className="text-muted-bright-foreground">
            Atendimento discreto, higienizado e guiado com respeito aos seus
            limites.
          </p>
        </div>
        <ScheduleButton massage={detail.name} text="Agendar agora" />
      </section>
    </main>
  );
}
