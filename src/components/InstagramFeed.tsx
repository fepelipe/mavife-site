import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { InstagramGallery } from "@/components/InstagramGallery";
import { externalLinkLabel } from "@/lib/a11y";
import { fetchBeholdGallery } from "@/lib/behold";
import { instagramFeed } from "@/lib/content";

const TITLE_ID = "instagram-heading";

export async function InstagramFeed() {
  const gallery = await fetchBeholdGallery();
  const { title, description } = instagramFeed;
  const username = gallery.username || instagramFeed.username;
  const profileLabel = externalLinkLabel(`Ver perfil de @${username} no Instagram`);
  const hasPosts = gallery.posts.length > 0;

  return (
    <section
      id="instagram"
      aria-labelledby={TITLE_ID}
      tabIndex={-1}
      className="bg-surface"
    >
      {/* Section rhythm before the mosaic; no padding after the grid. */}
      <div className="section-x mx-auto flex max-w-content flex-col gap-4 pt-16 pb-10 md:flex-row md:items-end md:justify-between md:pt-24 md:pb-14">
        <div className="flex flex-col gap-3">
          <Link
            href={gallery.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={profileLabel}
            className="group/profile inline-flex w-fit items-center gap-3 rounded-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
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
            <span className="text-sm font-semibold tracking-widest text-accent-deep uppercase transition-colors group-hover/profile:text-leaf">
              @{username}
            </span>
          </Link>
          <h2 id={TITLE_ID} className="text-h2 text-ink">
            {title}
          </h2>
          <p className="max-w-prose text-body text-muted">{description}</p>
        </div>
        <Link
          href={gallery.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={profileLabel}
          className="inline-flex items-center gap-1.5 rounded-soft text-sm font-semibold text-leaf underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
        >
          Ver perfil no Instagram
          <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
        </Link>
      </div>

      {hasPosts ? (
        <InstagramGallery posts={gallery.posts} />
      ) : (
        <div className="section-x mx-auto max-w-content pb-16 md:pb-24">
          <div className="rounded-soft border border-clay/30 bg-white p-10 text-center" role="status">
            <p className="text-body text-muted">
              {gallery.unavailable
                ? "As publicações do Instagram estão temporariamente indisponíveis. Volte em breve ou acompanhe pelo perfil."
                : "Nenhuma publicação encontrada no momento."}
            </p>
            <Link
              href={gallery.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={externalLinkLabel(`Abrir @${username} no Instagram`)}
              className="mt-4 inline-flex items-center gap-1.5 rounded-soft text-sm font-semibold text-leaf underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
            >
              Abrir @{username} no Instagram
              <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
