import Link from "next/link";
import Image from "next/image";

interface SocialType {
  id: number;
  name: string;
  href: string;
  imgSrc: string;
}

const socials: SocialType[] = [
  {
    id: 1,
    name: "Facebook",
    href: "https://www.facebook.com",
    imgSrc: "/image/footer/facebook-icon.svg",
  },
  {
    id: 2,
    name: "Instagram",
    href: "https://www.instagram.com",
    imgSrc: "/image/footer/instagram-icon.svg",
  },
  {
    id: 3,
    name: "X",
    href: "https://www.x.com",
    imgSrc: "/image/footer/x-icon.svg",
  },
  {
    id: 4,
    name: "Linkedin",
    href: "https://www.linkedin.com",
    imgSrc: "/image/footer/linkedin-icon.svg",
  },
];

const Socials = () => {
  return (
    <ul className="flex gap-3 md:gap-6 items-center mt-2 md:mt-4">
      {socials.map((social: SocialType) => (
        <li key={social.id} className="h-4 w-4 md:h-6 md:w-6 relative">
          <Link href={social.href}>
            <Image
              src={social.imgSrc}
              alt={social.name}
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
