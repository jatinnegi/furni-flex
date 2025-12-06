import Link from "next/link";
import CouponIcon from "@/components/Icons/Coupon";
import CloseIcon from "@/components/Icons/Close";

const CheckoutSummary = () => {
  return (
    <section className="sticky self-start top-36 right-0 w-1/3 py-6 px-8 bg-white border-solid border-[1px] border-gray-50/90 shadow-sm">
      <h3 className="text-xl mb-4">Checkout Summary</h3>
      <div className="flex flex-col text-sm">
        <div className="flex justify-between bg-gray-50 py-2.5 px-3">
          <p>Item Total</p> <p>$8,997</p>
        </div>
        <div className="flex justify-between bg-white py-2.5 px-3">
          <p>Taxes</p> <p>$1,619.46</p>
        </div>
        <div className="flex justify-between bg-gray-50 py-2.5 px-3">
          <p>Shipping</p> <p>$1,050</p>
        </div>
        <div className="flex justify-between bg-white py-2.5 px-3">
          <div className="flex items-center gap-1.5">
            <p>Discount</p>
            <div className="h-2.5 w-2.5">
              <CouponIcon />
            </div>
          </div>{" "}
          <p>-$1,666.46</p>
        </div>
        <div className="w-full mt-3 border-dashed border-gray-300 border-[1px] flex items-start justify-between p-3">
          <div className="flex flex-col gap-1">
            <p className="text-lg">PMNVD2025 is applied</p>
            <p className="text-xs text-[var(--color-text)] font-light">
              Flat 10% off on items in your cart
            </p>
          </div>
          <button
            type="button"
            className="h-5 w-5 text-gray-600 cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>
        {/* <div className="w-full mt-3 flex items-center justify-between">
            <input
              type="text"
              placeholder="Enter Coupon"
              className="h-full flex-1 border-solid border-[1px] border-gray-300 outline-none py-3 px-3"
            />
            <button type="button" className="bg-[#141414] text-white py-3 px-6">
              Apply
            </button>
          </div> */}
        <div className="flex justify-between mt-4">
          <p className="text-lg">Total Payable</p>{" "}
          <p className="text-base text-[#05AD34] font-medium">$10,000</p>
        </div>
      </div>
      <Link
        href="/checkout"
        className="mt-4 block py-2.5 w-full bg-[var(--color-primary-darker)] text-[var(--color-on-text)] transition-all ease-in duration-150 text-center rounded-sm text-base"
      >
        Checkout Now
      </Link>
    </section>
  );
};

export default CheckoutSummary;
