"use client";

import CardComponent from "@/app/components/home/CardComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products";

// why this page use Page with uppercase ?? -> Because it in client side
// (Remember function of Client Side must be start with Uppercase), if not that will error when npm run build

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main className="container py-16">
      <div className="flex justify-between mb-5">
        <h1 className="font-bold text-2xl text-blue-950">OUR BEST SELLERS</h1>
        <p className="bg-yellow-100 hover:bg-yellow-200 px-2 py-2 rounded-md font-medium text-gray-700 text-sm flex items-center">
          View more
        </p>
      </div>
      <section className="flex gap-6 flex-wrap justify-center">
        {products.map((product: any, index) => (
          <>
            {index < 5 ? (
              <CardComponent
                onClick={() => router.push(`/service/${product.id}`)}
                key={index}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ) : (
              ""
            )}
          </>
        ))}
      </section>
    </main>
  );
}
