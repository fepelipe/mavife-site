import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { InstagramGallery } from "@/components/InstagramGallery";
import { fetchBeholdGallery } from "@/lib/behold";
import { instagramFeed } from "@/lib/content";

export async function InstagramFeed() {
  const gallery = await fetchBeholdGallery();
  const { title, description } = instagramFeed;
  const username = gallery.username || instagramFeed.username;

  return (
    <section id="instagram" className="section-y bg-surface">
      <div className="section-x mx-auto mb-10 flex max-w-content flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <Link
            href={gallery.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/profile inline-flex w-fit items-center gap-3 rounded-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
        <InstagramGallery posts={gallery.posts} />
      ) : (
        <div className="section-x mx-auto max-w-content">
          <div className="rounded-soft border border-clay/30 bg-white p-10 text-center">
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
        </div>
      )}
    </section>
  );
}
