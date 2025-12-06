import { FC } from "react";
import Ratings from "@/components/Ratings";
import VerifiedIcon from "@/components/Icons/Verified";

interface Props {}

const ReviewItem: FC<Props> = ({}) => {
  return (
    <section className="relative border-solid border-[1px] border-gray-100/90 shadow-xs rounded-xl px-10 py-8 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-0.5">
          <p className="text-xl">John Doe</p>
          <p className="text-sm font-light mt-0.5 mb-2">31 March 2025</p>
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4">
              <VerifiedIcon />
            </div>
            <p className="text-sm font-medium text-[var(--color-primary)]">
              Verified Buyer
            </p>
          </div>
        </div>
        <Ratings rating={5} totalRatings={0} />
      </div>
      <p className="text-base font-light">
        I just received two of this chairs with the leather cushing and are
        absolutely great. It provides a tropical appearance without sacrifice
        elegance. They have good size, nice finish and impeccable details. The
        leather cushing is also great and make the chair even more confortable
        than it already is. Well packed in an eco friendly packaging. Just as
        described on the page. I would definitely buy again this chair!
      </p>
    </section>
  );
};

export default ReviewItem;
