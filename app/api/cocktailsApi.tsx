const baseUrl: string = "https://www.thecocktaildb.com/api/json/v1/1/";

export interface Cocktail {
  name: string;
  image: string;
  id: string;
}

export interface Drinks {
  drinks: ResponseBase[];
}

export interface Drink {
  drinks: DetailedResponse[];
}

export interface IngredientMeasurePair {
  measure: string | null | undefined;
  ingredient: string | null | undefined;
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

export type ResponseBase = Pick<
  DetailedResponseBase,
  "strDrink" | "strDrinkThumb" | "idDrink"
>;

export type DetailedResponse = DetailedResponseBase & {
  [key in IngredientKey | MeasureKey]?: string | null;
};

export async function fetchCocktails(ingredient: string): Promise<Cocktail[]> {
  const response = await fetch(baseUrl + `filter.php?i=${ingredient}`);
  const data: Drinks = await response.json();
  const formattedData = formatCocktails(data.drinks);
  console.log(formattedData);
  return formattedData;
}

export async function fetchCocktail(id: string): Promise<CocktailDetails> {
  const response = await fetch(baseUrl + `lookup.php?i=${id}`);
  const data: Drink = await response.json();
  const formattedData = formatCocktailDetails(data.drinks[0]);
  return formattedData;
}

const formatCocktails = (cocktails: ResponseBase[]): Cocktail[] => {
  const testReturn: Cocktail[] = [];

  for (let i: number = 0; i < cocktails.length; i++) {
    testReturn.push({
      name: cocktails[i].strDrink,
      image: cocktails[i].strDrinkThumb,
      id: cocktails[i].idDrink,
    });
  }
  return testReturn;
};

const formatCocktailDetails = (cocktail: DetailedResponse): CocktailDetails => {
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
