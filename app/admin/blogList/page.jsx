"use client"
import { assets } from "@/assets/assets"
import { Panel } from "@/components/adminComponent/Panel"
import Sidebar from "@/components/adminComponent/Sidebar"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const page = () => {
  const [data, setData]= useState([])

     const fetchData= async()=>{
      try {
          const response= await axios.get("/api/blog")
         
          if(response.data){
            console.log(response.data.blogs)
            setData(response.data.blogs)
          }else{
            console.log("no data")
          }     
      } catch (error) {
        console.log(error)
      }
  }
  const deleteblog= async (id)=>{
     try {
      const remove = await axios.delete(`/api/blog/${id}`)
      if(remove.data.success){
          toast.success(remove.data.message)
          await fetchData()
        }else{
          toast.error(remove.data.message)
        }
      }catch(error){
          toast.error(error.message)
          console.log(error)
      }
      
     }
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="flex">
      <Sidebar/>
       <div className="flex-1 border-gray-400">
               <Panel/>
               <div className="p-10 text-lg ">
                 <p className="font-semibold mb-4">ALL Blogs</p>
                 <div className="border border-gray-400  min-h-[50vh]">
                     <div className="grid grid-cols-[1fr_2fr_1fr_1fr]  pl-10 py-2 font-bold border-b-2 border-gray-200 text-gray-600 text-sm">
                         <span>AUTHOR</span>
                         <span>BLOG TITLE</span>
                         <span>DATE</span>
                         <span>ACTION</span>
                    </div>
                  {
                    data.map((item,idx)=>{
                       const date = new Date(item.date);
    const formattedDate = date.toDateString();
                      return (                
                    <div key={idx} className="py-2 grid grid-cols-[1fr_2fr_1fr_1fr] items-center pl-10    border-b-2 border-gray-200 text-gray-600 text-sm">
                     <div className=" flex gap-2 items-center font-bold">
                      <Image src={assets.profile_icon} alt="image" width={30}/>
                      <span>{item.author}</span>
                     </div>
                     <span>{item.description}</span>
                     <span>{formattedDate}</span>
                     <span onClick={()=>deleteblog(item._id)}>X</span>
                    </div>
                      
                      )
                    })
                  }
                   
                 </div>
               </div>
             </div>
    </div>
  )
}
export default page