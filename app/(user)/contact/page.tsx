import React from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function page() {
  return <div className="container">
    
<div className="flex justify-center items-center w-auto bg-white">
	<div className="container mx-auto my-4 px-4 lg:px-20">

		<div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			<div className="flex">
				<h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
			</div>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="First Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
				<input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*" />
        </div>
				<div className="my-4">
					<textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4">
					<button type="submit" className="uppercase text-sm font-bold tracking-wide bg-blue-800 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
            Send Message
          </button>
				</div>
			</div>

			<div
				className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-800 rounded-2xl">
				<div className="flex flex-col text-white">
					<h1 className="font-bold uppercase text-4xl my-4">We’d Love to Hear from You!</h1>
					<p className="text-gray-400">At pkh-store, we value our customers and are here to help you with any questions or concerns. Whether you are interested in our latest tech products, need assistance with an order, or just want to share your feedback, we’re just a message away. Our team is dedicated to providing quick and friendly support, so do not hesitate to get in touch. Let’s connect and make your experience with pkh-store even better!
					</p>

					<div className="flex my-4 w-2/3 lg:w-1/2">
						<div className="flex flex-col">
							<i className="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Main Office</h2>
              <p className="text-gray-400">Oknha Mong Reththy St.(1928), Phnom Penh</p>
            </div>
          </div>
          
          <div className="flex my-4 w-3/4">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Contact With</h2>
              <p className="text-gray-400">Tel : 094136572</p>
              <p className="text-gray-400">Email : productkhmerstore@email.com</p>
            </div>
          </div>
          
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <Link href="https://web.facebook.com/profile.php?id=61565361773681"><FaFacebook className="text-[30px] mx-2" /></Link>
            <Link href="https://www.instagram.com/product_khmer_store?igsh=MWp1aTExZ3o2YWF6ZA%3D%3D&utm_source=qr"><RiInstagramFill className="text-[30px] mx-2" /></Link>
            <Link href="https://www.youtube.com/@ProductKhmerStore"><IoLogoYoutube className="text-[30px] mx-2" /></Link>
          </div>
        </div>
      </div>
    </div>
</div>


  </div>;
}
