import mongoose, { mongo } from "mongoose";

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Mongo Data Base")
    }catch(error){
        console.log("Error: "+ error)
    }

}

connectDB();