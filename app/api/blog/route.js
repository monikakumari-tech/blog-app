import {writeFile} from "fs/promises"
import { connectDB } from "@/lib/config/db"
import blogModel from "@/lib/models/blogModel"

const {NextResponse} = require("next/server")

const loadDb= async ()=>{
    await connectDB()
}
loadDb()

export async function GET(request) {
    console.log("blog get hit")
    return NextResponse.json(
        {
            message:"api working"
        }
    )
}
// custom fucntion for post request
export async function POST(request){

  const formData= await request.formData()
  console.log(formData)
  const timestamp= Date.now()
  const image =formData.get("image")
  const byteData = await image.arrayBuffer()
  const buffer = Buffer.from(byteData)
  const path = `./public/${timestamp}_${image.name}` 
  await writeFile(path,buffer)
  const imageURL=`/${timestamp}_${image.name}`
  const blogData= {
    title:`${formData.get("title")}`,
    description:`${formData.get("description")}`,
    category:`${formData.get("category")}`,
    author:`${formData.get("author")}`,
    authorImage:`${formData.get("authorImage")}`,
    image:`${imageURL}`
  }
  await blogModel.create(blogData)
  console.log("blog save")
  return NextResponse.json(
    {
        success:true,
        message:"blog added"
    }
  )

}
