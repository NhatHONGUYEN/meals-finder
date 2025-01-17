import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  scrollToSearchBar: () => void;
}

export default function HeroContent({ scrollToSearchBar }: HeroProps) {
  return (
    <div className="container flex flex-col items-center px-[4rem] py-32 text-center lg:mx-auto lg:items-start lg:px-[4rem] lg:text-left">
      <p className="text-base/7 font-semibold text-indigo-600">
        Discover New Recipes
      </p>
      <h1 className="my-6 text-pretty text-5xl font-bold">
        Welcome to Our Recipe Website
      </h1>
      <p className="mb-8 text-muted-foreground">
        Explore a vast collection of delicious and easy-to-make recipes. Whether
        you&apos;re an experienced chef or a beginner in the kitchen,
        you&apos;ll find ideas here for all tastes and occasions.
      </p>
      <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
        {/* Remplacement du bouton par une balise <a> sémantique */}
        <Link
          href="#search-bar"
          onClick={(e) => {
            e.preventDefault(); // Empêche la navigation par défaut
            scrollToSearchBar();
          }}
          className="inline-flex items-center justify-center w-full rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 sm:w-auto"
          aria-label="Scroll to the search bar"
        >
          <ArrowRight className="mr-2 size-4" />
          Explore Recipes
        </Link>

        {/* Lien SEO-friendly avec balise <Link> */}
        <Link
          href="/about"
          className="inline-flex items-center justify-center w-full rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 sm:w-auto"
          aria-label="Learn more about our website"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
