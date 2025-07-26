import { FC, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";

import CategoryGraphicLink from "./CategoryGraphicLink";

interface Props {
  display: boolean | null;
}

const links: { id: number; name: string; href: string }[] = [
  { id: 1, name: "New Arrivals", href: "/new-arrivals" },
  { id: 2, name: "Best Sellers", href: "/best-sellers" },
  { id: 3, name: "Ready to Ship", href: "/best-sellers" },
  { id: 4, name: "Back in Stock", href: "/best-sellers" },
  { id: 5, name: "New: Heirloom Furniture", href: "/heirloom-furniture" },
  { id: 6, name: "New: Statement Rugs", href: "/statement-rugs" },
];

const NewArrivals: FC<Props> = ({ display }) => {
  const [showMenu, setShowMenu] = useState<boolean | null>(display);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }

    if (display === null) {
      timer.current = setTimeout(() => {
        setShowMenu(false);
        timer.current = null;
      }, 300);
    } else if (!display) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, [display]);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };
  }, []);

  if (!showMenu) {
    return <></>;
  }

  return (
    <div className="flex items-start justify-center gap-10 w-full h-full py-8">
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="font-[350] text-sm hover:underline"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-5">
        <CategoryGraphicLink
          href="/heirloom-furniture"
          imgSrc="/image/navbar/menu-categories/new-arrivals-heirloom.webp"
          imgAlt="new-arrivals-heirloom"
          title="New: Heirloom Furniture"
          aspectRatio="aspect-[0.75/1]"
        />
        <CategoryGraphicLink
          href="/linen-bedding"
          imgSrc="/image/navbar/menu-categories/new-arrivals-linen-bedding.webp"
          imgAlt="new-arrivals-linen-bedding"
          title="New Hues: Stonewashed Linen Bedding"
          aspectRatio="aspect-[1.2/1]"
        />
      </div>
    </div>
  );
};

export default NewArrivals;
