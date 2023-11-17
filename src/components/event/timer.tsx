"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoMdCalendar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const timeleft = (datestring: string) => {
  const targetDate = new Date(datestring);
  const date = new Date();
  const total = targetDate.getTime() - date.getTime();
  let days = Math.floor(total / (1000 * 60 * 60 * 24));
  let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((total / (1000 * 60)) % 60);
  let seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Timer = () => {
  const [eventDetail] = useState({title:"Arjit Singh Solo Live Concert", date:"8 Sept, 2023", location:"Kathmandu, Nepal"});

  const targetTime = "2025-01-13T11:24:30";
  const [timeRemaining, setTimeRemaining] = useState(() =>
    timeleft(targetTime)
  );
  useEffect(() => {
    setInterval(() => {
      setTimeRemaining(timeleft(targetTime));
    }, 1000);
  }, []);

  return (
    <div className="flex items-center justify-center z-10 relative -mt-20">
      <div className=" flex flex-row h-[151px] w-[1028px] bg-[#FFF974] rounded-lg items-center justify-between space-x-10 p-10">
        <div className=" w-[253px] space-y-3">
          <div className="font-ChangaOne text-3xl">
            {eventDetail.title}
          </div>
          <div className=" flex flex-row space-x-3">
            <div className="flex flex-row  items-center space-x-2">
              <span className="text-[#6F78F4]">
                <IoMdCalendar />
              </span>
              <span className="font-Amaranath text-sm">{eventDetail.date}</span>
            </div>
            <div className="flex flex-row  items-center space-x-2">
              <span className="text-[#6F78F4]">
                <IoLocationSharp />
              </span>
              <span className="font-Amaranath text-sm">{eventDetail.location}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-5">
          <div className="flex flex-col items-center justify-center">
            <span className="font-ChangaOne text-4xl">
              {timeRemaining.days}
            </span>
            <span className="font-Amaranath text-lg">Days</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-ChangaOne text-4xl">
              {timeRemaining.hours}
            </span>
            <span className="font-Amaranath text-lg">Hours</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-ChangaOne text-4xl">
              {timeRemaining.minutes}
            </span>
            <span className="font-Amaranath text-lg">Minutes</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-ChangaOne text-4xl">
              {timeRemaining.seconds}
            </span>
            <span className="font-Amaranath text-lg">Seconds</span>
          </div>
        </div>
        <Link href={"/getTickets"}>
          <button className=" h-14 w-48 rounded-full bg-[#252A6C] font-ChangaOne text-lg text-white flex items-center justify-center space-x-2">
            <span>Get Ticket</span>
            <span className="text-2xl">
              <BsArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Timer;
