"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/images";

const FALLBACK_SRC = images.brand.avatar.src;

function isBeholdHosted(src: string): boolean {
  return src.includes("behold.pictures");
}

/**
 * Behold often returns Instagram CDN profile URLs (not Behold CDN). Those hosts
 * vary and signed URLs can expire — fall back to the brand avatar when needed.
 */
export function InstagramProfilePicture({ src }: { src: string | null }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const current = !src || failedSrc === src ? FALLBACK_SRC : src;
  const usingFallback = current === FALLBACK_SRC;

  return (
    <Image
      src={current}
      alt=""
      width={40}
      height={40}
      unoptimized={!usingFallback && !isBeholdHosted(current)}
      onError={() => {
        if (src) setFailedSrc(src);
      }}
      className="size-10 rounded-full object-cover ring-1 ring-clay/50 transition-opacity group-hover/profile:opacity-90"
    />
  );
}
