"use client";

import CardComponent from "@/app/components/card/CardComponent";
import { useRouter } from "next/navigation";
import data from "@/mock/popular-product.json";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products";

// why this page use Shop with uppercase ?? -> Because it in client side
// (Remember function of Client Side must be start with Uppercase), if not that will error when npm run build

type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  rate: string;
};

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    setProducts(data.products as Product[]); // Use data directly from the imported JSON file
  }, []);

  return (
    <main className="container">
      <section className="flex flex-wrap gap-6 justify-center mt-16 ">
        {products.map((product: any, index) => (
          <CardComponent
            onClick={() => router.push(`/shop/${product.id}`)}
            key={index}
            title={product.title}
            price={product.price}
            rate={product.rate}
            image={product.image}
          />
        ))}
      </section>
    </main>
  );
}