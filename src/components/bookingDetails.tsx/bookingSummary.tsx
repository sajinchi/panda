"use client";
import React, { useState } from "react";

const BookingSummary = () => {
  const [bookingSummaryDetails] = useState({
    venue: "Pragya Pratisthan, Naxal Kathmandu",
    dateandtime: "Sunday, 01 Oct 2023, 10:00 AM",
    seatnumber: [
      "Section 10 - Row 10",
      "Section 10 - Row 10",
      "Section 10 - Row 10",
      "Section 10 - Row 10",
    ],
  });

  const [view2d,setView2d] = useState(false);
  return (
    <div className="h-[420px] w-full rounded-[10px] bg-[#252A6C] p-6">
      <div className="text-2xl font-ChangaOne mb-5">Booking Summary</div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-[354px] space-y-5">
          <div className="flex flex-col font-Amaranath">
            <span className="text-xl">Venue</span>
            <span className="text-lg text-[#D6D7FF]">
              {bookingSummaryDetails.venue}
            </span>
          </div>
          <div className="flex flex-col font-Amaranath">
            <span className="text-xl">Date and Time</span>
            <span className="text-lg text-[#D6D7FF]">
              {bookingSummaryDetails.dateandtime}
            </span>
          </div>
          <div className="flex flex-col font-Amaranath">
            <span className="text-xl">Seat Number</span>
            <span className=" flex flex-wrap text-lg text-[#D6D7FF]">
              {bookingSummaryDetails.seatnumber.map((seat, index) => {
                return <span key={index}>{seat},</span>;
              })}
            </span>
          </div>
        </div>

        <div className="bg-[#5056A9] w-[378px] h-[294px] rounded-[10px]">
            <button className="relative flex flex-row h-[30px] w-[82px] border-[1px] border-white rounded-lg m-5 text-[17px] font-ChangaOne overflow-hidden" onClick={()=>setView2d(!view2d)}>
                <div className={`absolute bg-[#6F78F4]  h-[29px] w-[40px]  ${ view2d ? ' duration-300' : ' translate-x-full duration-300 ' }`}></div>
                <span className={`flex z-10 w-1/2 h-full items-center justify-center`}>2D</span>
                <span className={`flex z-10 w-1/2 h-full items-center justify-center`}>3D</span>
            </button>
        </div>

      </div>
    </div>
  );
};

export default BookingSummary;
