"use client";

import { useCocktails } from "../hooks/useCocktails";
import { Cocktail } from "../api/cocktailsApi";

export default function Drinks() {
  const cocktails = useCocktails();
  let drink: Cocktail | undefined = cocktails?.drinks[0];

  drink && console.log(drink.strDrink);
  return <></>;
}

//
