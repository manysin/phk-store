

import { CardProductDetailComponent } from "@/app/components/card/CardDetailComponent";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import data from "@/mock/popular-product.json"; // Import your JSON data

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

// Find product by ID in JSON data
const getProductById = (id: string) => {
    return data.products.find((product) => product.id === id);
};

// Generate Dynamic Metadata
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata // ResolvingMetadata used to take metadata from parents
): Promise<Metadata> {
    const id = params.id;
    const product = getProductById(id);

    if (!product) {
        return {
            title: "Product not found",
            description: "This product does not exist.",
        };
    }

    return {
        title: product.title,
        description: product.title,
        openGraph: {
            images: [product.image],
        },
    };
}

export default async function Page(props: Props) {
    const product = getProductById(props.params.id);

    if (!product) {
        return (
            <div className="h-screen grid place-content-center">
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <CardProductDetailComponent
          id={props.params.id}

            title={product.title || "No title"}
            description={product.title || "No description"}
            image={
                product.image ||
                "https://flowbite-react.com/images/products/apple-watch.png"
            }
            price={product.price || "N/A"}
            rate={product.rate || "N/A"}
        />
    );
}
