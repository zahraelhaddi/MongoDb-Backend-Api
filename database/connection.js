import mongoose from "mongoose";





export default async function connect(){
  //**mongoose.connect("mongodb+srv://ZahraAdmin:ZahraAdmin1@cluster0.nbwvnkd.mongodb.net/?retryWrites=true&w=majority");*/
  await mongoose.connect(process.env.ATLAS_URL);
  console.log("Mongo db database connected")
};