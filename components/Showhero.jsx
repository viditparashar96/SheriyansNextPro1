import React from 'react'
import {AiOutlineMenu,AiFillHeart,AiFillStar} from 'react-icons/ai'
import {BsFillBookmarkFill,BsFillPlayFill} from 'react-icons/bs'
function Showhero() {
  return (
    <div className=' relative w-full h-[550px] bg-cover bg-center   overflow-hidden text-white'>
        <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/oFv4qzBLAbi7AKnPaRfiApF4XbL.jpg" className='w-full h-full object-cover' alt="das" />
       <div className='w-full flex justify-center items-center h-full absolute top-0 left-0 bg-[#000000a7]'>
        <div className='w-10/12 flex h-full'>
            <div className='left flex items-center justify-center w-[30%]  h-full'>
                <div className='w-7/12 h-[90%]  bg-center bg-cover rounded-lg bg-[url("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg")]'>

                </div>
            </div>
            <div className='right w-[70%]  h-full'>
                <div className='mt-[3vw]'>
                <h1 className='inline  text-3xl font-bold'>Indiana Jones and the Dial of Destiny</h1>
                <span className='ml-2'>(2023)</span>
                </div>
                <div className='flex items-center space-x-3 text-sm mt-1'>
                    <div className='px-2 border border-white'>
                        <h1>PG-13</h1>
                    </div>
                    <h1>06/30/2023</h1>
                    <h1>US</h1>
                    <div className='w-[4px] h-[4px] rounded-[100px] bg-black'></div>
                    <h1>Adventure, Action, Fantasy</h1>
                    <div className='w-[4px] h-[4px] rounded-[100px] bg-black'></div>
                    <h1>2h 35m</h1>
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
                <h1 className='mt-5'>A legend will face his destiny.</h1>
                <div className='mt-4'>
                    <h1 className='text-xl font-bold'>Overview</h1>
                    <p className='mt-4'>Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.</p>
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