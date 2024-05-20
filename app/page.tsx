"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useCocktails } from "./hooks/useCocktails";

export default function Home() {
  const cocktails = useCocktails();

  console.log(cocktails);
  return <main className={styles.main}></main>;
}
