import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="container">
      <section>
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            Welcome to our PKH-STORE
          </h1>
          <div>
            <Image
              alt="Bonnie image"
              height="140"
              src=""
              width="140"
              className="mb-3 rounded-3xl shadow-lg"
            />
          </div>
        </div>
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
