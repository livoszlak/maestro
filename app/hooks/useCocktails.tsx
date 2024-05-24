"use client";
import { useState, useEffect } from "react";
import { fetchCocktails, Drinks } from "../api/cocktailsApi";

export const useCocktails = () => {
  const [cocktails, setCocktails] = useState<Drinks>();

  useEffect(() => {
    const getCocktails = async () => {
      const cocktailsFromApi = await fetchCocktails();
      setCocktails(cocktailsFromApi);
    };

    getCocktails();
  }, []);
  return cocktails;
};
