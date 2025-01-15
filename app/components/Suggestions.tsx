import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Meals } from "../../types/Meals";

export default async function Suggestions() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`
  );
  const data = await response.json();

  const meals = data.meals || [];

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          slidesToShow: 3, // Show 3 items at a time
        }}
        className="w-full max-w-5xl  mx-auto pt-40"
      >
        <CarouselContent>
          {meals.map((meal: Meals) => (
            <CarouselItem
              key={meal.idMeal}
              className="md:basis-1/3 lg:basis-1/3 p-2"
            >
              <Card className="shadow-lg">
                <CardContent className="flex flex-col items-center justify-center">
                  <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="rounded-lg"
                    width={300}
                    height={200}
                  />
                  <h3 className="mt-4 text-lg font-bold">{meal.strMeal}</h3>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
