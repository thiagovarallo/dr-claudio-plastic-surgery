import type { Metadata } from "next";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HistoriaPage } from "@/components/historia/HistoriaPage";

export const metadata: Metadata = {
  title: "Minha História | Cirurgião Plástico em Blumenau",
  description:
    "Conheça a formação, a trajetória profissional e as especializações do Dr. Claudio Eduardo, cirurgião plástico em Blumenau/SC.",
};

export default function ClaudioEduardoPage() {
  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <HistoriaPage />
      <Footer />
    </div>
  );
}
