export type InstagramPost = {
  permalink: string;
  caption: string;
  imageUrl: string;
  isVideo: boolean;
};

export type InstagramProfile = {
  username: string;
  fullName: string;
  profileUrl: string;
  isPrivate: boolean;
  posts: InstagramPost[];
};

type InstagramTimelineNode = {
  shortcode: string;
  display_url: string;
  is_video: boolean;
  edge_media_to_caption?: {
    edges: Array<{ node: { text: string } }>;
  };
};

type InstagramProfileResponse = {
  data?: {
    user?: {
      username: string;
      full_name: string;
      is_private: boolean;
      edge_owner_to_timeline_media?: {
        edges: Array<{ node: InstagramTimelineNode }>;
      };
    };
  };
};

const INSTAGRAM_APP_ID = "936619743392459";
const POST_LIMIT = 3;

function mapPost(node: InstagramTimelineNode): InstagramPost {
  const caption = node.edge_media_to_caption?.edges[0]?.node.text ?? "";
  return {
    permalink: `https://www.instagram.com/p/${node.shortcode}/`,
    caption,
    imageUrl: node.display_url,
    isVideo: node.is_video,
  };
}

export async function fetchInstagramProfile(username: string): Promise<InstagramProfile> {
  const profileUrl = `https://www.instagram.com/${username}/`;

  try {
    const response = await fetch(
      `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(username)}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "X-IG-App-ID": INSTAGRAM_APP_ID,
          Accept: "*/*",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return { username, fullName: username, profileUrl, isPrivate: true, posts: [] };
    }

    const data = (await response.json()) as InstagramProfileResponse;
    const user = data.data?.user;

    if (!user) {
      return { username, fullName: username, profileUrl, isPrivate: true, posts: [] };
    }

    const posts =
      user.edge_owner_to_timeline_media?.edges
        .slice(0, POST_LIMIT)
        .map(({ node }) => mapPost(node)) ?? [];

    return {
      username: user.username,
      fullName: user.full_name,
      profileUrl,
      isPrivate: user.is_private,
      posts,
    };
  } catch {
    return { username, fullName: username, profileUrl, isPrivate: true, posts: [] };
  }
}
