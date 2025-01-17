import Link from "next/link";
import { navLinks } from "../../data/data";

export default function NavLinks() {
  return (
    <>
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className="font-medium">
          {link.label}
        </Link>
      ))}
    </>
  );
}
