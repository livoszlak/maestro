"use client";
import { useState, useEffect } from "react";
import { fetchCocks, Cocktail, Drinks } from "../api/cocktailsApi";

export const useCocktails = () => {
  const [cocktails, setCocktails] = useState<Drinks>();

  useEffect(() => {
    const getCocktails = async () => {
      const cocksFromApi = await fetchCocks();
      setCocktails(cocksFromApi);
    };

    getCocktails();
  }, []);
  return cocktails;
};
