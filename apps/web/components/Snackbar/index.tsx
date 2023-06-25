import { MouseEventHandler, ReactNode } from "react";

import Button from "@/components/Button";
import CrossIcon from "@/components/Icons/CrossIcon";

import clsx from "clsx";
import styles from "./Snackbar.module.scss";

export interface ISnackbar {
  children?: ReactNode | JSX.Element;
  className?: string;
  isError?: boolean;
  isSuccess?: boolean;
}

const Snackbar = ({
  children,
  className,
  isError = false,
  isSuccess = false,
}: ISnackbar) => {
  return (
    <div
      className={clsx(
        styles.Snackbar,
        isError && styles["is-error"],
        isSuccess && styles["is-success"],
        (isError || isSuccess) && styles["is-visible"],
        className
      )}
    >
      {/* <Button
        className={styles.Snackbar__close}
        type="transparent"
        isRound={true}
        size="sm"
        onClick={onClick}
      >
        <CrossIcon />
      </Button> */}
      {children}
    </div>
  );
};

export default Snackbar;
