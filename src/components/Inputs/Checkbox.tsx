"use client";
import { FC, useState } from "react";
import clsx from "clsx";

interface Props {
  label: string;
}

const Checkbox: FC<Props> = ({ label }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <button
      type="button"
      className="flex items-center gap-2 outline-none border-none bg-none"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsChecked(!isChecked);
      }}
    >
      <span
        className={clsx(
          isChecked ? "bg-[var(--color-primary)]/90" : "bg-none",
          "h-3.5 w-3.5 p-[1px] rounded-xs outline-none border-[1px] border-solid border-[var(--color-primary)]/30"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="#FFF"
          className="h-full w-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </span>
      <p>{label}</p>
    </button>
  );
};

export default Checkbox;
