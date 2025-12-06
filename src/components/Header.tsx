import { FC } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  largeTitle?: boolean;
}

const Header: FC<Props> = ({ title, largeTitle }) => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="absolute h-[1px] w-screen top-1/2 -translate-y-1/2 bg-gray-200 z-[1]" />
      <p
        className={clsx(
          "text-center z-[2] px-16 bg-white font-light",
          largeTitle === true ? "text-3xl text-black" : "text-lg text-black/65"
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
