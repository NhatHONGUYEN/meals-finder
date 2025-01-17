import Link from "next/link";
import { socialItems } from "../data/data";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {socialItems.map((item) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          &copy; 2024 Cooking-Nhat, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
