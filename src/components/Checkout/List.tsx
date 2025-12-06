import Image from "next/image";
import CloseIcon from "@/components/Icons/Close";
import QuantityInput from "@/components/Inputs/Quantity";

const CheckoutList = () => {
  return (
    <table className="flex-1 block w-full">
      <thead className="block w-full">
        <tr className="flex w-full py-4">
          <th className="block w-6/12 text-left font-medium text-gray-700">
            Item
          </th>
          <th className="block w-3/12 text-left font-medium text-gray-700">
            Qty
          </th>
          <th className="block w-2/12 text-left font-medium text-gray-700">
            Unit Price
          </th>
          <th className="block w-1/12" />
        </tr>
      </thead>
      <tbody className="block w-full">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((num: number) => (
          <tr
            key={num}
            className="flex w-full border-t-[1px] border-b-[1px] border-solid border-gray-200 py-4"
          >
            <td className="flex w-6/12 gap-4">
              <div className="relative w-3/12 aspect-square">
                <Image
                  src={
                    num % 2 === 1
                      ? "/image/products/helm-sofa/product-card.webp"
                      : "/image/products/grove-sofa.webp"
                  }
                  alt={num % 2 === 1 ? "helm-sofa" : "grove-sofa"}
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  {num % 2 === 1 ? (
                    <p className="text-lg">Helm Sofa ({Math.ceil(num / 2)})</p>
                  ) : (
                    <p className="text-lg">Grove Sofa ({Math.ceil(num / 2)})</p>
                  )}
                  <p className="font-light text-base">Indigo</p>
                </div>
                <i className="text-[#7F534B] text-sm">
                  In stock. Ready to ship.
                </i>
              </div>
            </td>
            <td className="flex w-3/12 items-center">
              <QuantityInput className="!h-8" />
            </td>
            <td className="flex w-2/12 items-center">
              <p className="text-base">$449.85</p>
            </td>
            <td className="flex w-1/12 items-center">
              <button
                type="button"
                className="h-5 w-5 text-black/50 cursor-pointer"
              >
                <CloseIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CheckoutList;
