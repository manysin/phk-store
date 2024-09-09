import Image from "next/image";
import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

export default function page() {
  return (
    <main className="container py-20">
      <section>

        <div className="flex justify-between pb-3">
          <div className="flex items-center gap-3">
            <FaCircleDot className="text-yellow-300 w-3 h-3 mt-0.5" />
            <h1 className="text-center font-bold text-2xl text-blue-900">
              Welcome to PKH-STORE Services
            </h1>
          </div>
        </div>
        <hr className="pb-16" />
        <section>
          <div className="flex justify-between">
            <Image
              src=""
              alt=""
              width={100}
              height={100} />
            <p>To make sure our service is best for the customers, we have collabrated with the govenment to about all kinds of businesses.
              Anyone would like to own their business on our web e-commerce must register with the govenment first. They have to make sure their store are legally.</p>
          </div>
        </section>
      </section>
      <section className="pt-16">
        <h1 className="text-center font-bold text-2xl text-blue-900">
          Become Our Best Partner
        </h1>
        <div className="flex flex-wrap gap-6 justify-center pt-12">
          <div className=" bg-white shadow-sm h-60 max-w-96 w-72 rounded-md">
            hi
          </div>
          <div className=" bg-white shadow-sm h-60 max-w-96 w-72 rounded-md">
            hi
          </div>
          <div className=" bg-white shadow-sm h-60 max-w-96 w-72 rounded-md">
            hi
          </div>
        </div>
      </section>
    </main>
  );
}
