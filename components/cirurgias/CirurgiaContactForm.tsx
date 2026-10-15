"use client";

import { FormEvent } from "react";
import { useLocale } from "next-intl";
import { ArrowUpRight, LockKeyhole, MessageCircle } from "lucide-react";
import { translateContent } from "@/i18n/content";

const inputClassName =
  "h-12 w-full rounded-xl border border-ink/10 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-brand focus:ring-4 focus:ring-brand/10";

export function CirurgiaContactForm({ surgeryTitle }: { surgeryTitle: string }) {
  const locale = useLocale();
  const tr = (text: string) => translateContent(locale, text);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      tr("Olá, gostaria de informações sobre {surgeryTitle}.").replace("{surgeryTitle}", surgeryTitle),
      "",
      `${tr("Nome:")} ${form.get("nome")}`,
      `${tr("Telefone:")} ${form.get("telefone")}`,
      `${tr("E-mail:")} ${form.get("email")}`,
      `${tr("Cidade/UF:")} ${form.get("cidade")}`,
      "",
      `${tr("Comentário:")} ${form.get("comentario") || tr("Não informado")}`,
    ].join("\n");

    window.open(`https://wa.me/5547996117198?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="formulario" className="scroll-mt-20 bg-white px-5 pb-20 sm:px-8 sm:pb-28" aria-labelledby="form-heading">
      <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,var(--blue-dark)_0%,var(--blue)_100%)] text-white lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -left-32 top-1/3 size-80 rounded-full bg-brand/18 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border border-white/10" />
          <div className="relative">
            <div className="grid size-11 place-items-center rounded-2xl bg-brand/15 text-brand">
              <MessageCircle className="size-5" />
            </div>
            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.34em] text-brand">{tr("Contato reservado")}</p>
            <h2 id="form-heading" className="mt-4 max-w-md font-display text-5xl font-medium leading-[0.94] sm:text-6xl">
              {tr("Vamos conversar sobre o seu caso?")}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/64">
              {tr("Preencha seus dados para iniciar o atendimento. Ao enviar, sua mensagem será preparada e aberta diretamente no WhatsApp da clínica.")}
            </p>

            <div className="mt-10 flex items-start gap-3 border-t border-white/10 pt-6 text-[11px] leading-5 text-white/48">
              <LockKeyhole className="mt-0.5 size-4 shrink-0 text-brand" />
              <p>{tr("Seus dados serão usados exclusivamente para responder à solicitação de contato.")}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="m-2 rounded-[30px] bg-surface-soft p-5 text-ink sm:m-3 sm:p-8 lg:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-xs font-bold text-blue-dark">
              {tr("Nome completo")}
              <input className={`${inputClassName} mt-2`} type="text" name="nome" placeholder={tr("Informe seu nome")} autoComplete="name" required />
            </label>
            <label className="block text-xs font-bold text-blue-dark">
              {tr("Telefone / WhatsApp")}
              <input className={`${inputClassName} mt-2`} type="tel" name="telefone" placeholder="(00) 00000-0000" autoComplete="tel" required />
            </label>
            <label className="block text-xs font-bold text-blue-dark">
              {tr("E-mail")}
              <input className={`${inputClassName} mt-2`} type="email" name="email" placeholder="seuemail@exemplo.com" autoComplete="email" required />
            </label>
            <label className="block text-xs font-bold text-blue-dark">
              {tr("Cidade / UF")}
              <input className={`${inputClassName} mt-2`} type="text" name="cidade" placeholder="Blumenau / SC" autoComplete="address-level2" required />
            </label>
          </div>

          <label className="mt-5 block text-xs font-bold text-blue-dark">
            {tr("Como podemos ajudar?")}
            <textarea
              className="mt-2 min-h-32 w-full resize-y rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-brand focus:ring-4 focus:ring-brand/10"
              name="comentario"
              placeholder={tr("Conte brevemente o que você gostaria de esclarecer.")}
            />
          </label>

          <label className="mt-5 flex cursor-pointer items-start gap-3 text-[11px] leading-5 text-ink-soft/65">
            <input type="checkbox" name="consentimento" required className="mt-1 size-4 shrink-0 accent-brand" />
            <span>{tr("Autorizo o contato da clínica pelos dados informados para atendimento desta solicitação.")}</span>
          </label>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-[10px] leading-4 text-ink/42">{tr("Arquivos e exames poderão ser enviados com segurança durante a conversa.")}</p>
            <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              {tr("Enviar contato")}
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
