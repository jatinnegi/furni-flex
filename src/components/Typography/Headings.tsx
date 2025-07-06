import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface HeadingProps extends PropsWithChildren {
  className?: string;
}

const Heading1: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="text-3xl md:text-6xl">{children}</h1>
);

const Heading2: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="text-xl md:text-4xl">{children}</h1>
);

const Heading3: FC<HeadingProps> = ({ children, className }) => (
  <h4 className={clsx(className, "text-lg md:text-2xl")}>{children}</h4>
);

const Heading4: FC<HeadingProps> = ({ children, className }) => (
  <h4 className={clsx(className, "text-base md:text-lg")}>{children}</h4>
);

export { Heading1, Heading2, Heading3, Heading4 };
