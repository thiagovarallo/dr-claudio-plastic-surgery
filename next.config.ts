import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
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

export default nextConfig;
