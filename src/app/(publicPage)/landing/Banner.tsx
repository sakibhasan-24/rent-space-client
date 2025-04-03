import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Banner image"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black opacity-60 "></div>
    </div>
  );
}
