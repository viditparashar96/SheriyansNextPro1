"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlinePlus,AiOutlineMenuFold,AiOutlineClose } from 'react-icons/ai'
import logo from '@/public/image/logo.png'
import { BsSearch } from 'react-icons/bs'
import { User } from '@/utils/Usercontext'
import axios from 'axios'
import { useRouter } from 'next/navigation'



function Navbar() {
    const router=useRouter()
    const   [menu,setMenu]=useState(false)
    const { isLoggedIn, setIsLoggedIn } = useContext(User)
    const handleLogout= async()=>{
        const res=await axios.get("/api/logout")
        // console.log(res.data)
        setIsLoggedIn(false)
        router.push("/login")
    }
   
    function handleMenu(){
        setMenu(true)
    }
    function handleCross(){
        setMenu(false)
    }
    useEffect(()=>{
        
    },[menu])
    return (
        <div className=' relative'>

       
         <div className={`overlay  absolute  w-[35vh] top-0   ${menu?"right-0":"-right-[100%]"}  transition-all ease-in-out  duration-700 h-[100vh] z-30 bg-[#032541f8]`}>
                <div className="overlay-nav w-full h-[70px]  flex items-center justify-end px-6">
                    <AiOutlineClose onClick={handleCross} fontSize={20}  fontWeight={800} color='#fff'/>
                </div>
                <div className='flex  mt-[10vw] p-4 space-y-4  flex-col  text-white text-lg font-semibold'>
                    <Link href="#">Movies</Link>
                    <Link href="#">Tv Shows</Link>
                    {!isLoggedIn&&

                        <div  className='flex flex-col space-y-4'>

                    <Link href="/login">Login</Link>
                    <Link href="/signup">Join Us</Link>
                        </div>
                    }
                      {isLoggedIn &&
                                <button onClick={handleLogout} className=' font-semibold'>

                                Logout
                                </button>

                            }
                    

                </div>
            </div>
        <div className=' w-full h-[70px] bg-[#032541] text-white flex shadow-lg items-center'>
           
            <div className='w-full md:px-0  md:w-7/12 mx-auto  flex items-center justify-between px-6'>
                <div className='flex space-x-4'>
                    <div className='flex items-center'>
                        <Link href="/"> <img src={logo} alt="logo" /></Link>
                    </div>
                    <div className=' flex space-x-3 items-center'>
                        <div className='relative  py-4 movies'>

                            <Link href="#" className='font-semibold'>Movies</Link>
                            <div className='movieslink absolute min-w-[140px] py-3 px-4 left-0 bg-white text-black rounded-sm flex flex-col gap-5 shadow-lg'>
                                <div className='w-full  p-1 hover:bg-slate-100 transition-all'>

                                    <Link href="#">Popular</Link>
                                </div>
                                <div className='w-full p-2'>

                                    <Link href="#">Now playing</Link>
                                </div>
                                <div className='w-full  p-2'>

                                    <Link href="#">Upcoming</Link>
                                </div>
                                <div className='w-full p-2'>

                                    <Link href="#">Top Rated</Link>
                                </div>


                            </div>
                        </div>
                        <div className='relative  py-4 tvshows'>

                            <Link href="#" className='font-semibold'>TV Shows</Link>
                            <div className='tvshowslink absolute min-w-[140px] py-3 px-4 left-0  bg-white text-black rounded-sm  flex flex-col gap-5  shadow-lg'>
                                <div className='w-full  p-1'>

                                    <Link href="#">Popular</Link>
                                </div>
                                <div className='w-full p-2'>

                                    <Link href="#">Aring Today</Link>
                                </div>
                                <div className='w-full  p-2'>

                                    <Link href="#">On Tv</Link>
                                </div>
                                <div className='w-full p-2'>

                                    <Link href="#">Top Rated</Link>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
                <div className='flex items-center'>
                    <AiOutlineMenuFold  onClick={handleMenu} className='menu md:hidden block'/>
                    <div className='md:flex  hidden items-center gap-5'>
                        <AiOutlinePlus fontWeight={800} fontSize="18px" className=' cursor-pointer' />
                        <div className=' p-1 border rounded-sm hover:bg-white hover:text-black transition duration-400 cursor-pointer'>
                            <div>
                                <h1>EN</h1>
                            </div>

                        </div>
                        <div className='flex gap-6 items-center'>
                            {isLoggedIn &&
                                <button onClick={handleLogout} className=' font-semibold'>

                                Logout
                                </button>

                            }
                            
                            {!isLoggedIn &&
                                <div className=' space-x-3'>

                                    <Link href="/login" className='font-semibold'>Login</Link>
                                    <Link href="/signup" className='font-semibold'>Join TMDB</Link>
                                </div>
                            }

                            <BsSearch fontWeight={800} fontSize={18} color='#01B4E4' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
         </div>
    )
}

export default Navbar