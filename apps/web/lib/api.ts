import { client } from "./client";

const getUniquePosts = (posts: any) => {
  const slugs = new Set();
  return posts.filter((post: any) => {
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
    'coverImage': {'picture': mainImage.asset->url, 'hash': mainImage.asset->metadata.lqip},
    'author': author->{name, 'picture': image.asset->url, 'hash': image.asset->metadata.lqip},
`;

export async function getAllPosts() {
  const posts = await client.fetch(`
        *[_type == "post"] | order(publishedAt desc){
            ${postFields}
        }
    `);
  return getUniquePosts(posts);
}
