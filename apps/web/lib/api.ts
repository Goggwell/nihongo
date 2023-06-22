import { client } from "./client";
import {
  allPostsQuery,
  allPostsSlugsQuery,
  postAndMorePostsQuery,
} from "./queries";

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

export async function getAllPosts() {
  const posts = await client.fetch(allPostsQuery);
  return getUniquePosts(posts);
}

export async function getAllPostsSlugs() {
  const slugs = await client.fetch<string[]>(allPostsSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function getPostAndMorePosts(slug: string | string[] | undefined) {
  return await client.fetch(postAndMorePostsQuery, { slug });
}
