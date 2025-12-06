import { FC, PropsWithChildren, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface Props
  extends PropsWithChildren,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  className?: string;
}

const Button: FC<Props> = ({ className, children, ...props }) => {
  return (
    <button
      type="button"
      className={clsx(
        "bg-[var(--color-primary)] hover:opacity-95 text-[var(--color-on-text)] outline-none border-none cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
