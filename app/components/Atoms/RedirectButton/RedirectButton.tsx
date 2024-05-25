"use client";
import { Button } from "@mui/material";
import Link from "next/link";

interface RedirectButtonProps {
  label: string;
  path: string;
}

export default function RedirectButton({ label, path }: RedirectButtonProps) {
  return (
    <Link href={path} passHref>
      <Button>{label}</Button>
    </Link>
  );
}
