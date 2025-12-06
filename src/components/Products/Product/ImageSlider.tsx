import { FC, useRef, useEffect } from "react";
import Image from "next/image";
import { clsx } from "clsx";

interface Props {
  productName: string;
  images: ProductImageProps[];
  selectedImgId: number;
  selectPrevImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectNextImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  updateSelectedImg: (productImageId: number) => void;
}

const ImageSlider: FC<Props> = ({
  productName,
  images,
  selectedImgId,
  selectPrevImage,
  selectNextImage,
  updateSelectedImg,
}) => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current && selectedImgId) {
      const selectedButton = listRef.current.querySelector(
        `[data-image-id="${selectedImgId}"]`
      );

      if (selectedButton instanceof HTMLElement) {
        const container = listRef.current;
        const buttonTop = selectedButton.offsetTop;
        const buttonHeight = selectedButton.offsetHeight;
        const containerHeight = container.clientHeight;

        // Calculate the position to center the button in the container
        const targetScrollTop =
          buttonTop - containerHeight / 2 + buttonHeight / 2;

        // Smooth scroll within the container
        container.scrollTo({
          top: targetScrollTop,
          behavior: "smooth",
        });
      }
    }
  }, [selectedImgId]);

  return (
    <div className="max-w-28 w-1/3 flex flex-col gap-2">
      <button
        type="button"
        className="cursor-pointer block mx-auto border-none outline-none bg-none"
        onClick={selectPrevImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
      <ul
        ref={listRef}
        className="flex flex-col gap-2 h-[500px] overflow-hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        {images.map((image: ProductImageProps) => (
          <li key={image.id}>
            <button
              type="button"
              data-image-id={image.id}
              className={clsx(
                image.id === selectedImgId
                  ? "border-[#7F534B90]"
                  : "border-[#FFFFFF]",
                "cursor-pointer relative w-full aspect-square bg-none outline-none rounded-sm overflow-hidden border-1 border-solid"
              )}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                e.preventDefault();
                updateSelectedImg(image.id);
              }}
            >
              <Image
                src={image.href}
                alt={`${productName}-${image.id}`}
                layout="fill"
                objectFit="contain"
                loading="lazy"
                className="scale-90"
              />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="cursor-pointer block mx-auto border-none outline-none bg-none"
        onClick={selectNextImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;
