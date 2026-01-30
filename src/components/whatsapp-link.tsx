"use client";

import { RiArrowRightUpLine, RiWhatsappFill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type WhatsappLinkProps = {
  sm?: boolean;
};

export function WhatsappLink({ sm = false }: WhatsappLinkProps) {
  const whatsappNumber = "5519990068060";
  function onClick(
    massage: "Nuru" | "Tântrica" | "Mix Tântrico" | "Vivência" | undefined,
  ) {
    const message = massage
      ? `Olá, eu vim pelo site e gostaria de agendar uma sessão de massagem ${massage}, quando teria disponibilidade?`
      : "Olá, eu vim pelo site e gostaria de agendar uma sessão de massagem";

    const phoneNumber = "5519990068060";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="group w-fit rounded-lg border border-chart-3/60 p-2 transition-colors duration-300 hover:border-chart-3/80">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-2">
          <RiWhatsappFill className="size-7 text-chart-3" />
          <div className="space-y-0.5">
            <p className="cursor-default font-medium text-muted text-sm">
              Whatsapp
            </p>
            <p
              className={cn(
                "truncate text-muted-bright-foreground text-xs",
                sm && "max-w-[100px]",
              )}
            >
              {whatsappNumber}
            </p>
          </div>
        </div>
        <Button
          asChild
          size="icon"
          variant="ghost"
          className="size-7 rounded-full border border-muted-foreground text-muted-foreground transition-colors duration-300 group-hover:border-none group-hover:bg-primary-foreground"
          onClick={() => onClick(undefined)}
        >
          <RiArrowRightUpLine />
        </Button>
      </div>
    </div>
  );
}
