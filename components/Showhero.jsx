import React from 'react'
import {AiOutlineMenu,AiFillHeart,AiFillStar} from 'react-icons/ai'
import {BsFillBookmarkFill,BsFillPlayFill} from 'react-icons/bs'
function Showhero({showDets}) {
    // var totalMinutes=showDets.runtime
    
    //     const hours = Math.floor(totalMinutes / 60);
    //     const minutes = totalMinutes % 60;

     
  return (
    <div className=' relative w-full h-[550px] bg-cover bg-center   overflow-hidden text-white'>
        <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${showDets.backdrop_path}`} className='w-full h-full object-cover' alt="das" />
       <div className='w-full flex justify-center items-center h-full absolute top-0 left-0 bg-[#141414cb]'>
        <div className='w-10/12 flex h-full'>
            <div className='left flex items-center justify-center min-w-[30%]  h-full'>
                <div className='w-8/12 h-[90%] overflow-hidden  bg-center bg-cover rounded-lg'>
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${showDets.poster_path}`} className=' object-cover w-[100%] h-[100%]' alt="" />
                </div>
            </div>
            <div className='right w-[70%]  h-full'>
                <div className='mt-[3vw]'>
                <h1 className='inline  text-3xl font-bold'>{showDets.name}</h1>
                <span className='ml-2'>(2023)</span>
                </div>
                <div className='flex items-center space-x-3 text-sm mt-1'>
                    <div className='px-2 border border-white'>
                        <h1>PG-13</h1>
                    </div>
                    <h1>06/30/2023</h1>
                    <h1>US</h1>
                    <div className='w-[4px] h-[4px] rounded-[100px] bg-black'></div>
                    <h1>asdasd</h1>
                    <div className='w-[4px] h-[4px] rounded-[100px] bg-black'></div>
                    {/* <h1>{`${hours}h ${minutes}m`}</h1> */}
                </div>
                <div className='mt-4 flex space-x-3 items-center'>
                    <div className='flex items-center space-x-3 font-bold'>
                        <div className='chart w-[50px] bg-[#081C22] text-white font-bold flex items-center justify-center rounded-[50%] h-[50px]'>
                            <h1>67%</h1> 
                        </div>
                        <h1 className=' max-w-[50px]'>User Score</h1>
                    </div>
                    <div className='w-[40px] flex items-center justify-center h-[40px] bg-[#032541]  text-white rounded-[50%]'>
                        <AiOutlineMenu/>
                    </div>
                    <div className='w-[40px] flex items-center justify-center h-[40px] bg-[#032541]  text-white rounded-[50%]'>
                        <AiFillHeart/>
                    </div>
                    <div className='w-[40px] flex items-center justify-center h-[40px] bg-[#032541]  text-white rounded-[50%]'>
                        <BsFillBookmarkFill/>
                    </div>
                    <div className='w-[40px] flex items-center justify-center h-[40px] bg-[#032541]  text-white rounded-[50%]'>
                        <AiFillStar/>
                    </div>
                    <div className='flex space-x-2 items-center justify-center'>
                            <BsFillPlayFill fontSize={25}/>
                            <h1 className='text-md font-semibold'>Play Trailer</h1>
                    </div>
                </div>
                <h1 className='mt-5'>{showDets.tagline}</h1>
                <div className='mt-4'>
                    <h1 className='text-xl font-bold'>Overview</h1>
                    <p className='mt-4'>{showDets.overview}</p>
                </div>
                <div className=' mt-3 flex items-center gap-7 justify-between text-white w-10/12  '>
                    <div className=' w-fit p-3 flex flex-col gap-4'>
                        <div>
                            <h1>James Mangold</h1>
                            <h1>Director, Writer</h1>
                        </div>
                        <div>
                            <h1>John-Henry Butterworth</h1>
                            <h1>Writer</h1>
                        </div>
                    </div>
                    <div className='  w-fit p-3 flex flex-col gap-4'>
                        <div>
                            <h1>James Mangold</h1>
                            <h1>Director, Writer</h1>
                        </div>
                        <div>
                            <h1>John-Henry Butterworth</h1>
                            <h1>Writer</h1>
                        </div>
                    </div>
                    <div className='  w-fit p-3 flex flex-col gap-4'>
                        <div>
                            <h1>James Mangold</h1>
                            <h1>Director, Writer</h1>
                        </div>
                        <div>
                            <h1>John-Henry Butterworth</h1>
                            <h1>Writer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
        
        </div>
  )
}

export default Showhero