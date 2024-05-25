import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IngredientProvider } from "./contexts/IngredientContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maestro!",
  description: "- Ge mig något gôtt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <IngredientProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </IngredientProvider>
  );
}
