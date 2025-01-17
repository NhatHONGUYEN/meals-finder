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
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";

export default function MobileNav() {
  return (
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
        <div className="text-center py-10">
          <NavLinks />
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
  );
}
