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

export async function fetchCocks(): Promise<Drinks> {
  const response = await fetch(baseUrl + `filter.php?i=${ingredient}`);
  const data = await response.json();
  return data;
}
