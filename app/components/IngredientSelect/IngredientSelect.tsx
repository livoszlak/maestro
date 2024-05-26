"use client";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { IngredientContext } from "@/app/contexts/IngredientContext";
import RedirectButton from "../Atoms/RedirectButton/RedirectButton";

export default function IngredientSelect(): JSX.Element {
  const router = useRouter();
  const context = useContext(IngredientContext);

  if (!context) {
    throw new Error("no ingredient provider");
  }

  const { ingredient, setIngredient } = context;

  const handleChange = (event: SelectChangeEvent<String>) => {
    setIngredient(event.target.value as string);
    router.push("/drinks");
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ingredient</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ingredient}
          label="Ingredient"
          onChange={handleChange}
        >
          <MenuItem value={"Vodka"}>Vodka</MenuItem>
          <MenuItem value={"Gin"}>Gin</MenuItem>
          <MenuItem value={"Tequila"}>Tequila</MenuItem>
          <MenuItem value={"Whiskey"}>Whiskey</MenuItem>
          <MenuItem value={"Bourbon"}>Bourbon</MenuItem>
          <MenuItem value={"Light_rum"}>Light Rum</MenuItem>
          <MenuItem value={"Dark_rum"}>Dark Rum</MenuItem>
          <MenuItem value={"Brandy"}>Brandy</MenuItem>
          <MenuItem value={"Cognac"}>Cognac</MenuItem>
        </Select>
      </FormControl>
      {/* <RedirectButton path="/drinks" label="Go" /> */}
    </>
  );
}
