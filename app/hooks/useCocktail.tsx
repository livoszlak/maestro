"use client";
import { useState, useEffect } from "react";
import {
  fetchCocktail,
  Cocktail,
  Drink,
  CocktailDetails,
} from "../api/cocktailsApi";

export const useCocktail = () => {
  const [cocktail, setCocktail] = useState<CocktailDetails>();

  useEffect(() => {
    const getCocktail = async (drinkId: string) => {
      const cocktailFromApi = await fetchCocktail(drinkId);
      setCocktail(cocktailFromApi);
    };

    getCocktail(drinkId);
  }, []);
  return cocktail;
};
