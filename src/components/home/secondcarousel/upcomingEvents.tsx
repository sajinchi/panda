"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface EventsData {
  image: string;
  date: string;
  title: string;
  location: string;
  price: string;
  category: string;
  time:string;
}

const UpcomingEvents = () => {
  const [events] = useState<EventsData[]>([
    {
      image: "/1.jpg",
      date: "8 SEPT, 2023",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      image: "/2.jpg",
      date: "9 DEC, 2023",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "50",
      category: "Music",
      time:"12:30 P.M."
    },
    {
      image: "/3.jpg",
      date: "28 SEPT, 2023",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "90",
      category: "Sports",
      time:"8:00 A.M."
    },
    {
      image: "/4.jpeg",
      date: "8 Jan, 2024",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "200",
      category: "Music",
      time:"5:00 P.M."
    },
    {
      image: "/5.png",
      date: "8 OCT, 2023",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"2:00 P.M."
    },
  ]);
  return (
    <div className="transition ease-in-out duration-500">

          <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={false}
        grabCursor = {true}
        className="h-[350px] overflow-hidden"
        >
        {events.map((event,index)=>{
        const [hovered, setHovered] = useState(false);
          return(
            <SwiperSlide key={index}  >
                <Image src={event.image} fill style={{objectFit:"cover"}} alt="" className="rounded-lg relative"/>
                <div className={`flex flex-col relative z-10  ${hovered ? "bg-black/50 duration-500": "bg-black/30"} h-full w-full`} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
                  <div className={`flex w-full h-[100px] flex-row ${hovered ? "duration-500" : "justify-between duration-500" }  p-5 `}>
                    <div className={`relative flex w-[121px] h-[27px] bg-[#252A6C] rounded-full font-ChangaOne text-sm text-white ${hovered ? " translate-x-[102px] duration-300" : "duration-300"} items-center justify-center`}><span>{event.date}</span></div>
                    <div className={`relative flex w-[86px] h-[27px] border-2 border-white rounded-full font-ChangaOne text-sm text-white items-center justify-center ${hovered ? " translate-y-10 duration-300 " : "duration-300"}`}>${event.price}.00</div>
                  </div>
                  <div className="flex items-baseline justify-center justify-items-end">
                    <div className={`flex flex-col bg-[#6F78F4] w-[320px] ${hovered ? "mt-20 h-[157px] duration-500" : "m-5 mt-48 h-[67px] duration-500"}  rounded-lg text-white items-center justify-start space-y-2 overflow-hidden`}>
                      <div className="p-3">
                        <div className="flex flex-row font-ChangaOne text-base space-x-2 items-center">
                          <div>{event.title}</div>
                          <div className="flex italic text-black h-4 w-[57px] bg-white rounded-full items-center justify-center text-xs">{event.category}</div>
                        </div>
                        <div className="font-Amaranath italic text-sm">{event.location}</div>
                      </div>
                      <div className="flex flex-col duration-500 items-center justify-center space-y-5">
                        <div className="font-ChangaOne text-base space-x-2 underline"><span>{event.time}</span><span>onwards</span></div>
                        <button className="flex font-ChangaOne text-base underline items-center"><span>Buy Tickets</span><BsArrowRight/></button>
                      </div>
                    </div>
                    </div>
                  </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
  
};

export default UpcomingEvents;
