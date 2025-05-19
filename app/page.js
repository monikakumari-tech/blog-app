import Blogitem from "@/components/Blogitem";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
  <div>
   <Header/>
   {/* <Blogitem/> */}
   <BlogList/>
   <Footer/>
  </div>
  );
}
