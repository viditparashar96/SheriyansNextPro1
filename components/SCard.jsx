"use client"
import React, { useEffect, useState } from 'react'
import { CircularProgress } from "@nextui-org/react";

function SCard(props) {
    console.log(props)
    return (
        <div className=' space-y-4 h-[430px]  relative overflow-hidden rounded-lg bg-white bprder shadow-md'>
            <div className='w-[100%] h-[70%] '>
                <div className='w-[200px] h-[300px]'>
                    {props.backdrop_path &&

                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${props.backdrop_path}`} className='' alt="" />
                    }
                    {!props.backdrop_path &&
                        <img src="https://arthurmillerfoundation.org/wp-content/uploads/2018/06/default-placeholder.png" className='w-[100%] h-[100%] object-cover' alt="" />
                    }
                </div>
                <div className=' absolute top-2 left-1 chart w-[40px] bg-[#081C22] text-white font-bold flex items-center justify-center rounded-[50%] h-[40px]'>
                    <CircularProgress

                        aria-label="Loading..."
                        size="md"
                        value={props.vote_average * 10}
                        color="success"
                        showValueLabel={true}
                    />

                </div>
               
                <div className='ml-2 mt-2'>
                {props.original_name &&
                  <h3 className='font-semibold w-[200px]'>{props.original_name}</h3>

                }
                {props.title &&

                    <h3 className='font-semibold w-[200px]'>{props.title}</h3>
                }
                {props.first_air_date &&
                    <h3>{props.first_air_date}</h3>

                }
                {props.release_date &&

                    <h3>{props.release_date}</h3>

                }
                </div>
            </div>
        </div>
    )
}

export default SCard