import { FC } from "react";
import IButtonProps from "./Button.props";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";

export const Button: FC<IButtonProps> = ({
  children,
  appearance,
  arrow = "none",
  className,
  ...otherProps
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...otherProps}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
