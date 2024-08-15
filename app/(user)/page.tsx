"use client";

import ProductListComponent from "../components/home/ProductListComponent";
import { SlideComponent } from "../components/home/SlideComponent";
import { StoreComponent } from "../components/home/StoreComponent";

export default function Home() {
  return (
    <main className="container">
      <section className="">
        <SlideComponent />
        <StoreComponent />
        <ProductListComponent />
      </section>
    </main>
  );
}
