import React from "react";
import data from "@/mock/popular-product.json";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHandPointUp } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

export default function ProductListComponent() {
  return (
    <section className="pt-8">
      <div className="flex justify-between pb-3">
        <div className="flex items-center gap-3">
          <FaCircleDot className="text-yellow-300 w-3 h-3 mt-0.5" />
          <h1 className="text-center font-bold text-2xl text-blue-900">
            New Release Products
          </h1>
        </div>
        <div className="border flex">
          <button type="button" className="hover:bg-yellow-200">
            <RiArrowDropLeftLine className="w-6 h-6 text-gray-500 " />
          </button>
          <button type="button" className="hover:bg-yellow-200">
            <RiArrowDropRightLine className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
      <hr className="pb-16" />
      <div className="flex flex-wrap gap-6 justify-center">
        {data.products.map((product, index) => (
          <div
            key={index}
            className="bg-blue-100 h-auto max-w-56 hover:border rounded-md hover:border-amber-400 pb-5"
          >
            <Image
              alt="Bonnie image"
              height="300"
              src={product.image}
              width="300"
              className=" rounded-lg "
            />
            <div className="py-1 px-6">
              <p className="font-semibold line-clamp-1 mb-3">{product.title}</p>
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                  {product.rate}
                </span>
              </div>
              <div className="mt-3 flex gap-4">
                <FiShoppingCart />
                <LuHeart />
                <FaRegHandPointUp />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
