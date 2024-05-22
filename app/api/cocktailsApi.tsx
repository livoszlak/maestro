const baseUrl: string = "https://www.thecocktaildb.com/api/json/v1/1/";
const ingredient: string = "Whiskey";
const DrinkID: string = "15300";

export type Cocktail = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};
export type Drinks = {
  drinks: Cocktail[];
};

export type Drink = {
  drinks: CocktailDetailed[];
};

export type CocktailDetailed = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
};

export async function fetchCocktails(): Promise<Drinks> {
  const response = await fetch(baseUrl + `filter.php?i=${ingredient}`);
  const data = await response.json();
  return data;
}

export async function fetchCocktail(): Promise<Drink> {
  const response = await fetch(baseUrl + `lookup.php?i=${DrinkID}`);
  const data = await response.json();
  return data;
}
