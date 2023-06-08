import { useState } from "react";

import Link from "next/link";

import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

import TRArrow from "@/components/Icons/TRArrow";
import VideoIcon from "@/components/Icons/VideoIcon";
import CrossIcon from "@/components/Icons/CrossIcon";

import clsx from "clsx";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  return (
    <div className={styles.Home}>
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
            autoPlay={isHeadingVisible}
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
                <Link href="/about">
                  <Button className={styles.Home__button}>
                    <span>About us</span>
                    <TRArrow />
                  </Button>
                </Link>
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
    </div>
  );
}
