"use client";

import React, { useRef, useState } from "react";
import { useMeals } from "./hooks/useMeals";
import { SearchBar } from "./components/SearchBar";
import { MealGrid } from "./meal/MealGrid";

import {
  DEFAULT_QUERY,
  INITIAL_PAGE,
  RESULTS_PER_PAGE,
} from "./constants/Constants";

import { InfiniteSliderBasic } from "../animations/InfiniteSliderBasic";
import Testimonials from "./components/testimonials/Testimonials";
import LoadingDot from "@/components/ui/LoadingDot";
import ErrorLoadingMeals from "./components/error/ErrorLoadingMeals";
import Hero from "./components/hero/Hero";
import CustomPagination from "./components/pagination/CustomPagination";

export default function Home() {
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(INITIAL_PAGE);
  const [showHero, setShowHero] = useState(true); // Contrôle l'affichage de Hero

  const { data, isLoading, isError } = useMeals(query, page, RESULTS_PER_PAGE);

  const meals = data?.meals;
  const totalResults = data?.totalResults || 0;
  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    setQuery(searchInput);
    setPage(INITIAL_PAGE);
    setSearchInput("");
    setShowHero(false); // Masquer Hero lorsque la recherche est effectuée
  };

  const handlePageChange = (newPage: React.SetStateAction<number>) => {
    setPage(newPage);
    setShowHero(false); // Masquer Hero lorsqu'on change de page
  };

  const scrollToSearchBar = () => {
    if (searchBarRef.current) {
      searchBarRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll en douceur
    }
  };

  if (isLoading) return <LoadingDot />;
  if (isError) return <ErrorLoadingMeals />;

  return (
    <div>
      <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center">
        {/* Affiche Hero uniquement si showHero est true */}
        {showHero && <Hero scrollToSearchBar={scrollToSearchBar} />}

        <div ref={searchBarRef}>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onSearch={handleSearch}
          />
        </div>
        <MealGrid currentPage={page} meals={meals} />
        <CustomPagination
          totalPages={totalPages}
          currentPage={page}
          setPage={handlePageChange} // Appelle handlePageChange pour gérer la pagination
        />
        <InfiniteSliderBasic />
        <Testimonials />
      </div>
    </div>
  );
}
