// mongodb+srv://monika:<db_password>@cluster0.vvtr284.mongodb.net/
import mongoose from "mongoose";

export const connectDB = async()=>{
 await mongoose.connect("mongodb+srv://monika:monika@cluster0.vvtr284.mongodb.net/blog_app")
 console.log("DB connected")
}