"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { instagramFeed } from "@/lib/content";

function processEmbeds() {
  window.instgrm?.Embeds.process();
}

export function InstagramFeed() {
  const { username, profileUrl, title, description, posts } = instagramFeed;

  useEffect(() => {
    processEmbeds();
  }, []);

  return (
    <section id="instagram" className="section-x border-t border-ink/10 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium tracking-[0.3em] text-muted uppercase">{title}</p>
            <h2 className="font-display text-3xl text-ink md:text-4xl">@{username}</h2>
            <p className="mt-2 max-w-md text-body text-muted">{description}</p>
          </div>
          <Link
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink underline underline-offset-4 hover:text-leaf"
          >
            Ver perfil
          </Link>
        </div>
        <ul className="grid gap-px bg-ink/10 sm:grid-cols-3">
          {posts.map((post) => (
            <li key={post.permalink} className="bg-cream">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={post.permalink}
                data-instgrm-version="14"
                style={{
                  background: "#FAF8F5",
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
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processEmbeds}
      />
    </section>
  );
}
