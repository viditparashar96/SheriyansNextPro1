"use client"
import Navbar from '@/components/Navbar'
import SearchCard from '@/components/SearchCard'
import { User } from '@/utils/Usercontext'
import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

function page() {
    const [searchData,setSearchData]=useState([])
    const {searchInput,setSearchInput}=useContext(User)
    const fetchSearchres=async ()=>{
        const response= await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=8fa1d7ebd4f44371dfeba46c72f4153a&query=${searchInput}`)
        // console.log(response.data)
        setSearchData(response.data.results)
    }
    console.log(searchData)
    useEffect(()=>{
        fetchSearchres()
    },[])
  return (
    <div>
        <Navbar/>
        <div className='w-9/12 h-[100vh] mt-9  mx-auto flex '>
            <div className='left h-fit min-w-[20%] bg-rose-50 rounded-md overflow-hidden'>
                <div className='flex items-center justify-center w-full h-[40px] bg-[#01B4E4]'>
                    <h1 className='text-xl font-semibold text-white'>Search Results</h1>
                </div>
                <div className='filter w-full h-fit flex flex-col gap-2  border-2'>
                    <div className=' flex items-center justify-between py-2 hover:bg-slate-200 transition-all duration-500' >

                    <Link href="#" className='font-semibold'>Movies</Link>
                    <div>
                        <h1>01</h1>
                    </div>
                    </div>
                    <div className=' hover:bg-slate-200 transition-all duration-500 flex items-center justify-between py-2'>

                    <Link href="#" className='font-semibold'>TV Shows</Link>
                    <div>
                        <h1>01</h1>
                    </div>
                    </div>
                    <div className=' hover:bg-slate-200 transition-all duration-500 flex items-center justify-between py-2'>

                    <Link href="#" className='font-semibold'>People</Link>
                    <div>
                        <h1>01</h1>
                    </div>
                    </div>
                    <div className=' hover:bg-slate-200 transition-all duration-500 flex items-center justify-between py-2'>

                    <Link href="#" className='font-semibold'>Companies</Link>
                    <div>
                        <h1>01</h1>
                    </div>
                    </div>
                    <div className=' hover:bg-slate-200 transition-all duration-500 flex items-center justify-between py-2'>

                    <Link href="#" className='font-semibold'>Collection</Link>
                    <div>
                        <h1>01</h1>
                    </div>
                    </div>
                    <div className=' hover:bg-slate-200 transition-all duration-500 flex items-center justify-between py-2'>

                    <Link href="#" className='font-semibold'>Keywords</Link>
                    <div>
                        <h1>01</h1>
                    </div>
                    </div>
                    <div className=' hover:bg-slate-200 transition-all duration-500 flex items-center justify-between py-2'>

                    <Link href="#" className='font-semibold'>Networks</Link>
                    <div>
                        <h1>01</h1>
                    </div>
                    </div>


                </div>
            </div>
            <div className='searchres  w-[80%] h-fit relative space-y-6 '>
               {
                searchData.map(function(eachData){
                    return <div className='ml-8 border' key={eachData.id}><SearchCard {...eachData} key={eachData.id}/></div>
                })
                }
             
             



            <div className='pagination w-full h-[60px]  flex'>
            pages
            </div>
            </div>
        </div>
        </div>
  )
}

export default page