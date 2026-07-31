"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { instagramPostLabel } from "@/lib/a11y";
import type { GalleryPost } from "@/lib/behold";
import { cn } from "@/lib/cn";

/**
 * Desktop (md+): three equal blocks — one post | one post | 2×2 of four posts.
 * (1:1:4 = posts per block.) Mobile keeps a compact 2-col mosaic.
 */
const TILE_LAYOUT = [
  "col-span-2 row-span-2 min-h-[18rem] sm:min-h-[22rem] md:col-span-2 md:min-h-[28rem] lg:min-h-[32rem]",
  "col-span-1 min-h-[10rem] sm:min-h-[13rem] md:col-span-2 md:row-span-2 md:min-h-[28rem] lg:min-h-[32rem]",
  "col-span-1 min-h-[10rem] sm:min-h-[13rem] md:col-span-1 md:row-span-1 md:min-h-[14rem] lg:min-h-[16rem]",
  "col-span-1 min-h-[10rem] sm:min-h-[12rem] md:col-span-1 md:min-h-[14rem] lg:min-h-[16rem]",
  "col-span-1 min-h-[10rem] sm:min-h-[12rem] md:col-span-1 md:min-h-[14rem] lg:min-h-[16rem]",
  "col-span-2 min-h-[11rem] sm:col-span-1 sm:min-h-[12rem] md:col-span-1 md:min-h-[14rem] lg:min-h-[16rem]",
] as const;

/** Crossfade length for album frames (ms). */
const FADE_MS = 1600;
/** Pause after the gallery enters view before the first pair starts. */
const AFTER_LOAD_MS = 2200;
/** Pause after the second tile finishes before picking the next pair. */
const BETWEEN_PAIRS_MS = 1800;
/** Reveal timing for the “Ir ao post” copy (ms). */
const CTA_REVEAL_MS = 380;

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function pickTwoDistinct(count: number, prefer: number[]): [number, number] | null {
  const pool = prefer.length >= 2 ? prefer : Array.from({ length: count }, (_, i) => i);
  if (pool.length < 2) return null;
  const first = pool[Math.floor(Math.random() * pool.length)];
  let second = pool[Math.floor(Math.random() * pool.length)];
  let guard = 0;
  while (second === first && guard < 12) {
    second = pool[Math.floor(Math.random() * pool.length)];
    guard += 1;
  }
  if (second === first) return null;
  return [first, second];
}

