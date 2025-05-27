"use client"
import { Panel } from "@/components/adminComponent/Panel"
import Sidebar from "@/components/adminComponent/Sidebar"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const page = () => {
  const [data, setData] = useState([])
  const fetchData= async ()=>{
          try {
             const response= await axios.get("/api/email")
             console.log(response.data.subscribe)
            setData(response.data.subscribe)
            
          } catch (error) {
            console.log(error)
          }
         
  }
  const deleteSubscriber= async (id)=>{
      try {
        const remove= await axios.delete(`/api/email/${id}`)
        console.log(remove)
        if(remove.data.success){
          toast.success(remove.data.message)
          await fetchData()
        }else{
          toast.error(remove.data.message)
        }
        
      } catch (error) {
        console.log(error)
        toast.error(error.message)

      }
  }

  useEffect(()=>{
       fetchData()
       
  },[])
  return (
    <div className="flex ">
      <Sidebar/>
      <div className="flex-1 border-gray-400">
        <Panel/>
        <div className="p-10 text-lg ">
          <p className="font-semibold">ALL Subscriptions</p>
          <div className="border border-gray-400 max-w-xl min-h-[50vh]">
             <div className="grid grid-cols-[2fr_1fr_1fr]  pl-10 py-2 font-bold border-b-2 border-gray-200 text-gray-600 text-sm">
                  <span>EMAIL SUBSCRIPTION</span>
                  <span>DATE</span>
                  <span>ACTION</span>
             </div>

            {
              data.map((item,idx)=>{
                const date = new Date(item.date)
                const filterDate= date.toDateString()
                return(
                  <div key={idx} className="grid grid-cols-[2fr_1fr_1fr]  pl-10  p-2  border-b-2 border-gray-200 text-gray-600 text-sm">
                  <span className="font-bold">{item.email}</span>
                  <span>{filterDate}</span>
                   <span onClick={()=>deleteSubscriber(item._id)}>X</span>
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