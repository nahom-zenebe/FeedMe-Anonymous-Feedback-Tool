import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()


export const handletokengen=async(userId)=>{
    try{
        const payload = { id: userId };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });

        return token

    }
    catch(error){
        console.error("Error generating token:", error);
        throw new Error("Token generation failed");
    }
}