import en from "./content-en.json";
import es from "./content-es.json";

type Locale = "pt" | "en" | "es";

const translations: Record<Exclude<Locale, "pt">, Record<string, string>> = { en, es };

export function translateContent(locale: string, text: string): string {
  if (locale !== "en" && locale !== "es") return text;
  return translations[locale][text] ?? text;
}

export function localizeContent<T>(locale: string, value: T): T {
  if (locale === "pt") return value;
  if (typeof value === "string") return translateContent(locale, value) as T;
  if (Array.isArray(value)) return value.map((item) => localizeContent(locale, item)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        key === "id" || key === "slug" || key === "src" ? item : localizeContent(locale, item),
      ]),
    ) as T;
  }
  return value;
}
