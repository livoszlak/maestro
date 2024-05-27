"use client";
import Image from "next/image";

export default function Header(): JSX.Element {
  return (
    <header>
      <Image
        src="/maestro.svg"
        alt="Maestro"
        layout="responsive"
        width={1027}
        height={315}
      />
    </header>
  );
}
