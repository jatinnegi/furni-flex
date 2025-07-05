import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface ParagraphProps extends PropsWithChildren {
  className?: string;
}

const Paragraph1: FC<ParagraphProps> = ({ children, className }) => (
  <p className={clsx("text-base", className)}>{children}</p>
);

const Paragraph2: FC<ParagraphProps> = ({ children, className }) => (
  <p className={clsx("text-sm", className)}>{children}</p>
);

export { Paragraph1, Paragraph2 };
