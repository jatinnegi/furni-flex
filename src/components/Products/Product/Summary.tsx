import Ratings from "@/components/Ratings";
import CartIcon from "@/components/Icons/Cart";

const colorOptions: string[] = [
  "#4f5263",
  "#6a604a",
  "#ffffff",
  "#dcdcdc",
  "#ece9e1",
];

const Summary = () => {
  return (
    <div className="flex flex-col gap-1 flex-1 px-[40px] py-[45px]">
      <h1 className="text-xl uppercase font-medium">Helm Sofa</h1>
      <div className="flex gap-2 items-center">
        <i className="text-sm text-[#7F534B]">Tokyo, Japan</i>
        <span>|</span>
        <Ratings rating={3.5} totalRatings={28} />
      </div>
      <p className="text-lg">$4,299</p>
      <div className="mt-4">
        <p className="text-base font-light">
          Solid walnut frame. Plush, high-resiliency foam. This custom
          upholstered sofa has perfected the balance of comfort and design.
        </p>
        <div className="w-full p-6 mt-6 bg-gray-100 border-t-1 border-t-solid border-[#7F534B]">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Color</p>
            <div className="flex gap-2">
              {colorOptions.map((background: string) => (
                <button
                  key={background}
                  type="button"
                  className="h-10 w-10 cursor-pointer border-[1px] border-solid border-gray-100/95"
                  style={{
                    background,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button
              type="button"
              className="bg-[#7F534B] text-white rounded-md w-full h-10 cursor-pointer flex items-center justify-center gap-2 text-sm"
            >
              <span>Add To Cart</span>
              <div className="h-5 w-5">
                <CartIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
