# Maestro!

**Maestro!** is a TypeScript project that uses Next.js, React, and MUI for the frontend. It's a web application that displays cocktails using the [CocktailDB API](https://www.thecocktaildb.com/api.php).

## Setup

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm run dev`.

### Dependencies

- @emotion/react ^11.11.4
- @emotion/styled ^11.11.5
- @mui/icons-material ^5.15.18
- @mui/material ^5.15.18
- js-confetti ^0.12.0
- next 14.2.3
- react ^18
- react-dom ^18

### Dev Dependencies

- @types/node ^20
- @types/react ^18
- @types/react-dom ^18
- eslint ^8
- eslint-config-next 14.2.3
- typescript ^5

### Authors

- [Anton Bernhardsson Yttring](https://github.com/AntonBeYt/AntonBeYt)
- [Liv Oschlag](https://github.com/livoszlak)

### API

This project uses the free and limited version of the [CocktailDB API](https://www.thecocktaildb.com/) with the following endpoints:

- [ingredient by name](www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka)
- [details by id](www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007)
