
import Navbar from "./Navbar"

const Header = () => {
  return (
    <>
   <Navbar/>
    <div className="flex flex-col items-center my-5 mx-10">
       <div className="text-4xl font-bold">Recent Publication</div>
       <div className="text-center py-10 mx-10">Welcome to our blog, where creativity and inspiration meet to spark your imagination and enrich your mind with engaging content</div>
       <div className="border-2 border-gray-200 shadow-[-7px_7px_0px_#000000] flex items-center gap-2">
  <form action="">
    <input type="email" placeholder="Enter Your Email" className="py-4 px-5" />
    <button type="submit" className="border-l-2 border-gray-200 py-4 px-8 text-gray-600 font-bold">
      Subscribe
    </button>
  </form>
</div>

    </div>
    </>
  )
}
export default Header