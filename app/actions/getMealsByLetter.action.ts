// lib/getMeals.ts
export async function getMealsByLetter(letter: string) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  const data = await response.json();
  return data.meals || [];
}
