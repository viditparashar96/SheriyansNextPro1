"use client"
import { createContext, useState } from "react";


export const User=createContext(null)

const Usercontext =({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [searchInput,setSearchInput]=useState('')

    
    return <User.Provider value={{isLoggedIn,setIsLoggedIn,searchInput,setSearchInput}}>{children}</User.Provider>
}
export default Usercontext