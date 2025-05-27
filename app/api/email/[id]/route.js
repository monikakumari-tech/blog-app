import { connectDB } from "@/lib/config/db";

import subscribeModel from "@/lib/models/subscribeModel";

const { NextResponse } = require("next/server");

const loadDb = async () => {
  await connectDB();
};
loadDb();

export async function DELETE (request, {params}){
   
    await subscribeModel.findByIdAndDelete(params.id)
    return NextResponse.json({
        success:true,
        message: "deleted"
    })
}