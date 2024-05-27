"use client";
import { useCocktail } from "@/app/hooks/useCocktail";
import { StyledComponent } from "@emotion/styled";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Chip,
  styled,
} from "@mui/material";
import LiquorIcon from "@mui/icons-material/Liquor";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Theme } from "@mui/material";

const StyledDisplay = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
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
    <StyledDisplay>
      <Card sx={{ maxWidth: 500, height: "100%" }}>
        <CardMedia
          component="img"
          /* height="50%" */
          image={cocktail?.image}
          alt={`Image portraying ${cocktail?.name}`}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {cocktail?.name}
          </Typography>
          <Chip label={cocktail?.type} />
          <Typography variant="body2">{cocktail?.instructions}</Typography>
        </CardContent>

        <List>
          {cocktail?.ingredients.map((ingredient, index) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>{<LiquorIcon />}</ListItemIcon>
                <ListItemText
                  primary={`${ingredient.measure} ${ingredient.ingredient}`}
                />
              </ListItem>
            );
          })}
        </List>
      </Card>
    </StyledDisplay>
  );
}
