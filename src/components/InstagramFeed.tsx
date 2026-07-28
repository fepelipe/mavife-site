import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { Section } from "@/components/Section";
import { fetchBeholdGallery, type GalleryPost } from "@/lib/behold";
import { cn } from "@/lib/cn";
import { instagramFeed } from "@/lib/content";

/** Asymmetric bento spans for up to 6 free-plan posts — flush tiles. */
const TILE_LAYOUT = [
  "col-span-2 row-span-2 min-h-[20rem] sm:min-h-[24rem] md:min-h-[32rem]",
  "col-span-1 min-h-[11rem] sm:min-h-[14rem] md:min-h-[15rem]",
  "col-span-1 min-h-[11rem] sm:min-h-[14rem] md:min-h-[15rem]",
  "col-span-1 min-h-[11rem] sm:min-h-[13rem] md:min-h-[14rem]",
  "col-span-1 min-h-[11rem] sm:min-h-[13rem] md:min-h-[14rem]",
  "col-span-2 min-h-[12rem] sm:col-span-1 sm:min-h-[13rem] md:min-h-[14rem]",
] as const;

const HOLD_MS = 3.5;

const CAROUSEL_CLASS: Record<number, string> = {
  2: "ig-carousel-2",
  3: "ig-carousel-3",
  4: "ig-carousel-4",
  5: "ig-carousel-5",
};

function PostTile({ post, className }: { post: GalleryPost; className: string }) {
  const frames = post.images.length > 0 ? post.images : [post.imageUrl];
  const slideCount = frames.length;
  const cycleSeconds = slideCount * HOLD_MS;
  const carouselClass = CAROUSEL_CLASS[slideCount];

  return (
    <li className={cn("min-w-0", className)}>
      <Link
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-full overflow-hidden focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        style={{ backgroundColor: post.dominantColor }}
        aria-label={post.caption ? `Abrir no Instagram: ${post.caption}` : "Abrir publicação no Instagram"}
      >
        {frames.map((src, index) => {
          const isBase = index === 0;
          return (
            <Image
              key={`${post.id}-${src}`}
              src={src}
              alt={isBase ? post.alt : ""}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              className={cn(
                "object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105",
                isBase ? "z-0" : cn("z-[1] opacity-0 ig-carousel-frame", carouselClass),
                !isBase && "group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused]",
              )}
              style={
                !isBase && carouselClass
                  ? {
                      animationDuration: `${cycleSeconds}s`,
                      animationDelay: `${index * HOLD_MS}s`,
                    }
                  : undefined
              }
            />
          );
        })}

        {/* Caption overlay — CSS hover/focus only */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-jungle via-jungle/70 to-jungle/10 p-4 sm:p-5",
            "opacity-0 transition-opacity duration-300 ease-out",
            "group-hover:opacity-100 group-focus-visible:opacity-100",
          )}
        >
          {post.caption ? (
            <p className="line-clamp-4 pr-12 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]">
              {post.caption}
            </p>
          ) : null}
        </div>

        {/* External icon always bottom-right; “Ir ao post” fades in before it without shifting the icon */}
        <div className="pointer-events-none absolute right-3 bottom-3 z-30 flex items-center sm:right-4 sm:bottom-4">
          <span
            className={cn(
              "absolute right-full mr-1.5 text-xs font-semibold tracking-[0.14em] text-clay uppercase whitespace-nowrap",
              "translate-x-1 opacity-0 transition-[opacity,transform] duration-300 ease-out",
              "group-hover:translate-x-0 group-hover:opacity-100",
              "group-focus-visible:translate-x-0 group-focus-visible:opacity-100",
            )}
          >
            Ir ao post
          </span>
          <span className="flex size-8 items-center justify-center rounded-sm bg-jungle/55 text-clay shadow-sm backdrop-blur-sm transition-colors duration-300 group-hover:bg-jungle/75 group-focus-visible:bg-jungle/75">
            <ExternalLinkIcon className="size-3.5" />
          </span>
        </div>
      </Link>
    </li>
  );
}

export async function InstagramFeed() {
  const gallery = await fetchBeholdGallery();
  const { title, description } = instagramFeed;
  const username = gallery.username || instagramFeed.username;

  return (
    <Section id="instagram" className="bg-surface">
      <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <Link
            href={gallery.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/profile inline-flex w-fit items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {gallery.profilePictureUrl ? (
              <Image
                src={gallery.profilePictureUrl}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover ring-1 ring-clay/50 transition-opacity group-hover/profile:opacity-90"
              />
            ) : null}
            <span className="text-sm font-semibold tracking-widest text-accent uppercase transition-colors group-hover/profile:text-accent-deep">
              @{username}
            </span>
          </Link>
          <h2 className="text-h2 text-ink">{title}</h2>
          <p className="max-w-prose text-body text-muted">{description}</p>
        </div>
        <Link
          href={gallery.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-leaf underline-offset-4 hover:underline"
        >
          Ver perfil no Instagram
          <ExternalLinkIcon className="size-3.5" />
        </Link>
      </div>

      {gallery.posts.length > 0 ? (
        <ul className="grid auto-rows-fr grid-cols-2 gap-0 md:grid-cols-3">
          {gallery.posts.map((post, index) => (
            <PostTile
              key={post.id}
              post={post}
              className={TILE_LAYOUT[index] ?? "col-span-1 min-h-[12rem]"}
            />
          ))}
        </ul>
      ) : (
        <div className="border border-clay/30 bg-white p-10 text-center">
          <p className="text-body text-muted">
            {gallery.unavailable
              ? "As publicações do Instagram estão temporariamente indisponíveis. Volte em breve ou acompanhe pelo perfil."
              : "Nenhuma publicação encontrada no momento."}
          </p>
          <Link
            href={gallery.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf underline-offset-4 hover:underline"
          >
            Abrir @{username} no Instagram
            <ExternalLinkIcon className="size-3.5" />
          </Link>
        </div>
      )}
    </Section>
  );
}
