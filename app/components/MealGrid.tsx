import Image from "next/image";
import Link from "next/link";
import { Meals } from "../../types/Meals";

export const MealGrid = ({ meals }: { meals: Meals[] }) => {
  if (!meals || meals.length === 0) {
    return <div>No meals found.</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-20">
      {meals.map((meal) => (
        <article className="group" key={meal.idMeal}>
          <Link href={`/meal/${meal.idMeal}`}>
            <Image
              width={500}
              height={200}
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                {meal.strMeal}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {meal.strInstructions}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};
