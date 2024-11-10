"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { TimePicker12Demo } from "./time-picker-component/time-picker-12hour-demo";

export function TimePickerDemo({
  label = "",
  placeholder = "Pick a date",
  value,
  onChange,
  id,
}) {

  
  return (
    <div className="w-full">
      {label && (
        <Label htmlFor={id} className="text-sm font-light text-gray-400">
          {label}
        </Label>
      )}

      <Dialog className="w-full">
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-between text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            {value ? format(value, "PPPp") : <span>{placeholder}</span>}
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-auto p-6">
          <TimePicker12Demo
            date={value}
            setDate={onChange}

          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
