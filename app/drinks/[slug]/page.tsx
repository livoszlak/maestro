"use client";
import { DetailedResponse } from "@/app/api/cocktailsApi";
import { useCocktail } from "@/app/hooks/useCocktail";
import { useState } from "react";

export default function Drink({ params }: { params: { slug: string } }) {
  const [drinkId, setDrinkId] = useState(params.slug);

  console.log(params.slug);
  /* if (drinkName.includes(" ")) */
  const cocktail = useCocktail(drinkId);
  console.log(cocktail);

  return <></>;
}
