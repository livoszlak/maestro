import IngredientSelect from "./components/IngredientSelect/IngredientSelect";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box className="index-copy">
        <Typography
          variant="h5"
          align="center"
          sx={{ textTransform: "uppercase", letterSpacing: "3.5px" }}
          className="heading"
        >
          You look thirsty...
        </Typography>
        <Typography variant="body2" paragraph={true}>
          Oh hi! You sure look thirsty. <span className="maestro">Maestro</span>{" "}
          is here to help you! Select an ingredient below, and let us serve you
          up something really tasty.
        </Typography>
        <Typography
          variant="body2"
          paragraph={true}
          sx={{ fontStyle: "italic" }}
        >
          Choose your poison...
        </Typography>
      </Box>
      <IngredientSelect />
    </main>
  );
}
