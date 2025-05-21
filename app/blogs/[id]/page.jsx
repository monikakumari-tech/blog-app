"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const page = () => {
  const [data, setData] = useState(null);
 const params = useParams();

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) == blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, []);

  console.log(data);
  return data ? (
  <>
    <div>
      <Navbar />
      <div>
      <div className="flex flex-col justify-center items-center">
        <div className=" w-full bg-gray-300 h-60 flex flex-col items-center gap-4 py-5 "><h1 className="text-black text-2xl font-bold ">manage your lifestyle</h1>
        <Image src={assets.profile_icon} alt="image" width={40}/>
        <span>Jacob</span>
         
        </div>
        <div className="mt-[-70] mx-10 max-w-2xl">
          <Image src={data.image} alt="image" width={`max-w-[10px]`} className=" border-4 border-white "/>
        </div>
       <div className="flex flex-col gap-4 mt-10">
        <p className="text-black font-bold text-xl">Introduction:</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corporis magnam animi</p>
        <div>
        <p className="text-black font-bold">Step1: Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
        <p className="text-black font-bold">Step1: Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
          <p>Share this artical on social media</p>
          <div className="flex gap-2 my-10 ">
                       <Image alt="image" width={30} src={assets.facebook_icon}/>
                       <Image alt="image" width={30} src={assets.twitter_icon}/>
                       <Image alt="image" width={30} src={assets.googleplus_icon}/>
                  </div>
        </div>
      </div>
      </div>
     
      
      </div>
      </div>
      <Footer />
    
    </>
  ):<></>
};
export default page;
