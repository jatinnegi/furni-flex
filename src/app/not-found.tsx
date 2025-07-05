import Link from "next/link";
import { Heading1 } from "@/components/Typography/Headings";
import { Paragraph1 } from "@/components/Typography/Paragraphs";

export default function NotFound() {
  return (
    <main className="min-h-96 md:min-h-auto w-full py-6 md:py-20 flex flex-col items-center justify-center gap-4 md:gap-8">
      <Heading1>Page not found</Heading1>
      <Paragraph1 className="text-center max-w-96 md:max-w-none">
        It looks like nothing was found at this location. Maybe try a search?
      </Paragraph1>
      <form className="h-12 md:h-14 w-full max-w-96 md:max-w-2xl rounded-sm flex overflow-hidden">
        <input
          type="text"
          className="flex-1 h-full border-none outline-none pl-4 pr-1 text-sm bg-[#F3F3F3]"
          placeholder="Search..."
        />
        <button
          type="button"
          className="h-full w-24 md:w-32 bg-black text-white cursor-pointer text-sm"
        >
          Search
        </button>
      </form>
      <Link
        href="/"
        className="text-[#5a5958] font-medium flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        <p>
          Back to <span className="underline">homepage</span>
        </p>
      </Link>
    </main>
  );
}
