"use client";

import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function ScheduleButton({
  className,
  massage,
  text = "Agendar",
}: {
  className?: string;
  massage?:
    | "Massagem Sensorial Com Gel"
    | "Sessão Interativa Guiada"
    | "Sessão Combinada Sensorial"
    | "Sessão de Presença Corporal"
    | undefined;
  text?: string;
}) {
  function onClick(
    massage:
      | "Massagem Sensorial Com Gel"
      | "Sessão Interativa Guiada"
      | "Sessão Combinada Sensorial"
      | "Sessão de Presença Corporal"
      | undefined,
  ) {
    const message = massage
      ? `Olá, eu vim pelo site e gostaria de agendar uma sessão de massagem ${massage}, quando teria disponibilidade?`
      : "Olá, eu vim pelo site e gostaria de agendar uma sessão de massagem";

    const phoneNumber = "5519990068060";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }
  return (
    <Button
      className={cn("cursor-pointer rounded-full py-5.5 pe-2", className)}
      onClick={() => onClick(massage)}
    >
      {text}
      <div className="rounded-full bg-foreground p-2">
        <Calendar className="size-3 sm:size-4" />
      </div>
    </Button>
  );
}
