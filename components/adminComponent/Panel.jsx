import { assets } from "@/assets/assets"
import Image from "next/image"

export const Panel = () => {
  return (
    <div className="flex  justify-between items-center font-bold text-xl py-2 pl-8 border-b-2 ">
        <p className="">Admin Panel</p>
        <Image src={assets.profile_icon} alt="image" width={20} className="mr-10"/>
    </div>
  )
}