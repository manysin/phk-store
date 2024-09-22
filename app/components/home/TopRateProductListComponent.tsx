import React, { useEffect, useState } from "react";
import { FaCircleDot } from "react-icons/fa6";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart, FaRegHandPointUp } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";

type PropsType = {
  title: string;
  price: number;
  image: string;
  rate: number;
  onClick?: () => void;
};

export default function TopRateProductListComponent({
  title,
  price,
  image,
  rate,
  onClick,
}: PropsType) {
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(false);

  // Retrieve heart state from local storage when the component mounts
  useEffect(() => {
    const savedHeartState = localStorage.getItem(`heart-${title}`);
    if (savedHeartState === "true") {
      setIsHeartClicked(true);
    }
  }, [title]);

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click event from propagating to parent
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    handleIconClick(e);
    const newHeartState = !isHeartClicked;
    setIsHeartClicked(newHeartState);
    // Save heart state to local storage
    localStorage.setItem(`heart-${title}`, newHeartState.toString());
  };
  return (
    <section className="cursor-pointer" onClick={onClick}>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* {data.products.map((product, index) => (
     
        ))} */}

        <div
          className="border h-auto max-w-72 hover:border rounded-md hover:border-amber-400 flex"
        >
          <Image
            alt="Bonnie image"
            height="100"
            src={image}
            width="100"
            className=" rounded-lg "
          />
          <div className="flex items-center">
            <div className="px-6">
              <p className="font-medium line-clamp-1">{title}</p>
              <div className="flex items-center mt-1">
                <svg
                  className="h-4 w-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className=" rounded px-2 py-0.5 text-xs font-semibold text-cyan-800">
                  {rate}
                </span>
              </div>
              <div className="mt-3 flex gap-4">
                <FiShoppingCart
                  className="cursor-pointer"
                  onClick={handleIconClick}
                />
                {isHeartClicked ? (
                  <FaHeart
                    onClick={(e) => handleHeartClick(e)}
                    className="cursor-pointer text-red-400"
                  />
                ) : (
                  <LuHeart
                    onClick={(e) => handleHeartClick(e)}
                    className="cursor-pointer"
                  />
                )}
                <FaRegHandPointUp
                  className="cursor-pointer"
                  onClick={handleIconClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
