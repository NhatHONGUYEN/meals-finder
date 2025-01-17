import Image from "next/image";
import Ingredients from "./Ingredients";

interface Meal {
  [key: string]: string;
}

export default function MealInstruction({ meal }: { meal: Meal }) {
  return (
    <>
      {" "}
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

        <Ingredients meal={meal} />
      </article>
    </>
  );
}
