"use client";

import { SlideComponent } from "../components/home/SlideComponent";
import { StoreComponent } from "../components/home/StoreComponent";
import Shop from "./shop/page";
import TopProduct from "./top-product/page";

export default function Home() {

  return (
    <main className="">
      <section className="">
        <SlideComponent />
        <StoreComponent />
        <Shop />
        <TopProduct />
      </section>
    </main>
  );
}
