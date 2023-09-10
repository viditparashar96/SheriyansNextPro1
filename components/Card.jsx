"use client"
import React from 'react'
import { CircularProgress } from "@nextui-org/react";


function Card(props) {
  console.log(props)
  return (
    <div className='h-full min-w-[180px]  p-4'>
      <div className=' relative image w-full h-[225px] bg-center bg-cover bg-red-900 rounded-md overflow-hidden'>
        <div className=' absolute bottom-2 left-1 w-[30px] h-[30px] bg-[#081C22] rounded-[100%]'>
          <CircularProgress
             className=' text-white'   
            aria-label="Loading..."
            size="sm"
            value={props.vote_average * 10}
            color="success"
            showValueLabel={true}
          />
        </div>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${props.poster_path}`} className=' w-[100%] h-[100%] object-cover' alt="" />
      </div>
      <div className='p-1'>
        {
          props.title ?
            (<div>
              <h1 className='font-bold text-[13px]'>{props.title}</h1>
              <p className='text-sm opacity-70'>{props.release_date}</p>
            </div>)
            :
            (<div>
              <h1 className='font-bold text-[13px]'>{props.name}</h1>
              <p className='text-sm opacity-70'>{props.first_air_date}</p>
            </div>)
        }

      </div>
    </div>
  )
}

export default Card