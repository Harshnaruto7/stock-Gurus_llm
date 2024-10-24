"use client";

import Image from "next/image";
import React from "react";



const Hero = () => {
  return (
    <div className="flex flex-col mt-10 overflow-hidden lg:flex-row">
    {/* Left side: "Stock Gurus" takes 50% of the screen */}
    <div className="flex justify-center items-center w-1/2 text-black font-bold text-8xl">
      {/* Removed the text-lg class from here */}
      <span>Stock Gurus</span>
    </div>

    {/* Right side: Image takes 50% of the screen */}
    <div className="flex justify-center items-center w-1/2">
      <Image
        src="/pic/product-school-XZkk5xT8Xrk-unsplash.jpg"
        alt="Picture of the Background"
        width={800}
        height={600}
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="rounded-2xl w-full h-full"
      />
    </div>
  </div>
  );
};

export default Hero;
