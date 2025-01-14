"use client;";

import Image from "next/image";

export default async function MealDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Récupération des données côté serveur
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();

  const meal = data.meals[0]; // Le détail du repas

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">{meal.strMeal}</h1>
      <Image
        width={800}
        height={400}
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-lg shadow-md"
      />
      <p className="mt-6 text-lg">{meal.strInstructions}</p>

      <h2 className="text-2xl mt-10 font-semibold">Ingredients</h2>
      <ul className="mt-4 list-disc list-inside">
        {Array.from({ length: 20 }, (_, i) => i + 1)
          .map((i) => ({
            ingredient: meal[`strIngredient${i}`],
            measure: meal[`strMeasure${i}`],
          }))
          .filter((item) => item.ingredient) // Filtrer les ingrédients non définis
          .map((item, index) => (
            <li key={index}>
              {item.ingredient} - {item.measure}
            </li>
          ))}
      </ul>
    </div>
  );
}
