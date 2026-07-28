"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import type { GalleryPost } from "@/lib/behold";
import { cn } from "@/lib/cn";

const TILE_LAYOUT = [
  "col-span-2 row-span-2 min-h-[18rem] sm:min-h-[22rem] md:min-h-[30rem] lg:min-h-[34rem]",
  "col-span-1 min-h-[10rem] sm:min-h-[13rem] md:min-h-[15rem]",
  "col-span-1 min-h-[10rem] sm:min-h-[13rem] md:min-h-[15rem]",
  "col-span-1 min-h-[10rem] sm:min-h-[12rem] md:min-h-[14rem]",
  "col-span-1 min-h-[10rem] sm:min-h-[12rem] md:min-h-[14rem]",
  "col-span-2 min-h-[11rem] sm:col-span-1 sm:min-h-[12rem] md:min-h-[14rem]",
] as const;

/** Crossfade length for album frames (ms). */
const FADE_MS = 1600;
/** Pause after entrance before the first pair starts. */
const AFTER_LOAD_MS = 2200;
/** Pause after the second tile finishes before picking the next pair. */
const BETWEEN_PAIRS_MS = 1800;

function shuffleDelays(count: number, maxMs: number): number[] {
  return Array.from({ length: count }, () => Math.floor(Math.random() * maxMs));
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
  entranceDelay,
  frameIndex,
  isFading,
  visible,
}: {
  post: GalleryPost;
  className: string;
  entranceDelay: number;
  frameIndex: number;
  isFading: boolean;
  visible: boolean;
}) {
  const frames = post.images.length > 0 ? post.images : [post.imageUrl];
  const current = frames[frameIndex % frames.length];
  const next = frames[(frameIndex + 1) % frames.length];

  return (
    <li
      className={cn(
        "min-w-0 opacity-0 transition-opacity duration-700 ease-out",
        visible && "opacity-100",
        className,
      )}
      style={{ transitionDelay: visible ? `${entranceDelay}ms` : "0ms" }}
    >
      <Link
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-full overflow-hidden bg-surface focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={post.caption ? `Abrir no Instagram: ${post.caption}` : "Abrir publicação no Instagram"}
      >
        <Image
          src={current}
          alt={post.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className={cn(
            "object-cover transition-[opacity,transform] ease-out group-hover:scale-105 group-focus-visible:scale-105",
            isFading ? "opacity-0 duration-[1600ms]" : "opacity-100 duration-500",
          )}
        />
        {isFading && frames.length > 1 ? (
          <Image
            src={next}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            className="object-cover opacity-0 animate-[ig-frame-in_1600ms_ease-out_forwards] group-hover:scale-105"
          />
        ) : null}

        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-20 flex flex-col justify-end",
            "bg-gradient-to-t from-ink/80 via-ink/25 to-transparent p-4 sm:p-5",
            "opacity-0 transition-opacity duration-300 ease-out",
            "group-hover:opacity-100 group-focus-visible:opacity-100",
          )}
        >
          {post.caption ? (
            <p className="line-clamp-4 max-w-[90%] pr-10 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]">
              {post.caption}
            </p>
          ) : null}
        </div>

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
          <span className="flex size-8 items-center justify-center rounded-sm bg-ink/45 text-clay shadow-sm backdrop-blur-sm transition-colors duration-300 group-hover:bg-ink/65 group-focus-visible:bg-ink/65">
            <ExternalLinkIcon className="size-3.5" />
          </span>
        </div>
      </Link>
    </li>
  );
}

export function InstagramGallery({ posts }: { posts: GalleryPost[] }) {
  const [entranceDelays, setEntranceDelays] = useState(() => posts.map(() => 0));
  const [visible, setVisible] = useState(false);
  const [frameIndex, setFrameIndex] = useState(() => posts.map(() => 0));
  const [fading, setFading] = useState(() => posts.map(() => false));

  useEffect(() => {
    setEntranceDelays(shuffleDelays(posts.length, 900));
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [posts.length]);

  useEffect(() => {
    if (posts.length < 2 || !visible) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms);
        timers.push(t);
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
      await wait(AFTER_LOAD_MS + Math.max(0, ...entranceDelays) + 700);
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
  }, [posts, entranceDelays, visible]);

  return (
    <ul className="grid w-full auto-rows-fr grid-cols-2 gap-0 md:grid-cols-3">
      {posts.map((post, index) => (
        <PostTile
          key={post.id}
          post={post}
          className={TILE_LAYOUT[index] ?? "col-span-1 min-h-[12rem]"}
          entranceDelay={entranceDelays[index] ?? 0}
          frameIndex={frameIndex[index] ?? 0}
          isFading={fading[index] ?? false}
          visible={visible}
        />
      ))}
    </ul>
  );
}
