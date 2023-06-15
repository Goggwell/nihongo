import { useState } from "react";
import clsx from "clsx";
import styles from "./Announcement.module.scss";
import Button from "@/components/Button";
import CrossIcon from "@/components/Icons/CrossIcon";

const Announcement = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div className={clsx(styles.Announcement, isClosed && styles.closed)}>
      <span>
        <b>First 50 students get 100% off the introduction course! *</b>
        <i>
          * You must participate in NS for 2 months, which costs{" "}
          <u>2.450.000 IDR</u>.
        </i>
      </span>
      <Button
        className={styles.Announcement__close}
        size="sm"
        type="transparent"
        isRound={true}
        onClick={() => setIsClosed(true)}
      >
        <CrossIcon />
      </Button>
    </div>
  );
};

export default Announcement;
