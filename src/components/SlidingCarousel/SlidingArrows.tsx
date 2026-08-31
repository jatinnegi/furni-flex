import { FC } from "react";
import clsx from "clsx";

interface SlidingArrowsProps {
  slide: number;
  total: number;
  next: () => void;
  prev: () => void;
  dark?: boolean;
  className?: string;
  disablePrev?: boolean;
  disableNext?: boolean;
}

const SlidingArrows: FC<SlidingArrowsProps> = ({
  slide,
  total,
  next,
  prev,
  dark = false,
  className = "",
  disablePrev = false,
  disableNext = false,
}) => {
  const stroke = dark ? "black" : "white";

  return (
    <ul
      className={clsx(
        "max-w-[450px] list-none md:flex items-center gap-16 font-thin",
        dark ? "text-black" : "text-white",
        className,
      )}
    >
      <li>
        <button
          type="button"
          onClick={prev}
          disabled={disablePrev}
          aria-label="Previous slide"
          className={clsx(
            "transition-opacity duration-200",
            disablePrev ? "opacity-25 cursor-default" : "opacity-100 cursor-pointer",
          )}
        >
          <svg
            width="42"
            height="40"
            viewBox="0 0 42 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42 20H2.4325" stroke={stroke} />
            <path
              d="M10.7617 29.3714C8.43502 24.2507 6.59172 22.101 1.99922 20.0142C6.69422 17.7033 8.51662 15.5457 10.7617 10.6289"
              stroke={stroke}
            />
          </svg>
        </button>
      </li>
      {slide === 0 && total === 0 ? (
        <></>
      ) : (
        <li>
          {slide}/{total}
        </li>
      )}
      <li>
        <button
          type="button"
          onClick={next}
          disabled={disableNext}
          aria-label="Next slide"
          className={clsx(
            "transition-opacity duration-200",
            disableNext ? "opacity-25 cursor-default" : "opacity-100 cursor-pointer",
          )}
        >
          <svg
            width="42"
            height="40"
            viewBox="0 0 42 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 20H39.5675" stroke={stroke} />
            <path
              d="M31.2383 29.3714C33.565 24.2507 35.4083 22.101 40.0008 20.0142C35.3058 17.7033 33.4834 15.5457 31.2383 10.6289"
              stroke={stroke}
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default SlidingArrows;
