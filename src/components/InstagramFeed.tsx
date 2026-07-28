import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { Section } from "@/components/Section";
import { fetchBeholdGallery, type GalleryPost } from "@/lib/behold";
import { cn } from "@/lib/cn";
import { instagramFeed } from "@/lib/content";

/** Asymmetric bento spans for up to 6 free-plan posts. */
const TILE_LAYOUT = [
  "col-span-2 row-span-2 min-h-[20rem] sm:min-h-[24rem] md:col-span-2 md:row-span-2 md:min-h-[32rem]",
  "col-span-1 min-h-[11rem] sm:min-h-[14rem] md:min-h-[15rem]",
  "col-span-1 min-h-[11rem] sm:min-h-[14rem] md:min-h-[15rem]",
  "col-span-1 min-h-[11rem] sm:min-h-[13rem] md:col-span-1 md:min-h-[14rem]",
  "col-span-1 min-h-[11rem] sm:min-h-[13rem] md:col-span-1 md:min-h-[14rem]",
  "col-span-2 min-h-[12rem] sm:col-span-1 sm:min-h-[13rem] md:col-span-1 md:min-h-[14rem]",
] as const;

function PostTile({ post, className }: { post: GalleryPost; className: string }) {
  return (
    <li className={cn("min-w-0", className)}>
      <Link
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-full overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        style={{ backgroundColor: post.dominantColor }}
        aria-label={post.caption ? `Abrir no Instagram: ${post.caption}` : "Abrir publicação no Instagram"}
      >
        <Image
          src={post.imageUrl}
          alt={post.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
        />

        {(post.isVideo || post.isCarousel) && (
          <span className="absolute top-3 right-3 z-10 rounded bg-jungle/70 px-2 py-1 text-[0.65rem] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
            {post.isVideo ? "Reel" : "Álbum"}
          </span>
        )}

        {/* Touch / always-available cue */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-jungle/85 via-jungle/35 to-transparent px-3 pt-10 pb-3 transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-0">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-clay uppercase">
            Ir ao post
            <ExternalLinkIcon className="size-3.5" />
          </span>
        </div>

        {/* Hover / keyboard overlay with caption */}
        <div
          className={cn(
            "absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-jungle via-jungle/70 to-jungle/10 p-4 sm:p-5",
            "opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100 group-focus-visible:opacity-100",
            "[@media(hover:none)]:group-active:opacity-100",
          )}
        >
          {post.caption ? (
            <p className="line-clamp-4 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]">
              {post.caption}
            </p>
          ) : null}
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-clay uppercase">
            Ir ao post
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
          <div className="flex items-center gap-3">
            {gallery.profilePictureUrl ? (
              <Image
                src={gallery.profilePictureUrl}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover ring-1 ring-clay/50"
              />
            ) : null}
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">@{username}</p>
          </div>
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
        <ul className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
          {gallery.posts.map((post, index) => (
            <PostTile
              key={post.id}
              post={post}
              className={TILE_LAYOUT[index] ?? "col-span-1 min-h-[12rem]"}
            />
          ))}
        </ul>
      ) : (
        <div className="rounded-sm border border-clay/30 bg-white p-10 text-center">
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
