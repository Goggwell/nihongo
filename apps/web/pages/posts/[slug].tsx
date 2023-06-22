import { GetStaticProps } from "next";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { inter, basierSquare } from "@/fonts/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Date from "@/components/Date";
import { RichTextComponent } from "@/components/RichTextComponent";

import { IPost, IPosts } from "@/lib/types";
import { getAllPostsSlugs, getPostAndMorePosts } from "@/lib/api";

import clsx from "clsx";
import styles from "@/styles/Post.module.scss";

interface PageProps {
  post: IPost;
  morePosts: IPosts;
}

export default function Post(props: PageProps) {
  const { post, morePosts } = props;

  return (
    <div className={clsx(styles.Post, inter.variable, basierSquare.variable)}>
      <Navbar changed={true} />
      <div className={styles.Post__container}>
        <div className={styles.Post__header}>
          <picture className={styles["Post__header--image"]}>
            <Image
              src={post.coverImage.picture}
              alt={post.title}
              fill={true}
              placeholder="blur"
              blurDataURL={post.coverImage.hash}
            />
          </picture>
          <h1 className={styles.Post__title}>{post.title}</h1>
          <div className={styles["Post__author--container"]}>
            <picture className={styles["Post__author__image"]}>
              <Image
                src={post.author.picture}
                alt={post.author.name}
                fill={true}
                placeholder="blur"
                blurDataURL={post.author.hash}
              />
            </picture>
            <div className={styles["Post__author"]}>
              <span className={styles["name"]}>{post.author.name}</span>
              <Date date={post.date} />
            </div>
          </div>
        </div>
        <div className={styles.Post__content}>
          <PortableText value={post.body} components={RichTextComponent} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const { params = {} } = ctx;
  const { post, morePosts } = await getPostAndMorePosts(params.slug);

  if (typeof params.slug !== "string" || !post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      morePosts,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: "blocking",
  };
};
