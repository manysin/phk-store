"use client";

import Image from "next/image";
import store1 from "../../../public/store/1.png";
import store2 from "../../../public/store/2.png";
import store3 from "../../../public/store/3.png";
import store4 from "../../../public/store/logo3.png";
import store5 from "../../../public/store/logo5.png";
import store6 from "../../../public/store/6.png";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { FaRegDotCircle } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

export function StoreComponent() {
  return (
    <section className="pt-20">
      <div className="flex justify-between pb-3">
        <div className="flex items-center gap-3">
          <FaCircleDot className="text-yellow-300 w-3 h-3 mt-0.5" />
          <h1 className="text-center font-bold text-2xl text-blue-900">
            Popular Store
          </h1>
        </div>
        <div className="border flex">
          <button type="button" className="hover:bg-yellow-200">
            <RiArrowDropLeftLine className="w-6 h-6 text-gray-500" />
          </button>
          <button type="button" className="hover:bg-yellow-200">
            <RiArrowDropRightLine className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
      <hr className="pb-16" />

      <div className="flex gap-16 justify-center flex-wrap">
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height="140"
            src={store1}
            width="140"
            className="mb-3 rounded-3xl shadow-lg"
          />
          <h5 className="mb-1 text-lg font-medium text-gray-800 dark:text-white mt-2">
            Rimberio Beg
          </h5>
        </div>
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height="140"
            src={store2}
            width="140"
            className="mb-3  rounded-3xl shadow-lg"
          />
          <h5 className="mb-1 text-lg font-medium text-gray-800 dark:text-white  mt-2">
            Fashion Shop
          </h5>
        </div>
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height="140"
            src={store3}
            width="140"
            className="mb-3 rounded-3xl shadow-lg"
          />
          <h5 className="mb-1 text-lg font-medium text-gray-800 dark:text-white mt-2">
            Fauget Laundry
          </h5>
        </div>
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height="140"
            src={store4}
            width="140"
            className="mb-3 rounded-3xl shadow-lg"
          />
          <h5 className="mb-1 text-lg font-medium text-gray-800 dark:text-white mt-2">
            Fashion Store
          </h5>
        </div>
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height="140"
            src={store5}
            width="140"
            className="mb-3 rounded-3xl shadow-lg"
          />
          <h5 className="mb-1 text-lg font-medium text-gray-800 dark:text-white mt-2">
            Borcelle
          </h5>
        </div>
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height="140"
            src={store6}
            width="140"
            className="mb-3 rounded-3xl shadow-lg"
          />
          <h5 className="mb-1 text-lg font-medium text-gray-800 dark:text-white mt-2">
            Borcelle Hijah
          </h5>
        </div>
      </div>
    </section>
  );
}
