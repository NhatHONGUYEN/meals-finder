"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ButtonBack() {
  return (
    <Link
      className="mb-5 flex items-center gap-1 text-muted-foreground hover:text-primary"
      href={"/"}
      aria-label="Return to home page" // Ajout de l'aria-label pour améliorer l'accessibilité
    >
      <ChevronLeft className="h-full w-4" /> Return to home
    </Link>
  );
}
