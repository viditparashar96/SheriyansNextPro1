
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-[100%] h-[300px] bg-[#03213A]'>
      <div className='w-7/12 flex  p-4  mx-auto h-[100%]  space-x-4'>
        <div className='w-[25%] flex flex-col  h-[100%] '>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className='w-[150px]' alt="" />
          <Link href="/signup"><button className=' p-4 bg-white font-bold mt-[4vw] text-[#01B4E4] rounded-lg' >JOIN THE COMMUNITY</button></Link>
        </div>
        <div className='w-[25%] flex  justify-center flex-col h-[100%]'>
          <div className=' mb-2'>
            <h1 className=' font-bold text-white'>THE BASICS</h1>
          </div>
          <div className='text-white font-semibold'>

          <h1>About TMDB</h1>
          <h1>Contact Us</h1>
          <h1>Support Forums</h1>
          <h1>API</h1>
          <h1>System Status</h1>
          </div>

        </div>
        <div className='w-[25%] h-[100%]  flex flex-col justify-center ' >
        <div className=' mb-2'>
            <h1 className=' font-bold text-white'>GET INVOLVED</h1>
          </div>
          <div className='text-white font-semibold'>

          <h1>Contribution Bibble</h1>
          <h1>Add New Movie</h1>
          <h1>Add New TV Show</h1>
          </div>
        </div>
        <div className='w-[25%]  h-[100%] flex flex-col justify-center '>
        <div className=' mb-2'>
            <h1 className=' font-bold text-white'>COMMUNITY</h1>
          </div>
          <div className='text-white font-semibold'>

          <h1>Guidelines</h1>
          <h1>Discussions</h1>
          <h1>Leaderboard</h1>
          <h1>Twitter</h1>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer