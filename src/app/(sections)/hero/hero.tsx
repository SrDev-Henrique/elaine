"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import { Localization } from "@/components/icons/localization";
import { Button } from "@/components/ui/button";

const popularMassages = ["Nuru", "Vivência", "Mix Tântrico"];

export function Hero() {
  const openMaps = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    const address = encodeURIComponent("Av. Cunha mota, 107, Campinas, SP");

    const url = isIOS
      ? `https://maps.apple.com/?q=${address}`
      : `https://www.google.com/maps?q=${address}`;

    window.open(url, "_blank");
  };
  return (
    <div className="flex min-h-screen w-full items-start pt-24 lg:items-center lg:pt-0">
      <div className="flex h-fit w-full flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:justify-center">
        <div className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-xl lg:aspect-12/16 lg:max-w-sm">
          <Image
            src="/images/about(0).webp"
            alt="Elaine Massoterapeuta"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex h-fit w-full max-w-2xl flex-col justify-between gap-6">
          <div className="space-y-4">
            <h1 className="font-bold text-[3.5rem] sm:text-4xl lg:text-7xl">
              Massagem Tântrica e Nuru em Campinas
            </h1>
            <p className="text-muted-bright-foreground text-sm">
              <span className="font-bold text-muted">
                Massagem tântrica e Nuru em Campinas
              </span>
              , pensadas para despertar sensações com técnica, presença e
              ambiente intimista.
            </p>
            <div className="flex w-full items-center justify-between gap-2 lg:justify-start">
              <Button className="rounded-full py-5.5 pe-2">
                Agendar
                <div className="rounded-full bg-foreground p-2">
                  <Calendar className="size-3 sm:size-4" />
                </div>
              </Button>
              <Button
                variant="outline"
                className="cursor-pointer rounded-full border-primary bg-transparent px-2 py-5.5 text-primary-foreground text-xs hover:bg-primary/10 hover:text-primary-foreground"
                onClick={openMaps}
              >
                <div className="flex items-center gap-2">
                  <Localization color="oklch(1 0 0)" />
                  Rua Cunha Mota, 107
                  <span className="text-muted-bright-foreground text-xs">
                    Campinas, SP
                  </span>
                </div>
              </Button>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-foreground/30 p-2">
              <p className="text-nowrap font-semibold bmd:text-base text-primary-foreground text-xs">
                Mais populares
              </p>
              <div className="flex items-center gap-2 overflow-hidden lg:justify-between">
                {popularMassages.map((massage, index) => (
                  <div
                    key={massage}
                    className={`${index === 2 && "bmd:block hidden"}`}
                  >
                    <Button className="cursor-pointer rounded-3xl border border-primary bg-transparent bmd:py-5 py-4 pe-2 text-primary-foreground">
                      {massage}
                      <div className="rounded-full bg-foreground p-2">
                        <Calendar className="size-3 sm:size-4" />
                      </div>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
