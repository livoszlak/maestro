const baseUrl: string = "https://www.thecocktaildb.com/api/json/v1/1/";
const ingredient: string = "Whiskey";

export interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface Drinks {
  drinks: Cocktail[];
}

export interface Drink {
  drinks: DetailedResponse[];
}

export interface IngredientMeasurePair {
  measure: string;
  ingredient: string;
}

export type IngredientMeasures = IngredientMeasurePair[];

export type CocktailDetails = {
  id: string;
  name: string;
  type: string;
  glass: string;
  instructions: string;
  image: string;
  ingredients: IngredientMeasures;
};

type IngredientKey = `strIngredient${
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15}`;
type MeasureKey = `strMeasure${
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15}`;

export interface DetailedResponseBase {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
}

export type DetailedResponse = DetailedResponseBase & {
  [key in IngredientKey | MeasureKey]?: string | null;
};

export async function fetchCocktails(): Promise<Drinks> {
  const response = await fetch(baseUrl + `filter.php?i=${ingredient}`);
  const data: Drinks = await response.json();
  return data;
}

export async function fetchCocktail(id: string): Promise<CocktailDetails> {
  const response = await fetch(baseUrl + `lookup.php?i=${id}`);
  const data: Drink = await response.json();
  const formattedData = formatCocktail(data.drinks[0]);
  return formattedData;
}

const formatCocktail = (cocktail: DetailedResponse): CocktailDetails => {
  let ingredients: IngredientMeasurePair[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}` as IngredientKey;
    const measureKey = `strMeasure${i}` as MeasureKey;

    if (
      cocktail[ingredientKey] &&
      cocktail[measureKey] &&
      cocktail[ingredientKey] !== "null" &&
      cocktail[measureKey] !== "null"
    ) {
      ingredients.push({
        measure: cocktail[measureKey],
        ingredient: cocktail[ingredientKey],
      });
    }
  }

  return {
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    type: cocktail.strAlcoholic,
    glass: cocktail.strGlass,
    instructions: cocktail.strInstructions,
    image: cocktail.strDrinkThumb,
    ingredients: ingredients,
  };
};
