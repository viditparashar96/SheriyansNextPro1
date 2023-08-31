"use client"
import React from 'react'

function Card({title,month,day,year}) {
  return (
    <div className='h-full min-w-[180px]  p-4'>
        <div className='image w-full h-[225px] bg-center bg-cover bg-red-900 rounded-md overflow-hidden'>
          <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg" className=' w-[100%] h-[100%] object-cover' alt="" />
        </div>
        <div className='p-1'>
            <h1 className='font-bold text-[13px]'>{title}</h1>
            <p className='text-sm opacity-70'>{month} {day},{year}</p>
        </div>
        </div>
  )
}

export default Card