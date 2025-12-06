import Image from "next/image";
import Socials from "./Socials";

const sections = [
  {
    name: "Company",
    links: ["About", "Sustainability", "Blogs"],
  },
  {
    name: "Product",
    links: ["Chairs", "Tables", "Beds", "Sofas", "Desks"],
  },
  {
    name: "Help",
    links: [
      "Customer Service",
      "Track Order",
      "Return & Refunds",
      "Shipping Information",
      "Warranty",
      "Career",
    ],
  },
  {
    name: "Contact",
    links: [
      "hello@furniflex.com",
      "877-308-9873 (TOLL FREE)",
      "7511 Elgin St. green dst",
    ],
  },
];

export default function () {
  return (
    <footer className="flex flex-col font-light gap-4 mt-5 md:mt-24 mb-2 md:mb-4 pt-12 border-t-[1px] border-solid border-gray-300/50">
      <section className="w-11/12 max-w-[1650px] mx-auto flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-20 xl:gap-64 md:justify-between">
        <header className="w-full md:w-2/5 lg:w-1/3 xl:w-1/4">
          <h2 className="text-3xl lg:text-5xl xl:text-7xl font-normal">
            FurniFlex
          </h2>
          <div className="h-[1px] w-full bg-gray-200 my-4" />
          <div className="flex flex-col gap-3">
            <p className="text-sm">Subscibe for newsletter</p>
            <form className="flex h-10 md:h-12 lg:h-14 w-full">
              <input
                type="text"
                className="h-full flex-1 bg-[var(--color-on-primary)] px-2 lg:px-4 text-sm outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="px-4 bg-[var(--color-primary)] text-[var(--color-on-primary)] text-sm"
              >
                Submit
              </button>
            </form>
            <Socials />
          </div>
        </header>
        <main className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 flex-1">
          {sections.map((section) => (
            <div
              key={section.name}
              className="flex flex-col gap-4 md:gap-8 items-start justify-start"
            >
              <h3 className="pb-1 md:pb-3 border-b-[1px] border-solid border-gray-300 font-normal text-base md:text-lg lg:text-xl">
                {section.name}
              </h3>
              <ul className="flex flex-col gap-4 md:gap-6 text-gray-600">
                {section.links.map((link) => (
                  <li key={link} className="text-xs md:text-sm">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>
      <div className="h-[1px] w-11/12 mx-auto md:w-full bg-gray-300/50 mt-0 md:mt-8"></div>
      <section className="w-11/12 max-w-[1650px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs lg:text-sm">
        <p>Privacy | Terms & Conditions</p>
        <p>&copy; FurniFlex {new Date().getFullYear()} All right reserved</p>
        <ul className="flex items-center gap-4">
          <li className="relative w-[35px] aspect-[3.262/1]">
            <Image
              src="/image/footer/visa-logo.svg"
              alt="visa"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </li>
          <li className="relative w-[35px] aspect-square">
            <Image
              src="/image/footer/stripe-logo.svg"
              alt="stripe"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </li>
          <li className="relative w-[15px] aspect-square">
            <Image
              src="/image/footer/paypal-logo.svg"
              alt="paypal"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </li>
          <li className="relative w-[30px] aspect-[1.5/1]">
            <Image
              src="/image/footer/mastercard-logo.svg"
              alt="mastercard"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </li>
          <li className="relative w-[35px] aspect-square">
            <Image
              src="/image/footer/gpay-logo.svg"
              alt="google-pay"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </li>
        </ul>
      </section>
    </footer>
  );
}
