import { Meals } from "../../../types/Meals";
import MealCard from "./MealCard";

export default async function Suggestions() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`
  );
  const data = await response.json();

  const meals = data.meals || [];

  return (
    <div className="w-full max-w-5xl mx-auto pt-20">
      <h1 className="text-4xl mt-10 font-bold">Suggestions</h1>
      <div className="grid py-10 md:grid-cols-2 xl:grid-cols-3 gap-20">
        {meals.slice(0, 3).map((meal: Meals) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}
