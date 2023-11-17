import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import { BiArrowBack } from "react-icons/bi";
import SeatSelectionMain from "@/components/getTickers/seatSelectionMain";

const GetTickets = () => {
  return (
    <div className="bg-[#151841] h-auto space-y-5">
      <NavBar />
      <div className=" text-white mx-10">
        <div className="text-2xl font-ChangaOne text-white ">
          <Link href={'/event'}><button className="flex items-center gap-2 h-[52px] w-[131px]"><BiArrowBack />Go Back</button></Link>
        </div>
        <SeatSelectionMain />
      </div>
      <Footer />
    </div>
  );
};

export default GetTickets;
