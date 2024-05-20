const baseUrl: string = "https://www.thecocktaildb.com/api/json/v1/1/";
const ingredient: string = "Whiskey";

export async function fetchCocks() {
  const response = await fetch(baseUrl + `filter.php?i=${ingredient}`);
  const data = await response.json();
  return data;
}
