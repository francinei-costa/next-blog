import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { io } from "next/cache";

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export async function formatDistanceToNow(rawDate: string): Promise<string> {
  await io();
  const date = new Date(rawDate);

  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}

export function formatHour(timestampMs: number): string {
  const date = new Date(timestampMs);

  return format(date, "HH:mm:ss", {
    locale: ptBR,
  });
}

export async function getDate(rawDate: string) {
  await io();
  return new Date(rawDate);
}

export async function CurrentYear() {
  await io();
  return new Date().getFullYear();
}
