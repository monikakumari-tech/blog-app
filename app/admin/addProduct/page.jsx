"use client";
import { assets } from "@/assets/assets";
import { Panel } from "@/components/adminComponent/Panel";
import Sidebar from "@/components/adminComponent/Sidebar";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Monika",
    authorImage: "/upload_area.png",
  
    
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({
      ...data,
      [name]: value,
      
    }));
   
  };
   const submitHandler=async (e)=>{
      e.preventDefault();
      const formData= new FormData()
      formData.append("title",data.title)  //title id field name
      formData.append("description",data.description) 
      formData.append("category",data.category) 
      formData.append("author",data.author) 
      formData.append("authorImage",data.authorImage) 
      formData.append("image",image)
      console.log(formData)
  //     for (let pair of formData.entries()) {
  // console.log(pair[0] + ':', pair[1]);
// }

   
      const response= await axios.post("/api/blog",formData)
       if(response.data.success){
         toast.success(response.data.message)
         setImage(false)
         setData({
     title: "",
    description: "",
    category: "Startup",
    author: "Monika",
    authorImage: "/upload_area.png",
         })
       }else{
        toast.error("error")
       }
   }
   

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 border-gray-400">
        <Panel />
        <form action="" className="p-10 flex flex-col gap-5"onSubmit={submitHandler}>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Upload Thumbnails</p>

            <label htmlFor="image">
              <Image
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                alt="image"
                width={100}
                height={100}
                
              />
            </label>
            <input
              type="file"
              id="image"
              hidden
              required
              name="authorImage"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Blog Title</p>
            <input
              type="text"
              placeholder="Type here"
              className="border border-gray-200 p-2 max-w-[300px]"
              onChange={changeHandler}
              name="title"
              value={data.title}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Blog Description</p>
            <textarea
              placeholder="write content here"
              className="border border-gray-200 p-2 max-w-[300px] min-h-[100px] "
              onChange={changeHandler}
              name="description"
              value={data.description}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Blog Category</p>
            <select
              name="category"
              className="px-4 py-2 w-fit border border-gray-200 "
              onChange={changeHandler}
              value={data.category}
              required
            >
              <option value="Startup">Startup</option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-400 text-white py-2 px-10 w-fit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default page;
