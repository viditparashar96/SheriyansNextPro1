import Navbar from '@/components/Navbar'
import Showhero from '@/components/Showhero'
import React from 'react'
import Cast from '@/components/cast'
import Castcard from '@/components/Castcard'
function page() {
  
  return (
    <div>
        <Navbar/>
        <Showhero/>
        <Cast/>
        </div>
  )
}

export default page