"use client";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import RedirectButton from "../Atoms/SubmitButton/RedirectButton";

export default function IngredientSelect(): JSX.Element {
  const [ingredient, setIngredient] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setIngredient(event.target.value as string);
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
          <MenuItem value={"Gin"}>Gin</MenuItem>
          <MenuItem value={"Vodka"}>Vodka</MenuItem>
          <MenuItem value={"Whiskey"}>Whiskey</MenuItem>
        </Select>
      </FormControl>
      {/* <RedirectButton {path="/drinks", label="hej"} /> */}
    </>
  );
}
