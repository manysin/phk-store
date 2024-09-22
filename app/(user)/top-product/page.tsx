"use client";

import { useRouter } from "next/navigation";
import data from "@/mock/top-rate-product.json";
import React, { useEffect, useState } from "react";
import TopRateProductListComponent from "@/app/components/home/TopRateProductListComponent";
import { FaCircleDot } from "react-icons/fa6";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

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

export default function TopProduct() {
    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() => {
        setProducts(data.products as Product[]); // Use data directly from the imported JSON file
    }, []);

    return (
        <main className="container pb-24 pt-6">
            <div className="flex justify-between pb-3">
                <div className="flex items-center gap-3">
                    <FaCircleDot className="text-yellow-300 w-3 h-3 mt-0.5" />
                    <h1 className="text-center font-bold text-2xl text-blue-900">
                        Top Rate Products
                    </h1>
                </div>
                <div className="border flex">
                    <button type="button" className="hover:bg-yellow-200">
                        <RiArrowDropLeftLine className="w-6 h-6 text-gray-500 " />
                    </button>
                    <button type="button" className="hover:bg-yellow-200">
                        <RiArrowDropRightLine className="w-6 h-6 text-gray-500" />
                    </button>
                </div>
            </div>
            <hr className="pb-16" />
            <section className="flex flex-wrap gap-6 justify-center">
                {products.map((product: any, index) => (
                    <TopRateProductListComponent
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