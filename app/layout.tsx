import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.drclaudioeduardo.com.br";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  const locale = await getLocale();
  const ogLocale = locale === "en" ? "en_US" : locale === "es" ? "es_ES" : "pt_BR";

  return {
    metadataBase: new URL(BASE_URL),
    authors: [
      {
        name: "Thiago Varallo",
        url: "https://www.linkedin.com/in/thiago-varallo/",
      },
    ],
    creator: "Thiago Varallo — https://www.linkedin.com/in/thiago-varallo/",
    title: {
      default: t("siteTitle"),
      template: "%s | Dr. Claudio Eduardo",
    },
    description: t("siteDescription"),
    keywords: [
      "cirurgião plástico Blumenau",
      "Dr. Claudio Eduardo",
      "cirurgia plástica Blumenau SC",
      "mamoplastia Blumenau",
      "abdominoplastia Blumenau",
      "lipoaspiração Blumenau",
      "rinoplastia Blumenau",
      "blefaroplastia Blumenau",
      "otoplastia Blumenau",
      "faloplastia aumento peniano",
      "redesignação sexual",
      "gluteoplastia Blumenau",
      "ninfoplastia Blumenau",
    ],
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: t("siteTitle"),
      description: t("siteDescription"),
      url: BASE_URL,
      siteName: "Dr. Claudio Eduardo — Cirurgião Plástico",
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/brand/hero-contato-jaleco.png",
          width: 1200,
          height: 630,
          alt: "Dr. Claudio Eduardo — Cirurgião Plástico em Blumenau/SC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteTitle"),
      description: t("siteDescription"),
      images: ["/brand/hero-contato-jaleco.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale === "pt" ? "pt-BR" : locale}
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
