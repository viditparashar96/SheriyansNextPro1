import { connect } from "@/libs/mongodb";
// import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from'bcryptjs'
import jwt from "jsonwebtoken";
import user from "@/models/user";
connect()

export async function POST(req){
    try {
        const reqBody=await req.json()
        const {username,password}=reqBody

        // Check if User is exisit or not ====>
        const foundedUser=await user.findOne({username})
        if(!foundedUser){
            return NextResponse.json({msg:"User does not exists"})
        }
    
        const validPassword=await bcryptjs.compare(password,foundedUser.password)
        if(!validPassword){
            return NextResponse.json({msg:"Credential doesnot match",passwordInvalid:true})
        }
        const tokenData={
            id:foundedUser._id,
            username:foundedUser.username,
            isAdmin:foundedUser.isAdmin
        }
        // create a token===>
        const token=await jwt.sign(tokenData,"asdasfadasfafafasf",{expiresIn:"1d"})
        const response=NextResponse.json({msg:"Login successful",success:true})
        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response
    } catch (error) {
        console.log(error)
    }
}