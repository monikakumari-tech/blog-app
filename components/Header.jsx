import { assets } from "@/assets/assets"
import Image from "next/image"

const Header = () => {
  return (
    <>
    <div className="flex items-center justify-between m-5 px-25"> 
      <Image src={assets.logo} alt="logo" width={120}/>
      {/* <img src={assets.logo} alt="logo" /> */}
      <div className="border-3 border-gray-200 p-2 font-bold shadow-[-7px_7px_0px_#000000] flex items-center gap-2">
        Get Started
        
           <Image src={assets.arrow} alt="logo" width={10}/>
      </div>
    </div>
    <div className="flex flex-col items-center my-5 mx-10">
       <div className="text-4xl font-bold">Recent Publication</div>
       <div className="text-center py-10 mx-10">Welcome to our blog, where creativity and inspiration meet to spark your imagination and enrich your mind with engaging content</div>
       <div className="border-3 border-gray-200   shadow-[-7px_7px_0px_#000000] flex items-center gap-2">
        <input type="text" placeholder="Enter Your Email" className="py-4 px-5" />
        <button className="border-l-3 border-gray-200 py-4 px-8 text-gray-600 font-bold">Subscribe</button>
       </div>
    </div>
    </>
  )
}
export default Header