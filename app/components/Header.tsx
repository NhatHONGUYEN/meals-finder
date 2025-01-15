"use client";

import { CookingPot } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      <section className="py-4 flex justify-center items-center mx-auto  ">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <nav className="flex justify-between items-center w-full">
            <Link href={"/"} className="flex items-center gap-4">
              <CookingPot />
              <span className="text-xl font-bold">Meals Finder</span>
            </Link>
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/about" className="font-medium">
                About
              </Link>

              <Link href="/contact" className="font-medium">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
