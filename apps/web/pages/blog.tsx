import Link from "next/link";
import groq from "groq";
import { client } from "@/lib/client";
import { getAllPosts } from "@/lib/api";

import { inter, basierSquare } from "@/fonts/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import clsx from "clsx";
import styles from "@/styles/Blog.module.scss";

export default function Blog({ posts }) {
  return (
    <div className={clsx(styles.Blog, inter.variable, basierSquare.variable)}>
      <Navbar changed={true} />
      <div className={styles.Blog__container}></div>
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
