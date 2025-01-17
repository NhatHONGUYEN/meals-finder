import Link from "next/link";
import { navLinks } from "../../data/data";

export default function NavLinks() {
  return (
    <nav aria-label="Main navigation">
      {" "}
      {/* Ajout d'une balise <nav> pour la sémantique */}
      <ul className="block space-y-4 md:space-y-0 md:flex   md:space-x-6">
        {" "}
        {/* Utilisation d'une liste pour la structure */}
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="font-medium"
              aria-label={link.label} // Description améliorée pour les lecteurs d'écran
              title={link.label} // Ajoute une info-bulle plus précise
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
