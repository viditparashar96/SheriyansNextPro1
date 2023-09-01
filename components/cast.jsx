import React from 'react'
import Castcard from './Castcard'
function cast() {
  return (
    <div  className='h-[50vh] mx-auto bg-[#FFFFFF]  flex  items-center justify-center flex-col'>
    <div className='w-[90%] h-[15%] bg-[#FFFFFF] flex items-center text-[3vh] pl-3.5'><h1>Top Billed Cast</h1></div>

      <div id='castcomp' className=' h-[80%] bg-[#FFFFFF] w-[90%] overflow-x-scroll flex gap-4 items-center pl-3  '>
       <Castcard/>

      </div>

    </div>
  )
}

export default cast
