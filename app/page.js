"use client"
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Moviewrapper from '@/components/Moviewrapper'
import Navbar from '@/components/Navbar'
import { User } from '@/utils/Usercontext'
import React, { useContext } from 'react'
import { NextUIProvider } from "@nextui-org/react";

function page() {
  const {isLoggedIn,setIsLoggedIn}=useContext(User)
  console.log(isLoggedIn)
  return (
  
    <NextUIProvider>

    <div className='  overflow-x-hidden'>
      <Navbar/>
      <div className='md:w-8/12  w-full md:mx-auto mx-0'>
      <Banner/>
      <Moviewrapper btn1="Today" btn2="This Week" />
      <Moviewrapper btn1="On TV" btn2="In Theaters"/>
     
      {/* Home  */}
      </div>
      <Footer/>
      </div>
    </NextUIProvider>
  
  )
}

export default page