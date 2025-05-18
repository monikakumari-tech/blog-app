"use client"
import { assets,blog_data } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useState } from "react"

const Blogitem = () => {
    const [data, setData] = useState([])
    const trend=["All", "Technology", "Startup","Lifestyle"]
    const [select, setSelect] = useState("All")
    useEffect(()=>{
        setData(blog_data)
    },[])
  console.log(typeof data)
  console.log(data)
  return (<>
  <div className="flex justify-center lg:gap-10 md:8 font-bold text-gray-400 my-8">
    {trend.map((item, idx)=><span onClick={()=>setSelect(item)} key={idx} className={`cursor-pointer p-2 ${item== select ? "text-white bg-purple-600":""}`}>{item}</span>)}
  </div>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 px-25 gap-5">
{(select=="All"?data:(data.filter(item=>item.category==select))).map((item,idx)=>(
    <div key={idx} className=" border rounded xl:w-80 lg:w-65 mb-10 pb-5 ">
        <Image src={item.image} alt="image" width={`w-full`}/>
       
        <div className="px-2 py-2">
       <div className="text-white bg-black p-2 mt-2 w-fit">{item.category}</div>
        <div className="font-bold mt-2 ">{item.title}</div>
        <div className="text-gray-500 mt-2 text-sm">{item.description}</div>
        <div className="mt-2 font-bold">Read more</div>
        </div>
    </div>
))}
  </div>
    </>
  )
}
export default Blogitem