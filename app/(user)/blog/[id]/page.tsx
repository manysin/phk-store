import React, { useEffect } from 'react'


import Image from "next/image";
import Link from 'next/link';
import postData from "../mock/blog"
type Props = {
  params: { id: string };
};
export default function page(props: Props) {
  const {id}=props.params;
  const post = postData.filter((data)=>data.id == id);
  const {title,author,category,date,body,image} = post[0];
  return (
    <div className='flex flex-col justify-center items-center'>
            <div className="lg:w-1/2 md:w-3/4 sm:w-4/5"> 
            <Link href={`/blog/${id}`}>
              <Image
                src={"/post/"+image}
                alt="Bonnie image"
                width={0}
                height={0}
                sizes="100%"
                className="w-full my-3 "
              />
            </Link>

            <Link href={`/blog/${id}`} className='lg:text-3xl md:text-xl font-bold hover:text-yellow-300 duration-300'>{title}</Link>
            <div>
              <span >
                <Link href={`/blog/${id}`} className="text-xs me-5 hover:text-yellow-300 text-gray-600 duration-300 relative after:content-[''] after:absolute after:top-[9px] after:right-[-15px] after:border after:w-[10px] after:border-black">{author}</Link>
              </span>
              <span>
                <Link href={`/blog/${id}`} className="text-xs me-5 hover:text-yellow-300 text-gray-600 duration-300 relative after:content-[''] after:absolute after:top-[9px] after:right-[-15px] after:border after:w-[10px] after:border-black">{category}</Link>
              </span>
              <span className='text-xs me-4 hover:text-yellow-300 duration-300 text-gray-600'>
                {date}
              </span>
            </div>
            <div className='text-xs mt-3 text-gray-600'>
              {body.map((text,index)=>(
                <div key={index} className='mb-4'>{text}</div>
              ))}
            </div>
            </div>
    </div>
  )
}
