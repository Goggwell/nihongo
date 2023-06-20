import Link from "next/link";
import groq from "groq";
import { client } from "@/lib/client";

import { inter, basierSquare } from "@/fonts/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import clsx from "clsx";
import styles from "@/styles/Blog.module.scss";
import { useEffect } from "react";

export interface IPost {
  _id?: string;
  title?: string;
  slug?: {
    _type: "slug";
    current: string;
  };
  publishedAt?: string;
}

export default function Blog({ posts }) {
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className={clsx(styles.Blog, inter.variable, basierSquare.variable)}>
      <Navbar changed={true} />
      <div className={styles.Blog__container}>
        {posts.length > 0 &&
          posts.map(
            ({ _id, title, slug, publishedAt = "" }: IPost) =>
              slug && (
                <li key={_id}>
                  <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                    {title}
                  </Link>{" "}
                  ({new Date(publishedAt).toDateString()})
                </li>
              )
          )}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}
