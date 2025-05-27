import { connectDB } from "@/lib/config/db"
import subscribeModel from "@/lib/models/subscribeModel"

const {NextResponse} = require("next/server")

const loadDb= async ()=>{
    await connectDB()
}
loadDb()

export async function GET(request) {
   
    const subscribe= await subscribeModel.find({})
    return NextResponse.json(
        {
            subscribe
        }
    )
}

export async function POST (request){
    const formData= await request.formData()
    const subscribeData= {
        email:`${formData.get("email")}`
    }
    await subscribeModel.create(subscribeData)
    return NextResponse.json({
        success:true,
        message:"subscribed",
        
    })
}

