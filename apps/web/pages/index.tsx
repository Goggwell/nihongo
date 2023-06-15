import { useState, useEffect } from "react";

import { inter, basierSquare } from "@/fonts/fonts";

import Link from "next/link";
import Image from "next/image";

import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import VideoIcon from "@/components/Icons/VideoIcon";
import CrossIcon from "@/components/Icons/CrossIcon";
import LanguageIcon from "@/components/Icons/LanguageIcon";
import InternetIcon from "@/components/Icons/InternetIcon";
import ChatIcon from "@/components/Icons/ChatIcon";
import ConnectionIcon from "@/components/Icons/ConnectionIcon";
import AcademicIcon from "@/components/Icons/AcademicIcon";

import moto from "../public/moto.webp";

import clsx from "clsx";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [isNavbarChanged, setIsNavbarChanged] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollPos(window.scrollY);

      if (scrollPos >= 80) {
        setIsNavbarChanged(true);
      } else {
        setIsNavbarChanged(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);

  return (
    <div className={clsx(styles.Home, inter.variable, basierSquare.variable)}>
      <Navbar hidden={!isHeadingVisible} changed={isNavbarChanged} />
      <header className={styles.Home__header}>
        <Button
          className={clsx(
            styles["Home__video-btn"],
            isHeadingVisible && styles["is-hidden"]
          )}
          type="filled"
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
        <div className={clsx(styles.Home__container, styles.heading)}>
          <div
            className={clsx(
              styles.Home__title,
              !isHeadingVisible && styles["is-hidden"]
            )}
          >
            <div className={styles["Home__title--text"]}>
              <h1>
                Experience <i>Japan</i> one <i>word</i> at a time
              </h1>
              <div className={styles["Home__title--actions"]}>
                <Button
                  className={clsx(styles.Home__button, styles["video"])}
                  size="lg"
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
              <i>
                <LanguageIcon />
              </i>
              <b>Trilingual</b>
              <span>
                Sekolah bahasa di Jakarta dengan guru Native Jepang trilingual
                (Bahasa Jepang, English, Indonesian)
              </span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <i>
                <InternetIcon />
              </i>
              <b>Online/Offline</b>
              <span>Sedia kelas Online dan Offline</span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <i>
                <ChatIcon />
              </i>
              <b>Konsultasi</b>
              <span>
                Siap membantu anda dengan konsultasi untuk kerja atau
                melanjutkan sekolah di Jepang
              </span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <i>
                <ConnectionIcon />
              </i>
              <b>Koneksi</b>
              <span>
                Kita ada koneksi di Jepang untuk membantu anda mencapai impian
                kerja atau belajar di Jepang
              </span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <i>
                <AcademicIcon />
              </i>
              <b>Membantu</b>
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
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </picture>
              <b className={styles.name}>Denielsen Paulus</b>
              <span className={styles.role}>Head of School</span>
            </li>
            <li className={styles["Home__section--list__item"]}>
              <picture className={styles.image}>
                <Image
                  src={moto}
                  alt="Motohisa Katayama"
                  fill={true}
                  placeholder="blur"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </picture>
              <b className={styles.name}>Motohisa Katayama</b>
              <span className={styles.role}>Teacher</span>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
