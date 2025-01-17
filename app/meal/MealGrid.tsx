import Image from "next/image";
import Link from "next/link";
import { Meals } from "../../types/Meals";
import Error from "../components/error/ErrorSearch";

interface MealGridProps {
  meals: Meals[];
  currentPage: number;
}

export const MealGrid: React.FC<MealGridProps> = ({ meals, currentPage }) => {
  if (!meals || meals.length === 0) {
    return <Error />;
  }

  return (
    <div>
      <span className="relative py-20 max-w-sm mx-auto  flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white px-6">{currentPage} </span>
      </span>
      <div className="grid md:grid-cols-2 mx-20 xl:mx-0 xl:grid-cols-3 gap-20">
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
    </div>
  );
};
