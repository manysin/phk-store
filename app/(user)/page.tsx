"use client";

import { FooterComponent } from "../components/home/FooterComponent";
import ProductListComponent from "../components/home/ProductListComponent";
import { SlideComponent } from "../components/home/SlideComponent";
import { StoreComponent } from "../components/home/StoreComponent";
import TopRateProductListComponent from "../components/home/TopRateProductListComponent";
import Shop from "./shop/page";

export default function Home() {
  return (
    <main className="">
      <section className="container">
        <SlideComponent />
        <StoreComponent />
        <Shop />
        <TopRateProductListComponent />
      </section>
    </main>
  );
}
