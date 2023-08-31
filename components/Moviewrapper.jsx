"use client"
import React, { useState } from 'react'
import Card from './Card'

function Moviewrapper({btn1,btn2}) {
  const [buttonActive, setButtonActive] = useState(true)
  const [buttonActive2, setButtonActive2] = useState(false)

  function handleClick() {
    setButtonActive(!buttonActive)
    setButtonActive2(false)
  }
  function handleClick2() {
    setButtonActive2(!buttonActive2)
    setButtonActive(false)
  }
  return (
    <div className='mt-[4vw]'>
      <div className='flex gap-4 items-center ml-4 md:ml-0'>
        <h1 className='font-semibold text-xl'>Trending</h1>
        <div className='  border border-black  rounded-[100px]  space-x-4'>
          <button onClick={handleClick} className={`btn-text ${buttonActive ? "bg-[#032541] text-white" : " bg-transparent"} py-1 px-4 rounded-[100px]`}>{btn1}</button>
          <button onClick={handleClick2} className={` btn-text py-1 px-4 ${buttonActive2 ? "bg-[#032541] text-white" : " bg-transparent"}  rounded-[100px] `}>{btn2}</button>
        </div>
      </div>
      <div className='moviewrapper mt-4   w-full flex gap-6 min-h-[300px] overflow-x-auto'>
        <Card  title="Indiana Jones and the Dial of Destiny" month="Jun" day="28" year="2023"/>

        <Card title="Indiana Jones and the Dial of Destiny" month="Jun" day="28" year="2023"/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />


      </div>
    </div>
  )
}

export default Moviewrapper