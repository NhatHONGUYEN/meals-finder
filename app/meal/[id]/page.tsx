import Suggestions from "../../components/suggestions/Suggestions";
import MealPresentation from "../../components/mealPresentation/MealPresentation";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;

  [key: string]: string; // Pour couvrir les autres propriétés
}

// Fonction utilitaire pour récupérer les détails d'un repas
async function getMeal(id: string): Promise<Meal | null> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    { cache: "force-cache" } // Modifier si nécessaire
  );

  if (!response.ok) return null;

  const data = await response.json();

  return data?.meals?.[0] || null;
}

// Génération des métadonnées
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meal = await getMeal(id);

  if (!meal) {
    return {
      title: "Repas non trouvé",
      description: "Aucun repas correspondant à cet ID n'a été trouvé.",
    };
  }

  return {
    title: meal.strMeal,
    description: `Découvrez comment préparer ${meal.strMeal}, un plat de catégorie ${meal.strCategory} originaire de ${meal.strArea}.`,
  };
}

// Composant principal
export default async function MealDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meal = await getMeal(id);

  if (!meal) {
    return <p>Erreur : Aucun repas trouvé pour cet ID.</p>;
  }

  return (
    <section className="mx-8 max-w-6xl md:mx-32 xl:mx-auto py-32">
      <div className="container">
        {/* Présentation du repas */}
        <MealPresentation meal={meal} />

        {/* Suggestions supplémentaires */}
        <Suggestions />
      </div>
    </section>
  );
}
