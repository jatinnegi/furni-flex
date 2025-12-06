import { Heading3 } from "@/components/Typography/Headings";
import Button from "@/components/Buttons/Button";
import ReviewItem from "./ReviewItem";
import Ratings from "@/components/Ratings";
import Header from "@/components/Header";

const Reviews = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <Header title="Customer Reviews" />
      <div className="py-8 w-full flex gap-3">
        <div className="w-3/12 min-w-64 sticky top-36 self-start">
          <header className="flex flex-col gap-0.5">
            <Heading3>Customer Reviews</Heading3>
            <div className="flex gap-2 items-center">
              <Ratings rating={4.6} totalRatings={0} height={18} width={18} />
              <p className="text-sm">4.6 out of 5</p>
            </div>
            <p className="font-light text-sm">37,810 reviews</p>
          </header>
          <ul className="mt-4 list-none flex flex-col gap-1">
            {[5, 4, 3, 2, 1].map((rating: number) => (
              <li key={rating} className="w-full flex items-center gap-2">
                <Ratings
                  rating={rating}
                  totalRatings={0}
                  height={14}
                  width={14}
                />
                <div className="h-2.5 flex-1 bg-gray-200">
                  <span
                    className="block bg-[var(--color-primary)] h-full"
                    style={{
                      width: `${rating * 15.75}%`,
                    }}
                  ></span>
                </div>
                <p className="font-light text-xs w-10 flex justify-start">
                  ({rating * 61})
                </p>
              </li>
            ))}
          </ul>
          <section className="mt-8">
            <h3 className="text-xl font-medium">Review this product</h3>
            <p className="text-sm text-gray-600">
              Share your thoughts with other customers
            </p>
            <Button className="mt-2 w-full py-2.5 rounded-md text-sm">
              Write a product review
            </Button>
          </section>
        </div>
        <ul className="flex-1 list-none flex flex-col gap-8">
          {[1, 2, 3, 4, 5].map((num: number) => (
            <li key={num}>
              <ReviewItem />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
