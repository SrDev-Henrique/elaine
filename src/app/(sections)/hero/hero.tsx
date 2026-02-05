"use client";

import Image from "next/image";
import { ScheduleButton } from "@/components/dialog-schedule";
import { Localization } from "@/components/icons/localization";

export function Hero() {
  return (
    <section
      id="massagem-tantrica-campinas"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/HealthAndBeautyBusiness"
      className="flex h-fit w-full items-start pt-6 lg:min-h-screen lg:items-center lg:pt-0"
    >
      <div className="flex h-fit w-full flex-col items-center justify-between gap-10 lg:flex-row-reverse lg:items-start lg:justify-center">
        <div className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-xl lg:aspect-12/16 lg:max-w-sm">
          <Image
            src="/images/hellen(1).jpeg"
            alt="Hellen, massoterapeuta especializada em massagem corporal sensorial em Campinas"
            fill
            className="object-cover object-[50%_20%] lg:object-center"
            itemProp="image"
          />
        </div>
        <div className="h-fit w-full max-w-2xl">
          <div className="space-y-4">
            <h1
              id="hero-heading"
              itemProp="name"
              className="font-bold text-[3.5rem] sm:text-4xl lg:text-7xl"
            >
              Massagem corporal sensorial em Campinas
            </h1>
            <p
              itemProp="description"
              className="text-muted-bright-foreground text-sm lg:pt-4 lg:text-base"
            >
              <span className="font-bold text-muted">
                Sessões de massagem corporal sensorial
              </span>{" "}
              em estúdio privativo na região central de Campinas. Técnicas com
              foco em relaxamento, presença e bem-estar. Atendimento
              confidencial e personalizado — agende uma avaliação.
            </p>
            <div className="flex w-full items-center justify-between gap-2 lg:justify-start">
              <ScheduleButton />
              <div
                className="flex w-fit items-center gap-2 rounded-full border border-primary p-2"
                itemProp="addressLocality"
              >
                <Localization color="oklch(1 0 0)" />
                <p className="text-primary-foreground">
                  Guanabara,{" "}
                  <span className="text-muted-bright-foreground text-xs">
                    Campinas, SP
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
