import Link from "next/link";
import Image from "next/image";
import { getAllPosts, urlForImage } from "@/lib/api";

import { inter, basierSquare } from "@/fonts/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import clsx from "clsx";
import styles from "@/styles/Blog.module.scss";
import { useEffect } from "react";

export default function Blog({ posts }) {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  useEffect(() => {
    console.log(featuredPost);
  }, [posts]);

  return (
    <div className={clsx(styles.Blog, inter.variable, basierSquare.variable)}>
      <Navbar changed={true} />
      <div className={styles.Blog__container}>
        <h1 className={styles.Blog__title}>Blog</h1>
        <Link
          href="/posts/[slug]"
          as={`/posts/${featuredPost.slug}`}
          className={styles.Blog__featured}
        >
          <picture className={styles["Blog__featured--image"]}>
            <Image
              src={urlForImage(featuredPost.coverImage).url()}
              alt={featuredPost.title}
              fill={true}
              unoptimized={true}
            />
          </picture>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
