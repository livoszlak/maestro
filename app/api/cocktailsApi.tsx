const baseUrl: string = "https://www.thecocktaildb.com/api/json/v1/1/";

// Type for data initially received in fetchCocktail
export interface RawCocktailDetails {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  [key: string]: string | null;
}

// Type for data initially received in fetchCocktails
export type RawCocktail = Pick<
  RawCocktailDetails,
  "idDrink" | "strDrink" | "strDrinkThumb"
> & {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

// Type for transforming keys on data received in fetchCocktails
export type Cocktail = {
  id: string;
  name: string;
  image: string;
};

// Type for formatting of ingredient and measure properties received in fetchCocktail
export interface IngredientMeasurePair {
  measure: string | null;
  ingredient: string | null;
}

// Type for transforming keys on data received in fetchCocktail
export type CocktailDetails = {
  id: string;
  name: string;
  type: string;
  glass: string;
  instructions: string;
  image: string;
  ingredients: IngredientMeasurePair[];
};

// Literal type for helping with formatting and inserting data into the IngredientMeasurePair array correctly
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

// Literal type for same use case as IngredientKey
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

// Fetches all cocktails that match the selected ingredient, and returns an array of formatted Cocktails
export async function fetchCocktails(ingredient: string): Promise<Cocktail[]> {
  const response = await fetch(`${baseUrl}filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.drinks.map(formatCocktail);
}

// Fetches details about selected cocktail and returns a formatted object of cocktail details
export async function fetchCocktail(id: string): Promise<CocktailDetails> {
  const response = await fetch(`${baseUrl}lookup.php?i=${id}`);
  const data = await response.json();
  return formatCocktailDetails(data.drinks[0]);
}

// Formats raw data from fetchCocktail for better named keys
function formatCocktail(cocktail: RawCocktailDetails): Cocktail {
  return {
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    image: cocktail.strDrinkThumb,
  };
}

// Formats raw data from fetchCocktails for better named keys
function formatCocktailDetails(cocktail: RawCocktailDetails): CocktailDetails {
  const ingredients: IngredientMeasurePair[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}` as IngredientKey;
    const measureKey = `strMeasure${i}` as MeasureKey;

    if (cocktail[ingredientKey]) {
      ingredients.push({
        ingredient: cocktail[ingredientKey],
        measure: cocktail[measureKey],
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
    ingredients,
  };
}
