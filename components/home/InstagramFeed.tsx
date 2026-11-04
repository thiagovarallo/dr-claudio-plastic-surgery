"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2, Heart, MessageCircle, Play, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { FALLBACK_INSTAGRAM_POSTS, type InstagramPostItem } from "@/content/instagram";
import { INSTAGRAM_HANDLE, INSTAGRAM_HREF } from "@/content/site";

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function InstagramFeed() {
  const t = useTranslations("home.instagram");
  const [posts, setPosts] = useState<InstagramPostItem[]>(FALLBACK_INSTAGRAM_POSTS);

  useEffect(() => {
    let active = true;
    fetch("/api/instagram")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch(() => {
        // mantém fallback real verificado se houver falha de rede
      });
    return () => {
      active = false;
    };
  }, []);

  // Garante pelo menos 8 cards por metade da trilha para que o loop de 50% seja contínuo em telas ultrawide
  const baseTrack =
    posts.length >= 6 ? posts : [...posts, ...posts];
  const loopItems = [...baseTrack, ...baseTrack];

  return (
    <section
      id="instagram"
      aria-labelledby="instagram-title"
      className="relative isolate overflow-hidden bg-white py-14 text-ink sm:py-18 lg:py-22"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 -z-10 size-[480px] rounded-full bg-brand/6 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Cabeçalho + Card de Perfil Oficial */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.46em] text-brand-deep">
              <InstagramIcon className="size-3.5 text-brand" />
              <span>{t("eyebrow")}</span>
            </div>
            <h2
              id="instagram-title"
              className="mt-2.5 font-display text-4xl font-medium leading-[0.92] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl"
            >
              {t("title")}
            </h2>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-ink-soft/75 sm:text-sm">
              {t("description")}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/90 bg-surface-soft p-3.5 shadow-xs sm:gap-5 sm:px-5 sm:py-4">
              <div className="flex items-center gap-3.5">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-[linear-gradient(135deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] p-[2px]">
                  <div className="relative size-full overflow-hidden rounded-full bg-navy-deep">
                    <Image
                      src="/instagram/avatar.jpg"
                      alt="Dr. Claudio Eduardo (@drclaudioeduardo)"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-ink">{INSTAGRAM_HANDLE}</span>
                    <CheckCircle2 className="size-4 fill-brand text-white" aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-semibold text-slate-500">{t("verifiedRole")}</p>
                </div>
              </div>

              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-brand px-5 text-xs font-bold text-white shadow-[0_8px_20px_rgba(8,191,196,0.25)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                <InstagramIcon className="size-3.5" />
                <span>{t("follow")}</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Feed Dinâmico com Scroll Infinito Horizontal */}
      <div className="marquee relative mt-10 overflow-hidden py-3">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-white to-transparent sm:w-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-white to-transparent sm:w-24"
        />

        <div
          className="marquee-track flex w-max gap-5 px-2.5"
          style={{ animationDuration: "46s" }}
        >
          {loopItems.map((item, idx) => {
            const isDuplicate = idx >= baseTrack.length;
            const isExternalImage = item.thumbnailUrl.startsWith("http");
            return (
              <a
                key={`${item.id}-${idx}`}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={isDuplicate ? true : undefined}
                tabIndex={isDuplicate ? -1 : undefined}
                className="group relative flex w-[285px] shrink-0 flex-col overflow-hidden rounded-[24px] border border-slate-200/85 bg-surface-soft shadow-[0_14px_34px_-10px_rgba(27,85,121,0.12)] transition duration-300 hover:-translate-y-1.5 hover:border-brand/45 hover:shadow-[0_22px_48px_-10px_rgba(27,85,121,0.22)] sm:w-[310px]"
              >
                {/* Cabeçalho do Post */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-200/60 bg-white px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative size-8 shrink-0 overflow-hidden rounded-full bg-[linear-gradient(135deg,#f09433_0%,#dc2743_50%,#bc1888_100%)] p-[1.5px]">
                      <div className="relative size-full overflow-hidden rounded-full bg-navy-deep">
                        <Image
                          src="/instagram/avatar.jpg"
                          alt=""
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="leading-tight">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-extrabold text-ink">drclaudioeduardo</span>
                        <CheckCircle2 className="size-3.5 fill-brand text-white" aria-hidden="true" />
                      </div>
                      <span className="block text-[10px] font-medium text-slate-400">Blumenau, SC</span>
                    </div>
                  </div>
                  <InstagramIcon className="size-4 text-slate-400 transition group-hover:text-brand" />
                </div>

                {/* Capa Oficial do Reel / Post */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-deep">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title ?? "Post @drclaudioeduardo"}
                    fill
                    unoptimized={isExternalImage}
                    sizes="310px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy-deep/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      <Sparkles className="size-2.5 text-brand" />
                      {item.tag ?? "Instagram"}
                    </span>
                    {item.mediaType === "VIDEO" && (
                      <span className="flex size-7 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-md transition group-hover:bg-brand group-hover:border-brand">
                        <Play className="ml-0.5 size-3 fill-current" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Barra de Ações + Legenda real da postagem */}
                <div className="flex flex-1 flex-col justify-between bg-white p-4">
                  <div>
                    <div className="mb-2.5 flex items-center justify-between text-slate-600">
                      <div className="flex items-center gap-3">
                        <Heart className="size-4 transition group-hover:fill-rose-500 group-hover:text-rose-500" />
                        <MessageCircle className="size-4 transition group-hover:text-brand-deep" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-deep transition group-hover:text-brand">
                        {t("viewPost")}
                        <ArrowUpRight className="size-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <p className="line-clamp-3 text-xs leading-relaxed text-ink-soft/85">
                      <strong className="mr-1.5 font-extrabold text-ink">drclaudioeduardo</strong>
                      {item.caption}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
