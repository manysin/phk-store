"use client";

import CardComponent from "@/app/components/card/CardComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { blogData } from "../blog/mock/blog";

const ENDPOINT = "https://fakestoreapi.com/products";

export default function Page() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log("blogData", blogData);
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
