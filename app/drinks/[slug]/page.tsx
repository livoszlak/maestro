"use client";
import { DetailedResponse } from "@/app/api/cocktailsApi";
import { useCocktail } from "@/app/hooks/useCocktail";
import { useState } from "react";
import CocktailDisplay from "@/app/components/CocktailDisplay/CocktailDisplay";

export default function Drink({ params }: { params: { slug: string } }) {
  const cocktail = useCocktail(params.slug);

  return (
    <>
      <CocktailDisplay slug={params.slug} />
    </>
  );
}
