import MealInstruction from "./mealInstruction/MealInstruction";
import MealTitleVideo from "./MealTitleVideo";

interface Meal {
  [key: string]: string;
}

export default function MealPresentation({ meal }: { meal: Meal }) {
  return (
    <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
      <MealTitleVideo meal={meal} />
      <MealInstruction meal={meal} />
    </div>
  );
}
