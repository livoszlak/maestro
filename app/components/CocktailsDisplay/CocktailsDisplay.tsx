"use client";
import { useCocktails } from "@/app/hooks/useCocktails";
import { Box, styled } from "@mui/material";
import CocktailCard from "../CocktailCard/CocktailCard";
import Link from "next/link";
import { useContext } from "react";
import { IngredientContext } from "@/app/contexts/IngredientContext";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export default function CocktailsDisplay(): JSX.Element {
  const context = useContext(IngredientContext);

  if (!context) {
    throw new Error("no ingredient provider");
  }

  const { ingredient } = context;

  const cocktails = useCocktails(ingredient);

  return (
    <StyledBox>
      {cocktails &&
        cocktails.drinks.map((cocktail) => {
          return (
            <Link key={cocktail.idDrink} href={`/drinks/${cocktail.idDrink}`}>
              <CocktailCard {...cocktail}></CocktailCard>
            </Link>
          );
        })}
    </StyledBox>
  );
}
