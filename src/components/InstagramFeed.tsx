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
    <Section id="instagram" className="bg-fiber">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold tracking-widest text-wicker uppercase">@{username}</p>
        <h2 className="text-h2 text-ink">{title}</h2>
        <p className="mx-auto mt-3 max-w-lg text-body text-muted">{description}</p>
        <Link
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-leaf underline-offset-4 hover:underline"
        >
          Seguir no Instagram
        </Link>
      </div>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.permalink} className="basket-frame overflow-hidden bg-white">
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
                {post.caption ?? "Ver publicação"}
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
