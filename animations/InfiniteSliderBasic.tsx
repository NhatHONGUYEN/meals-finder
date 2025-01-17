import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { dishes, sizes } from "../app/data/data";

export function InfiniteSliderBasic() {
  const getRandomSize = () => {
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  };

  return (
    <InfiniteSlider
      className="bg-accent/50 w-full rounded-3xl"
      gap={70}
      reverse
    >
      {dishes.map((dish, index) => (
        <div
          key={index}
          className={`${getRandomSize()} flex items-center py-20 font-bold`}
        >
          {dish}
        </div>
      ))}
    </InfiniteSlider>
  );
}
