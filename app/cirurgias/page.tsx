import type { Metadata } from "next";
import { CirurgiasIndexPage } from "@/components/cirurgias/CirurgiasIndexPage";

export const metadata: Metadata = {
  title: "Cirurgias",
  description:
    "Conheça os procedimentos estéticos, reparadores e de afirmação de gênero realizados pelo Dr. Claudio Eduardo em Blumenau.",
};

export default function CirurgiasPage() {
  return <CirurgiasIndexPage />;
}
