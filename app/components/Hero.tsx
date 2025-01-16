import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  scrollToSearchBar: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSearchBar }) => {
  return (
    <section>
      <div className="container flex flex-col py-32 items-center">
        <div className="w-full overflow-clip rounded-lg bg-accent/50">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="container flex flex-col items-center px-[4rem] py-32 text-center lg:mx-auto lg:items-start lg:px-[4rem] lg:text-left">
              <p className="text-base/7 font-semibold text-indigo-600">
                Discover New Recipes
              </p>
              <h1 className="my-6 text-pretty text-5xl font-bold">
                Welcome to Our Recipe Website
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground ">
                Explore a vast collection of delicious and easy-to-make recipes.
                Whether you&apos;re an experienced chef or a beginner in the
                kitchen, you&apos;ll find ideas here for all tastes and
                occasions.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  onClick={scrollToSearchBar}
                  className="w-full sm:w-auto"
                >
                  <ArrowRight className="mr-2 size-4" />
                  Explore Recipes
                </Button>
                <Link href="/about">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full h-full">
              <video
                src="/heroVideo.mp4"
                className="w-full h-full rounded-lg object-cover"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
