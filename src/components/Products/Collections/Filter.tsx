import Link from "next/link";
import Checkbox from "@/components/Inputs/Checkbox";
import PriceSlider from "@/components/Inputs/PriceSlider";

interface ProductTypeProps {
  id: number;
  productTypeName: string;
  numOfProducts: number;
}

const productTypes: ProductTypeProps[] = [
  {
    id: 1,
    productTypeName: "Chesterfield",
    numOfProducts: 41,
  },
  {
    id: 2,
    productTypeName: "Mid-Century",
    numOfProducts: 14,
  },
  {
    id: 3,
    productTypeName: "Contemporary",
    numOfProducts: 158,
  },
  {
    id: 4,
    productTypeName: "Traditional",
    numOfProducts: 351,
  },
  {
    id: 5,
    productTypeName: "Scandinavian",
    numOfProducts: 88,
  },
  {
    id: 6,
    productTypeName: "Minimalist",
    numOfProducts: 107,
  },
  {
    id: 7,
    productTypeName: "Bohemian",
    numOfProducts: 7,
  },
];

const colors: string[] = [
  "Blue",
  "Green",
  "Tan/Beige",
  "White/Ivory",
  "Black",
  "Grey",
  "Brown",
  "Yellow",
  "Orange",
  "Red",
  "Pink",
  "Purple",
  "Dark Wood",
  "Light Wood",
];

const Filter = () => {
  return (
    <div className="hidden xl:block w-1/5 verflow-y-scroll border-r-[1px] border-solid border-gray-200 pr-4">
      <div className="flex flex-col gap-2 mb-4">
        <h4 className="text-xl">Product Type</h4>
        <ul className="ml-2">
          {productTypes.map((productType: ProductTypeProps) => (
            <li
              key={productType.id}
              className="flex items-center gap-1 py-2 text-sm font-light"
            >
              <Link
                href="/collections/sofas"
                className="text-black hover:text-black/80"
              >
                {productType.productTypeName}
              </Link>
              <p className="text-sm">({productType.numOfProducts})</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <h4 className="text-xl">Price</h4>
        <div className="ml-2 mt-1 mb-4">
          <PriceSlider minLimit={4550} maxLimit={90000} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <h4 className="text-xl">Color</h4>
        <ul className="ml-2">
          {colors.map((color: string) => (
            <li
              key={color}
              className="flex items-center gap-1 py-2 text-sm font-light"
            >
              <label htmlFor={color} className="flex items-center gap-2">
                <Checkbox label={color} />
              </label>
              <p className="text-sm font-light">(81)</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
