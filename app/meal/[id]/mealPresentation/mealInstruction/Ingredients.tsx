interface Meal {
  [key: string]: string;
}

export default function Ingredients({ meal }: { meal: Meal }) {
  return (
    <>
      {" "}
      <h1 className="pt-10 text-4xl font-semibold ">Ingredients</h1>
      <ul className="list-disc pt-4  list-inside grid grid-cols-2 gap-2">
        {Array.from({ length: 20 }, (_, i) => i + 1)
          .map((i) => ({
            ingredient: meal[`strIngredient${i}`],
            measure: meal[`strMeasure${i}`],
          }))
          .filter((item) => item.ingredient) // Filtrer les ingrédients non définis
          .map((item, index) => (
            <li className="text-muted-foreground  text-base/7" key={index}>
              {item.ingredient} - {item.measure}
            </li>
          ))}
      </ul>
    </>
  );
}
