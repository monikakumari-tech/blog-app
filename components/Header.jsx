"use client"
import {  useState } from "react"
import Navbar from "./Navbar"
import axios from "axios"
import { toast } from "react-toastify"

const Header = () => {
  const [data, setData]= useState({
    email:""
  })

  const changeHandler=(e)=>{
      const name= e.target.name
      const value= e.target.value
      setData(data=>({
        ...data,
          [name]:value
        }))
  }
  const submitHandler= async (e)=>{
     e.preventDefault();
     const formData= new FormData()
     formData.append("email", data.email)
           for (let pair of formData.entries()) {
  console.log(pair[0] + ':', pair[1]);
}

   const response= await axios.post("/api/email", formData)
   console.log(response)
    if(response.data.success){
      toast.success(response.data.message)
      setData({
        email:""
      })
    }else{
      toast.error("error")
    }
  }
 
  return (
    <>
   <Navbar/>
    <div className="flex flex-col items-center my-5 mx-10">
       <div className="text-4xl font-bold">Recent Publication</div>
       <div className="text-center py-10 mx-10">Welcome to our blog, where creativity and inspiration meet to spark your imagination and enrich your mind with engaging content</div>
       <div className="border-2 border-gray-200 shadow-[-7px_7px_0px_#000000] flex items-center gap-2">
  <form onSubmit={submitHandler}>
    <input type="email" placeholder="Enter Your Email" className="py-4 px-5" name="email" value={data.email}onChange={changeHandler} required/>
    <button type="submit" className="border-l-2 border-gray-200 py-4 px-8 text-gray-600 font-bold">
      Subscribe
    </button>
  </form>
</div>

    </div>
    </>
  )
}
export default Header