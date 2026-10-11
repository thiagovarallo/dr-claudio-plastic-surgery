import { Cirurgias } from "@/components/home/Cirurgias";
import { Diferenciais } from "@/components/home/Diferenciais";
import { DrNaMidia } from "@/components/home/DrNaMidia";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Historia } from "@/components/home/Historia";
import { Hospitais } from "@/components/home/Hospitais";
import { Unidades } from "@/components/home/Unidades";
import { CtaSection } from "@/components/ui/CtaSection";

export default function Home() {
  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Historia />
        <Cirurgias />
        <Unidades />
        <Hospitais />
        <DrNaMidia />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
