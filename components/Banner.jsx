"use client"
import { User } from '@/utils/Usercontext'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

function Banner() {
  const router=useRouter()
  const {searchInput,setSearchInput}=useContext(User)
  
  function handleSearch(e){
    e.preventDefault()
    console.log(searchInput)
      router.push("/search")
  }
  return (
    <div className='banner text-white bg-center bg-cover flex items-center  w-full max-h-[400px] min-h-[360px]'>
      <div className='w-full h-[250px]  p-0 md:p-10'>
        <h2 className='text-4xl  md:p-0 px-3 font-bold'>Welcome.</h2>
        <h3 className='text-2xl  md:p-0 px-3 font-semibold mt-1 '>Millions of movies, TV shows and people to discover. Explore now.</h3>
        
          <form className='mt-[2vw] relative   m-full  md:w-11/12 p-3 flex rounded-[100px]' onSubmit={handleSearch}>
            <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="search" className='w-full py-3 px-4 rounded-[100px] outline-none text-black' placeholder='Search for a movie,tv show,person......' />
            <div>
              <button className='absolute right-2 font-semibold bg-gradient-to-r from-[#1CD2AD] to-[#05B9DC] top-3 px-8 py-3  rounded-[50px]'>Search</button>
            </div>
          </form>
        
      </div>
    </div>
  )
}

export default Banner