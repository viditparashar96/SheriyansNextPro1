"use client"
import Banner from '@/components/Banner'
import Moviewrapper from '@/components/Moviewrapper'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <div className='md:w-8/12  w-full md:mx-auto mx-0'>
      <Banner/>
      <Moviewrapper btn1="Today" btn2="This Week" />
      <Moviewrapper btn1="On TV" btn2="In Theaters"/>

      {/* Home  */}
      </div>
      </div>
  )
}

export default page