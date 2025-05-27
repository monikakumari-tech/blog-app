"use client";
import { useEffect, useState } from "react";
import { blog_data } from "@/assets/assets";
import Blogitem from "./Blogitem";
import axios from "axios";

const BlogList = () => {
const [blog, setBlog] = useState([]);
const [filteredData, setFilteredData] = useState([]);
const [currentpage, setCurrentPage] = useState(1);
const [menu, setMenu] = useState("All");
 

 const trend = ["All", "Technology", "Startup", "Lifestyle"];
  const cardPerPage = 5;
 

  const fetchBlog = async ()=>{
    try{
    const response = await axios.get("/api/blog")
    console.log(response.data.blogs)
    setBlog(response.data.blogs)
    }catch(err){
      confirm.log(err)
    }
  }
  useEffect(()=>{
     fetchBlog()
  },[])

  useEffect(() => {
  if (blog.length > 0) {
    const filtered = blog.filter((item) =>
      menu === "All" ? item: item.category === menu
    );
    setFilteredData(filtered);
    console.log("Filtered blogs:", filtered);
  }
}, [blog, menu]);

 const startIndex = (currentpage - 1) * cardPerPage;
  const endIndex = startIndex + cardPerPage;
  const totalPage = Math.ceil(filteredData.length / cardPerPage);
  const data = filteredData.slice(startIndex, endIndex);

  return (
    <div>
 {/* ******************************** */}
        {/* category */}
      <div className="flex justify-center lg:gap-10 md:8 font-bold text-gray-400 my-8">
        {trend.map((item, idx) => (
          <span
            onClick={() => setMenu(item)}
            key={idx}
            className={`cursor-pointer p-2 ${
              item == menu ? "text-white bg-purple-600" : ""
            }`}
          >
            {item}
          </span>
        ))}
      </div>

      {/* 
        <div className="flex justify-center gap-6 my-10">
            <button onClick={()=>setMenu("All")} className={`${menu=="All" ? "bg-purple-500 text-white py-1 px-4 rounded:sm" :""}`}>All</button>
            <button onClick={()=>setMenu("Technology")} className={`${menu=="Technology" ? "bg-purple-500 text-white py-1 px-4 rounded:sm" :""}`}>Technology</button>
            <button onClick={()=>setMenu("Startup")} className={`${menu=="Startup" ? "bg-purple-500 text-white py-1 px-4 rounded:sm" :""}`}>Startup</button>
            <button onClick={()=>setMenu("Lifestyle")} className={`${menu=="Lifestyle" ? "bg-purple-500 text-white py-1 px-4 rounded:sm" :""}`}>LifeStyle</button>

        </div> */}
 {/* ******************************** */}
        {/* filter card data */}
        <div className="">
      <div className="  m-10 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          
          data.map((item, index) => {
            return (
              <Blogitem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                id={item._id}
              />
            );
          })
        }
      </div> 
      </div>
 {/* ******************************** */}
      {/* pagination button */}
      <div className="flex gap-2 justify-center my-5 items-center">
         <button
          className="bg-purple-500 text-white px-4 py-2"
          onClick={() => setCurrentPage((pre) => Math.max(pre - 1, 1))}
        >
          Pre
        </button>
        <div>
          <span>{currentpage}</span> to <span>{totalPage}</span>
        </div>
        <button
          className="bg-purple-500 text-white px-4 py-2"
          onClick={() => setCurrentPage((pre) => Math.min(pre + 1, totalPage))}
        >
          Next
        </button> 
      </div>
 {/* ******************************** */}
    </div>
  );
};
export default BlogList;
