"use client";

import { StoreComponent } from "@/app/components/home/StoreComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "";

export default function Page() {
  const [stores, setStores] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);
  return (
    <main className="container">
      hello
      <section className="h-screen flex flex-wrap gap-6 justify-center mt-16 ">
        {/* {stores.map((store, index) => (
          <StoreComponent
            // onClick={() => router.push(`/shop/${product.id}`)}
            key={index}
            name={store.name}
            image={store.image}
          />
        ))} */}
      </section>
    </main>
  );
}
