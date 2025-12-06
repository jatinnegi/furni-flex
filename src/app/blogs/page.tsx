import Link from "next/link";
import Image from "next/image";

type BlogCategory =
  | "Design"
  | "Product"
  | "Development"
  | "Customer Support"
  | "Leadership"
  | "Management"
  | "Interviews";

const blogCategories: BlogCategory[] = [
  "Design",
  "Product",
  "Development",
  "Customer Support",
  "Leadership",
  "Management",
  "Interviews",
];

export default function () {
  return (
    <div className="w-11/12 max-w-7xl my-4 mx-auto">
      <header className="w-full flex flex-col gap-2">
        <h1 className="text-3xl font-light">Inside Stories</h1>
        <p className="text-gray-700 text-sm font-light">
          New product features, the latest in technology, solutions, and
          updates.
        </p>
        <form className="mt-2 relative h-12 border-[1px] border-solid border-gray-200 rounded-md">
          <input
            type="text"
            placeholder="Enter your email"
            className="h-full w-full pl-2 pr-28 text-xs"
          />
          <button
            type="button"
            className="absolute top-1/2 right-1 -translate-y-1/2 text-xs h-3/4 w-24 bg-[var(--color-primary-darker)] text-[var(--color-on-text)] rounded-md"
          >
            Subscribe
          </button>
        </form>
      </header>
      <main className="w-full flex flex-col gap-4 my-6">
        <ul className="w-full flex text-xs font-light gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <li>
            <button
              type="button"
              className="font-normal border-b-[1px] border-solid border-[var(--color-primary-darker)] text-[var(--color-primary-darker)] cursor-pointer"
            >
              View All
            </button>
          </li>
          {blogCategories.map((blogCategory: BlogCategory) => (
            <li key={blogCategory}>
              <button type="button" className="cursor-pointer">
                {blogCategory}
              </button>
            </li>
          ))}
        </ul>
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <article key={num} className="flex flex-col gap-1">
              <Link
                href="/blog/6-technical-skills-a-non-technical-startup-founder-needs-to-have"
                className="relative w-full aspect-[1.75/1] flex items-end justify-end border-[1px] border-solid border-gray-50 shadow-xs"
              >
                <Image
                  src="/image/blogs/books-on-brown-wooden-shelf.jpg"
                  alt="books-on-brown-wooden-shelf"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
                <div className="bg-[var(--color-primary)]/20 backdrop-blur-sm relative text-white text-xs font-light w-full flex justify-between items-start px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <p className="font-normal">Phoenix Baker</p>
                    <p>20 Jan 2022</p>
                  </div>
                  <p>Design</p>
                </div>
              </Link>
              <div className="py-1 flex flex-col gap-1">
                <h2 className="text-lg">Best books on scaling your startup</h2>
                <p className="text-xs text-gray-800 font-light leading-5">
                  This collection of the best startup books for scaling your
                  startup are packed full with valuable insights and advice.
                </p>
                <Link
                  href="#"
                  className="text-xs mt-2 flex gap-0.5 items-center"
                >
                  <span className="text-[var(--color-primary-darker)]">
                    Read post
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 fill-[var(--color-primary-darker)]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
