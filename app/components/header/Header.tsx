"use client";

import { CookingPot, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="p-4 fixed sm:px-10 top-0 left-0 right-0 z-50 bg-white">
      <section className="py-4 flex justify-center items-center mx-auto">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <nav className="flex justify-between items-center w-full">
            <Link href={"/"} className="flex items-center gap-4">
              <CookingPot />
              <span className="text-xl font-bold">Meals Finder</span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/about" className="font-medium">
                About
              </Link>
              <Link href="/contact" className="font-medium">
                Contact
              </Link>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle className="text-center">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="grid gap-4 text-center  py-10">
                    <Link href="/about" className="font-medium">
                      About
                    </Link>
                    <Link href="/contact" className="font-medium">
                      Contact
                    </Link>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button className="w-full" type="button">
                        Close
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
