import { useState } from "react";
import { IAnnouncement } from "@/lib/types";

import Button from "@/components/Button";
import CrossIcon from "@/icons/CrossIcon";

import clsx from "clsx";
import styles from "./Announcement.module.scss";

const Announcement = ({ description = "", caveat = "" }: IAnnouncement) => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div className={clsx(styles.Announcement, isClosed && styles.closed)}>
      <span>
        <b>
          {description} {caveat && "*"}
        </b>
        {caveat && <i>* {caveat}</i>}
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
