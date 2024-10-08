// import { CardProductDetailComponent } from "@/app/components/card/CardDetailComponent";
// import { Metadata, ResolvingMetadata } from "next";
// import React from "react";

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// // Server component fetching data
// const ENDPOINT = "https://fakestoreapi.com/products/";
// const getDate = async (id: string) => {
//   const res = await fetch(`${ENDPOINT}${id}`); // As in nextJs has the defual caching, so when we want to remove caching -> code below

//   // const res = await fetch(`${ENDPOINT}${id}`, { cache: "no-store" }); // {cache: ""no-store"} this mean remove caching
//   // const res = await fetch(`${ENDPOINT}${id}`, { next: { revalidate: 10 } }); // revalidate is use for refetch data

//   // However in this page is need to cach data because it is the dynamic rendering without interaction with the user

//   const data = await res.json();
//   return data;
// };

// // Generate Dynamic Matadata
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata //  ResolvingMetadata used to take matadata from parents
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
//     (res) => res.json()
//   );

//   // optionally access and extend (rather than replace) parent metadata
//   // const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     description: product.description,
//     openGraph: {
//       images: product.image,
//     },
//   };
// }

// export default async function page(props: Props) {
//   let data = await getDate(props.params.id);
//   return (
//     <div className="h-screen grid place-content-center">
//       <CardProductDetailComponent
//         title={data?.title || "No title"}
//         description={data?.description || "No description"}
//         image={
//           data?.image ||
//           "https://flowbite-react.com/images/products/apple-watch.png"
//         }
//       />
//     </div>
//   );
// }



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
