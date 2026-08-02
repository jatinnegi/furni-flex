import { FC, JSX, useMemo } from "react";

interface Props {
  rating: number;
  totalRatings: number;
  height?: number;
  width?: number;
}

const Ratings: FC<Props> = ({
  rating,
  totalRatings,
  height = 16,
  width = 16,
}) => {
  const ReviewStars: JSX.Element[] = useMemo(
    () => generateUI(rating, height, width),
    [rating]
  );

  return (
    <div className="relative my-1 flex gap-2 items-center -z-10">
      <div className="flex gap-0.5">{ReviewStars}</div>
      {totalRatings ? (
        <p className="text-light text-sm">({totalRatings})</p>
      ) : (
        <></>
      )}
    </div>
  );
};

const generateUI = (
  rating: number,
  height: number,
  width: number
): JSX.Element[] => {
  const ratingStars: JSX.Element[] = [];
  const lowerRating: number = Math.floor(rating);
  const upperRating: number = Math.ceil(rating);

  for (let i = 1; i <= 5; i++) {
    let filledPercentage = 0;

    if (lowerRating < i && upperRating >= i) {
      const diff = rating - lowerRating;
      filledPercentage = diff * 100;
    } else if (rating >= i) {
      filledPercentage = 100;
    } else {
      filledPercentage = 0;
    }

    ratingStars.push(
      <div
        key={i}
        className="relative"
        style={{
          height,
          width,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="absolute top-0 left-0 h-full w-full"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            className="fill-gray-300"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="absolute top-0 left-0 h-full w-full"
          style={{
            clipPath: `inset(0 ${100 - filledPercentage}% 0 0)`,
          }}
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            className="fill-[var(--color-primary)]"
          />
        </svg>
      </div>
    );
  }
  return ratingStars;
};

export default Ratings;
