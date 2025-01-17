import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="px-4 md:p-4 fixed sm:px-10 top-0 left-0 right-0 z-50 bg-white">
      <section className="py-4 flex justify-center items-center mx-auto">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center gap-4">
            <NavLinks />
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
