import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="h-10 bg-purple-400 text-white flex justify-between items-center py-9 px-5">
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