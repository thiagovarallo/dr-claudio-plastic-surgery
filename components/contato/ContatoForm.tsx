"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Check, LockKeyhole, MessageCircle } from "lucide-react";

const inputClassName =
  "h-13 w-full rounded-2xl border border-ink/10 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-brand focus:ring-4 focus:ring-brand/10";

export function ContatoForm() {
  const t = useTranslations("contact.form");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const attachment = form.get("anexo");
    const attachmentName = attachment instanceof File && attachment.name ? attachment.name : "Nenhum";
    const message = [
      "Olá, gostaria de entrar em contato com a clínica.",
      "",
      `Nome: ${form.get("nome")}`,
      `Telefone: ${form.get("telefone")}`,
      `E-mail: ${form.get("email")}`,
      `Cidade/UF: ${form.get("cidade")}`,
      "",
      `Comentário: ${form.get("comentario") || t("none")}`,
      `Anexo selecionado: ${attachmentName}`,
    ].join("\n");

    window.open(
      `https://wa.me/5547996117198?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[30px] border border-ink/8 bg-white p-5 shadow-[0_24px_80px_rgba(32,40,50,0.08)] sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-bold text-navy">
          {t("name")}
          <input
            className={`${inputClassName} mt-2`}
            type="text"
            name="nome"
            placeholder={t("namePlaceholder")}
            autoComplete="name"
            required
          />
        </label>
        <label className="block text-xs font-bold text-navy">
          {t("phone")}
          <input
            className={`${inputClassName} mt-2`}
            type="tel"
            name="telefone"
            placeholder="(00) 00000-0000"
            autoComplete="tel"
            required
          />
        </label>
        <label className="block text-xs font-bold text-navy">
          {t("email")}
          <input
            className={`${inputClassName} mt-2`}
            type="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            autoComplete="email"
            required
          />
        </label>
        <label className="block text-xs font-bold text-navy">
          {t("city")}
          <input
            className={`${inputClassName} mt-2`}
            type="text"
            name="cidade"
            placeholder={t("cityPlaceholder")}
            autoComplete="address-level2"
            required
          />
        </label>
      </div>

      <label className="mt-5 block text-xs font-bold text-navy">
        {t("comment")}
        <textarea
          className="mt-2 min-h-36 w-full resize-y rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm leading-6 text-ink outline-none transition placeholder:text-ink/35 focus:border-brand focus:ring-4 focus:ring-brand/10"
          name="comentario"
          placeholder={t("commentPlaceholder")}
        />
      </label>

      <label className="mt-5 block text-xs font-bold text-navy">
        {t("attachments")}
        <input
          className="mt-2 block w-full cursor-pointer rounded-2xl border border-dashed border-brand/35 bg-brand/5 px-4 py-3 text-sm text-ink-soft file:mr-4 file:rounded-full file:border-0 file:bg-brand file:px-4 file:py-2 file:text-xs file:font-bold file:text-white"
          type="file"
          name="anexo"
          accept=".doc,.docx,.pdf,.jpg,.jpeg"
        />
        <span className="mt-2 block text-[11px] font-normal leading-5 text-ink-soft/55">
          {t("accepted")}
        </span>
      </label>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-ink-soft/70">
        <input type="checkbox" name="consentimento" required className="mt-1 size-4 shrink-0 accent-brand" />
        <span>{t("consent")}</span>
      </label>

      <div className="mt-7 flex flex-col gap-4 border-t border-ink/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex max-w-sm items-start gap-2 text-[11px] leading-5 text-ink-soft/55">
          <LockKeyhole className="mt-0.5 size-4 shrink-0 text-brand-deep" />
          {t("privacy")}
        </p>
        <button
          type="submit"
          className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-bold text-white transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {t("submit")}
          <ArrowUpRight className="size-4" />
        </button>
      </div>

      {sent ? (
        <p className="mt-4 flex items-center gap-2 text-xs font-bold text-brand-deep" aria-live="polite">
          <Check className="size-4" />
          {t("sent")}.
        </p>
      ) : null}
    </form>
  );
}

export function ContactFormIntro() {
  const t = useTranslations("contact.form");
  return (
    <div className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(145deg,var(--blue-dark)_0%,var(--blue)_100%)] p-7 text-white sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border border-brand/20" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-brand/15 blur-3xl" />
      <div className="relative">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand/15 text-brand">
          <MessageCircle className="size-5" />
        </span>
        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.38em] text-brand">
          {t("introEyebrow")}
        </p>
        <h2 className="mt-4 max-w-md font-display text-5xl font-medium leading-[0.94] sm:text-6xl">
          {t("introTitle")}
        </h2>
        <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
          {t("introText")}
        </p>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/55">
          CRM 14.706-SC · RQE 23.737
          <br />
          Cirurgia plástica estética, reparadora e de afirmação de gênero.
        </div>
      </div>
    </div>
  );
}
