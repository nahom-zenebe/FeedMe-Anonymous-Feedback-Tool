import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./config/dbConnection.js";
import Authrouter from './router/userRouter.js';


dotenv.config()


const app=express()
app.use(express.json());
app.use("/api/auth",Authrouter)
const PORT=process.env.PORT || 5001

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`)
})