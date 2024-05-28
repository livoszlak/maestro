"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header>
      <Link href={"/"}>
        <Image
          src="/maestro-orange.svg"
          alt="Maestro"
          layout="responsive"
          width={1027}
          height={315}
        />
      </Link>
    </header>
  );
}
