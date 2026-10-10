import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      new URL(
        "https://www.drclaudioeduardo.com.br/uploads/conteudo/foto-hospital-unimed-blumenau.jpg",
      ),
      new URL(
        "https://www.drclaudioeduardo.com.br/uploads/conteudo/foto-hospital-santo-antonio.jpg",
      ),
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
