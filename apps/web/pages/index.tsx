import Link from "next/link";

import Button from "@/components/Button";
import TRArrow from "@/components/Icons/TRArrow";

import styles from "@/styles/Home.module.scss";

export default function Web() {
  return (
    <div className={styles.Home}>
      <header className={styles.Home__header}>
        <div className={styles["Home__video--container"]}>
          <div className={styles["Home__video--overlay"]} />
          <video
            muted={true}
            autoPlay={true}
            loop={true}
            className={styles.Home__video}
          >
            <source src="/bg.webm" type="video/webm" />
          </video>
        </div>
        <div className={styles.Home__heading}>
          <h1>
            Nihon<b>GO!</b>
          </h1>
          <p>Experience Japan, one word at a time.</p>
          <Link href="/about">
            <Button className={styles.Home__button}>
              <span>About us</span>
              <TRArrow />
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}
