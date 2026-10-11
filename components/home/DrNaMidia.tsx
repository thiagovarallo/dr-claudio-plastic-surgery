"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  ListVideo,
  Play,
  Radio,
  Tv,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { mediaPress, mediaVideos } from "@/content/media";
import { Reveal } from "@/components/ui/Reveal";

function MediaLogo({ source }: { source: string }) {
  if (source === "G1") {
    return (
      <span
        aria-label="G1"
        className="inline-flex items-center justify-center rounded-lg bg-[#b91c1c] px-2.5 py-1 text-xs font-black lowercase tracking-tighter text-white shadow-xs"
      >
        g1
      </span>
    );
  }

  if (source === "NSC TV") {
    return (
      <span
        aria-label="NSC TV"
        className="inline-flex items-center gap-1 rounded-lg bg-navy-deep px-2.5 py-1 text-xs font-black tracking-tight text-white shadow-xs"
      >
        <span>NSC</span>
        <span className="text-[9px] font-bold tracking-widest text-[#f59e0b]">TV</span>
      </span>
    );
  }

  return (
    <span
      aria-label="Jornal Opção"
      className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-navy shadow-xs"
    >
      Jornal Opção
    </span>
  );
}

export function DrNaMidia() {
  const t = useTranslations("home.media");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeVideo = mediaVideos[activeIndex];

  const handleSelectVideo = (index: number) => {
    setActiveIndex(index);
    // Se o usuário já estava assistindo, continua reproduzindo o novo vídeo
    setIsPlaying(true);
  };

  return (
    <section
      id="midia"
      aria-labelledby="midia-title"
      className="relative isolate overflow-hidden bg-surface-soft py-12 text-ink sm:py-16 lg:py-20"
    >
      {/* Luz ambiente suave e refinada na paleta oficial */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 size-[520px] rounded-full bg-brand/6 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-10 -z-10 size-[480px] rounded-full bg-blue-light/6 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Cabeçalho da Seção */}
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.46em] text-brand-deep">
              <Radio className="size-3 text-brand" />
              <span>{t("eyebrow")}</span>
            </div>
            <h2
              id="midia-title"
              className="mt-2.5 font-display text-4xl font-medium leading-[0.9] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl"
            >
              {t("title")}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft/75 sm:text-sm">
              {t("description")}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="hidden sm:block">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-deep shadow-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              <span>{t("featuredLabel")}</span>
            </div>
          </Reveal>
        </div>

        {/* Bloco de Vídeos: Player Destaque + Playlist Interativa */}
        <div className="mt-7 grid gap-4 lg:grid-cols-12 lg:items-start lg:gap-6">
          {/* Player em Destaque */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="group relative aspect-video overflow-hidden rounded-[26px] border border-slate-200/90 bg-navy-deep shadow-[0_20px_50px_color-mix(in_srgb,var(--blue-dark)_14%,transparent)] lg:rounded-[30px]">
              {isPlaying ? (
                <iframe
                  key={activeVideo.id}
                  className="absolute inset-0 size-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={t(`videos.${activeIndex}.title`)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative size-full">
                  <Image
                    src={`https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`}
                    alt={t(`videos.${activeIndex}.title`)}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    priority={activeIndex === 0}
                  />

                  {/* Gradiente escuro cinematográfico */}
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,color-mix(in_srgb,var(--blue-dark)_90%,transparent)_0%,color-mix(in_srgb,var(--blue-dark)_18%,transparent)_42%,transparent_72%)]" />

                  {/* Badges superiores sobrepostos */}
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy-deep/75 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      <Tv className="size-3 text-brand" />
                      {activeVideo.channel}
                    </span>

                    <span className="rounded-full border border-white/20 bg-navy-deep/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                      {activeVideo.badge}
                    </span>
                  </div>

                  {/* Botão de Play central proeminente */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label={`${t("watchNow")}: ${t(`videos.${activeIndex}.title`)}`}
                    className="group/btn absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center cursor-pointer outline-none"
                  >
                    <span className="absolute size-20 rounded-full bg-brand/30 animate-ping group-hover/btn:bg-brand/50 sm:size-24" />
                    <span className="relative flex size-18 items-center justify-center rounded-full bg-brand text-white shadow-[0_12px_36px_color-mix(in_srgb,var(--green)_45%,transparent)] transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-brand-deep sm:size-22">
                      <Play className="ml-1 size-7 fill-current sm:size-8" />
                    </span>
                  </button>

                  {/* Título sobreposto na parte inferior */}
                  <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                      {activeVideo.program}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-medium leading-snug text-white sm:text-2xl lg:text-3xl">
                      {t(`videos.${activeIndex}.title`)}
                    </h3>
                  </div>
                </div>
              )}
            </div>

            {/* Barra de Informações do Vídeo Atual */}
            <div className="mt-2.5 flex flex-col justify-between gap-2.5 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xs sm:flex-row sm:items-center sm:px-4.5 sm:py-2.5">
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-deep">
                  {activeVideo.program} · {activeVideo.channel}
                </span>
                <p className="mt-0.5 truncate text-xs font-bold text-ink sm:text-sm">
                  {t(`videos.${activeIndex}.title`)}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {!isPlaying ? (
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="inline-flex h-8.5 items-center gap-1.5 rounded-full bg-brand px-3.5 text-xs font-bold text-white transition hover:bg-brand-deep"
                  >
                    <Play className="size-3 fill-current" />
                    <span>{t("watchNow")}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="inline-flex h-8.5 items-center gap-1.5 rounded-full border border-slate-200 px-3 text-xs font-semibold text-ink-soft hover:bg-slate-100"
                  >
                    Miniatura
                  </button>
                )}

                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8.5 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold text-ink-soft transition hover:border-slate-300 hover:text-ink"
                  title="Abrir no YouTube"
                >
                  <ExternalLink className="size-3" />
                  <span className="hidden sm:inline">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Playlist Interativa */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="rounded-[22px] border border-slate-200/90 bg-white p-3 shadow-xs sm:p-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-deep">
                  <ListVideo className="size-3.5 text-brand" />
                  <span>{t("playlistTitle")}</span>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  {mediaVideos.length} vídeos
                </span>
              </div>

              <div className="mt-2 space-y-1.5">
                {mediaVideos.map((video, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={video.id}
                      type="button"
                      onClick={() => handleSelectVideo(index)}
                      className={`group relative flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 text-left transition duration-200 ${
                        isActive
                          ? "border border-brand/50 bg-brand/6 shadow-xs ring-1 ring-brand/25"
                          : "border border-transparent bg-slate-50/70 hover:border-slate-200 hover:bg-slate-100/80"
                      }`}
                    >
                      {/* Miniatura do Vídeo */}
                      <div className="relative aspect-video w-22 shrink-0 overflow-hidden rounded-lg bg-navy-deep sm:w-24">
                        <Image
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={t(`videos.${index}.title`)}
                          fill
                          unoptimized
                          sizes="96px"
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div
                          className={`absolute inset-0 flex items-center justify-center transition ${
                            isActive
                              ? "bg-brand/35 text-white"
                              : "bg-navy-deep/40 text-white/90 group-hover:bg-navy-deep/20"
                          }`}
                        >
                          <span
                            className={`flex size-5 items-center justify-center rounded-full ${
                              isActive ? "bg-brand text-white" : "bg-navy-deep/80 text-white"
                            }`}
                          >
                            <Play className="ml-0.5 size-2.5 fill-current" />
                          </span>
                        </div>
                      </div>

                      {/* Informações da Linha */}
                      <div className="min-w-0 flex-1">
                        <span
                          className={`text-[9px] font-bold uppercase tracking-[0.18em] ${
                            isActive ? "text-brand-deep" : "text-slate-500"
                          }`}
                        >
                          {video.source}
                        </span>
                        <p
                          className={`mt-0.5 line-clamp-2 text-xs font-bold leading-snug ${
                            isActive ? "text-ink" : "text-ink-soft group-hover:text-ink"
                          }`}
                        >
                          {t(`videos.${index}.title`)}
                        </p>
                        {isActive && (
                          <span className="mt-1 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-brand-deep">
                            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                            {t("nowPlaying")}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Imprensa: Matérias e Reportagens */}
        <div className="mt-10 border-t border-slate-200/80 pt-8 sm:mt-12 sm:pt-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.46em] text-brand-deep">
                {t("pressEyebrow")}
              </p>
              <h3 className="mt-2 font-display text-3xl font-medium leading-[0.92] text-ink sm:text-4xl">
                {t("pressTitle")}
              </h3>
              <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-ink-soft/75 sm:text-sm">
                {t("pressDescription")}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href="https://dr.drclaudioeduardo.com.br/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-deep transition hover:text-brand"
              >
                <span>{t("allPress")}</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {mediaPress.map((item, index) => (
              <Reveal key={item.source} delay={index * 0.08} className="h-full">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-full flex-col justify-between rounded-[22px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_color-mix(in_srgb,var(--blue-dark)_4%,transparent)] transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_color-mix(in_srgb,var(--blue-dark)_9%,transparent)] sm:p-5.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <MediaLogo source={item.source} />
                      <span className="flex size-7 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 transition group-hover:border-brand/30 group-hover:bg-brand/10 group-hover:text-brand-deep">
                        <ArrowUpRight className="size-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <div className="mt-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-deep">
                        {t(`press.${index}.type`)}
                      </p>
                      <h4 className="mt-1.5 font-display text-xl font-medium leading-snug text-ink transition group-hover:text-brand-deep sm:text-2xl">
                        {t(`press.${index}.title`)}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink-soft/70">
                        {t(`press.${index}.text`)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500">
                    <span className="text-[11px] text-slate-400">{item.publisher}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-deep transition group-hover:text-brand">
                      {t("readArticle")}
                      <ArrowUpRight className="size-3" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
