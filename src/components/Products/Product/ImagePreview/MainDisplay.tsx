"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon360 from "@/components/Icons/360";
import clsx from "clsx";

const INNER_SQUARE_SIZE = 350;
const OUTER_SQUARE_SIZE = 600;

interface ImageMagnifyProps extends Coordinates {
  active: boolean;
}

interface Image360Props extends Coordinates {
  active: boolean;
  current: number;
  displayMessage: boolean;
  max: number;
}

const MainDisplay = () => {
  const isImage360 = true;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragStartRef = useRef<number | null>(null);

  const [image360, setImage360] = useState<Image360Props>({
    active: false,
    current: 1,
    max: 32,
    displayMessage: true,
    x: 0,
    y: 0,
  });
  const IMG_URL = `/image/products/helm-sofa/360/helm-sofa-360-deg-${image360.current}.webp`;

  const [escapeStateActive, setEscapeStateActive] = useState<boolean>(false);
  const [imageMagnifier, setImageMagnifier] = useState<ImageMagnifyProps>({
    active: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleKeyup(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setEscapeStateActive(true);
      }
    }

    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  const updateMagnifierCoordinates = (
    e: React.MouseEvent<HTMLDivElement>,
    active: boolean
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const maxXCoordinate = rect.width - INNER_SQUARE_SIZE;
    const maxYCoordinate = rect.height - INNER_SQUARE_SIZE;

    const x = Math.max(
      0,
      Math.min(maxXCoordinate, mouseX - INNER_SQUARE_SIZE / 2)
    );
    const y = Math.max(
      0,
      Math.min(maxYCoordinate, mouseY - INNER_SQUARE_SIZE / 2)
    );

    setImageMagnifier({ ...imageMagnifier, active, x, y });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setImage360({
      ...image360,
      active: true,
      displayMessage: false,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setImage360({
      ...image360,
      active: false,
      displayMessage: true,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    updateMagnifierCoordinates(e, true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isImage360 && image360.active) {
      if (dragStartRef.current === null) {
        dragStartRef.current = e.clientX;
        return;
      }

      const currentX = e.clientX;
      const diff = currentX - image360.x;
      const sensitivity = 5; // User must move 5px to change 1 frame

      if (Math.abs(diff) >= sensitivity) {
        const direction = diff > 0 ? 1 : -1;
        const framesToMove = Math.floor(Math.abs(diff) / sensitivity);
        let newCurrent = image360.current + direction * framesToMove;
        const max = image360.max;

        if (newCurrent > max) {
          newCurrent = newCurrent % max;
          if (newCurrent === 0) {
            newCurrent = max;
          }
        } else if (newCurrent < 1) {
          newCurrent = max - (Math.abs(newCurrent) % max);
        }

        setImage360((prev) => ({
          ...prev,
          current: newCurrent,
          displayMessage: false,
          x: currentX,
          y: e.clientY,
        }));
      }
    } else {
      updateMagnifierCoordinates(e, true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    updateMagnifierCoordinates(e, false);
    setEscapeStateActive(false);
    setImage360({ ...image360, displayMessage: true });
  };

  const zoomRatio = OUTER_SQUARE_SIZE / INNER_SQUARE_SIZE;

  const backgroundPositionX = -imageMagnifier.x * zoomRatio;
  const backgroundPositionY = -imageMagnifier.y * zoomRatio;

  const containerWidth = containerRef.current?.offsetWidth || 0;
  const containerHeight = containerRef.current?.offsetHeight || 0;

  const magnifierActive =
    imageMagnifier.active && !escapeStateActive && !isImage360;

  return (
    <div className="relative w-full aspect-square" ref={containerRef}>
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full cursor-pointer"
      >
        {magnifierActive ? (
          <div
            className="relative z-50 aspect-square bg-blue-300/30"
            style={{
              top: `${imageMagnifier.y}px`,
              left: `${imageMagnifier.x}px`,
              width: `${INNER_SQUARE_SIZE}px`,
            }}
          />
        ) : (
          <></>
        )}
        <img src={IMG_URL} alt="helm-sofa" draggable={false} />
        {isImage360 ? (
          <div
            className={clsx(
              image360.displayMessage ? "opacity-100" : "opacity-0",
              "absolute bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-2 transition-all ease-linear duration-75 scale-75 md:scale-90 lg:scale-100 select-none"
            )}
          >
            <Icon360 />
            <p className="text-xs uppercase tracking-widest font-light">
              Drag to Rotate
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      {magnifierActive ? (
        <div
          className="hidden lg:block absolute aspect-square top-0 left-full ml-4 border-2 border-solid border-gray-300 shadow-2xl z-50 overflow-hidden bg-white"
          style={{
            width: `${OUTER_SQUARE_SIZE}px`,
            backgroundImage: `url('${IMG_URL}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${containerWidth * zoomRatio}px ${
              containerHeight * zoomRatio
            }px`,
            backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`,
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainDisplay;
