import React from "react";
import "./sidebar.css"
import Image from "next/image";

interface StoredUsers{
  userName:string|null,email:string|null,password:string|null,profile:string

}

export default function SidebarComponent({ onHandleLogout,onSidebarToggle,storedUsers }: { onHandleLogout:()=>void,onSidebarToggle: () => void,storedUsers:StoredUsers }) {
  
  


  return <div>
<div 
  className="background w-full h-screen fixed z-10 right-0 top-0" 
  onClick={(e)=>{(e.target as HTMLElement).classList.contains('background') && onSidebarToggle()}}
>      <div className="w-80 h-[98vh] fixed z-10 flex items-center flex-col justify-between  right-3 top-3  shadow-slate-700 shadow-lg  bg-white px-4 rounded-3xl animate-slideInFromRight">
          
          <div className="flex items-center gap-4 mt-10">
            <Image
              src={`/profile/${storedUsers.profile}`}
              alt=""
              width={80} // added width prop
              height={70} // added height prop
              className=" h-[80px] rounded-full"
            />               
            <div className="font-medium dark:text-white">
                <div className="text-3xl">{storedUsers.userName}</div>
                <div className="text-1xl text-gray-500 dark:text-gray-400">{storedUsers.email}</div>
            </div>
            </div>
          <button type="button" onClick={(e)=>{onHandleLogout()}} className="text-white bg-gradient-to-r w-[100%] mx-1 mb-7 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center " >Log out</button>
          </div>
    </div>
    
  </div>;
}
