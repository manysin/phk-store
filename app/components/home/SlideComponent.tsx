"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import slide1 from "../../../public/./slide/slide1.png";
import slide2 from "../../../public/./slide/1.png";
import slide3 from "../../../public/./slide/2.png";
import slide4 from "../../../public/./slide/3.png";

export function SlideComponent() {
  return (
    <main className="container">
      <section className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-16">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Image width={1500} height={1500} src={slide1} alt="..." />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Image width={1500} height={2000} src={slide2} alt="..." />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Image width={1500} height={1000} src={slide3} alt="..." />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Image width={1000} height={900} src={slide4} alt="..." />
          </div>
        </Carousel>
      </section>
    </main>
  );
}
