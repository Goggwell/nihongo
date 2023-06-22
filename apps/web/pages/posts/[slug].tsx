import { GetStaticProps } from "next";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";

import { client } from "@/lib/client";
import { IPost, IPosts } from "@/lib/types";
import { getAllPostsSlugs, getPostAndMorePosts } from "@/lib/api";

import styles from "@/styles/Blog.module.scss";
import { SanityImageSource } from "@sanity/asset-utils";

interface PageProps {
  post: IPost;
  morePosts: IPosts;
}

const placeholderImageComponent = ({ value }: { value: SanityImageSource }) => {
  const imageProps = useNextSanityImage(client, value);

  return (
    <Image
      {...imageProps}
      alt="image"
      placeholder="blur"
      blurDataURL={value.asset.metadata.lqip}
    />
  );
};

export default function Post(props: PageProps) {
  const { post, morePosts } = props;

  return (
    <div>
      <PortableText
        value={post.body}
        components={{ types: { image: placeholderImageComponent } }}
      />
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
