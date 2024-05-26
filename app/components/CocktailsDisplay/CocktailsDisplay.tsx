"use client";
import { useCocktails } from "@/app/hooks/useCocktails";
import { Box, Typography, styled } from "@mui/material";
import CocktailCard from "../CocktailCard/CocktailCard";
import Link from "next/link";
import { useContext } from "react";
import { IngredientContext } from "@/app/contexts/IngredientContext";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

export default function CocktailsDisplay(): JSX.Element {
  const context = useContext(IngredientContext);

  if (!context) {
    throw new Error("No ingredient provider :(");
  }

  const { ingredient } = context;

  const cocktails = useCocktails(ingredient);

  return (
    <>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Displaying results for: {ingredient.replaceAll("_", " ")}
      </Typography>
      <StyledBox>
        {cocktails &&
          cocktails.drinks.map((cocktail, index) => {
            return (
              <Link key={index} href={`/drinks/${cocktail.id}`}>
                <CocktailCard {...cocktail}></CocktailCard>
              </Link>
            );
          })}
      </StyledBox>
    </>
  );
}
