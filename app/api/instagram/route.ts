import { NextResponse } from "next/server";
import { FALLBACK_INSTAGRAM_POSTS, type InstagramPostItem } from "@/content/instagram";

export const revalidate = 1800; // Revalida a cada 30 minutos

function extractTitleFromCaption(caption: string): string {
  const clean = caption
    .replace(/^Pergunta de seguidor:\s*/i, "")
    .replace(/^[📌👉🎥📅🌐👨‍⚕️🔹\s]+/g, "")
    .trim();
  const firstLine = clean.split("\n").find((line) => line.trim().length > 8);
  return firstLine ? firstLine.replace(/^[📌👉🎥📅\s]+/, "").trim() : "Publicação no Instagram";
}

export async function GET() {
  // 1. Tenta via Instagram Graph API oficial (se INSTAGRAM_ACCESS_TOKEN estiver configurado)
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (accessToken) {
    try {
      const url = `https://graph.instagram.com/me/media?fields=id,shortcode,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=25&access_token=${encodeURIComponent(accessToken)}`;
      const res = await fetch(url, { next: { revalidate: 1800 } });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.data) && data.data.length > 0) {
          const posts: InstagramPostItem[] = data.data.map((item: Record<string, string>) => {
            const caption = item.caption ?? "";
            const isVideo = item.media_type === "VIDEO";
            return {
              id: item.id,
              shortcode: item.shortcode ?? item.id,
              permalink: item.permalink,
              mediaType: (item.media_type as InstagramPostItem["mediaType"]) ?? "IMAGE",
              mediaUrl: item.media_url,
              thumbnailUrl: isVideo ? (item.thumbnail_url ?? item.media_url) : item.media_url,
              caption,
              title: extractTitleFromCaption(caption),
              tag: isVideo ? "Reels · @drclaudioeduardo" : "Post · @drclaudioeduardo",
              timestamp: item.timestamp,
            };
          });
          return NextResponse.json({ source: "instagram_graph_api", posts });
        }
      }
    } catch {
      // prossegue para a próxima fonte
    }
  }

  // 2. Tenta via Behold JSON Feed (se NEXT_PUBLIC_BEHOLD_FEED_ID ou BEHOLD_FEED_URL estiver configurado)
  const beholdFeedId = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID;
  const beholdUrl =
    process.env.BEHOLD_FEED_URL ??
    (beholdFeedId ? `https://feeds.behold.so/${beholdFeedId}` : undefined);

  if (beholdUrl) {
    try {
      const res = await fetch(beholdUrl, { next: { revalidate: 1800 } });
      if (res.ok) {
        const data = await res.json();
        const rawPosts = Array.isArray(data) ? data : data.posts;
        if (Array.isArray(rawPosts) && rawPosts.length > 0) {
          const posts: InstagramPostItem[] = rawPosts.slice(0, 25).map((item: Record<string, unknown>) => {
            const caption = String(item.caption ?? item.prunedCaption ?? "");
            const mediaType = String(item.mediaType ?? "IMAGE") as InstagramPostItem["mediaType"];
            const isVideo = mediaType === "VIDEO";
            const sizes = item.sizes as Record<string, { mediaUrl?: string }> | undefined;
            const bestImg =
              sizes?.large?.mediaUrl ??
              sizes?.medium?.mediaUrl ??
              String(item.thumbnailUrl ?? item.mediaUrl ?? "");
            return {
              id: String(item.id),
              shortcode: String(item.shortcode ?? item.id),
              permalink: String(item.permalink ?? "https://www.instagram.com/drclaudioeduardo"),
              mediaType,
              mediaUrl: String(item.mediaUrl ?? bestImg),
              thumbnailUrl: bestImg,
              caption,
              title: extractTitleFromCaption(caption),
              tag: isVideo ? "Reels · @drclaudioeduardo" : "Post · @drclaudioeduardo",
              timestamp: item.timestamp ? String(item.timestamp) : undefined,
            };
          });
          return NextResponse.json({ source: "behold_live_feed", posts });
        }
      }
    } catch {
      // prossegue para os posts reais verificados
    }
  }

  // 3. Fallback: Retorna as postagens reais verificadas de @drclaudioeduardo
  return NextResponse.json({
    source: "verified_instagram_posts",
    posts: FALLBACK_INSTAGRAM_POSTS,
  });
}

