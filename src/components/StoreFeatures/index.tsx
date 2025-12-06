import Image from "next/image";

interface StoreFeature {
  id: number;
  name: string;
  subText: string;
  imgSrc: string;
  imgAlt: string;
}

const features: StoreFeature[] = [
  {
    id: 1,
    name: "Worldwide Shipping",
    subText: "On all orders over $100",
    imgSrc: "/image/features/shipping.webp",
    imgAlt: "worldwide-shipping",
  },
  {
    id: 2,
    name: "Easy Returns",
    subText: "On all unopened, unused items",
    imgSrc: "/image/features/easy-returns.webp",
    imgAlt: "easy-returns",
  },
  {
    id: 3,
    name: "Gift Package",
    subText: "Free packaging over $100",
    imgSrc: "/image/features/gift-packaging.webp",
    imgAlt: "gift-package",
  },
  {
    id: 4,
    name: "Customer Support",
    subText: "Mon - Sat, 10AM - 9PM",
    imgSrc: "/image/features/customer-support.webp",
    imgAlt: "customer-support",
  },
];

const StoreFeatures = () => {
  return (
    <ul className="w-11/12 max-w-7xl my-20 mx-auto flex list-none justify-between">
      {features.map((feature: StoreFeature) => (
        <li
          key={feature.id}
          className="flex flex-col gap-0.5 items-center justify-center"
        >
          <div className="relative h-10 w-10 mb-2">
            <Image
              src={feature.imgSrc}
              alt={feature.imgAlt}
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <h5 className="text-center">{feature.name}</h5>
          <p className="font-light text-xs text-center">{feature.subText}</p>
        </li>
      ))}
    </ul>
  );
};

export default StoreFeatures;
