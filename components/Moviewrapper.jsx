"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Link from 'next/link'

function Moviewrapper({ btn1, btn2 }) {
  const [buttonActive, setButtonActive] = useState(true)
  const [buttonActive2, setButtonActive2] = useState(false)
  const [callTodayApi, setCallTodayApi] = useState(false)
  const [callWeekApi, setCallWeekApi] = useState(false)

  const [apiTodayData, setApiTodayData] = useState([])
  const [apiWeekData, setApiWeekData] = useState([])

  console.log(apiTodayData)
  // console.log(apiWeekData)
  function handleClick() {
    setButtonActive2(false)
    setButtonActive(true)
    setCallTodayApi(!callTodayApi)
  }
  function handleClick2() {
    setButtonActive(false)
    setButtonActive2(true)
    setCallWeekApi(!callWeekApi)
  }
  async function fectTodayData() {
    const response = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=8fa1d7ebd4f44371dfeba46c72f4153a")
    // console.log(response.data.results)
    setApiTodayData(response.data.results)

  }
  useEffect(() => {
    fectTodayData()
  }, [callTodayApi])

  async function fectWeekData() {
    // setApiData([])
    const response = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=8fa1d7ebd4f44371dfeba46c72f4153a")
    // setApiWeekData(response)
    setApiWeekData(response.data.results)
    console.log(apiWeekData)

  }
  useEffect(() => {
    fectWeekData()
  }, [callWeekApi])
  return (
    <div className='mt-[4vw] wrapper'>
      <div className='flex gap-4 items-center ml-4 md:ml-0'>
        <h1 className='font-semibold text-xl'>Trending</h1>
        <div className='  border border-black  rounded-[100px]  space-x-4'>
          <button onClick={handleClick} className={`btn-text ${buttonActive ? "bg-[#032541] text-white" : " bg-transparent"} py-1 px-4 rounded-[100px]`}>{btn1}</button>
          <button onClick={handleClick2} className={` btn-text py-1 px-4 ${buttonActive2 ? "bg-[#032541] text-white" : " bg-transparent"}  rounded-[100px] `}>{btn2}</button>
        </div>
      </div>
      <div className='moviewrapper mt-4   w-full flex gap-6 min-h-[300px] overflow-x-auto'>
        {
          buttonActive ?
            (<div className='flex'>
              {
                apiTodayData.map((data) => {
                  return <Link href={`/movie/${data.id}`} key={data.id}> <Card key={data.id} {...data}  /></Link>
                })
              }
            </div>)
            :
            (<div className='flex'>
              {


                apiWeekData.map((data) => {
                  return <Link href={`/movie/${data.id}`} key={data.id}> <Card key={data.id} {...data}  /></Link>
                })
              }
            </div>)
        }



      </div>
    </div>
  )
}

export default Moviewrapper