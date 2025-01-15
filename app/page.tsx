"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { MealGrid } from "./components/MealGrid";
import { CustomPagination } from "./components/CustomPagination";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export default function Home() {
  const [query, setQuery] = useState("Beef");
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const resultsPerPage = 9;

  const offset = (page - 1) * resultsPerPage;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["meals", query, page],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}?s=${query}`);
      const data = await response.json();
      return {
        meals: data.meals?.slice(offset, offset + resultsPerPage) || [],
        totalResults: data.meals?.length || 0,
      };
    },
    enabled: !!query,
  });

  const meals = data?.meals;
  const totalResults = data?.totalResults || 0;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handleSearch = () => {
    setQuery(searchInput);
    setPage(1);
    setSearchInput("");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading meals.</div>;

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-10 font-bold">Meals</h1>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={handleSearch}
      />
      <MealGrid meals={meals} />
      <CustomPagination
        totalPages={totalPages}
        currentPage={page}
        setPage={setPage}
      />
    </div>
  );
}
