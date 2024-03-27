import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface IParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement> , HTMLParagraphElement> {
  children: ReactNode;
  size?: 's' | 'm' | 'l';
}

export default IParagraphProps;