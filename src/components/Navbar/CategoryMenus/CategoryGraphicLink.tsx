import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  aspectRatio: string;
}

const CategoryGraphicLink: FC<Props> = ({
  href,
  imgSrc,
  imgAlt,
  title,
  aspectRatio,
}) => {
  const [focusAnimation, setFocusAnimation] = useState<boolean>(false);

  return (
    <Link
      href={href}
      className="flex flex-col gap-2"
      onMouseEnter={() => {
        setFocusAnimation(true);
      }}
      onMouseLeave={() => {
        setFocusAnimation(false);
      }}
    >
      <div className={clsx(aspectRatio, "relative h-80 overflow-hidden")}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className={clsx(
            focusAnimation ? "scale-105" : "scale-100",
            "transition-all linear duration-500"
          )}
        />
        <div
          className={clsx(
            focusAnimation ? "opacity-100" : "opacity-0",
            "w-full h-full absolute z-10 bg-black/10 transition-opacity linear duration-300"
          )}
        />
      </div>
      <div className="flex items-center gap-1">
        <div className="relative flex flex-col gap-1">
          <p className="text-xs font-[350]">{title}</p>
          <div
            className={clsx(
              focusAnimation ? "opacity-100" : "opacity-0",
              "absolute -bottom-1 h-[1px] w-full bg-[#D0D0D0] transition-opacity linear duration-300"
            )}
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx(
            focusAnimation ? "translate-x-0.5" : "translate-x-0",
            "h-3.5 w-3.5 transition linear duration-300"
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </Link>
  );
};

export default CategoryGraphicLink;
