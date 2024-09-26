"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { count, log } from "console";
import { Toast } from "flowbite-react";

const Page = () => {
  const router = useRouter();
  const [cartItem, setCartItem] = useState<any[]>([]);
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [discounted, setDiscounted] = useState<number>(0);
  const [tax, setTax] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [code, setCode] = useState<string>("");
  function handleCodeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCode(event.target.value);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data: any[] = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items") || "[]")
        : [];
      setCartItem(data);
    }
  }, []);
  useEffect(() => {
    calculateOriginalPrice();
  }, [cartItem, discounted]);

  function calculateOriginalPrice() {
    let price = 0;
    cartItem.forEach((item) => {
      price += item.price * item.quantity;
    });
    const totalPrice = price - (price * discounted) / 100 + tax;
    setTotal(totalPrice);
    setOriginalPrice(price);
    localStorage.setItem(
      "payment",
      JSON.stringify({ originalPrice: originalPrice, discounted: discounted ,tax:tax,total:total})
    );
  }
  function checkCode() {
    if (code === "pkh-store") {
      setDiscounted(20);
      calculateOriginalPrice();
    }
  }
  function removeItems(id: any) {
    const index = cartItem.findIndex((item) => item.id == id);
    cartItem.splice(index, 1);
    setCartItem([...cartItem]);
    calculateOriginalPrice();
    localStorage.setItem("items", JSON.stringify(cartItem));
  }
  function incrementQuantity(id: any) {
    // Update the cart items
    const updatedCart = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    // Set the updated cart state
    setCartItem(updatedCart);

    // Store the updated cart in localStorage
    localStorage.setItem("items", JSON.stringify(updatedCart));

    // Recalculate the original price
    calculateOriginalPrice();
  }

  function decrementQuantity(id: any) {
    setCartItem((perv) =>
      perv.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
    calculateOriginalPrice();
    localStorage.setItem("items", JSON.stringify(cartItem));
  }
  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cartItem.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <Link href="#" className="shrink-0 md:order-1">
                            <Image
                              className="dark:hidden"
                              src={item.image}
                              alt="imac image"
                              width={100} // Set width in pixels
                              height={100} // Set height in pixels
                            />
                          </Link>

                          <label htmlFor="counter-input" className="sr-only">
                            Choose quantity:
                          </label>
                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <button
                                onClick={() => {
                                  decrementQuantity(item.id);
                                }}
                                type="button"
                                id="decrement-button"
                                data-input-counter-decrement="counter-input"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg
                                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 2">
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h16"
                                  />
                                </svg>
                              </button>
                              <input
                                type="text"
                                id="counter-input"
                                data-input-counter
                                className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                placeholder=""
                                value={item.quantity}
                                required
                              />
                              <button
                                onClick={() => {
                                  incrementQuantity(item.id);
                                }}
                                type="button"
                                id="increment-button"
                                data-input-counter-increment="counter-input"
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg
                                  className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 18">
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 1v16M1 9h16"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-gray-900 dark:text-white">
                                ${item.price}
                              </p>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <Link
                              href={`/shop/${item.id}`}
                              className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                              {item.title}
                            </Link>
                            <p>{item.description}</p>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => {
                                  removeItems(item.id);
                                }}
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                <svg
                                  className="me-1.5 h-5 w-5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24">
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${originalPrice}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Discount
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        {discounted}%
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${tax}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      ${total}
                    </dd>
                  </dl>
                </div>

                <button 
                  type="button"
                  onClick={()=>{
                    calculateOriginalPrice();
                    router.push("/payment");
                  }}
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    href="/shop"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      value={code}
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      onChange={handleCodeChange}
                    />
                  </div>
                  <button
                    onClick={() => {
                      checkCode();
                    }}
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
