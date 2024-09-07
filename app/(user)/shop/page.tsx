"use client";

import CardComponent from "@/app/components/card/CardComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products";

// why this page use Page with uppercase ?? -> Because it in client side
// (Remember function of Client Side must be start with Uppercase), if not that will error when npm run build

export default function Page() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {console.log(data);setProducts(data)});
  }, []);
  return (
    <main className="container">
      <section className="h-screen flex flex-wrap gap-6 justify-center mt-16 ">
        {products.map((product: any, index) => (
          <CardComponent
            onClick={() => router.push(`/shop/${product.id}`)}
            key={index}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </section>
    </main>
  );
}
