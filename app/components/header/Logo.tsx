import { CookingPot } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <CookingPot />
      <span className="text-xl font-bold">Meals Finder</span>
    </Link>
  );
}
