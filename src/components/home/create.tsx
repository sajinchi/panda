import React from 'react'
import Image from 'next/image';
import {BiPlayCircle} from 'react-icons/bi';

const Create = () => {
  return (
    <div className='flex m-20 mx-20 p-5 h-[140px] bg-[#FFF974] rounded-lg font-ChangaOne items-center justify-center overflow-hidden'>
      <Image src={"/createpanda.png"} height={130} width={55} alt='' className='relative -ml-5 mt-12' />
      <span className=' grow text-3xl'>Want to create your own event and start selling?</span>
      <div className='flex items-center space-x-2'>
      <span className='text-3xl'><BiPlayCircle /></span>
      <button className='text-xl'>Watch Tutorial</button>
      <button className='bg-[#252A6C] text-white h-[56px] w-[232px] rounded-full text-xl'>Start Journey</button>
    </div>
    </div>
  )
}

export default Create
