"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { instagramFeed } from "@/lib/content";
import { Section } from "@/components/Section";

function processEmbeds() {
  window.instgrm?.Embeds.process();
}

export function InstagramFeed() {
  const { username, profileUrl, title, description, posts } = instagramFeed;

  useEffect(() => {
    processEmbeds();
  }, []);

  return (
    <Section id="instagram" className="bg-surface">
      <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">@{username}</p>
          <h2 className="text-h2 text-ink">{title}</h2>
          <p className="max-w-prose text-body text-muted">{description}</p>
        </div>
        <Link
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-leaf underline-offset-4 hover:underline"
        >
          Ver perfil no Instagram
        </Link>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.permalink} className="overflow-hidden rounded-sm bg-white shadow-sm">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={post.permalink}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                margin: 0,
                maxWidth: "100%",
                minWidth: "100%",
                padding: 0,
                width: "100%",
              }}
            >
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                {post.caption ?? "Ver publicação no Instagram"}
              </a>
            </blockquote>
          </li>
        ))}
      </ul>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processEmbeds}
      />
    </Section>
  );
}
