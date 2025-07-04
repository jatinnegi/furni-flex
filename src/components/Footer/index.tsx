import Link from "next/link";
import { Heading3, Heading4 } from "@/components/Typography/Headings";
import { Paragraph2 } from "@/components/Typography/Paragraphs";

interface LinkProps {
  id: number;
  label: string;
  href: string;
}

interface LinkCategoryProps {
  id: number;
  name: string;
  links: LinkProps[];
}

const linksData: LinkCategoryProps[] = [
  {
    id: 1,
    name: "Collection",
    links: [
      {
        id: 1,
        label: "Beds",
        href: "/beds",
      },
      {
        id: 2,
        label: "Chairs",
        href: "/chairs",
      },
      {
        id: 3,
        label: "Sofas",
        href: "/sofas",
      },
      {
        id: 4,
        label: "Decor",
        href: "/decor",
      },
      {
        id: 5,
        label: "Storage",
        href: "/storage",
      },
      {
        id: 6,
        label: "Tables",
        href: "/tables",
      },
      {
        id: 7,
        label: "Modern Luxury",
        href: "/modern-luxury",
      },
    ],
  },
  {
    id: 2,
    name: "Company",
    links: [
      {
        id: 1,
        label: "Our Story",
        href: "/our-story",
      },
      {
        id: 2,
        label: "Careers",
        href: "/Careers",
      },
      {
        id: 3,
        label: "Press",
        href: "/Press",
      },
      {
        id: 4,
        label: "Track Your Order",
        href: "/track-your-order",
      },
      {
        id: 5,
        label: "Find a Store",
        href: "/find-a-store",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f2ef] py-8 md:py-14">
      <div className="max-w-[1400px] w-11/12 mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-32">
        <div className="flex flex-col gap-3 md:gap-4 w-full md:w-4/12">
          <Heading3>Subscribe to get 10% OFF</Heading3>
          <Paragraph2>Subscribe for store updates and discounts.</Paragraph2>
          <form className="h-14 w-full bg-white rounded-sm flex overflow-hidden">
            <input
              type="text"
              className="flex-1 h-full border-none outline-none pl-4 pr-1 text-sm"
              placeholder="Email Address"
            />
            <button type="submit" className="px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#5a5958"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8">
          {linksData.map((category: LinkCategoryProps) => (
            <div key={category.id} className="flex flex-col gap-4">
              <Heading4>{category.name}</Heading4>
              <ul className="flex flex-col gap-1">
                {category.links.map((link: LinkProps) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm hover:underline text-[#5a5958]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <Heading4>Get in touch</Heading4>
            <div className="flex flex-col gap-2">
              <Paragraph2>1501 Main St, Ste 50</Paragraph2>
              <Paragraph2>Tewksbury MA 01876</Paragraph2>
              <Paragraph2>email@example.com</Paragraph2>
              <Paragraph2>+1 526 220 0459</Paragraph2>
            </div>
            <div className="flex flex-col gap-2">
              <Paragraph2>Mon-Fri: 8:00 - 21:00</Paragraph2>
              <Paragraph2>Sat: 8:00 - 16:00</Paragraph2>
              <Paragraph2>Sun: 8:00 - 12:00</Paragraph2>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Heading4>About</Heading4>
            <Paragraph2>Founded by developers in 2025, FurniFlex®</Paragraph2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
