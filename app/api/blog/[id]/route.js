import { connectDB } from "@/lib/config/db";
import blogModel from "@/lib/models/blogModel";

const { NextResponse } = require("next/server");

const loadDb = async () => {
  await connectDB();
};
loadDb();

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const blog = await blogModel.findById(id);
    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, blog });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, {params}){
  // const id=await request.nextURL.searchParams.get("id")
  
  await blogModel.findByIdAndDelete(params.id)
  return NextResponse.json(
    { 
      success:true,
      message: "blog deleted"
    }
  )
  // try{
  //      await blogModel.findByIdAndDelete(id)
  //      const blogs= await blogModel.find({})
  //      return NextResponse.json({
  //       blogs
  //      })
  // }catch(error){
  //      return NextResponse.json(
  //     { success: false, message: error.message },
  //     { status: 500 }
  //   );
  }

  

