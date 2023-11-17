"use client";
import React, { useState } from 'react'

const SeatLayout = () => {
  const [view2d,setView2d] = useState(true);

  return (
    <div className='flex h-[804px] w-full bg-[#252A6C] rounded-xl p-5'>
      <div className="flex flex-row w-full justify-between">
           <button className="relative flex flex-row h-[30px] w-[82px] border-[1px] border-white rounded-lg m-5 text-[17px] font-ChangaOne overflow-hidden" onClick={()=>setView2d(!view2d)}>
              <div className={`absolute bg-[#6F78F4]  h-[29px] w-[40px]  ${ view2d ? ' duration-300' : ' translate-x-full duration-300 ' }`}></div>
              <span className={`flex z-10 w-1/2 h-full items-center justify-center`}>2D</span>
              <span className={`flex z-10 w-1/2 h-full items-center justify-center`}>3D</span>
          </button>
          <div className='flex flex-col space-y-2 p-5 font-Amaranath text-sm'>
            <div className='flex flex-row items-center space-x-2'><div className='bg-black h-[13px] w-[28px]'></div><span>Unavailable</span></div>
            <div className='flex flex-row items-center space-x-2'><div className='bg-[#FF5449] h-[13px] w-[28px]'></div><span>Reserved</span></div>
            <div className='flex flex-row items-center space-x-2'><div className='bg-[#FFDFDF] h-[13px] w-[28px]'></div><span>Event Area</span></div>
            <div className='flex flex-row items-center space-x-2'><div className='bg-[#FF897D] h-[13px] w-[28px]'></div><span>VIP Area</span></div>
          </div>
      </div>  
    </div>
  )
}

export default SeatLayout
