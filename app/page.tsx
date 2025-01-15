"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { Meals } from "../types/Meals";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Home() {
  const [query, setQuery] = useState("Beef"); // État pour la recherche
  const [searchInput, setSearchInput] = useState(""); // Valeur temporaire de l'input
  const [page, setPage] = useState(1); // Page actuelle
  const resultsPerPage = 9; // Nombre de résultats par page (modifié ici à 6)

  // Calcul de l'offset basé sur la page actuelle
  const offset = (page - 1) * resultsPerPage;

  // Requête avec pagination
  const { data, isLoading, isError } = useQuery({
    queryKey: ["meals", query, page], // La clé inclut `query` et `page` pour refetcher quand l'un change
    queryFn: async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      // Limiter les résultats côté client en fonction de `resultsPerPage`
      return {
        meals: data.meals?.slice(offset, offset + resultsPerPage) || [],
        totalResults: data.meals?.length || 0,
      };
    },
    enabled: !!query, // Ne pas exécuter tant que `query` n'est pas défini
  });

  const meals = data?.meals;
  const totalResults = data?.totalResults || 0;
  const totalPages = Math.ceil(totalResults / resultsPerPage); // Nombre total de pages

  const handleSearch = () => {
    setQuery(searchInput);
    setPage(1); // Réinitialise la page à 1 lorsqu'une nouvelle recherche est effectuée
    setSearchInput(""); // Réinitialise l'input
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading meals.</div>;

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

      {/* Affichage des résultats */}
      {!meals || meals.length === 0 ? (
        <div>No meals found.</div>
      ) : (
        <div className="grid py-10 grid-cols-3 gap-20">
          {meals.map((meal: Meals) => (
            <article className="group" key={meal.idMeal}>
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
                    {meal.strInstructions}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      {/* Pagination avec ShadCN */}
      <Pagination className="py-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault();
                setPage((prev) => Math.max(prev - 1, 1)); // Décrémente la page mais ne descend pas sous 1
              }}
              className={page === 1 ? "disabled" : "cursor-pointer"} // Ajoute une classe "disabled" si la page est déjà à 1
            />
          </PaginationItem>

          {/* Affichage des pages */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  className="cursor-pointer" // Ajoute une classe "cursor-pointer" pour indiquer que c'est cliquable
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(pageNumber); // Met à jour la page au clic
                  }}
                  isActive={page === pageNumber} // Marque la page active
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault();
                setPage((prev) => Math.min(prev + 1, totalPages)); // Incrémente la page mais ne dépasse pas le total des pages
              }}
              className={page === totalPages ? "disabled" : "cursor-pointer"} // Ajoute une classe "disabled" si la page est déjà à la dernière page
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
