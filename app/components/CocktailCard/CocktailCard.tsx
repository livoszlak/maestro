"use client";

import { Cocktail } from "@/app/api/cocktailsApi";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

const StyledCard = styled(Card)({
  width: "100%",
  minHeight: "350px",
  backgroundColor: "#fcf8ed",
});

interface CocktailCardProps {
  cocktail: Cocktail;
}

export default function CocktailCard({
  cocktail,
}: CocktailCardProps): JSX.Element {
  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={cocktail.image}
        title={`Image portraying ${cocktail.name}`}
      />
      <CardContent>
        <Typography
          sx={{ width: 240 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {cocktail.name}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
