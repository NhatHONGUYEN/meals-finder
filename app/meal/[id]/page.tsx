"use client;";

import ButtonBack from "@/components/ui/ButtonBack";
import Image from "next/image";

export const revalidate = 60; // Régénération ISR toutes les 60 secondes

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

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { VideoDialog } from "../../components/VideoDialog";
import Suggestions from "../../components/Suggestions";

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
        <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
          <aside className="top-10 mx-auto h-fit w-full max-w-[65ch] lg:sticky lg:max-w-96">
            <ButtonBack />
            <h1 className=" text-4xl font-semibold tracking-tight text-pretty text-gray-900 ">
              The best way to cook {meal.strMeal}
            </h1>
            <div className="flex pt-5 gap-3">
              <Avatar className="size-7 rounded-full">
                <AvatarImage
                  src="https://shadcnblocks.com/images/block/avatar-2.webp"
                  alt="placeholder"
                />
              </Avatar>
              <div>
                <h2 className="font-semibold">Tony Lao</h2>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <div className="pt-20">
              <VideoDialog videoMeal={meal.strYoutube} />
            </div>
          </aside>

          <article className="prose mx-auto">
            <div>
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="max-w-xl object-cover rounded-lg shadow-md"
                width={300}
                height={200}
              />
            </div>
            <h1 className="text-4xl pt-10 font-semibold tracking-tight text-pretty text-gray-900">
              {meal.strMeal}
            </h1>
            <p className=" max-w-lg  pt-4 text-base/7 text-muted-foreground">
              {meal.strInstructions}
            </p>

            <h1 className="pt-10 text-4xl font-semibold ">Ingredients</h1>

            <ul className="list-disc pt-4  list-inside grid grid-cols-2 gap-2">
              {Array.from({ length: 20 }, (_, i) => i + 1)
                .map((i) => ({
                  ingredient: meal[`strIngredient${i}`],
                  measure: meal[`strMeasure${i}`],
                }))
                .filter((item) => item.ingredient) // Filtrer les ingrédients non définis
                .map((item, index) => (
                  <li
                    className="text-muted-foreground  text-base/7"
                    key={index}
                  >
                    {item.ingredient} - {item.measure}
                  </li>
                ))}
            </ul>
          </article>
        </div>
        <Suggestions />
      </div>
    </section>
  );
}
