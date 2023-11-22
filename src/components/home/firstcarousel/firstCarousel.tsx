"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "../../../app/styles.css";
import styles from "./firstCarousel.module.css";

import { FaLocationDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface EventsData {
  id: string;
  image: string;
  date: string;
  title: string;
  location: string;
}

export default function App() {
  const router = useRouter();
  const [activeindex, setActiveindex] = useState(0);
  const [events] = useState<EventsData[]>([
    {
      id: "1",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
    },
    {
      id: "2",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event go go Live",
      location: "Marriot Hotel, Baluwatar",
    },
    {
      id: "3",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
    },
    {
      id: "4",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event goooo",
      location: "Marriot Hotel, Baluwatar",
    },
    {
      id: "5",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
    },
    {
      id: "6",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
    },
    {
      id: "7",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
    },
    {
      id: "8",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
    },
    {
      id: "9",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
    },
    {
      id: "10",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
    },
  ]);
  // updated the array with specific date and time
  const updatedEvents = events.map((event) => {
    const dateObj = new Date(event.date);
    const fulltime = dateObj.toLocaleTimeString();
    const date = dateObj.toLocaleString("default", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const time = fulltime.slice(0, -3).trim();
    return {
      ...event,
      time,
      date,
    };
  });

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    setActiveindex(swiper.activeIndex);
  };
  return (
    <div className="h-full">
      <style>
        {`

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .swiper-slide img {
      display: block;
      width: 924px;
      height: 460px;
      object-fit: cover;
      align-items: center;
    }
    
    .swiper-slide {
      width: 60%;
      
    }

    .swiper-slide:nth-child(2n) {
      width: 60%;
      
    }
    
    .swiper-slide:nth-child(3n) {
      width: 60%;
    }
  `}
      </style>

      <div className="relative ">
        <div className=" bg-[#151841] absolute z-10 w-full  mt-0 h-[40px] rounded-b-[300%]  "></div>

        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={0}
          onSlideChange={handleSlideChange}
          loop={false}
          autoplay={true}
          grabCursor={true}
          className="mySwiper"
        >
          {updatedEvents.map((event, index) => {
            return (
              <SwiperSlide
                  key={index}
                  className={`flex flex-col space-y-5 w-2/5 ${
                    index == activeindex ? "unblur-slide" : "blur-slide"
                  }`}
                >
                    <Link
                      href={{
                        pathname: "./event",
                        query: "id=" + event.id,
                      }}
                    >
                  <div className="flex justify-center items-center h-[450px]  overflow-hidden">
                    <img
                      alt=""
                      src={event.image}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="flex flex-col text-white items-center pt-10 ">
                    <div className="font-ChangaOne text-lg space-x-2">
                      <span>{event.date}</span>
                      <span className="text-black bg-[#FFF974] rounded-full p-2 ">
                        {event.time}
                      </span>
                    </div>
                    <div className="font-ChangaOne text-3xl">{event.title}</div>
                    <div className=" flex items-center  space-x-2">
                      <FaLocationDot />
                      <span className="text-base font-Amaranath italic">
                        {event.location}
                      </span>
                    </div>
                  </div>
              </Link>
                </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute  bg-[#151841] z-20 w-full  mt-[-145px] h-[40px] rounded-t-[300%] "></div>
      </div>
    </div>
  );
}
