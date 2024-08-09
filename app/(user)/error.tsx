"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import pic from "../../public/error.png";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex justify-center mt-32">
      <div>
        <Image
          src={pic}
          width={400}
          height={400}
          alt="error pic"
          className=""
        />
        <p className="py-2 text-2xl text-center font-semibold text-gray-700">
          Something went wrong!
        </p>
        <p className=" mb-8 text-center font-medium text-gray-700">
          The page you are looking for might have been removed
          <br />
          had its name changed or is temporarily unavailable.
        </p>
        <div className="flex justify-center">
          <Button className="bg-blue-600 px-3 text-white font-medium rounded-3xl">
            Back home
          </Button>
          {/* <Button
            className="rounded-3xl bg-red-600 text-white font-medium"
            onClick={reset}
          >
            Try again
          </Button> */}
        </div>
      </div>
    </main>
  );
}
