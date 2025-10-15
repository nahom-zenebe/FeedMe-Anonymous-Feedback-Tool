import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./config/dbConnection.js";

dotenv.config()


const app=express()
app.use(express.json());
const PORT=process.env.PORT || 5001

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`)
})