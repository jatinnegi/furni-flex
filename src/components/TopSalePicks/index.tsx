import Link from "next/link";
import Image from "next/image";

const TopSalePicks = () => {
  return (
    <section className="w-11/12 max-w-[1450px] mx-auto my-20">
      <h3 className="text-3xl font-light">Top Sale Picks</h3>
      <section className="flex gap-10 w-full mt-5">
        <article className="flex w-1/2">
          <div className="relative w-3/5 aspect-square">
            <Image
              src="/image/top-sale-pick/top-sale-pick-1.webp"
              alt="top-sale-pick-1"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <div className="flex-1 bg-[#F6F2EE] h-full flex flex-col gap-4 items-center justify-center px-7">
            <h4 className="font-[350] text-4xl leading-12 text-center">
              Extra %20 Off Sofas
            </h4>
            <p className="text-lg font-[350] text-center">
              Explore our stunning and exclusive Arteriors collection.
            </p>
            <Link href="#" className="text-lg font-light underline">
              Shop Now
            </Link>
          </div>
        </article>
        <article className="flex w-1/2">
          <div className="relative w-3/5 aspect-square">
            <Image
              src="/image/top-sale-pick/top-sale-pick-2.webp"
              alt="top-sale-pick-2"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <div className="flex-1 bg-[#F6F2EE] h-full flex flex-col gap-4 items-center justify-center px-7">
            <h4 className="font-[350] text-4xl leading-12 text-center">
              Dining Room From $50
            </h4>
            <p className="text-lg font-[350] text-center">
              Explore luxury furniture from our exclusive Dome Deco collection.
            </p>
            <Link href="#" className="text-lg font-light underline">
              Shop Now
            </Link>
          </div>
        </article>
      </section>
    </section>
  );
};

export default TopSalePicks;
