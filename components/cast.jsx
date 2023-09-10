import React from 'react'
import Castcard from './Castcard'
function cast({castData}) {
  if(!castData){
    return <div></div>
  }
  return (
    <div  className='h-[50vh] mx-auto   flex  items-center justify-center flex-col'>
    <div className='w-[90%] h-[15%] bg-[#FFFFFF] flex items-center text-[3vh] pl-3.5'><h1>Top Billed Cast</h1></div>

      <div id='castcomp' className=' h-[80%] bg-[#FFFFFF] w-[80%] overflow-x-scroll flex gap-6 items-center pl-3  '>
        {
          castData.map((data)=>{
            return <Castcard {...data} key={data.id}/>
          })
        }
       
      


      </div>

    </div>
  )
}

export default cast
