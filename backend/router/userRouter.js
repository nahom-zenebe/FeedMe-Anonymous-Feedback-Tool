import {signup,login,logout} from '../controller/userController.js'
import express from 'express'; 


const router=express()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)


export default router