import { FC } from "react";
import clsx from "clsx";

interface SlidingArrowsProps {
  slide: number;
  total: number;
  next: () => void;
  prev: () => void;
  className?: string;
}

const SlidingArrows: FC<SlidingArrowsProps> = ({
  slide,
  total,
  next,
  prev,
  className = "",
}) => {
  return (
    <ul
      className={clsx(
        className,
        "max-w-[450px] list-none md:flex items-center gap-16 font-thin text-white"
      )}
    >
      <li>
        <button type="button" onClick={prev} className="cursor-pointer">
          <svg
            width="42"
            height="40"
            viewBox="0 0 42 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42 20H2.4325" stroke="white" />
            <path
              d="M10.7617 29.3714C8.43502 24.2507 6.59172 22.101 1.99922 20.0142C6.69422 17.7033 8.51662 15.5457 10.7617 10.6289"
              stroke="white"
            />
          </svg>
        </button>
      </li>
      <li>
        {slide}/{total}
      </li>
      <li>
        <button type="button" onClick={next} className="cursor-pointer">
          <svg
            width="42"
            height="40"
            viewBox="0 0 42 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 20H39.5675" stroke="white" />
            <path
              d="M31.2383 29.3714C33.565 24.2507 35.4083 22.101 40.0008 20.0142C35.3058 17.7033 33.4834 15.5457 31.2383 10.6289"
              stroke="white"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default SlidingArrows;
