import { assets } from "@/assets/assets"
import Image from "next/image"
import Link from "next/link"

const sidebar = () => {
  return (
    <div className=" border-r-2 border-gray-200 bg-blue-50 hover:border-gray-400 w-3xs h-[100vh]">
      <div className="border-b-2 border-gray-500 py-2 pl-5"><Image src={assets.logo} width={100} alt="image"/></div>
      <div className="flex flex-col gap-5 pl-6 mt-10">
        <Link href="/admin/addProduct" className="flex gap-2 border border-gray-400 font-bold items-center pl-4 py-1 bg-white cursor-pointer">
          <Image src={assets.add_icon} alt="image" width={15} />
          <p className="">Add blogs</p>
        </Link>
        <Link href="/admin/blogList" className="flex gap-2 border border-gray-400 font-bold items-center pl-4 py-1 bg-white cursor-pointer">
          <Image src={assets.blog_icon} alt="image" width={15}/>
          <p>Blog list</p>
        </Link>
        <Link href="/admin/subscription" className="flex gap-2 border border-gray-400 font-bold items-center pl-4 py-1 bg-white cursor-pointer">
          <Image src={assets.email_icon} alt="image" width={15}/>
          <p>Subscription</p>
        </Link>
        
      </div>
    </div>
  )
}
export default sidebar