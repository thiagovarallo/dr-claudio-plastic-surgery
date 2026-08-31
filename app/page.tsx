import { Cirurgias } from "@/components/home/Cirurgias";
import { Diferenciais } from "@/components/home/Diferenciais";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Historia } from "@/components/home/Historia";
import { Hospitais } from "@/components/home/Hospitais";
import { Unidades } from "@/components/home/Unidades";

export default function Home() {
  return (
    <div className="min-h-svh overflow-x-clip bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Historia />
        <Unidades />
        <Hospitais />
        <Cirurgias />
      </main>
      <Footer />
    </div>
  );
}
