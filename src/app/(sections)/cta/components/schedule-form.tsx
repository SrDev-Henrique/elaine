"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { getLocalTimeZone, today } from "@internationalized/date";
import { UserIcon } from "lucide-react";
import type { DateValue } from "react-aria-components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DatePickerComponent from "@/components/date-picker";
import InputWithIcon from "@/components/input-with-icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ScheduleForm({
  massage,
}: {
  massage?: "Massagem Sensorial Com Gel" | "Sessão Interativa Guiada" | "Sessão Combinada Sensorial" | "Sessão de Presença Corporal";
}) {
  const formSchema = z.object({
    name: z.string().nullable(),
    date: z.custom<DateValue>((val) => val != null, {
      message: "Selecione uma data",
    }),
    modality: z.enum(["Massagem Sensorial Com Gel", "Sessão Interativa Guiada", "Sessão Combinada Sensorial", "Sessão de Presença Corporal"]),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: today(getLocalTimeZone()),
      modality: massage ?? "Massagem Sensorial Com Gel",
    },
  });

  const normalizeDateValue = (value: DateValue | null) => {
    if (!value) return null;
    try {
      // DateValue instances from react-aria-components expose toDate
      // which needs the current timezone to return a native Date.
      return value.toDate(getLocalTimeZone());
    } catch {
      return null;
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const normalizedDate = normalizeDateValue(values.date);
    const formattedDate = normalizedDate
      ? normalizedDate.toLocaleDateString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        })
      : "data a combinar";

    const hasName = values.name && values.name.trim().length > 0;
    const message = hasName
      ? `Olá, me chamo ${values.name?.trim()} e eu gostaria de agendar uma sessão de massagem ${values.modality} no dia ${formattedDate}, teria disponibilidade?`
      : `Olá, gostaria de agendar uma sessão de massagem ${values.modality} no dia ${formattedDate}, teria disponibilidade?`;

    const phoneNumber = "5519990068060";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto h-fit w-full max-w-sm space-y-4 rounded-3xl border border-gold/70 bg-primary/16 p-6"
      >
        <div className="flex w-full items-start justify-between gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithIcon
                    Icon={<UserIcon className="size-4" />}
                    placeholder="Seu Nome"
                    label="Nome"
                    type="text"
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="modality"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="modality"
                  className="flex items-center gap-1 text-primary-foreground"
                >
                  Modalidade <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <SelectTrigger
                      id={field.name}
                      className="bg-foreground text-primary-foreground"
                    >
                      <SelectValue placeholder="Selecione a modalidade" />
                    </SelectTrigger>
                    <SelectContent className="bg-foreground text-primary-foreground [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
                      <SelectItem value="Massagem Sensorial Com Gel">Massagem Sensorial Com Gel</SelectItem>
                      <SelectItem value="Sessão Interativa Guiada">Sessão Interativa Guiada</SelectItem>
                      <SelectItem value="Sessão Combinada Sensorial">Sessão Combinada Sensorial</SelectItem>
                      <SelectItem value="Sessão de Presença Corporal">Sessão de Presença Corporal</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DatePickerComponent
                  label="Data preferencial"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full cursor-pointer rounded-full py-7 uppercase"
        >
          Agendar Sessão
        </Button>
      </form>
    </Form>
  );
}
