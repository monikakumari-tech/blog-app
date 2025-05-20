import { assets } from "@/assets/assets"
import Image from "next/image"
const Navbar = () => {
  return (
    
         <div className="flex items-center justify-between m-5 px-25"> 
      <Image src={assets.logo} alt="logo" width={120}/>
      {/* <img src={assets.logo} alt="logo" /> */}
      <div className="border-3 border-gray-200 p-2 font-bold shadow-[-7px_7px_0px_#000000] flex items-center gap-2">
        Get Started
        
           <Image src={assets.arrow} alt="logo" width={10}/>
      </div>
    </div>
   
  )
}
export default Navbar