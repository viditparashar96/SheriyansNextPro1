"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { AiOutlineMenu, AiFillHeart, AiFillStar } from 'react-icons/ai'
import { BsFillBookmarkFill, BsFillPlayFill } from 'react-icons/bs'
import { CircularProgress } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import axios from 'axios';
import Footer from './Footer';

function Showhero({ showDets }) {
    if(!showDets){
        return <div></div>
    }
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [youtubeurl,setYouTubeUrl]=useState('')
    var geners=''
    showDets.genres.forEach((obj)=>{
        geners+=`${obj.name}, `
    })

    const fecthData=async()=>{
       const res=await axios.get(`https://api.themoviedb.org/3/movie/${showDets.id}/videos?api_key=8fa1d7ebd4f44371dfeba46c72f4153a`)
        console.log(res.data)
        const tralierObj=res.data.results.find((obj)=>{
            return obj.type==="Trailer"
        })
        console.log(tralierObj)
        setYouTubeUrl(tralierObj.key)
    }
    
    useEffect(()=>{
        fecthData()
    },[])





    if (!showDets) {
        console.log("data is empty")
        return <div>Loading............................................</div>
    }
    else {
        console.log("data is here")
        console.log(showDets)

        var totalMinutes = showDets.runtime

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;


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
                                <h1 className='inline  text-3xl font-bold'>{showDets.title}</h1>
                                <span className='ml-2'>(2023)</span>
                            </div>
                            <div className='flex items-center space-x-3 text-sm mt-1'>
                                <div className='px-2 border border-white'>
                                    <h1>PG-13</h1>
                                </div>
                                <h1>{showDets.release_date}</h1>
                                <h1>US</h1>
                                <div className='w-[4px] h-[4px] rounded-[100px] bg-white'></div>
                                <h1>{geners}</h1>
                                <div className='w-[4px] h-[4px] rounded-[100px] bg-white'></div>
                                <h1>{`${hours}h ${minutes}m`}</h1>
                            </div>
                            <div className='mt-4 flex space-x-3 items-center'>
                                <div className='flex items-center space-x-3 font-bold'>
                                    <div className='chart w-[50px] bg-[#081C22] text-white font-bold flex items-center justify-center rounded-[50%] h-[50px]'>
                                        <CircularProgress

                                            aria-label="Loading..."
                                            size="lg"
                                            value={showDets.vote_average * 10}
                                            color="success"
                                            showValueLabel={true}
                                        />

                                    </div>
                                    <h1 className=' max-w-[50px]'>User Score</h1>
                                </div>
                                <div className='w-[40px] flex items-center justify-center h-[40px] bg-[#032541]  text-white rounded-[50%]'>
                                    <AiOutlineMenu />
                                </div>
                                <div className='w-[40px] flex items-center justify-center h-[40px] bg-[#032541]  text-white rounded-[50%]'>
                                    <AiFillHeart />
                                </div>
                                <div className='w-[40px] flex items-center justify-center h-[40px] bg-[#032541]  text-white rounded-[50%]'>
                                    <BsFillBookmarkFill />
                                </div>
                                <div className='w-[40px] flex items-center justify-center h-[40px] bg-[#032541]  text-white rounded-[50%]'>
                                    <AiFillStar />
                                </div>
                                <div className='flex space-x-2 items-center justify-center'>
                                    <BsFillPlayFill fontSize={25} />
                                    {/* <h1 className='text-md font-semibold'>Play Trailer</h1> */}
                                    <Button variant='' onPress={onOpen}>Play Trailer</Button>
                                    <Modal
                                    className=' bg-black min-w-[100vh] h-[60%]  overflow-hidden rounded-none'
                                        backdrop="opaque"
                                        isOpen={isOpen}
                                        onOpenChange={onOpenChange}
                                        classNames={{
                                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                                            
                                        }}
                                    >
                                        <ModalContent >
                                            <ReactPlayer height="100%" width="100%" controls url={`https://www.youtube.com/watch?v=${youtubeurl}`}/>
                                        </ModalContent>
                                    </Modal>
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
}

export default Showhero