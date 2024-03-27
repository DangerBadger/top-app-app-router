import { FC } from "react";
import ITagProps from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag: FC<ITagProps> = ({
  size = "m",
  children,
  color = "ghost",
  href,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.m]: size === "m",
        [styles.l]: size === "l",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...otherProps}
    >
      {href ? (
        <a href={href} target="_blank">
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};
