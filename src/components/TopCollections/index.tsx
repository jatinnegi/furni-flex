import Image from "next/image";
import Link from "next/link";

interface TopCollectionProps {
  id: number;
  name: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
}

const topCollectionsData: TopCollectionProps[] = [
  {
    id: 1,
    name: "Bedding",
    imgSrc: "/image/top-collections/bedding.webp",
    imgAlt: "bedding",
    href: "#",
  },
  {
    id: 2,
    name: "Rugs",
    imgSrc: "/image/top-collections/rugs.webp",
    imgAlt: "rugs",
    href: "#",
  },
  {
    id: 3,
    name: "Furniture",
    imgSrc: "/image/top-collections/furniture.webp",
    imgAlt: "furniture",
    href: "#",
  },
];

const TopCollections = () => {
  return (
    <section className="my-10 max-w-[1400px] mx-auto">
      <h3 className="text-2xl text-center leading-10 font-light">
        The world's most gorgeous goods for your home.
        <br />
        All thoughtfully designed & ethically crafted.
      </h3>
      <ul className="flex gap-6 mt-6">
        {topCollectionsData.map((item: TopCollectionProps) => (
          <li key={item.id} className="block w-1/3">
            <Link href="#" className="relative block w-full aspect-square">
              <Image
                src={item.imgSrc}
                alt={item.imgAlt}
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
              <button
                type="button"
                className="absolute bottom-[5%] left-1/2 -translate-x-1/2 bg-white rounded-lg py-2 px-6 cursor-pointer text-base"
              >
                {item.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopCollections;
