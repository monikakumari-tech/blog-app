"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);
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
       <Image src={data.image} alt="image" width={500} className=" border-4 border-white mt-[-70]"/>
      </div>
      <div>
        <p>Introduction:</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corporis magnam animi</p>
        <div>
        <p>Step1: Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div>
        <p>Step1: Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
    </>
  ):<></>
};
export default page;
