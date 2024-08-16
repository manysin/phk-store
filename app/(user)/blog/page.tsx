"use client"; // Ensure this component is treated as a client component
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import postData from "../../../mock/blog";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      {postData.map((data, index) => (
        <div className="lg:w-1/2 md:w-3/4 sm:w-4/5" key={index}>
          <Link href={`/blog/${data.id}`}>
            <Image
              src={"/post/" + data.image}
              alt="Bonnie image"
              width={0}
              height={0}
              sizes="100%"
              className="w-full my-3 "
            />
          </Link>

          <Link
            href={`/blog/${data.id}`}
            className="lg:text-3xl md:text-xl font-bold hover:text-yellow-300 duration-300"
          >
            {data.title}
          </Link>
          <div>
            <span>
              <Link
                href={`/blog/${data.id}`}
                className="text-xs me-5 hover:text-yellow-300 text-gray-600 duration-300 relative after:content-[''] after:absolute after:top-[9px] after:right-[-15px] after:border after:w-[10px] after:border-black"
              >
                {data.author}
              </Link>
            </span>
            <span>
              <Link
                href={`/blog/${data.id}`}
                className="text-xs me-5 hover:text-yellow-300 text-gray-600 duration-300 relative after:content-[''] after:absolute after:top-[9px] after:right-[-15px] after:border after:w-[10px] after:border-black"
              >
                {data.category}
              </Link>
            </span>
            <span className="text-xs me-4 hover:text-yellow-300 duration-300 text-gray-600">
              {data.date}
            </span>
          </div>
          <div className="text-xs mt-3 text-gray-600 line-clamp-3">
            {data.body[0]}
          </div>
          <button
            type="button"
            onClick={() => router.push(`/blog/${data.id}`)}
            className="text-yellow-300 border-2 border-yellow-300 px-4 py-1 text-sm mt-4 rounded hover:bg-yellow-300 hover:text-white duration-500"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
