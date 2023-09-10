"use client"
import React from 'react'

function SearchCard(props) {
    return (
        <div className='flex w-full min-h-[130px]   rounded-md'>
            <div className='left w-[10%] '>
                {!props.backdrop_path &&
                    <img src="https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg?w=360" className='w-[100%] h-[100%] object-cover' alt="" />

                }
                {props.backdrop_path &&

                    <img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${props.backdrop_path}`} className='w-[100%] h-[100%] object-cover' alt="" />
                }
            </div>
            <div className='right w-[92%] p-6'>
                {props.title &&

                    <div>
                        <h1 className=' font-semibold'>{props.title}</h1>
                    </div>
                }
                {props.name &&
                    <div>
                        <h1 className=' font-semibold'>{props.name}</h1>
                    </div>
                }
                {props.release_date &&


                    <div>
                        <h1>{props.release_date}</h1>
                    </div>
                }
                {props.first_air_date &&
                    <div>
                        <h1>{props.first_air_date}</h1>
                    </div>

                }
                <div>
                    <h1>{props.overview}

                    </h1>
                </div>
            </div>
        </div>
    )
}

export default SearchCard