"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroProps {
  scrollToSearchBar: () => void;
}

export default function HeroContent({ scrollToSearchBar }: HeroProps) {
  const router = useRouter();

  const aboutLink = () => {
    router.push("/about");
  };

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
        <Button onClick={scrollToSearchBar} className="w-full sm:w-auto">
          <ArrowRight className="mr-2 size-4" />
          Explore Recipes
        </Button>

        <Button
          onClick={aboutLink}
          variant="outline"
          className="w-full sm:w-auto"
          aria-label="Learn more about our website"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
