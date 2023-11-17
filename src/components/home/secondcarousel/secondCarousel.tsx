"use client";
import React, { useState } from 'react'

import Image from 'next/image.js';
import UpcomingEvents from './upcomingEvents'
import PastEvents from './pastEvents'

const SecondCarousel = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className='m-20 mt-40 h-[525px]'>
      <div className='flex flex-col w-full h-[465px] border-[3px] border-[#373E90] rounded-3xl'>
        <button onClick={()=>setEnabled(!enabled)} className='flex flex-row bg-[#373E90] h-[58px] w-[424px] rounded-full text-white items-center font-ChangaOne text-xl -mt-8 ml-20'>
          <div className={`flex absolute rounded-full bg-[#FFF974] h-[60px] w-56 ${enabled ? "translate-x-full w-[212px] duration-700":"duration-700"} items-center justify-center`}>
            <Image src={'/eventslidebuttonpanda.png'} width={56} height={59} alt='' className='absolute -mt-24' />
            {Boolean (!enabled) && (<div className={`${enabled ? " duration-200" : "text-black duration-200"}`}>Upcoming Events</div>)}
            {Boolean (enabled) && (<div className={`${enabled ? "text-black duration-200" : " duration-200"}`}>Past Events</div>)}
          </div>
          <div className=' flex grow flex-row justify-around'>
            <div>Upcoming Events</div>
            <div>Past Events</div>
          </div>
        </button>
        <div className='m-10'>
          {Boolean (!enabled) && (<div><UpcomingEvents /></div>)}
          {Boolean (enabled) && (<div><PastEvents /></div>)}
        </div>
    </div>
    </div>
  )
}

export default SecondCarousel
