"use client";

import { Cocktail, CocktailDetails } from "@/app/api/cocktailsApi";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  styled,
} from "@mui/material";

const StyledCard = styled(Card)({
  width: "100%",
});

export default function CocktailCard(cocktail: Cocktail) {
  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={cocktail.strDrinkThumb}
        title={`image portraying ${cocktail.strDrink}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cocktail.strDrink}
        </Typography>
      </CardContent>
      <CardActions>
        {/* TODO: add link to slug page with id of clicked cocktail */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
}