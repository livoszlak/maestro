"use client";
import { useCocktails } from "@/app/hooks/useCocktails";
import { fetchCocktails } from "@/app/api/cocktailsApi";
import { Box, styled, Container } from "@mui/material";
import { Cocktail } from "@/app/api/cocktailsApi";
import CocktailCard from "../CocktailCard/CocktailCard";
import Link from "next/link";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export default function CocktailsDisplay(): JSX.Element {
  const cocktails = useCocktails();

  return (
    <StyledBox>
      {cocktails &&
        cocktails.drinks.map((cocktail) => {
          return (
            <Link href={`/drinks/${cocktail.idDrink}`}>
              <CocktailCard key={cocktail.idDrink} {...cocktail}></CocktailCard>
            </Link>
          );
        })}
    </StyledBox>
  );
}