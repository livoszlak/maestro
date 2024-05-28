"use client";
import { useCocktail } from "@/app/hooks/useCocktail";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  styled,
} from "@mui/material";
import LiquorIcon from "@mui/icons-material/Liquor";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Loading from "../Loading/Loading";
import Confetti from "../Confetti/Confetti";

const StyledDisplay = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const StyledCard = styled(Card)(() => ({
  maxWidth: 500,
  height: "100%",
  backgroundColor: "#fcf8ed",
}));

interface CocktailDisplayProps {
  slug: string;
}

export default function CocktailDisplay({
  slug,
}: CocktailDisplayProps): JSX.Element {
  const cocktail = useCocktail(slug);

  if (cocktail === undefined) {
    return <Loading />;
  }

  return (
    <>
      <Confetti />
      <StyledDisplay>
        <StyledCard>
          <CardMedia
            component="img"
            image={cocktail?.image}
            alt={`Image portraying ${cocktail?.name}`}
          />
          <CardContent>
            <Typography
              variant="overline"
              component="div"
              sx={{ paddingY: 1, fontSize: "2rem", lineHeight: 1 }}
            >
              {cocktail?.name}
            </Typography>
            <Chip label={cocktail?.type} /> <Chip label={cocktail?.glass} />
            <Typography variant="body2" sx={{ paddingY: 2 }}>
              {cocktail?.instructions}
            </Typography>
          </CardContent>

          <List sx={{ padding: 0 }}>
            {cocktail?.ingredients.map((ingredient, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>{<LiquorIcon />}</ListItemIcon>
                  <ListItemText
                    primary={
                      ingredient.measure !== null
                        ? `${ingredient.measure} ${ingredient.ingredient}`
                        : `${ingredient.ingredient}`
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </StyledCard>
      </StyledDisplay>
    </>
  );
}
