"use client";
import { assets } from "@/assets/assets";
import { Panel } from "@/components/adminComponent/Panel";
import Sidebar from "@/components/adminComponent/Sidebar";
import Image from "next/image";
import { useState } from "react";

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
    setData((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(data);
  };
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 border-gray-400">
        <Panel />
        <form action="" className="p-10 flex flex-col gap-5 ">
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
              value={data.title}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Blog Description</p>
            <textarea
              placeholder="write content here"
              className="border border-gray-200 p-2 max-w-[300px] min-h-[100px] "
              onChange={changeHandler}
              value={data.description}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Blog Category</p>
            <select
              name="category"
              className="px-4 py-2 w-fit border border-gray-200 "
              onChange={changeHandler}
              value={data.category}
            >
              <option value="startup">Startup</option>
              <option value="tech">Technology</option>
              <option value="finance">Lifestyle</option>
            </select>
          </div>
          <button className="bg-blue-400 text-white py-2 px-10 w-fit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default page;
