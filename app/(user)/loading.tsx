import Image from "next/image";
import React from "react";
import gif from "../../public/gif.gif";
export default function Loading() {
  return (
    <div className="flex mt-24 justify-center">
      <Image src={gif} className="" width={200} height={200} alt="Loading..." />
    </div>
  );
}
