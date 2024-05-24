const baseUrl: string = "https://www.thecocktaildb.com/api/json/v1/1/";
const ingredient: string = "Whiskey";

export type Cocktail = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export type Drinks = {
  drinks: Cocktail[];
};

export type Drink = {
  drinks: DetailedResponse[];
};

export type IngredientMeasurePair = {
  measure: string;
  ingredient: string;
};

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

export type DetailedResponse = {
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
    const ingredientKey = `strIngredient${i}` as keyof DetailedResponse;
    const measureKey = `strMeasure${i}` as keyof DetailedResponse;

    if (cocktail[ingredientKey] && cocktail[measureKey]) {
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
