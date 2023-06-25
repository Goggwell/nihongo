import Image from "next/image";
import Link from "next/link";

import { useNextSanityImage } from "next-sanity-image";
import { ResolvedSanityImage } from "@sanity/asset-utils";

import { client } from "@/lib/client";

import styles from "./RichTextComponent.module.scss";

export const RichTextComponent = {
  types: {
    image: ({ value }: { value: ResolvedSanityImage }) => {
      const imageProps = useNextSanityImage(client, value);

      return (
        <Image
          {...imageProps}
          alt="image"
          style={{ maxWidth: "100%", height: "auto" }}
          className={styles.RichText__img}
          placeholder="blur"
          blurDataURL={value.asset.metadata.lqip}
        />
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className={styles.RichText__ul}>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className={styles.RichText__ol}>{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className={styles.RichText__h1}>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className={styles.RichText__h2}>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className={styles.RichText__h3}>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className={styles.RichText__h4}>{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className={styles.RichText__h5}>{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className={styles.RichText__h6}>{children}</h6>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className={styles.RichText__blockquote}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link href={value.href} rel={rel} className={styles.RichText__link}>
          {children}
        </Link>
      );
    },
  },
};
