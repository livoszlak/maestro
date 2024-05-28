"use client";
import Image from "next/image";

export default function Loading(): JSX.Element {
  return (
    <div className="loading">
      <Image
        src="/shaker.svg"
        alt="Loading"
        layout="responsive"
        width={300}
        height={300}
      />
    </div>
  );
}
