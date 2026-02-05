"use client";

import { RiWhatsappFill } from "@remixicon/react";
import { Button } from "./ui/button";

export function WhatsappFixedButton() {
  function onClick(
    massage: "Massagem Sensorial Com Gel" | "Sessão Interativa Guiada" | "Sessão Combinada Sensorial" | "Sessão de Presença Corporal" | undefined,
  ) {
    const message = massage
      ? `Olá, eu vim pelo site e gostaria de agendar uma sessão de massagem ${massage}, quando teria disponibilidade?`
      : "Olá, eu vim pelo site e gostaria de agendar uma sessão de massagem";

    const phoneNumber = "5519990068060";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }
  return (
    <div className="fixed right-4 bottom-4 z-50">
      <Button
        variant="outline"
        className="size-15 flex-center cursor-pointer rounded-full bg-green-100 hover:bg-green-200 md:size-20"
        onClick={() => onClick(undefined)}
      >
        <RiWhatsappFill className="size-12 text-chart-3 md:size-17" />
      </Button>
    </div>
  );
}
