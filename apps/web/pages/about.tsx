import { getAbout } from "@/lib/api";

import { inter, basierSquare } from "@/fonts/fonts";

import { PortableText } from "@portabletext/react";
import ReactPlayer from "react-player/youtube";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RichTextComponent } from "@/components/RichTextComponent";

import { IAbout } from "@/lib/types";

import clsx from "clsx";
import styles from "@/styles/About.module.scss";

export default function About({ url, body }: IAbout) {
  return (
    <div className={clsx(styles.About, inter.variable, basierSquare.variable)}>
      <Navbar changed={true} opaque={true} />
      <div className={styles.About__container}>
        <div className={styles.About__heading}>
          <h1 className={styles.About__title}>About Us</h1>
          <div className={styles.About__info}>
            <h3 className={styles.motto}>
              "Experience <b>Japan</b>, one <b>word</b> at a time."
            </h3>
            <div className={styles.video}>
              <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
        </div>
        <div className={styles.About__description}>
          <PortableText value={body} components={RichTextComponent} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { url, body } = await getAbout();
  return {
    props: {
      url,
      body,
    },
    revalidate: 60,
  };
}
