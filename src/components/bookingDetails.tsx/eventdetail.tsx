"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdCalendar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const EventDetail = () => {
  const [eventDetail] = useState({title:"Arjit Singh Solo Live Concert", date:"8 Sept, 2023", location:"Kathmandu, Nepal"});
  return (
    <div className="h-[154px] flex flex-row rounded-xl overflow-hidden">
      <div className="flex flex-col w-1/2 h-full bg-[#6F78F4] p-5 justify-evenly ">
        <div className="font-ChangaOne text-3xl">
          {eventDetail.title}
        </div>
        <div className=" flex flex-row space-x-3">
          <div className="flex flex-row  items-center space-x-2">
            <span className="text-white">
              <IoMdCalendar />
            </span>
            <span className="font-Amaranath text-sm">{eventDetail.date}</span>
          </div>
          <div className="flex flex-row  items-center space-x-2">
            <span className="text-white">
              <IoLocationSharp />
            </span>
            <span className="font-Amaranath text-sm">{eventDetail.location}</span>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 h-full  relative">
        <Image src={'/image 13.png'} 
        fill style={{ objectFit: "cover" }} 
        alt="image" className=""/>
      </div>
    </div>
  );
};

export default EventDetail;
