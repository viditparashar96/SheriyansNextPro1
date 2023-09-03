"use client"
import Navbar from '@/components/Navbar'
import ShowheroTv from '@/components/ShowheroTv'
import React, { useEffect, useState } from 'react'
import Cast from '@/components/cast'
import axios from 'axios'
function page({params}) {
    const [showDets,setShowDets]=useState({})
    console.log("tv page is here")
        console.log(showDets)
    async function fecthshowdets(){
        const res=await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=8fa1d7ebd4f44371dfeba46c72f4153a`)
        // console.log(res.data)
        setShowDets(res.data)
    }
    useEffect(()=>{
        fecthshowdets()
    },[])
  return (
    <div>
        <Navbar/>
        <ShowheroTv showDets={showDets}/>
        <Cast/>
        </div>
  )
}

export default page