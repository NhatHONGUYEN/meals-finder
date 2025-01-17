import { Metadata } from "next";
import { getMealDetails } from "../../actions/getMealDetails.action";
import MealPresentation from "./mealPresentation/MealPresentation";
import Suggestions from "./suggestions/Suggestions";

export const revalidate = 60;

// Générer des métadonnées dynamiques
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const meal = await getMealDetails(params.id);

  return {
    title: meal.strMeal || "Détails du repas",
    description:
      meal.strInstructions.slice(0, 160) ||
      "Découvrez les détails de ce repas délicieux.",
  };
}

export default async function MealDetails({
  params,
}: {
  params: { id: string };
}) {
  const meal = await getMealDetails(params.id);

  return (
    <section className="mx-8 max-w-6xl md:mx-32 xl:mx-auto py-32">
      <div className="container">
        <MealPresentation meal={meal} />
        <Suggestions />
      </div>
    </section>
  );
}
