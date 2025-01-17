import HeroContent from "./HeroContent";
import HeroVideo from "./HeroVideo";

interface HeroProps {
  scrollToSearchBar: () => void;
}

export default function Hero({ scrollToSearchBar }: HeroProps) {
  return (
    <section>
      <div className="container flex flex-col py-32 items-center">
        <div className="w-full overflow-clip rounded-lg bg-accent/50">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <HeroContent scrollToSearchBar={scrollToSearchBar} />
            <HeroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
