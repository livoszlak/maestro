"use client";
import { useCocktails } from "@/app/hooks/useCocktails";
import { Box, styled } from "@mui/material";
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
            <Link key={cocktail.idDrink} href={`/drinks/${cocktail.idDrink}`}>
              <CocktailCard {...cocktail}></CocktailCard>
            </Link>
          );
        })}
    </StyledBox>
  );
}
