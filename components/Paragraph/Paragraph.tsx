import { FC } from "react";
import IParagraphProps from "./Paragraph.props";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph: FC<IParagraphProps> = ({
  children,
  size = "m",
  className,
  ...props
}) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
