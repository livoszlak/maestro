"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useCocktails } from "./hooks/useCocktails";
import { Cocktail, Drinks } from "./api/cocktailsApi";

export default function Home() {
  return <main className={styles.main}></main>;
}
