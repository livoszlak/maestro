"use client";
import { useState, useEffect } from "react";
import { fetchCocks } from "../api/cocktailsApi";

export const useCocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      const cocksFromApi = await fetchCocks();
      setCocktails(cocksFromApi);
    };

    getCocktails();
  }, []);
  return cocktails;
};
