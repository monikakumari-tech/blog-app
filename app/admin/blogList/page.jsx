 import { assets } from "@/assets/assets"
import { Panel } from "@/components/adminComponent/Panel"
import Sidebar from "@/components/adminComponent/Sidebar"
import Image from "next/image"

const page = () => {
  return (
    <div className="flex">
      <Sidebar/>
       <div className="flex-1 border-gray-400">
               <Panel/>
               <div className="p-10 text-lg ">
                 <p className="font-semibold">ALL Blogs</p>
                 <div className="border border-gray-400 max-w-xl min-h-[50vh]">
                    <div className="grid grid-cols-[1fr_2fr_1fr_1fr]  pl-10 py-2 font-bold border-b-2 border-gray-200 text-gray-600 text-sm">
                         <span>AUTHOR</span>
                         <span>BLOG TITLE</span>
                         <span>DATE</span>
                         <span>ACTION</span>
                    </div>
                    <div className="py-2 grid grid-cols-[1fr_2fr_1fr_1fr] items-center pl-10    border-b-2 border-gray-200 text-gray-600 text-sm">
                     <div className=" flex gap-2 items-center font-bold">
                      <Image src={assets.profile_icon} alt="image" width={30}/>
                      <span> name</span>
                     </div>
                     <span>343546566</span>
                     <span>343546566</span>
                     <span>X</span>
                    </div>
                 </div>
               </div>
             </div>
    </div>
  )
}
export default page