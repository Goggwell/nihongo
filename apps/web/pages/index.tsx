import { useState } from "react";

import { Inter } from "next/font/google";

import Link from "next/link";
import Image from "next/image";

import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import TRArrow from "@/components/Icons/TRArrow";
import VideoIcon from "@/components/Icons/VideoIcon";
import CrossIcon from "@/components/Icons/CrossIcon";

import moto from "../public/moto.webp";

import clsx from "clsx";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  return (
    <div className={clsx(styles.Home, inter.className)}>
      <Navbar hidden={!isHeadingVisible} />
      <header className={styles.Home__header}>
        <Button
          className={clsx(
            styles["Home__video-btn"],
            isHeadingVisible && styles["is-hidden"]
          )}
          isRound={true}
          onClick={() => setIsHeadingVisible(true)}
        >
          <CrossIcon />
        </Button>
        <div
          className={clsx(
            styles["Home__video--container"],
            !isHeadingVisible && styles["is-visible"]
          )}
        >
          <div
            className={clsx(
              styles["Home__video--overlay"],
              !isHeadingVisible && styles["is-hidden"]
            )}
          />
          <video
            muted={isHeadingVisible}
            loop={isHeadingVisible}
            controls={!isHeadingVisible}
            className={clsx(
              styles.Home__video,
              !isHeadingVisible && styles["playable"]
            )}
          >
            <source src="/bg.webm" type="video/webm" />
          </video>
        </div>
        <div className={styles.Home__container}>
          <div
            className={clsx(
              styles.Home__title,
              !isHeadingVisible && styles["is-hidden"]
            )}
          >
            <div className={styles["Home__title--text"]}>
              <h1>
                Experience <i>Japan</i>{" "}
                <em>
                  one <i>word</i> at a time
                </em>
              </h1>
              <div className={styles["Home__title--actions"]}>
                <Button
                  className={clsx(styles.Home__button, styles["video"])}
                  onClick={() => setIsHeadingVisible(false)}
                >
                  <span>Watch video</span>
                  <VideoIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        className={clsx(styles.Home__section, styles["Home__section--promo"])}
      >
        <div className={styles.Home__container}></div>
      </section>
      <section
        className={clsx(
          styles.Home__section,
          styles["Home__section--strengths"]
        )}
      >
        <div className={clsx(styles.Home__container, styles.section)}>
          <h2 className={styles["Home__section--title"]}>
            Lima karakteristik kebanggaan NihonGO!
          </h2>
          <ul className={clsx(styles["Home__section--list"], styles.strengths)}>
            <li className={styles["Home__section--list__item"]}>
              <i></i>
              <span>
                Sekolah bahasa di Jakarta dengan guru Native Jepang trilingual
                (Bahasa Jepang, English, Indonesian)
              </span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <i></i>
              <span>Sedia kelas Online dan Offline</span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <i></i>
              <span>
                Siap membantu anda dengan konsultasi untuk kerja atau
                melanjutkan sekolah di Jepang
              </span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <i></i>
              <span>
                Kita ada koneksi di Jepang untuk membantu anda mencapai impian
                kerja atau belajar di Jepang
              </span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <i></i>
              <span>
                Kita akan membantu anda langkah demi langkah sampai tinggal di
                Jepang
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section
        className={clsx(styles.Home__section, styles["Home__section--staff"])}
      >
        <div className={clsx(styles.Home__container, styles.section)}>
          <h2 className={styles["Home__section--title"]}>
            Teacher / Staff Introduction
          </h2>
          <ul className={clsx(styles["Home__section--list"], styles.staff)}>
            <li className={styles["Home__section--list__item"]}>
              <picture className={styles.image}>
                <Image
                  src={moto}
                  alt="Motohisa Katayama"
                  fill={true}
                  placeholder="blur"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </picture>
              <span className={styles.name}>Denielsen Paulus</span>
              <span className={styles.role}>Head of School</span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <picture className={styles.image}>
                <Image
                  src={moto}
                  alt="Motohisa Katayama"
                  fill={true}
                  placeholder="blur"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </picture>
              <span className={styles.name}>Motohisa Katayama</span>
              <span className={styles.role}>Teacher</span>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
