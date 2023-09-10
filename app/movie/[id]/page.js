"use client"
import Navbar from '@/components/Navbar'
import Showhero from '@/components/Showhero'
import React, { useEffect, useState } from 'react'
import Cast from '@/components/cast'
import axios from 'axios'
import Loading from '@/components/Loading'
import Footer from '@/components/Footer'
function page({params}) {
    const [showDets,setShowDets]=useState({})
    const [loading,setLoading]=useState(true)
    const [castData,setCastData]=useState([])
    console.log("movie page is here")
    async function fecthshowdets(){
        setLoading(true)
        const res=await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8fa1d7ebd4f44371dfeba46c72f4153a`)
        const resCastData=await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=8fa1d7ebd4f44371dfeba46c72f4153a`)


        // console.log(res.data)

        setLoading(false)

        setShowDets(res.data)
        setCastData(resCastData.data.cast)
    }
    console.log(castData)
    useEffect(()=>{
        fecthshowdets()
    },[])
  return (
    <div className=' overflow-x-hidden'>
        <Navbar/>
        {/* Showhero is for movie */}
        {
            loading?(<Loading/>):(<Showhero showDets={showDets}/> )
        }
        
        <Cast castData={castData} setCastData={setCastData} />
        <Footer/>
        </div>
  )
}

export default page