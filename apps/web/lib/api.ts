import { client } from "./client";
import {
  allPostsQuery,
  allPostsSlugsQuery,
  postAndMorePostsQuery,
  announcementQuery,
  allAuthorsQuery,
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

export async function getAllAuthors() {
  const authors = await client.fetch(allAuthorsQuery);
  return authors;
}

export async function getAnnouncement() {
  const announcement = await client.fetch(announcementQuery);
  return announcement;
}
