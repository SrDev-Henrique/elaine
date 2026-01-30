"use client";

import { RiWhatsappFill } from "@remixicon/react";
import { Button } from "./ui/button";

export function WhatsappFixedButton() {
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
    <div className="fixed right-4 bottom-4 z-50">
      <Button
        variant="outline"
        className="size-20 flex-center cursor-pointer rounded-full"
        onClick={() => onClick(undefined)}
      >
        <RiWhatsappFill className="size-17 text-chart-3" />
      </Button>
    </div>
  );
}
