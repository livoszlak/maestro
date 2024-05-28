"use client";
import styles from "./page.module.css";
import IngredientSelect from "./components/IngredientSelect/IngredientSelect";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box></Box>
      <IngredientSelect />
    </main>
  );
}
