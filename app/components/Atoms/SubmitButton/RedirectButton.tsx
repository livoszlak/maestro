"use client";
import { Button } from "@mui/material";
import Link from "next/link";

export default function RedirectButton(label: string, path: string) {
  return (
    <Link href={path}>
      <Button>{label}</Button>
    </Link>
  );
}
