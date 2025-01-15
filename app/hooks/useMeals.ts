import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../constants/Constants";

export const useMeals = (
  query: string,
  page: number,
  resultsPerPage: number
) => {
  const offset = (page - 1) * resultsPerPage;

  return useQuery({
    queryKey: ["meals", query, page],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}?s=${query}`);
      const data = await response.json();
      return {
        meals: data.meals?.slice(offset, offset + resultsPerPage) || [],
        totalResults: data.meals?.length || 0,
      };
    },
    enabled: !!query, // Active uniquement si une requête est définie
  });
};
