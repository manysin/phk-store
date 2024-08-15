"use client";

import { Footer } from "flowbite-react";
import Image from "next/image";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "@/public/pkh-logo.png";

export function FooterComponent() {
  return (
    <Footer className="bg-blue-900 ">
      <div className="w-full">
        <div className="container">
          <div className="flex justify-between container py-10 flex-wrap">
            <div className="">
              <Image
                alt="Bonnie image"
                height="100"
                src={logo}
                width="100"
                className="pb-4"
              />
              <h1 className="font-bold text-gray-50 text-xl">PKH-STORE</h1>
            </div>
            <div>
              <Footer.Title title="Features" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Service</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">Shop</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="download" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <div className="container flex justify-between">
            <Footer.Copyright
              className="text-white"
              href="#"
              by="PKH-STORE"
              year={2024}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" className="text-white" icon={BsFacebook} />
              <Footer.Icon href="#" className="text-white" icon={BsInstagram} />
              <Footer.Icon href="#" className="text-white" icon={BsTwitter} />
              <Footer.Icon href="#" className="text-white" icon={BsGithub} />
              <Footer.Icon href="#" className="text-white" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
