import Breadcrumb from "@/components/Products/Product/Breadcrumb";
import Image from "next/image";
import Ratings from "@/components/Ratings";
import ProductInfo from "@/components/Products/Product/ProductInfo";
import CartIcon from "@/components/Icons/Cart";
import VerifiedIcon from "@/components/Icons/Verified";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ({ params }: PageProps) {
  const { slug } = await params;

  return (
    <>
      <section className="w-11/12 max-w-xl mt-4 mx-auto flex flex-col gap-4">
        <Breadcrumb />
        <div>
          <div className="flex flex-col gap-2">
            <div className="relative w-full aspect-square">
              <Image
                src="/image/products/helm-sofa/img-3.jpg"
                alt="helm-sofa"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <ul className="w-full flex gap-2">
              <li className="w-1/4 aspect-square relative">
                <Image
                  src="/image/products/helm-sofa/img-3.jpg"
                  alt="helm-sofa-1"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </li>
              <li className="w-1/4 aspect-square relative">
                <Image
                  src="/image/products/helm-sofa/img-2.jpg"
                  alt="helm-sofa-2"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </li>
              <li className="w-1/4 aspect-square relative">
                <Image
                  src="/image/products/helm-sofa/img-4.jpg"
                  alt="helm-sofa-3"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </li>
              <li className="w-1/4 aspect-square relative">
                <Image
                  src="/image/products/helm-sofa/img-5.jpg"
                  alt="helm-sofa-4"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </li>
            </ul>
          </div>
        </div>
        <main className="flex flex-col gap-1">
          <div className="flex gap-2 text-sm items-center font-light mb-2">
            <p>4.5</p>
            <Ratings rating={4.5} totalRatings={0} />
            <p>67 reviews</p>
          </div>
          <h1 className="text-xl">Helm Sofa</h1>
          <p className="font-light text-sm">
            Wrapped in soft linen with a timeless wooden frame, this accent
            chair blends comfort with classic elegance. Perfect for creating a
            cozy corner or elevating your living space with understated charm.
          </p>
          <div className="my-2 flex gap-1 items-center">
            <span className="text-2xl font-medium">$699.95</span>
            {/* <span className="text-xs text-gray-400 line-through">$799.95</span> */}
            {/* <span className="text-xs font-light">17% off</span> */}
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
            <p>Free Standard Shipping</p>
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
              <span className="font-light text-xs">
                Estimated Delivery Between Aug 22-Aug 25
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
              className="h-full flex-1 bg-[var(--color-primary-darker)] text-[var(--color-on-primary-darker)] cursor-pointer flex gap-2 items-center justify-center"
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
              <span className="relative block w-[35px] aspect-[1.79/1]">
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
        </main>
      </section>
      <div className="py-4 bg-gray-100 flex flex-col gap-4 max-w-xl mx-auto mt-1 mb-4">
        <div className="w-11/12 mx-auto flex flex-col gap-4">
          <p>Buy with confidence</p>
          <ul className="grid grid-cols-2 gap-3 text-xs font-light">
            <li className="flex gap-2 items-start">
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
            <li className="flex gap-2 items-start">
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
            <li className="flex gap-2 items-start">
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
            <li className="flex gap-2 items-start">
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
      <section className="w-11/12 max-w-xl mb-4 mx-auto flex flex-col gap-4">
        <ProductInfo />
        <main className="my-4">
          <p className="text-2xl">Ratings & Reviews</p>
          <ul className="my-4 flex flex-col gap-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <li
                key={num}
                className="border-b-[1px] border-solid border-gray-200 pt-2 pb-4"
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
                  and it adds such a warm, elegant touch to our dining room.
                  Worth every penny!
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
      </section>
    </>
  );
}
