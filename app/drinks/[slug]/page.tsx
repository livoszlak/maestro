"use client";
import { useCocktail } from "@/app/hooks/useCocktail";
import CocktailDisplay from "@/app/components/CocktailDisplay/CocktailDisplay";

export default function Drink({ params }: { params: { slug: string } }) {
  const cocktail = useCocktail(params.slug);

  return (
    <>
      <CocktailDisplay slug={params.slug} />
    </>
  );
}
