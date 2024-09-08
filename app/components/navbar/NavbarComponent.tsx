"use client";
import { Navbar, NavbarLink } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { menuList } from "./Menu";
import { BiChevronDown } from "react-icons/bi";
import { FaFacebook, FaRegHeart } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill, RiUserHeartLine } from "react-icons/ri";
import { PiLineVerticalLight } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { CategoryList } from "../home/CategoryListComponent";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export function NavbarComponent() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(menuList);

  return (
    <main className="bg-gray-900">
      <section className="bg-gray-900 font-semibold text-gray-100 py-3 container max-w-screen-2xl">
        <div className=" flex justify-between items-center flex-wrap">
          <h1 className="text-xl sm:p-8 md:p-0">Black Friday</h1>
          <h1 className="text-3xl">69% OFF</h1>
          <button
            type="button"
            className="bg-yellow-400 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-gray-100"
          >
            Shop Now <HiArrowNarrowRight className="mt-1" />
          </button>
        </div>
      </section>
      <section className="bg-blue-800">
        <div className="bg-blue-800 text-gray-100 py-4 container max-w-screen-2xl">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-sm">Welcome to PKH-Store</h1>
            <div className="flex gap-3 items-center">
              <h6 className="text-sm">Follow us: </h6>
              <IoLogoTwitter />
              <FaFacebook />
              <RiInstagramFill />
              <IoLogoYoutube />
              <PiLineVerticalLight className="mx-2" />
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <h6 className="text-sm">Eng</h6>
                  <BiChevronDown className="mt-1 ms-1" />
                </div>
                <div className="flex items-center">
                  <h6 className="text-sm">USD</h6>
                  <BiChevronDown className="mt-1 ms-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className=" text-gray-100" />
      <section className="bg-blue-800">
        <div className=" py-5 container max-w-screen-2xl">
          <div className="flex items-center justify-between ">
            <h1 className="text-gray-50 text-2xl font-bold w-56">PKH-STORE</h1>
            <div className="max-w-6xl w-full">
              <form className="mx-56 max-w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none"></div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full text-sm text-gray-900 h-10 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="Search..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm"
                  >
                    <IoSearch className="h-4 w-5 mb-0.5" />
                  </button>
                </div>
              </form>
            </div>
            <div className="flex text-white items-center gap-4">
              <TiShoppingCart className="h-6 w-6" />
              <FaRegHeart className="h-5 w-5" />
              <RiUserHeartLine className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-2">
        <Navbar>
          <Navbar.Brand>
            <CategoryList />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {menu.map((item, index) => (
              <NavbarLink
                className=""
                key={index}
                as={Link}
                active={item.path === pathname}
                href={item.path}
              >
                {item.name}
              </NavbarLink>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </section>
    </main>
  );
}
