type Ingredient = {
  apiKey: string;
  name: string;
};

// Ingredient array for the select component on index, with API compliant keys that are passed to the fetch function.

export const ingredients: Ingredient[] = [
  { apiKey: "Vodka", name: "Vodka" },
  { apiKey: "Gin", name: "Gin" },
  { apiKey: "Tequila", name: "Tequila" },
  { apiKey: "Whiskey", name: "Whiskey" },
  { apiKey: "Bourbon", name: "Bourbon" },
  { apiKey: "Scotch", name: "Scotch" },
  { apiKey: "Light_rum", name: "Light rum" },
  { apiKey: "Dark_rum", name: "Dark rum" },
  { apiKey: "Brandy", name: "Brandy" },
  { apiKey: "Cognac", name: "Cognac" },
  { apiKey: "Grand_marnier", name: "Grand marnier" },
  { apiKey: "Amaretto", name: "Amaretto" },
  { apiKey: "Campari", name: "Campari" },
  { apiKey: "Triple_sec", name: "Triple sec" },
  { apiKey: "Green_Chartreuse", name: "Green Chartreuse" },
  { apiKey: "Yellow_Chartreuse", name: "Yellow Chartreuse" },
  { apiKey: "Maraschino_Liqueur", name: "Maraschino Liqueur" },
  { apiKey: "Sweet_vermouth", name: "Sweet vermouth" },
  { apiKey: "Dry_vermouth", name: "Dry vermouth" },
  { apiKey: "Blue_curacao", name: "Blue curacao" },
];
