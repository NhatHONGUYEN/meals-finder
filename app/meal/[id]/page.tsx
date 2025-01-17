"use client;";

import MealPresentation from "./mealPresentation/MealPresentation";
import Suggestions from "./suggestions/Suggestions";

export const revalidate = 60;

export async function generateStaticParams() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
  );
  const data = await response.json();

  const meals = data.meals || [];
  return meals.map((meal: { idMeal: string }) => ({
    id: meal.idMeal,
  }));
}

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
    <section className="mx-8   max-w-6xl md:mx-32 xl:mx-auto py-32">
      <div className="container">
        <MealPresentation meal={meal} />
        <Suggestions />
      </div>
    </section>
  );
}
