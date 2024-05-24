"use client";
import { useCocktail } from "@/app/hooks/useCocktail";
import { Box, styled } from "@mui/material";
import { Theme } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));

interface CocktailDisplayProps {
  slug: string;
}

export default function CocktailDisplay({
  slug,
}: CocktailDisplayProps): JSX.Element {
  const cocktail = useCocktail(slug);
  console.log(cocktail);

  return (
    <StyledBox>
      <div>
        <ul>
          <li>{cocktail?.name}</li>
          <li>{cocktail?.instructions}</li>
        </ul>
      </div>
    </StyledBox>
  );
}
