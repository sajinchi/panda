"use client";
import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import { IGetEventListResponse, GetEventListService } from "@/services/eventslist.service";
import { IEventsData } from "@/types/IEventType";

export default function App() {
  const [activeindex, setActiveindex] = useState(0);
  const [events, setEvents ] = useState<IEventsData[]>([
    {
      id: "1",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      id: "2",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event go go Live",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      id: "3",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      id: "4",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event goooo",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      id: "5",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      id: "6",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      id: "7",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      id: "8",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      id: "9",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
    {
      id: "10",
      image: "/5.png",
      date: "2023-08-18T05:23:37.023273Z",
      title: "Live Event",
      location: "Marriot Hotel, Baluwatar",
      price: "40",
      category: "Sports",
      time:"1:00 P.M."
    },
  ]);

  // const eventList = async () => {
  //   const response: IGetEventListResponse = await GetEventListService();
  //   if (response.status == 200) {
  //     setEvents(response.data);
  //   }
  // };
  // useEffect(() => {
  //   eventList();
  // }, []);
  
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
