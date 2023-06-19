import { ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

export interface IButton {
  children?: ReactNode | JSX.Element;
  className?: string;
  isRound?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "filled" | "transparent";
  buttonType?: "button" | "reset" | "submit";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  className,
  isRound,
  size = "md",
  type = "transparent",
  buttonType = "button",
  disabled = false,
  onClick,
}: IButton) => {
  return (
    <button
      className={clsx(
        styles.Button,
        isRound && styles["is-round"],
        styles[size],
        styles[type],
        className
      )}
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
