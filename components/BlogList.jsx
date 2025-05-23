"use client";
import { useState } from "react";
import { blog_data } from "@/assets/assets";
import Blogitem from "./Blogitem";

const BlogList = () => {
    
  const [currentpage, setCurrentPage] = useState(1);
 
  const [menu, setMenu] = useState("All");
 const trend = ["All", "Technology", "Startup", "Lifestyle"];

  const cardPerPage = 5;
  const startIndex = (currentpage - 1) * cardPerPage;
  const endIndex = startIndex + cardPerPage;
  const filterData = blog_data.filter((item) =>
    menu == "All" ? item : item.category == menu
  );

  const totalPage = Math.ceil(filterData.length / cardPerPage);
  const data = filterData.slice(startIndex, endIndex);

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
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 ">
        {
          // blog_data.filter((item)=>menu=="All" ? item : item.category==menu)
          data.map((item, index) => {
            return (
              <Blogitem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                id={item.id}
              />
            );
          })
        }
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
