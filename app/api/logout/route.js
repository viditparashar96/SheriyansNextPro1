import { NextResponse } from "next/server";
export async function GET(){
    try {
        const response=NextResponse.json({
            msg:"Logout successful",
            succuss:true
        })
        response.cookies.set("token","",{
            httpOnly:true,
            expires:new Date(0)
        })
        return response
    } catch (error) {
        return NextResponse.json({msg:error.message})
    }
}