/**
 * Behold Instagram JSON feed — free plan: max 6 posts, daily refresh, limited views.
 * Fetch server-side only and cache aggressively so page traffic does not burn the quota.
 */

export const BEHOLD_FEED_URL = "https://feeds.behold.so/skGWp890ne6rXfSgpKZo";

/** Free plan refreshes once daily; long ISR keeps Behold requests well under view limits. */
const REVALIDATE_SECONDS = 60 * 60 * 12;

/** Hard cap matching Behold free plan. */
export const BEHOLD_POST_LIMIT = 6;

export type BeholdMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export type BeholdColorPalette = {
  dominant: string;
  muted: string;
  mutedLight: string;
  mutedDark: string;
  vibrant: string;
  vibrantLight: string;
  vibrantDark: string;
};

export type BeholdImageSize = {
  width: number;
  height: number;
  mediaUrl: string;
};

export type BeholdPostSizes = {
  small: BeholdImageSize;
  medium: BeholdImageSize;
  large: BeholdImageSize;
  full: BeholdImageSize;
};

export type BeholdChildMedia = {
  id: string;
  mediaType: BeholdMediaType;
  mediaUrl: string;
  sizes?: BeholdPostSizes;
  colorPalette?: BeholdColorPalette;
};

export type BeholdPost = {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: BeholdMediaType;
  mediaUrl: string;
  thumbnailUrl?: string;
  isReel?: boolean;
  caption?: string;
  prunedCaption?: string;
  altText?: string;
  likeCount?: number;
  commentsCount?: number;
  hashtags?: string[];
  mentions?: string[];
  colorPalette?: BeholdColorPalette;
  children?: BeholdChildMedia[];
  visibility?: string;
  sizes?: BeholdPostSizes;
};

export type BeholdFeed = {
  username: string;
  biography?: string;
  profilePictureUrl?: string;
  website?: string;
  followersCount?: number;
  followsCount?: number;
  posts: BeholdPost[];
};

export type GalleryPost = {
  id: string;
  permalink: string;
  caption: string;
  alt: string;
  imageUrl: string;
  imageSrcSet: {
    small: string;
    medium: string;
    large: string;
  };
  dominantColor: string;
  isVideo: boolean;
  isCarousel: boolean;
};

export type InstagramGallery = {
  username: string;
  profileUrl: string;
  profilePictureUrl: string | null;
  posts: GalleryPost[];
  /** True when the live feed could not be loaded (quota, network, empty). */
  unavailable: boolean;
};

function rgbToCss(rgb: string | undefined): string {
  if (!rgb) return "var(--color-surface)";
  const parts = rgb.split(",").map((part) => part.trim());
  if (parts.length !== 3 || parts.some((part) => Number.isNaN(Number(part)))) {
    return "var(--color-surface)";
  }
  return `rgb(${parts.join(" ")})`;
}

function pickImageUrls(post: BeholdPost): GalleryPost["imageSrcSet"] | null {
  const sizes = post.sizes;
  if (sizes?.small?.mediaUrl && sizes.medium?.mediaUrl && sizes.large?.mediaUrl) {
    return {
      small: sizes.small.mediaUrl,
      medium: sizes.medium.mediaUrl,
      large: sizes.large.mediaUrl,
    };
  }

  const childSizes = post.children?.find((child) => child.sizes?.medium?.mediaUrl)?.sizes;
  if (childSizes?.small?.mediaUrl && childSizes.medium?.mediaUrl && childSizes.large?.mediaUrl) {
    return {
      small: childSizes.small.mediaUrl,
      medium: childSizes.medium.mediaUrl,
      large: childSizes.large.mediaUrl,
    };
  }

  // Last resort — Instagram CDN URLs expire; prefer skipping over broken images.
  const fallback = post.thumbnailUrl || post.mediaUrl;
  if (!fallback || fallback.includes("cdninstagram.com") || fallback.includes("fbcdn.net")) {
    return null;
  }

  return { small: fallback, medium: fallback, large: fallback };
}

function mapPost(post: BeholdPost): GalleryPost | null {
  if (post.visibility && post.visibility !== "visible") return null;

  const imageSrcSet = pickImageUrls(post);
  if (!imageSrcSet) return null;

  const caption = (post.prunedCaption || post.caption || "").trim();
  const alt = (post.altText || caption || "Publicação no Instagram").trim();

  return {
    id: post.id,
    permalink: post.permalink,
    caption,
    alt,
    imageUrl: imageSrcSet.medium,
    imageSrcSet,
    dominantColor: rgbToCss(post.colorPalette?.dominant),
    isVideo: post.mediaType === "VIDEO" || Boolean(post.isReel),
    isCarousel: post.mediaType === "CAROUSEL_ALBUM",
  };
}

function emptyGallery(username = "mavifeatelierverde"): InstagramGallery {
  return {
    username,
    profileUrl: `https://www.instagram.com/${username}/`,
    profilePictureUrl: null,
    posts: [],
    unavailable: true,
  };
}

function isFeedPayload(value: unknown): value is BeholdFeed {
  if (!value || typeof value !== "object") return false;
  const feed = value as BeholdFeed;
  return typeof feed.username === "string" && Array.isArray(feed.posts);
}

/**
 * Loads the Behold JSON feed with a long revalidation window.
 * Never throws — returns an unavailable gallery so the UI stays intact on free-plan limits.
 */
export async function fetchBeholdGallery(): Promise<InstagramGallery> {
  try {
    const response = await fetch(BEHOLD_FEED_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS, tags: ["behold-instagram"] },
    });

    if (!response.ok) {
      return emptyGallery();
    }

    const payload: unknown = await response.json();
    if (!isFeedPayload(payload)) {
      return emptyGallery();
    }

    const posts = payload.posts
      .slice(0, BEHOLD_POST_LIMIT)
      .map(mapPost)
      .filter((post): post is GalleryPost => post !== null)
      .slice(0, BEHOLD_POST_LIMIT);

    if (posts.length === 0) {
      return {
        ...emptyGallery(payload.username),
        profilePictureUrl: payload.profilePictureUrl ?? null,
      };
    }

    return {
      username: payload.username,
      profileUrl: `https://www.instagram.com/${payload.username}/`,
      profilePictureUrl: payload.profilePictureUrl ?? null,
      posts,
      unavailable: false,
    };
  } catch {
    return emptyGallery();
  }
}
