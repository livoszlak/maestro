"use client";
import { Link, Typography } from "@mui/material";
export default function Footer(): JSX.Element {
  return (
    <footer>
      <Typography variant="overline" sx={{ fontSize: "1rem" }}>
        &ldquo;Hallå maestro!&ldquo;
      </Typography>
      <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
        A TypeScript project by&nbsp;
        <Link
          className="maestros"
          variant="subtitle1"
          href="https://github.com/AntonBeYt/AntonBeYt"
        >
          Anton Bernhardsson Yttring
        </Link>
        &nbsp;&&nbsp;
        <Link
          className="maestros"
          variant="subtitle1"
          href="https://github.com/livoszlak"
        >
          Liv Oszlak
        </Link>
      </Typography>
      <Typography variant="overline">
        Using the <a href="https://www.thecocktaildb.com/">CocktailDB API</a>
      </Typography>
    </footer>
  );
}
