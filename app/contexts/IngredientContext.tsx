"use client";
import { createContext, useState, ReactNode, FC } from "react";

interface IngredientContextProps {
  ingredient: string;
  setIngredient: (ingredient: string) => void;
}

export const IngredientContext = createContext<
  IngredientContextProps | undefined
>(undefined);

export const IngredientProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ingredient, setIngredient] = useState<string>("");

  return (
    <IngredientContext.Provider value={{ ingredient, setIngredient }}>
      {children}
    </IngredientContext.Provider>
  );
};
