import Image from "next/image";
import Link from "next/link";
import { navigation, surgeries, unit } from "@/content/home";

const atendimento = [
  "Consulta especializada",
  "Planejamento cirúrgico",
  "Retornos e acompanhamento",
  "Cirurgia estética e reparadora",
];

export function Footer() {
  return (
    <footer id="contato" className="scroll-mt-19">
      <div className="relative isolate overflow-hidden bg-[linear-gradient(120deg,#023f55_0%,#047f92_48%,#0870a5_100%)] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_80%_at_78%_5%,rgba(255,255,255,0.14),transparent_62%)]" />

        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 sm:gap-y-12 sm:px-8 lg:grid-cols-[1fr_1fr_1.15fr_1.45fr] lg:gap-12">
          <div>
            <h3 className="text-base font-extrabold">Mapa do site</h3>
            <ul className="mt-4 space-y-2 text-sm leading-5 text-white/80">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-9 text-base font-extrabold">Certificações</h3>
            <p className="mt-4 text-sm leading-6 text-white/80">
              CRM 14.706-SC
              <br />
              RQE 23.737
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold">Cirurgias</h3>
            <ul className="mt-4 space-y-2 text-sm leading-5 text-white/80">
              {surgeries.map((surgery) => {
                const external = surgery.href.startsWith("http");
                return (
                  <li key={surgery.title}>
                    <Link
                      href={surgery.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="transition hover:text-white"
                    >
                      {surgery.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-extrabold">Atendimento</h3>
            <ul className="mt-4 space-y-2 text-sm leading-5 text-white/80">
              {atendimento.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-9 text-base font-extrabold">Sobre</h3>
            <p className="mt-4 text-sm leading-6 text-white/80">
              Cirurgia plástica estética, reparadora e de afirmação de gênero em Blumenau, Santa
              Catarina.
            </p>
          </div>

          <div>
            <h3 className="text-base font-extrabold">Entre em contato</h3>
            <div className="mt-4 space-y-4 text-sm leading-6 text-white/85">
              <p>
                <strong className="font-extrabold text-white">Clínica Dr. Claudio Eduardo</strong>
                <br />
                {unit.address}
                <br />
                {unit.complement}
              </p>
              <p>
                <a href={unit.phoneHref} className="transition hover:text-white">
                  {unit.phone}
                </a>
                <br />
                <a href={unit.emailHref} className="break-all transition hover:text-white">
                  {unit.email}
                </a>
              </p>
              <p>
                De segunda a sexta
                <br />
                <strong className="font-extrabold text-white">08h00 às 18h00</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-4 border-t border-white/20 px-5 pt-6 text-xs leading-5 text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Claudio Eduardo Cirurgião Plástico · Todos os direitos reservados</span>
          <Link href="/#inicio" className="relative h-7 w-36 shrink-0" aria-label="Ir para o início">
            <Image
              src="/brand/logo-footer.png"
              alt="Dr. Claudio Eduardo"
              fill
              sizes="144px"
              className="object-contain object-right brightness-0 invert"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
