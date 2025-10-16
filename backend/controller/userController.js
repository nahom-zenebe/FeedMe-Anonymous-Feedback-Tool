import User from '../model/userModel.js'
import bcrypt, { genSalt } from 'bcrypt'
import {handletokengen} from '../config/jwtTokengen.js'


export const signup = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.status(400).json({ message: "Please add all fields" });
      }
  
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hash_password = await bcrypt.hash(password, salt);
  
      const newuser = new User({
        name,
        email,
        password: hash_password,
      });
  
      await newuser.save();
  
      const token = await handletokengen(newuser._id);
  
      return res.status(201).json({ message: "User created successfully", token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Please add all fields" });
      }
  
      const loginuser = await User.findOne({ email });
      if (!loginuser) {
        return res.status(400).json({ message: "User does not exist" });
      }
  
      const isMatch = await bcrypt.compare(password, loginuser.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = await handletokengen(loginuser._id);
  
      return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

export const logout=async(req, res)=>{
    try{

        res.status(200).json({message:"User logout successfully"})
    }
    catch(error){
        res.status(500).json({message:"Internal server error"})
    }
}