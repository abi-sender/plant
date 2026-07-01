import mongoose from "mongoose";

// MongoDB Connection
const connectDB=async()=>
{
    try
    {
    await mongoose.connect("mongodb://127.0.0.1:27017/addcartdb");
    console.log("MongoDB Connected")
    }
  catch(err)
  {
console.log(err);
  } 
}
export default connectDB;
