"use client";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { ingredients } from "@/app/constants/constants";

export default function IngredientSelect(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  const [ingredient, setIngredient] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedIngredient = event.target.value as string;
    setIngredient(selectedIngredient);

    const params = new URLSearchParams();
    params.set("ingredient", selectedIngredient);
    router.push(`drinks/${pathname}?${params.toString()}`);
  };

  return (
    <>
      <FormControl
        fullWidth
        variant="filled"
        sx={{
          maxWidth: "300px",
          backgroundColor: "#fcf8ed",
          borderRadius: "5px",
        }}
      >
        <InputLabel id="ingredient-select-label">Ingredient</InputLabel>
        <Select
          labelId="ingredient-select-label"
          id="ingredient-select"
          value={ingredient}
          label="Ingredient"
          onChange={handleChange}
        >
          {ingredients.map((ingredient, index) => {
            return (
              <MenuItem
                sx={{ backgroundColor: "#fcf8ed" }}
                key={index}
                value={ingredient.apiKey}
              >
                {ingredient.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
