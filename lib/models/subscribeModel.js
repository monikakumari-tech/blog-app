import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    date:{
           type:Number,
           default:Date.now()
    }
})

const subscribeModel = mongoose.models.subscriber||mongoose.model("subscriber",subscribeSchema)

export default subscribeModel