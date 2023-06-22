import { useEffect } from "react";
import { GetStaticProps } from "next";
import { IPost, IPosts } from "@/lib/types";
import { getAllPostsSlugs, getPostAndMorePosts } from "@/lib/api";
import styles from "@/styles/Blog.module.scss";

interface PageProps {
  post: IPost;
  morePosts: IPosts;
}

export default function Post(props: PageProps) {
  const { post, morePosts } = props;

  useEffect(() => {
    console.log(post);
    console.log(morePosts);
  }, [post, morePosts]);

  return (
    <div>
      <h1>Howdy</h1>
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
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: "blocking",
  };
};
