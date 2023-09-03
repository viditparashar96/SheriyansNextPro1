"use client"
import { createContext, useState } from "react";


export const User=createContext(null)

const Usercontext =({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    
    return <User.Provider value={{isLoggedIn,setIsLoggedIn}}>{children}</User.Provider>
}
export default Usercontext