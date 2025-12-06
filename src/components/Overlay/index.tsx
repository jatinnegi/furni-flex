import { FC, PropsWithChildren, useEffect, useRef } from "react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  active: boolean;
  handleClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Overlay: FC<Props> = ({ active, handleClose, children }) => {
  const initialLoad = useRef<boolean>(false);

  useEffect(() => {
    if (!initialLoad.current) {
      initialLoad.current = true;
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  return (
    <>
      <div
        className={clsx(
          !initialLoad.current
            ? "opacity-0 pointer-events-none"
            : active
              ? "active-overlay"
              : "in-active-overlay",
          "fixed top-0 left-0 h-full w-full bg-black/30 z-30",
        )}
        onClick={handleClose}
      />
      {children}
    </>
  );
};

export default Overlay;
