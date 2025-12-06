import Link from "next/link";
import Image from "next/image";

interface BlogProps {
  id: number;
  title: string;
  datePublished: string;
  author: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const blogs: BlogProps[] = [
  {
    id: 1,
    title: "Instantly Find Your Style With The Three Word Method",
    datePublished: "April 3, 2025",
    author: "Albert Flores",
    href: "/blog/instantly-find-your-style-with-the-three-word-method",
    imgSrc: "/image/featured-blogs/blog-1.webp",
    imgAlt: "featured-blog-1",
  },
  {
    id: 2,
    title: "On of the best ways to transition your wardrobe",
    datePublished: "April 3, 2025",
    author: "Albert Flores",
    href: "/blog/instantly-find-your-style-with-the-three-word-method",
    imgSrc: "/image/featured-blogs/blog-2.webp",
    imgAlt: "featured-blog-2",
  },
  {
    id: 3,
    title: "The Ultimate Guide To Sustainable Fashion",
    datePublished: "April 3, 2025",
    author: "Albert Flores",
    href: "/blog/the-ultimate-guide-to-sustainable-fashion",
    imgSrc: "/image/featured-blogs/blog-3.webp",
    imgAlt: "featured-blog-3",
  },
  {
    id: 4,
    title: "Instantly Find Your Style With The Three Word Method",
    datePublished: "April 3, 2025",
    author: "Albert Flores",
    href: "/blog/instantly-find-your-style-with-the-three-word-method",
    imgSrc: "/image/featured-blogs/blog-4.webp",
    imgAlt: "featured-blog-4",
  },
];

const FeaturedBlogs = () => {
  return (
    <div className="w-11/12 max-w-[1450px] mx-auto my-20">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-light">Blog</h3>
        <Link href="/blogs" className="underline text-sm font-[350]">
          Visit Blog
        </Link>
      </div>
      <section className="my-10 flex gap-6">
        {blogs.map((blog: BlogProps) => (
          <article key={blog.id} className="w-1/4 flex flex-col cursor-pointer">
            <div className="w-full aspect-square relative overflow-hidden">
              <Image
                src={blog.imgSrc}
                alt={blog.imgAlt}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="hover:scale-105 transition-all linear duration-300"
              />
            </div>
            <div className="mt-4 flex flex-col items-start justify-start gap-1.5 flex-1">
              <div className="flex gap-5 text-sm font-light">
                <span>{blog.datePublished}</span>
                <span>|</span>
                <span>{blog.author}</span>
              </div>
              <h3 className="text-lg flex-1">{blog.title}</h3>
              <Link href={blog.href} className="text-sm font-[350] underline">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default FeaturedBlogs;
