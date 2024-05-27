"use client";
import { useState, useEffect } from "react";
import { fetchCocktail, CocktailDetails } from "../api/cocktailsApi";

export const useCocktail = (id: string) => {
  const [cocktail, setCocktail] = useState<CocktailDetails>();

  useEffect(() => {
    const getCocktail = async () => {
      const cocktailFromApi = await fetchCocktail(id);
      setCocktail(cocktailFromApi);
    };

    getCocktail();
  }, [id]);
  return cocktail;
};
