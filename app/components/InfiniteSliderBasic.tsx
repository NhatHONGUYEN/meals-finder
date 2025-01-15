import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function InfiniteSliderBasic() {
  const dishes = [
    "Spaghetti Carbonara",
    "Chicken Tikka Masala",
    "Sushi Rolls",
    "Beef Wellington",
    "Veggie Stir Fry",
    "Tiramisu",
  ];

  const sizes = [
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
  ];

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
