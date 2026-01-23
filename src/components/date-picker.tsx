"use client";

import { CalendarIcon } from "lucide-react";
import type { DateValue } from "react-aria-components";
import {
  Button,
  DatePicker,
  Dialog,
  Group,
  Label,
  Popover,
} from "react-aria-components";

import { Calendar } from "@/components/ui/calendar-rac";
import { DateInput } from "@/components/ui/datefield-rac";

type Props = {
  label?: string;
  helperText?: string;
  value?: DateValue | null;
  onChange?: (value: DateValue | null) => void;
};

export default function DatePickerComponent({
  label = "Data",
  helperText = "(a data pode não estar disponível, clique em agendar sessão para verificar disponibilidade)",
  value,
  onChange,
}: Props) {
  return (
    <DatePicker className="*:not-first:mt-2" value={value} onChange={onChange}>
      <Label className="font-medium text-primary-foreground text-sm">
        {label}
      </Label>
      <div className="flex">
        <Group className="w-full">
          <DateInput className="pe-9" />
        </Group>
        <Button className="-ms-9 -me-px z-10 flex w-9 items-center justify-center rounded-e-md text-muted/80 outline-none transition-[color,box-shadow] hover:text-primary-foreground data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50">
          <CalendarIcon size={16} />
        </Button>
      </div>
      <Popover
        className="data-entering:fade-in-0 data-entering:zoom-in-95 data-exiting:fade-out-0 data-exiting:zoom-out-95 data-placement-bottom:slide-in-from-top-2 data-placement-left:slide-in-from-right-2 data-placement-right:slide-in-from-left-2 data-placement-top:slide-in-from-bottom-2 z-50 rounded-lg border border-accent/70 bg-foreground text-popover-foreground shadow-lg outline-hidden data-entering:animate-in data-exiting:animate-out"
        offset={4}
      >
        <Dialog className="max-h-[inherit] overflow-auto p-2">
          <Calendar />
        </Dialog>
      </Popover>
      {helperText && (
        <p
          aria-live="polite"
          className="mt-2 text-muted-bright-foreground text-xs"
        >
          {helperText}
        </p>
      )}
    </DatePicker>
  );
}
