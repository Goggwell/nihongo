import { ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

export interface IButton {
  children?: ReactNode | JSX.Element;
  className?: string;
  isRound?: Boolean;
  size?: "sm" | "md" | "lg";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  className,
  isRound,
  size = "md",
  onClick,
}: IButton) => {
  return (
    <button
      className={clsx(styles.Button, isRound && styles["is-round"], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;