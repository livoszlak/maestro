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
import { ingredients } from "@/app/constants/constants";
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
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">Ingredient</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ingredient}
          label="Ingredient"
          onChange={handleChange}
        >
          {ingredients.map((ingredient, index) => {
            return (
              <MenuItem key={index} value={ingredient.apiKey}>
                {ingredient.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
