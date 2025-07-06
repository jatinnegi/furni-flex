import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

import CategoryGraphicLink from "./CategoryGraphicLink";

interface Props {
  display: boolean | null;
}

const links: { id: number; name: string; href: string }[] = [
  { id: 1, name: "Best Sellers", href: "/best-sellers" },
  { id: 2, name: "Area Rugs", href: "/area-rugs" },
  { id: 3, name: "Custom Furniture", href: "/custom-furniture" },
  {
    id: 4,
    name: "Stonewashed Linen Bedding",
    href: "/stonewashed-linen-bedding",
  },
  { id: 5, name: "Cotton Percale Bedding", href: "/cotton-perale-bedding" },
  { id: 6, name: "Mix & Match Pillows", href: "/mix-match-pillows" },
  { id: 7, name: "Ready to Ship", href: "/ready-to-ship" },
];

const Sale: FC<Props> = ({ display }) => {
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
    <div className="flex items-start justify-center gap-10 w-full h-full  py-8">
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
          href="/ready-to-ship-rugs"
          imgSrc="/image/navbar/menu-categories/sale-ready-to-ship-rugs.webp"
          imgAlt="ready-to-ship-rugs"
          title="Ready to Ship Rugs"
          aspectRatio="aspect-[0.67/1]"
        />
        <CategoryGraphicLink
          href="/luxe-bedding"
          imgSrc="/image/navbar/menu-categories/sale-luxe-bedding.webp"
          imgAlt="luxe-bedding"
          title="Luxe Bedding"
          aspectRatio="aspect-[1.2/1]"
        />
      </div>
    </div>
  );
};

export default Sale;
