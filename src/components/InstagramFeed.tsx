import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { instagramFeed } from "@/lib/content";
import { fetchInstagramProfile } from "@/lib/instagram";

export async function InstagramFeed() {
  const profile = await fetchInstagramProfile(instagramFeed.username);
  const { title, description } = instagramFeed;

  return (
    <Section id="instagram" className="bg-surface">
      <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            @{profile.username}
          </p>
          <h2 className="text-h2 text-ink">{title}</h2>
          <p className="max-w-prose text-body text-muted">{description}</p>
        </div>
        <Link
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-leaf underline-offset-4 hover:underline"
        >
          Ver perfil no Instagram
        </Link>
      </div>

      {profile.posts.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.posts.map((post) => (
            <li key={post.permalink}>
              <Link
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-sm bg-white shadow-sm"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.caption || "Publicação no Instagram"}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {post.isVideo && (
                    <span className="absolute top-3 right-3 rounded bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                      Reel
                    </span>
                  )}
                </div>
                {post.caption ? (
                  <p className="line-clamp-2 p-4 text-sm text-muted">{post.caption}</p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-sm border border-clay/30 bg-white p-10 text-center">
          <p className="text-body text-muted">
            {profile.isPrivate
              ? "As publicações de @marlyfonseca_ estão privadas. Para exibir os posts aqui, torne o perfil público em Configurações → Privacidade da conta no Instagram."
              : "Nenhuma publicação encontrada no momento."}
          </p>
          <Link
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-leaf underline-offset-4 hover:underline"
          >
            Abrir @{profile.username} no Instagram
          </Link>
        </div>
      )}
    </Section>
  );
}
