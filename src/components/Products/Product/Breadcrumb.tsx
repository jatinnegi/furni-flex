import Link from "next/link";

export default function () {
  return (
    <ul className="text-xs font-light flex items-center gap-1">
      <li>
        <Link href="/">Home</Link>
      </li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
      <li>
        <Link href="/">Sofas & Chairs</Link>
      </li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
      <li className="font-normal">
        <Link href="/">Helm Sofa</Link>
      </li>
    </ul>
  );
}
