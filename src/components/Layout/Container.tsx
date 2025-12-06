import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  className?: string;
}

const Container: FC<Props> = ({ className, children }) => {
  return (
    <div className={clsx("w-[98%] mx-auto max-w-[1600px] my-4", className)}>
      {children}
    </div>
  );
};

export default Container;
