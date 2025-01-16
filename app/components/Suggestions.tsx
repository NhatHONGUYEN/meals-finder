import Image from "next/image";

import Link from "next/link";
import { Meals } from "../../types/Meals";

export default async function Suggestions() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`
  );
  const data = await response.json();

  const meals = data.meals || [];

  return (
    <div className="w-full max-w-5xl mx-auto pt-20">
      {/* Container flex pour afficher 4 cartes */}
      <h1 className="text-4xl mt-10 font-bold">Suggestions</h1>
      <div className="grid py-10  md:grid-cols-2 xl:grid-cols-3 gap-20">
        {meals.slice(0, 3).map((meal: Meals) => (
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
    </div>
  );
}
