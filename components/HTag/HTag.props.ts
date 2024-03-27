import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface IHTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadElement> {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}

export default IHTagProps;