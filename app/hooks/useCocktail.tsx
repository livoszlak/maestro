"use client";
import { useState, useEffect } from "react";
import { fetchCocktail, Cocktail, Drink } from "../api/cocktailsApi";

export const useCocktail = () => {
  const [cocktail, setCocktail] = useState<Drink>();

  useEffect(() => {
    const getCocktail = async () => {
      const cocktailFromApi = await fetchCocktail();
      setCocktail(cocktailFromApi);
    };

    getCocktail();
  }, []);
  return cocktail;
};
