"use client"
import { assets,blog_data } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useState } from "react"

const Blogitem = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        setData(blog_data)
    },[])
  console.log(typeof data)
  console.log(data)
  return (
  <div className="flex">
{data.map((item,idx)=>(
    <div key={idx} className="m-2 border rounded w-70 ">
        <Image src={item.image} alt="image" width={300}/>
       
        <div className="px-2 py-2">
       <div className="text-white bg-black p-2 mt-2 w-fit">{item.category}</div>
        <div className="font-bold mt-2 ">{item.title}</div>
        <div className="text-gray-500 mt-2 text-sm">{item.description}</div>
        <div className="mt-2 font-bold">Read more</div>
        </div>
    </div>
))}
  </div>
    
  )
}
export default Blogitem