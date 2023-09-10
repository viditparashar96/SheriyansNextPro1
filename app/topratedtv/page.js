"use client"
import SCard from '@/components/SCard'
import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link'
import Loading from '@/components/Loading'

function page() {
    const [searchData, setSearchData] = useState([])
    const [page, setPage] = useState(1)

    const fetchData = async ()=>{
        const response= await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=8fa1d7ebd4f44371dfeba46c72f4153a&page=${page}`)
        setSearchData([...searchData, ...response.data.results])
        setPage(page + 1)
        console.log(response)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <Navbar />
            <div className='w-9/12 h-[100vh] mx-auto  mt-6'>

            <InfiniteScroll
                        className=' gap-4 flex flex-wrap'
                        dataLength={searchData.length}
                        next={fetchData}
                        hasMore={true} // Set this to false when there are no more pages
                        loader={<Loading/>} // Loading indicator
                        endMessage={<p>That's it</p>}
                    >

                        {
                            searchData.map(function (eachData) {
                                return <Link href={`/tv/${eachData.id}`}><SCard {...eachData} key={eachData.id} /></Link>
                            })
                        }

                    </InfiniteScroll>



                
            </div>


        </div>
    )
}

export default page