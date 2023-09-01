import { connect } from "@/libs/mongodb";
import user from "@/models/user";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
connect()

export async function POST(req){
    try {
        const reqBody= await req.json()
       const {username,email,cpassword,password}=reqBody
        if(!username || !email || !cpassword || !password){
            return NextResponse.json({msg:"Fill asdasdas  up the blank fields",credential:false})
        }
        // if User is alredy exists=====>
        const foundedUser=await user.findOne({username})
        if(foundedUser){
            return NextResponse.json({msg:"User Already exisit"},{status:400})

        }
        const hashedPassword=await bcrypt.hash(password,12)
        console.log(hashedPassword)
        const createdUser=await user.create({
            username,
            password:hashedPassword,
            email
        })
        console.log(createdUser)

        return NextResponse.json({msg:"User created",succes:true,createdUser},{status:201})

    } catch (error) {
        console.log(error)
    }
}