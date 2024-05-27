"use client";
import styles from "./page.module.css";
import IngredientSelect from "./components/IngredientSelect/IngredientSelect";

export default function Home() {
  return (
    <main className={styles.main}>
      <IngredientSelect />
    </main>
  );
}
