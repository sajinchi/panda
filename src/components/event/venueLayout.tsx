"use client";
import React, { useState } from "react";

const VenueLayout = () => {
  const [view2d,setView2d] = useState(true);
  return (
    <section className="m-10 my-20" id="venuelayout">
      <div className="font-ChangaOne text-3xl text-white my-5">Venue Layout</div>
      <div className="h-[539px] w-full bg-[#252A6C] p-10 flex flex-row justify-between">
        <button className="relative flex flex-row h-[30px] w-[82px]  border-[1px] border-white rounded-lg  text-[17px] text-white font-ChangaOne overflow-hidden " onClick={() => setView2d(!view2d)}>
          <div className={`absolute bg-[#6F78F4]  h-[29px] w-[40px]  ${view2d ? " duration-300" : " translate-x-full duration-300 "}`}></div>
          <span className={`flex z-10 w-1/2 h-full items-center justify-center`}>2D</span>
          <span className={`flex z-10 w-1/2 h-full items-center justify-center`}>3D</span>
        </button>
        <div className="flex flex-col space-y-2 text-white">
            <div className='flex flex-row items-center space-x-2'><div className='bg-black h-[13px] w-[28px]'></div><span>Unavailable</span></div>
            <div className='flex flex-row items-center space-x-2'><div className='bg-[#FFDFDF] h-[13px] w-[28px]'></div><span>Event Area</span></div>
            <div className='flex flex-row items-center space-x-2'><div className='bg-[#BAA7EF] h-[13px] w-[28px]'></div><span>VIP Area</span></div>
        </div>
      </div>
    </section>
  );
};

export default VenueLayout;
