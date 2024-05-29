import { useState, useEffect } from "react";
import { fetchCocktails, Cocktail } from "../api/cocktailsApi";

export const useCocktails = (ingredient: string): Cocktail[] | undefined => {
  const [cocktails, setCocktails] = useState<Cocktail[]>();

  useEffect(() => {
    const getCocktails = async () => {
      const cocktailsFromApi = await fetchCocktails(ingredient);
      setCocktails(cocktailsFromApi);
    };

    getCocktails();
  }, [ingredient]);
  return cocktails;
};
