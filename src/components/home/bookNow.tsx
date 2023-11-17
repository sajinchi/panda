import React from 'react'
import {BsArrowRight} from "react-icons/bs";

const BookNow = () => {
  return (
    <div className='flex w-full items-center justify-center absolute -mt-16'>
      <div className='flex flex-row bg-[#FFF974] h-[132px] w-[946px] rounded-2xl items-center justify-center font-ChangaOne p-10 space-x-20'>
        <span className='text-2xl'>Make your event unforgettable with our customizable event planning service</span>
        <button className='flex flex-row bg-[#252A6C] text-lg text-white w-[202px] h-12 rounded-full items-center justify-center space-x-2'><span>Book now</span> <BsArrowRight /></button>
      </div>
    </div>
  )
}

export default BookNow
