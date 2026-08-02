import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Products/Product/Breadcrumb";
import Ratings from "@/components/Ratings";
import ProductInfo from "@/components/Products/Product/ProductInfo";
import CartIcon from "@/components/Icons/Cart";
import VerifiedIcon from "@/components/Icons/Verified";
import ServicesForYou from "@/components/ServicesForYou";
import ImagePreview from "@/components/Products/Product/ImagePreview";
import clsx from "clsx";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetaData(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: "Helm Sofa",
    description:
      "Wrapped in soft linen with a timeless wooden frame, this accent chair blends comfort with classic elegance. Perfect for creating a cozy corner or elevating your living space with understated charm.",
    openGraph: {
      title: "Helm Sofa",
      description:
        "Wrapped in soft linen with a timeless wooden frame, this accent chair blends comfort with classic elegance. Perfect for creating a cozy corner or elevating your living space with understated charm.",
      images: [
        {
          url: "https://9a18702d2722.ngrok-free.app/image/products/helm-sofa/img-3.jpg",
          width: 1200,
          height: 630,
          alt: "Helm Sofa",
        },
      ],
      url: "https://9a18702d2722.ngrok-free.app/products/helm-sofa",
      type: "website",
    },
  };
}

export default async function ({ params }: Props) {
  const { slug } = await params;

  return (
    <section className="w-11/12 max-w-7xl mt-4 mx-auto flex flex-col gap-4 md:gap-8 lg:gap-16">
      <Breadcrumb />
      <div className="relative flex items-start justify-start flex-col md:flex-row gap-4">
        <ImagePreview />
        <main className="flex flex-col gap-1 md:gap-2 md:flex-1">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 text-sm items-center font-light">
              <p>4.5</p>
              <Ratings rating={4.5} totalRatings={0} />
              <p>67 reviews</p>
            </div>
            <h1 className="text-xl md:text-2xl">Helm Sofa</h1>
          </div>
          <p className="font-light text-sm">
            Wrapped in soft linen with a timeless wooden frame, this accent
            chair blends comfort with classic elegance. Perfect for creating a
            cozy corner or elevating your living space with understated charm.
          </p>
          <div className="my-2 flex gap-1 items-center">
            <span className="text-2xl font-medium">$699.95</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Choose a Fabric Color</p>
            <ul className="flex gap-2">
              {["#4f5263", "#6a604a", "#ffffff", "#dcdcdc", "#ece9e1"].map(
                (color) => (
                  <li
                    key={color}
                    className="h-7 w-7 border-[1px] border-solid border-gray-200"
                    style={{ backgroundColor: color }}
                  ></li>
                )
              )}
            </ul>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <p className="text-base md:text-lg">Free Standard Shipping</p>
            <p className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <span className="font-light text-xs md:text-sm">
                Estimated delivery between Aug 22 - Aug 25
              </span>
            </p>
          </div>
          <div className="flex gap-2 h-12 mt-2 mb-1.5">
            <div className="h-full flex w-[35%] border-[1px] border-solid border-[var(--color-primary-darker)]">
              <button
                type="button"
                className="h-full w-[30%] flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="h-full w-[40%] text-center text-sm outline-none border-none bg-none"
                defaultValue="1"
              />
              <button
                type="button"
                className="h-full w-[30%] flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <button
              type="button"
              className="h-full flex-1 bg-[var(--color-primary)] text-[var(--color-on-primary-darker)] cursor-pointer flex gap-2 items-center justify-center"
            >
              <div className="h-5 w-5">
                <CartIcon />
              </div>
              <span className="text-sm">Add to cart</span>
            </button>
          </div>
          <p className="text-xs font-light flex items-end gap-2 mb-2">
            <span className="flex items-end gap-1">
              4 interest-free payments of $174.75 with{" "}
              <span className="relative block w-[35px] aspect-[1.79/1] -z-10">
                <Image
                  src="/image/assets/klarna-logo.png"
                  alt="klarna"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </span>
            </span>
            <a href="#" className="underline">
              Learn More
            </a>
          </p>
          <div className="py-4 bg-gray-100 flex flex-col gap-4">
            <div className="w-11/12 mx-auto flex flex-col gap-4">
              <p className="text-base md:text-xl">Buy with confidence</p>
              <ul className="grid grid-cols-2 gap-3 text-xs lg:text-sm font-light">
                <li className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                    />
                  </svg>
                  <p>Best price guaranteed</p>
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                  <p>60-day returns</p>
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                  <p>3-year warranty</p>
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                  <p>Fully assembled design</p>
                </li>
              </ul>
            </div>
          </div>
          <ProductInfo />
        </main>
      </div>
      <div className="w-full flex flex-col gap-6 lg:gap-24 text-sm">
        <div className="flex flex-col md:flex-row-reverse gap-6 lg:gap-12">
          <div className="relative w-full md:max-w-[350px] lg:max-w-[550px] flex flex-col -z-10">
            <div className="relative w-full h-full">
              <Image
                src="/image/products/helm-sofa/img-4.jpg"
                alt="helm-sofa"
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </div>
          <main className="flex flex-col gap-3 md:gap-6 md:flex-1">
            <p className="text-xl md:text-3xl lg:text-5xl">
              Why you'll love it
            </p>
            <ul className="font-light flex flex-col text-base lg:text-lg gap-2 lg:gap-3">
              <li>
                <span>Duty ash wood frame provides support.</span>
              </li>
              <li>
                <span>
                  Sculpted armrests for ergonomic support and modern elegance.
                </span>
              </li>
              <li>
                <span>High-sloping back for extra support during meals.</span>
              </li>
              <li>
                <span>Best price guaranteed.</span>
              </li>
            </ul>
            <div className="flex-1 w-full flex justify-center items-end mt-12">
              <div className="relative w-full aspect-[1/0.5]">
                <Image
                  src="/image/products/helm-sofa/img-10.jpg"
                  alt="helm-sofa"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </div>
          </main>
        </div>
        <div className="relative w-full aspect-[0.5/1] px-4 py-5 bg-gray-900/10">
          <Image
            src="/image/products/helm-sofa/img-11.jpg"
            alt="helm-sofa-11"
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className="-z-10"
          />
          <p className="relative z-10 bg-white pt-4 pb-8 px-4 flex flex-col gap-2">
            <span className="text-3xl">
              Coast & <br />
              Mid-Century Vibe
            </span>
            <span className="font-light">
              Plus high-density foam, distressed linen-blend upholstery, and
              splayed solid wood legs - every detail spells "effortless vintage
              charm" Pair it with the matching loveseat and ottoman from our
              collection to craft a cohesive coastal retreat
            </span>
          </p>
        </div>
        <div className="py-6 flex flex-col gap-8">
          <p className="text-3xl">Product Highlight</p>
          <div className="w-full relative flex aspect-square">
            <Image
              src="/image/products/helm-sofa/img-10.jpg"
              alt="helm-sofa-10"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
            <div className="w-2/3 flex flex-col items-end justify-end h-full">
              <div className="relative z-10 w-full h-1/4 bg-white"></div>
              <div className="w-full h-3/4"></div>
            </div>
            <div className="relative z-10 w-2 h-full bg-white"></div>
            <div className="flex-1 flex flex-col justify-start flex-start h-full">
              <div className="w-full h-3/4"></div>
              <div className="relative z-10 w-full h-1/4 bg-white"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg">Hidden Screws, Beautiful and Generous</p>
            <p className="font-light">
              This solid wood frame armchair uses hidden screws ahdn when
              connecting the wooden armrest and cushion and the backrest. This
              screw ensures the safety and is suitable for familes with
              children. At the same time, the hidden type will also greatly
              reduce the impact of the color of the button on the solid wood
              design of the product.
            </p>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/image/products/helm-sofa/img-7.jpg"
              alt="helm-sofa-7"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
            <div className="w-full h-24"></div>
            <div className="relative w-full h-4 z-10 bg-white"></div>
            <div className="w-full h-48"></div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg">Solid Wood Frame, Tought and Firm</p>
            <p className="font-light">
              The chair was adjusted for the wooden frame. Increased the
              verification of the color of the wooden frame. For orders
              delivered, the wooden frame is a unified warm brown. This chair
              adopts a solid wood frame as a whole, which makes the structure
              more stable. The chair can bear 300 pounds.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xl">Total Reviews</p>
          <p className="text-4xl">67</p>
        </div>
        <div className="w-full h-[1px] bg-[var(--color-line-break)]"></div>
        <div className="flex flex-col gap-2">
          <p className="text-xl">Total Reviews</p>
          <div className="flex gap-4">
            <p className="text-4xl">4.3</p>
            <Ratings rating={4.3} totalRatings={0} height={32} width={32} />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[var(--color-line-break)]"></div>
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="flex items-center justify-between w-40 border-b-solid border-b-[1px] border-black/80 py-2 cursor-pointer"
          >
            <span>Write a review</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <ul className="list-none flex flex-col gap-1">
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
        </div>
        <div className="w-full h-[1px] bg-[var(--color-line-break)]"></div>
      </div>
      <main>
        <p className="text-2xl">Ratings & Reviews</p>
        <ul className="my-4 flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <li
              key={num}
              className={clsx(
                num === 6 ? "" : "border-b-[1px] border-solid border-gray-200",
                "pt-2 pb-4"
              )}
            >
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/image/staff/john-gabriel.webp"
                    alt="john-gabriel"
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col text-xs gap-0.5">
                  <p>Michel Jonson</p>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3">
                      <VerifiedIcon />
                    </div>
                    <p className="text-xs text-[var(--color-primary)]">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 text-xs items-center mt-1 mb-2">
                <Ratings rating={Math.min(num - 0.5, 5)} totalRatings={0} />
                <p>July, 23 2020</p>
              </div>
              <p className="text-sm font-light">
                Absolutey love this chair! The craftsmanship is incredible and
                the solid oak feels sturdy and premium. It was easy to assembe
                and it adds such a warm, elegant touch to our dining room. Worth
                every penny!
              </p>
              <div className="mt-4 flex gap-2">
                {[5, 6].map((imgNum) => (
                  <div key={imgNum} className="relative h-18 w-18">
                    <Image
                      src={`/image/products/helm-sofa/img-${imgNum}.jpg`}
                      alt={`buyer-image-${imgNum}`}
                      layout="fill"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </main>
      <main className="w-full flex flex-col gap-4 items-start justify-start">
        <p className="text-4xl">Related furniture's</p>
        <button
          type="button"
          className="flex items-center justify-between gap-8 border-b-solid border-b-[1px] border-black/80 py-2 cursor-pointer"
        >
          <span>See more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        <ul className="w-full flex flex-col md:flex-row gap-8 my-6">
          {[1, 2, 3].map((num: number) => (
            <li key={num} className="w-full">
              <Link
                href={`/products/home-centre-3-Seater-helios-emily-fabric-sofa-${num}`}
                className="block w-full"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src="/image/products/helm-sofa/product-card.webp"
                    alt="helm-sofa"
                    layout="fill"
                    objectFit="contain"
                    loading="lazy"
                  />
                </div>
                <article className="mt-1">
                  <h4 className="text-base font-[350] text-gray-600">
                    Home Centre 3 Seater Helios Emily Fabric Sofa | Fabric Sofa
                    | (Rich Brown) | 1 Year Warranty (${num})
                  </h4>
                  <p className="text-base mt-1 font-[350]">$3,999</p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <main className="flex flex-col gap-3">
        <p className="text-3xl leading-8">
          FurniFlex creates products crafted by skilled artisians, ensuring
          every piece is handmade with care and designed to be truly one of a
          kind.
        </p>
        <button
          type="button"
          className="flex items-center justify-between w-40 border-b-solid border-b-[1px] border-black/80 py-2 cursor-pointer"
        >
          <span>Browse collection</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        <div className="flex gap-3 h-64">
          <div className="w-2/3 flex items-end justify-end h-full">
            <div className="w-full h-3/4 bg-teal-500"></div>
          </div>
          <div className="flex-1 justify-start flex-start h-full">
            <div className="w-full h-3/4 bg-teal-500"></div>
          </div>
        </div>
      </main>
      <ServicesForYou />
    </section>
  );
}
