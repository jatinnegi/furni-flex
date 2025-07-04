import { FC, PropsWithChildren } from "react";
import NextLink from "next/link";

interface Props extends PropsWithChildren {
  href: string;
}

const Link: FC<Props> = ({ href, children }) => {
  return (
    <NextLink
      href={href}
      className="flex items-center justify-center w-40 md:w-48 h-10 md:h-14
      bg-white hover:bg-[#141414] text-[#141414] hover:text-white
      cursor-pointer transition duration-150 ease-in tracking-widest text-sm md:text-base"
    >
      {children}
    </NextLink>
  );
};

export default Link;
