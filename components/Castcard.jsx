import React from 'react'

function Castcard(props) {
    return (
        <>
            <div className='bg-[#FFFFFF] min-w-[12%] max-w-[12%]  h-[90%]  gap-2 rounded-xl overflow-hidden  shadow-xl '>
                <div className='w-[100%] h-[70%] bg-[#FFFFFF] rounded-t-xl overflow-hidden'>
                    {props.profile_path &&


                        <img className='w-[100%] h-[100%] object-cover ' src={`https://www.themoviedb.org/t/p/w138_and_h175_face${props.profile_path}`} alt="" />
                    }
                    {!props.profile_path &&
                        props.gender === 1 ?
                        (<img className='w-[100%] h-[100%] object-cover ' src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg' alt="" />
                        )
                        :
                        (<img className='w-[100%] h-[100%] object-cover ' src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg' alt="" />
                        )

                    }

                </div>
                <div className='w-[100%] h-[30%] bg-[#FFFFFF] rounded-b-xl mt-4'>
                    <div className='max-w-[100%] items-center pl-3 '><h1 className=' font-bold'>{props.name}</h1></div>
                    <div className='w-[100%]  flex pl-3 text-[1.5vh] font-light'><h3 className=' font-semibold opacity-70'>{props.character}</h3></div>
                </div>
            </div>

        </>
    )
}

export default Castcard
