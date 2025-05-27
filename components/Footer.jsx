import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <div className=" bg-purple-400 text-white flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center py-9 px-5">
        <Image alt="image" width={100} src={assets.logo}/>
        <p>All right reserved Copyright @com</p>
        <div className="flex gap-2">
             <Image alt="image" width={30} src={assets.facebook_icon}/>
             <Image alt="image" width={30} src={assets.twitter_icon}/>
             <Image alt="image" width={30} src={assets.googleplus_icon}/>
        </div>
    </div>
  )
}
export default Footer