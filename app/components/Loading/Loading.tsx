"use client";

import Image from "next/image";

export default function Loading(): JSX.Element {
  return (
    <div className="loading-wrapper">
      <div className="loading">
        <Image src="/shaker.svg" alt="Loading" width={300} height={300} />
      </div>
    </div>
  );
}
