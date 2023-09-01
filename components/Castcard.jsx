import React from 'react'

function Castcard() {
    return (
        <>
            <div className='bg-[#FFFFFF] min-w-[12%] max-w-[12%]  h-[90%]  gap-2 rounded-xl overflow-hidden  shadow-xl '>
                <div className='w-[100%] h-[70%] bg-[#FFFFFF] rounded-t-xl overflow-hidden'>
                <img className='w-[100%] h-[100%] object-cover ' src="https://www.themoviedb.org/t/p/w138_and_h175_face/lldeQ91GwIVff43JBrpdbAAeYWj.jpg" alt="" /> 
                </div>
                <div className='w-[100%] h-[30%] bg-[#FFFFFF] rounded-b-xl'>
                <div className='max-w-[100%] items-center pl-3 '><h1>Jason Stathams</h1></div>
                <div className='w-[100%]  flex pl-3 text-[1.5vh] font-light'><h3>Jonas Taylor</h3></div>
                </div>
            </div>
          
        </>
    )
}

export default Castcard
