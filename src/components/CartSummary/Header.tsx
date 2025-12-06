import { FC } from "react";

interface Props {
  close: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Header: FC<Props> = ({ close }) => {
  return (
    <div className="px-8 text-2xl py-4 z-40 bg-white flex justify-between border-b-[1px] border-solid border-gray-100 shadow-xs">
      <p>Your Cart</p>
      <button
        type="button"
        className="bg-none outline-none border-none cursor-pointer"
        onClick={close}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
