import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

export interface IButton {
  children?: ReactNode | JSX.Element;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Button = ({ children, className, size = "md" }: IButton) => {
  return <button className={clsx(styles.Button, className)}>{children}</button>;
};

export default Button;
