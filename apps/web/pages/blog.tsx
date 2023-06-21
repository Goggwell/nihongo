import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/api";

import { inter, basierSquare } from "@/fonts/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Date from "@/components/Date";

import { IPosts } from "@/lib/types";

import clsx from "clsx";
import styles from "@/styles/Blog.module.scss";

export default function Blog({ posts }: IPosts) {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

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
              src={featuredPost.coverImage.picture}
              alt={featuredPost.title}
              fill={true}
              placeholder="blur"
              blurDataURL={featuredPost.coverImage.hash}
            />
          </picture>
          <div className={styles["Blog__featured--info--container"]}>
            <div className={styles["Blog__featured--info"]}>
              <h2 className={styles["Blog__featured--title"]}>
                {featuredPost.title}
              </h2>
              <p className={styles["Blog__featured--excerpt"]}>
                {featuredPost.excerpt}
              </p>
              <div className={styles["Blog__featured--author--container"]}>
                <picture className={styles["Blog__featured--author__image"]}>
                  <Image
                    src={featuredPost.author.picture}
                    alt={featuredPost.author.name}
                    fill={true}
                    placeholder="blur"
                    blurDataURL={featuredPost.author.hash}
                  />
                </picture>
                <div className={styles["Blog__featured--author"]}>
                  <span className={styles["name"]}>
                    {featuredPost.author.name}
                  </span>
                  <Date date={featuredPost.date} />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className={styles["Blog__posts--container"]}>
          <ul className={styles.Blog__posts}>
            {otherPosts.length > 0 &&
              otherPosts.map((post) => (
                <li key={post.slug} className={styles.post}>
                  <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                    <div className={styles.post__body}>
                      <picture className={styles.post__image}>
                        <Image
                          src={post.coverImage.picture}
                          alt={post.title}
                          fill={true}
                          placeholder="blur"
                          blurDataURL={post.coverImage.hash}
                        />
                      </picture>
                      <div className={styles.post__title}>
                        <h3>{post.title}</h3>
                      </div>
                    </div>
                    <div className={styles.post__footer}>
                      <span>
                        {post.author.name} · <Date date={post.date} />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
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
