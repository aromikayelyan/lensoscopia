"use client";

import { usePathname } from "next/navigation";

import en from "../messages/en.json";
import ru from "../messages/ru.json";
import am from "../messages/am.json";

import { Lang } from "./dto/lang.dto";

type LangKey = "en" | "ru" | "am";

export function useDictionary(): Lang {
  const pathname = usePathname();

  let lang: LangKey = "en";

  if (pathname.startsWith("/ru")) lang = "ru";
  if (pathname.startsWith("/am")) lang = "am";

  const dict: Record<LangKey, Lang> = {
    en,
    ru,
    am,
  };

  return dict[lang];
}