function PostTile({
  post,
  className,
  frameIndex,
  isFading,
  reduceMotion,
  priority,
  sizes,
  dense,
  onHoverChange,
}: {
  post: GalleryPost;
  className: string;
  frameIndex: number;
  isFading: boolean;
  reduceMotion: boolean;
  priority?: boolean;
  sizes: string;
  /** Compact 2×2 tiles: caption above the CTA strip. */
  dense?: boolean;
  onHoverChange?: (hovered: boolean) => void;
}) {
  const frames = post.images.length > 0 ? post.images : [post.imageUrl];
  const current = frames[frameIndex % frames.length];
  const next = frames[(frameIndex + 1) % frames.length];
  const hasCarousel = frames.length > 1 && !reduceMotion;

  return (
    <li className={cn("relative min-w-0", className)}>
      <Link
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute inset-0 block overflow-hidden focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
        aria-label={instagramPostLabel({ caption: post.caption, isVideo: post.isVideo })}
        onMouseEnter={() => onHoverChange?.(true)}
        onMouseLeave={() => onHoverChange?.(false)}
        onFocus={() => onHoverChange?.(true)}
        onBlur={() => onHoverChange?.(false)}
      >
        <Image
          src={current}
          alt=""
          fill
          sizes={sizes}
          quality={100}
          priority={priority}
          className={cn(
            "z-0 object-cover",
            !reduceMotion &&
              "transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105",
          )}
        />
        {hasCarousel ? (
          <Image
            src={next}
            alt=""
            fill
            sizes={sizes}
            quality={100}
            className={cn(
              "z-[1] object-cover transition-opacity ease-out",
              !reduceMotion && "group-hover:scale-105 group-focus-visible:scale-105",
              isFading ? "opacity-100 duration-[1600ms]" : "opacity-0 duration-0",
            )}
          />
        ) : null}

        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-20 flex flex-col justify-end",
            dense ? "p-3 sm:p-3.5" : "p-4 sm:p-5",
          )}
          aria-hidden="true"
        >
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent",
              "opacity-0 transition-opacity duration-300 ease-out",
              "group-hover:opacity-100 group-focus-visible:opacity-100",
            )}
          />

          <div
            className={cn(
              "relative z-10 flex min-w-0",
              // 2×2 tiles always stack; large tiles go row on desktop.
              dense
                ? "flex-col items-stretch gap-2"
                : "flex-col items-stretch gap-2 md:flex-row md:items-end md:gap-3",
            )}
          >
            {post.caption ? (
              <p
                className={cn(
                  "min-w-0 w-full text-sm leading-relaxed text-white/95 sm:text-[0.95rem]",
                  "opacity-0 transition-opacity duration-300 ease-out",
                  "group-hover:opacity-100 group-focus-visible:opacity-100",
                  dense ? "line-clamp-3" : "line-clamp-4 md:flex-1",
                )}
              >
                {post.caption}
              </p>
            ) : dense ? null : (
              <span className="hidden min-w-0 flex-1 md:block" />
            )}

            <div
              className={cn(
                "flex shrink-0 items-center gap-1.5 self-end",
                !dense && "md:self-auto",
              )}
            >
              {/*
                Space is reserved in-flow; transform only reveals the copy so the
                icon never shifts when “Ir ao post” appears.
              */}
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "text-xs font-semibold tracking-[0.14em] text-clay uppercase whitespace-nowrap",
                    "translate-x-full opacity-0 transition-[opacity,transform] ease-out",
                    "group-hover:translate-x-0 group-hover:opacity-100",
                    "group-focus-visible:translate-x-0 group-focus-visible:opacity-100",
                  )}
                  style={{ transitionDuration: `${CTA_REVEAL_MS}ms` }}
                >
                  Ir ao post
                </p>
              </div>
              <span className="flex size-8 items-center justify-center rounded-soft bg-ink/45 text-clay shadow-sm backdrop-blur-sm transition-colors duration-300 group-hover:bg-ink/65 group-focus-visible:bg-ink/65">
                <ExternalLinkIcon className="size-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export function InstagramGallery({ posts }: { posts: GalleryPost[] }) {
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [inView, setInView] = useState(false);
  const [frameIndex, setFrameIndex] = useState(() => posts.map(() => 0));
  const [fading, setFading] = useState(() => posts.map(() => false));
  const rootRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const hoverCountRef = useRef(0);

  const handleHoverChange = (hovered: boolean) => {
    hoverCountRef.current = Math.max(0, hoverCountRef.current + (hovered ? 1 : -1));
    isPausedRef.current = hoverCountRef.current > 0;
  };

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reduceMotion || posts.length < 2) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    /** Resolves after `ms`, freezing the countdown while a tile is hovered. */
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        let remaining = ms;

        const tick = () => {
          if (cancelled) {
            resolve();
            return;
          }

          if (isPausedRef.current) {
            const t = setTimeout(tick, 50);
            timers.push(t);
            return;
          }

          if (remaining <= 0) {
            resolve();
            return;
          }

          const slice = Math.min(50, remaining);
          remaining -= slice;
          const t = setTimeout(tick, slice);
          timers.push(t);
        };

        tick();
      });

    const multiFrame = posts
      .map((post, index) => (post.images.length > 1 ? index : -1))
      .filter((index) => index >= 0);

    const advance = (index: number) => {
      setFading((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });

      const done = setTimeout(() => {
        if (cancelled) return;
        // Advance base frame and clear fade in the same turn so the overlay
        // never paints the *next* upcoming frame while still opaque.
        setFrameIndex((prev) => {
          const next = [...prev];
          const len = posts[index].images.length;
          next[index] = len > 0 ? (prev[index] + 1) % len : 0;
          return next;
        });
        setFading((prev) => {
          const next = [...prev];
          next[index] = false;
          return next;
        });
      }, FADE_MS);
      timers.push(done);
    };

    const run = async () => {
      await wait(AFTER_LOAD_MS);
      if (cancelled) return;

      while (!cancelled) {
        const pair = pickTwoDistinct(posts.length, multiFrame);
        if (!pair) {
          await wait(BETWEEN_PAIRS_MS);
          continue;
        }

        const [first, second] = pair;
        advance(first);
        await wait(FADE_MS / 2);
        if (cancelled) return;
        advance(second);
        await wait(FADE_MS);
        if (cancelled) return;
        await wait(BETWEEN_PAIRS_MS);
      }
    };

    void run();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [posts, reduceMotion, inView]);

  return (
    <div ref={rootRef}>
      <p className="sr-only">
        {reduceMotion
          ? "Galeria com as últimas publicações do Instagram. Cada item abre a publicação correspondente em uma nova aba."
          : "Galeria com as últimas publicações do Instagram. As imagens de álbuns podem alternar automaticamente. Cada item abre a publicação correspondente em uma nova aba."}
      </p>
      <ul
        className="grid w-full auto-rows-fr grid-cols-2 gap-0 md:grid-cols-6"
        style={{ gap: 0, columnGap: 0, rowGap: 0 }}
        aria-label="Publicações recentes no Instagram"
      >
        {posts.map((post, index) => (
          <PostTile
            key={post.id}
            post={post}
            className={TILE_LAYOUT[index] ?? "col-span-1 min-h-[12rem]"}
            frameIndex={frameIndex[index] ?? 0}
            isFading={fading[index] ?? false}
            reduceMotion={reduceMotion}
            priority={index < 2}
            dense={index >= 2}
            onHoverChange={handleHoverChange}
            sizes={
              index === 0
                ? "(max-width: 767px) 100vw, 34vw"
                : index === 1
                  ? "(max-width: 767px) 50vw, 34vw"
                  : "(max-width: 767px) 50vw, 17vw"
            }
          />
        ))}
      </ul>
    </div>
  );
}
