import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import enMessages from "../messages/en.json";
import esMessages from "../messages/es.json";
import ptMessages from "../messages/pt.json";

export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : defaultLocale;
  const messages = {
    en: enMessages,
    es: esMessages,
    pt: ptMessages,
  }[locale];

  return { locale, messages };
});
