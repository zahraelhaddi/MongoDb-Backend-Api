import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { config } from 'dotenv'
import router from  './router/route.js'
const app=express()


//import connection file
import connect from "./database/connection.js";


//setting a middleware
app.use(cors());//for Ajax errors
app.use(express.json());//instead of a body parser in a post request we can now use express.json()
app.use(morgan('tiny'));
config()

const port=process.env.PORT || 8080;

connect();



//api endpoints 
app.use('/api',router)

//setting a Route for a get Request
app.get("/",(req,res)=>{
  try{
    res.json("get request")
  }catch(error){
    console.log(error)
  }
})



//the port to which the app is listening: http://localhost:8080
/**  app.listen(port,()=>{
  console.log(`listening on ${port}`);
})*/

/** start server only when we have a valid connection */
connect().then(()=>{
  try{
      app.listen(port,()=>{
        console.log(`listening on ${port}`);
      })
  }catch(error){
     console.log("cannot connect to the server!");
}}).catch(error=>{
  console.log("invalid database connection");
})





