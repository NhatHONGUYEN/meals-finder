"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { Meals } from "../types/Meals";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  const [query, setQuery] = useState("Beef"); // État pour la recherche
  const [searchInput, setSearchInput] = useState(""); // Valeur temporaire de l'input

  const { data, isLoading } = useQuery({
    queryKey: ["meals", query], // La clé dépend de `query`
    queryFn: async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      return response.json();
    },
    enabled: !!query, // Ne pas exécuter la requête si `query` est vide
  });

  const meals = data?.meals;

  const handleSearch = () => {
    setQuery(searchInput);
    setSearchInput(""); // Réinitialise l'input
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-10 font-bold">Meals</h1>

      {/* Champ de recherche */}
      <div className="w-52 py-10">
        <Input
          placeholder="Type your search ..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // Met à jour `searchInput`
          onKeyDown={handleKeyPress} // Détecte la touche "Enter"
        />
      </div>

      {!meals || meals.length === 0 ? (
        <div>No meals found.</div>
      ) : (
        <div className="grid grid-cols-3 gap-20">
          {meals.map((meal: Meals) => (
            <article className="group " key={meal.idMeal}>
              <Link href={`/meal/${meal.idMeal}`}>
                <Image
                  width={500}
                  height={200}
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                />

                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {meal.strMeal}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
