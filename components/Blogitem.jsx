"use client";
// import { assets, blog_data } from "@/assets/assets";
// import Image from "next/image";
// import { useEffect, useState } from "react";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

// const Blogitem = ({id}) => {
//   console.log(id)
//   const [data, setData] = useState([]);
//   const trend = ["All", "Technology", "Startup", "Lifestyle"];
//   const [select, setSelect] = useState("All");
//   useEffect(() => {
//     setData(blog_data);
//   }, []);
//   // console.log(typeof data);
//   // console.log(data);
//   return (
//     <>
//       <div className="flex justify-center lg:gap-10 md:8 font-bold text-gray-400 my-8">
//         {trend.map((item, idx) => (
//           <span
//             onClick={() => setSelect(item)}
//             key={idx}
//             className={`cursor-pointer p-2 ${
//               item == select ? "text-white bg-purple-600" : ""
//             }`}
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//       {/* cards */}
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 px-25 gap-5">
//         {(select == "All"
//           ? data
//           : data.filter((item) => item.category == select)
//         ).map((item, idx) => (
//           <div

//             key={item.id}
//             className=" border rounded xl:w-80 lg:w-65 mb-10 pb-5 "
//           >
//             <Image src={item.image} alt="image" width={`w-full`} />

//             <div className="px-2 py-2">
//               <div className="text-white bg-black p-2 mt-2 w-fit">
//                 {item.category}
//               </div>
//               <div className="font-bold mt-2 ">{item.title}</div>
//               <div className="text-gray-500 mt-2 text-sm">
//                 {item.description}
//               </div>
//               <div className="mt-2 font-bold">Read more</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default Blogitem;

const Blogitem = ({title, description, image, category, id}) => {
 
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#0000000] my-5 rounded-sm pb-5 flex flex-col gap-3 overflow-hidden">
      <Link href={`/blogs/${id}`}>
      <Image
        src={image}
        alt="img"
        width={400}
        height={400}
        className="border-b border-black"
      />
      </Link>
      <p className="px-5">{category}</p>
      <div className="flex flex-col gap-3 px-5">
        <h5>{title}</h5>
        <p>{description}</p>
        
        <Link href={`/blogs/${id}`} className="flex items-center gap-1">Read more <Image src={assets.arrow} width={12} alt="arrow"/></Link>
      </div>
      
    </div>
  );
};
export default Blogitem;
