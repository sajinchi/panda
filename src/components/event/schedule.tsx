"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Event {
  image: string;
  time: string;
  act_type: string;
  artist: string;
}

interface ScheduleTypes {
  days: Event[];
}

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const ScheduleData: ScheduleTypes[] = [
    {
      days: [
        {
          image: "/artist1.png",
          time: "10:00 AM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist2.png",
          time: "10:00 PM - 11:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist3.png",
          time: "8:00 PM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist1.png",
          time: "8:00 PM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
      ],
    },
    {
      days: [
        {
          image: "/artist1.png",
          time: "10:00 AM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist2.png",
          time: "10:00 PM - 11:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
      ],
    },
    {
      days: [
        {
          image: "/artist1.png",
          time: "10:00 AM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist2.png",
          time: "10:00 PM - 11:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist3.png",
          time: "8:00 PM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist1.png",
          time: "8:00 PM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist2.png",
          time: "10:00 PM - 11:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
      ],
    },
    {
      days: [
        {
          image: "/artist1.png",
          time: "10:00 AM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist3.png",
          time: "8:00 PM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
        {
          image: "/artist1.png",
          time: "8:00 PM - 12:00 PM",
          act_type: "Opening Act",
          artist: "Trishna Gurung",
        },
      ],
    },
  ];

  const days = [];
  for (let index = 1; index <= ScheduleData.length; index++) {
    days.push("Day " + index);
  }
  console.log(selectedDay);
  return (
    <section className="m-10 my-20 flex flex-col space-y-5" id="schedule">
      <div className="font-ChangaOne text-3xl text-white my-5">Schedule</div>
      <div className="flex text-[#D6D7FF] font-Amaranath font-bold text-xl space-x-2">
        {days.map((day, index) => {
          return (
            <button
              key={index}
              className={`flex w-[104px] h-9 items-center justify-center rounded-full hover:bg-white hover:text-black ${index == selectedDay ? 'bg-white text-black' : ''} `}
              onClick={() => setSelectedDay(index)}
            >
              {day}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap bg-[#252A6C]  rounded-lg  py-5">
        {ScheduleData[selectedDay].days.map((day, index) => {
          const itemsPerRow = 3;
          const rowNumber = Math.floor(index / itemsPerRow);

          return (
            <div
              key={rowNumber}
              className="m-5 mx-20 flex flex-row font-Amaranath space-x-10 w-[245px]"
            >
              <Image src={day.image} width={79} height={78} alt="" />
              <div className="flex flex-col ">
                <span className=" text-sm text-[#D6D7FF]">{day.time}</span>
                <span className="text-xl text-white">{day.act_type}</span>
                <span className="text-base text-[#FFF974] italic">
                  {day.artist}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Schedule;
