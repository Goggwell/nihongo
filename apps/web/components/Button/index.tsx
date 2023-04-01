import { ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

export interface IButton {
  children?: ReactNode | JSX.Element;
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, size = "md", onClick }: IButton) => {
  return (
    <button className={clsx(styles.Button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
