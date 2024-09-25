import Image from "next/image";
import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import service from "../../../public/service/service.png";
import service1 from "../../../public/service/service1.png";

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
        <hr className="pb-20" />
        <section>
          <div className="flex justify-between">
            <Image
              src={service}
              alt=""
              width={600}
              height={600} />
            <div className="ps-32 flex items-center">
              <p className="font-semibold text-gray-500 text-xl leading-relaxed">
                To make sure our service is best for the customers, we have collaborated with the government to regulate all kinds of
                businesses. Anyone who would like to own their business on our web e-commerce must register with the government first.
                They have to make sure their stores are legal.
              </p>

            </div>
          </div>
        </section>
      </section>
      <section className="pt-24">
        <h1 className="text-center font-bold text-4xl text-blue-900">
          Become Our Best Partner
        </h1>
        <div className="flex flex-wrap gap-6 justify-center py-20">
          <div className=" bg-white shadow-sm h-60 max-w-96 w-72 rounded-md">
            <Image
              src={service1}
              alt=""
              width={500}
              height={500} />
          </div>
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
