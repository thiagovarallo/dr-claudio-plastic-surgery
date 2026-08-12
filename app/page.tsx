import Image from "next/image";
import Link from "next/link";
import { getAllCirurgias } from "@/content/cirurgias";

export default function Home() {
  const cirurgias = getAllCirurgias();

  return (
    <main className="relative min-h-svh overflow-hidden bg-navy-deep text-white">
      <Image
        src="/brand/hero-alt.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-35"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,31,46,0.94)_0%,rgba(15,42,61,0.75)_55%,rgba(1,134,213,0.4)_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-24">
        <Image
          src="/brand/logo.png"
          alt="Claudio Eduardo Cirurgião Plástico"
          width={240}
          height={30}
          className="brightness-0 invert"
          priority
        />
        <h1 className="mt-12 font-display text-5xl font-medium leading-tight md:text-6xl">
          Cirurgias
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
          Páginas reutilizáveis de cirurgia. Escolha uma opção para ver o
          template completo.
        </p>
        <ul className="mt-12 flex flex-col gap-4">
          {cirurgias.map((cirurgia) => (
            <li key={cirurgia.slug}>
              <Link
                href={`/cirurgias/${cirurgia.slug}`}
                className="group inline-flex items-center gap-3 text-xl font-medium text-white transition-colors hover:text-accent"
              >
                <span className="h-px w-8 bg-accent transition-all group-hover:w-12" />
                {cirurgia.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
