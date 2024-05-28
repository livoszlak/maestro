"use client";
import { useCocktails } from "@/app/hooks/useCocktails";
import { Box, Typography, styled } from "@mui/material";
import CocktailCard from "../CocktailCard/CocktailCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import React, { Suspense } from "react";
import Loading from "../Loading/Loading";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

function CocktailsDisplay(): JSX.Element {
  const searchParams = useSearchParams();
  const ingredient = searchParams.get("ingredient") || "";
  const cocktails = useCocktails(ingredient);

  if (!ingredient) {
    return <h1>No ingredient provided</h1>;
  }

  if (cocktails === undefined) {
    return <Loading />;
  }

  if (!cocktails) {
    return (
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Mixing cocktails...
      </Typography>
    );
  }

  return (
    <>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Displaying results for: {ingredient.replaceAll("_", " ")}
      </Typography>
      <StyledBox>
        {cocktails &&
          cocktails?.map((cocktail, index) => {
            return (
              <Link key={index} href={`/drinks/${cocktail.id}`}>
                <CocktailCard cocktail={cocktail} />
              </Link>
            );
          })}
      </StyledBox>
    </>
  );
}

export default function WrappedCocktailsDisplay(): JSX.Element {
  return (
    <Suspense
      fallback={
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Mixing cocktails...
        </Typography>
      }
    >
      <CocktailsDisplay />
    </Suspense>
  );
}
