import { format, parseISO } from "date-fns";

import clsx from "clsx";
import styles from "./Date.module.scss";

const Date = ({ date, className }: { date: string; className?: string }) => {
  if (!date) return null;

  const parsedDate = parseISO(date);

  return (
    <time className={clsx(styles.Date, className)} dateTime={date}>
      {format(parsedDate, "LLLL d, yyyy")}
    </time>
  );
};

export default Date;
