"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import slide1 from "../../../public/slide1.png";
import slide2 from "../../../public/slider2.png";

export function SlideComponent() {
  return (
    <main className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-16">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image width={1500} height={1500} src={slide1} alt="..." />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image width={1500} height={1500} src={slide1} alt="..." />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image width={1500} height={1500} src={slide1} alt="..." />
        </div>
      </Carousel>
    </main>
  );
}
