"use client";
import CocktailDisplay from "@/app/components/CocktailDisplay/CocktailDisplay";

export default function Drink({ params }: { params: { slug: string } }) {
  return (
    <>
      <CocktailDisplay slug={params.slug} />
    </>
  );
}
