import Link from "next/link";
import { navLinks } from "../../data/data";

export default function NavLinks() {
  return (
    <>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="font-medium"
          aria-label={link.label} // Fournit une description pour les lecteurs d'écran
          title={link.label} // Ajoute une info-bulle au survol
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
