import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
    _id,
    name,
    title,
    'date': publishedAt,
    excerpt,
    'slug': slug.current,
    'coverImage': mainImage,
    'author': author->{name, 'picture': image.asset->url},
`;

export async function getAllPosts() {
  const posts = await client.fetch(`
        *[_type == "post"] | order(publishedAt desc){
            ${postFields}
        }
    `);
  return getUniquePosts(posts);
}

export const urlForImage = (source: SanityImageSource) => {
  return imageUrlBuilder(client).image(source).auto("format").fit("max");
};
