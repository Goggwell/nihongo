import { useState } from "react";

import Link from "next/link";

import Button from "@/components/Button";
import TRArrow from "@/components/Icons/TRArrow";
import VideoIcon from "@/components/Icons/VideoIcon";
import CrossIcon from "@/components/Icons/CrossIcon";

import clsx from "clsx";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  return (
    <div className={styles.Home}>
      <header className={styles.Home__header}>
        <Button
          className={clsx(
            styles["Home__video-btn"],
            isHeadingVisible && styles["is-hidden"]
          )}
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
              styles.Home__heading,
              !isHeadingVisible && styles["is-hidden"]
            )}
          >
            <h1>
              Nihon<b>GO!</b>
            </h1>
            <p>Experience Japan, one word at a time.</p>
            <div className={styles.Home__actions}>
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
      </header>
    </div>
  );
}
