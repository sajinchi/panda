"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useSearchParams } from "next/navigation";

import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import { ITicketData } from "@/types/ITicketDataType";
import SeatSelectionMain from "@/components/getTickers/seatSelectionMain";

const GetTickets = () => {
  const [data, setData] = useState<ITicketData[]>([]);

  const searchParams = useSearchParams();
  const price = searchParams.get("cate");

  const fetchData = async() => {
    let tempData:ITicketData[] = [{
      key: 1,
      name: `Section 1`,
      quantity: 5,
      price: 10000,
      type: "Best View",
      category:"normal",
    },
    {
      key: 2,
      name: `Section 2`,
      quantity: 2,
      price: 5000,
      type: "Lowest Price",
      category:"normal",
    },
    {
      key: 3,
      name: `Section 3`,
      quantity: 1,
      price: 3000,
      type: "Best Deal",
      category:"normal",
    },
    {
      key: 4,
      name: `Section 4`,
      quantity: 5,
      price: 1000,
      type: "Lowest Price",
      category:"normal",
    },
    {
      key: 5,
      name: `Section 4`,
      quantity: 8,
      price: 35000,
      type: "Best View",
      category:"vvip",
    },
    {
      key: 6,
      name: `Section 1`,
      quantity: 1,
      price: 10000,
      type: "Best View",
      category:"normal",
    },
    {
      key: 7,
      name: `Section 2`,
      quantity: 2,
      price: 5000,
      type: "Lowest Price",
      category:"normal",
    },
    {
      key: 8,
      name: `Section 3`,
      quantity: 7,
      price: 3000,
      type: "Best Deal",
      category:"normal",
    },
    {
      key: 9,
      name: `Section 4`,
      quantity: 11,
      price: 1000,
      type: "Lowest Price",
      category:"normal",
    },
    {
      key: 10,
      name: `Section 4`,
      quantity: 12,
      price: 35000,
      type: "Best View",
      category:"vvip",
    },
    {
      key: 11,
      name: `Section 1`,
      quantity: 4,
      price: 10000,
      type: "Best View",
      category:"normal",
    },
    {
      key: 12,
      name: `Section 2`,
      quantity: 3,
      price: 5000,
      type: "Lowest Price",
      category:"normal",
    },
    {
      key: 13,
      name: `Section 3`,
      quantity: 11,
      price: 3000,
      type: "Best Deal",
      category:"normal",
    },
    {
      key: 14,
      name: `Section 4`,
      quantity: 15,
      price: 1000,
      type: "Lowest Price",
      category:"normal",
    },
    {
      key: 15,
      name: `Section 4`,
      quantity: 20,
      price: 35000,
      type: "Best View",
      category:"vvip",
    },
    {
      key: 16,
      name: `Section 1`,
      quantity: 1,
      price: 10000,
      type: "Best View",
      category:"normal",
    },
    {
      key: 17,
      name: `Section 2`,
      quantity: 9,
      price: 5000,
      type: "Lowest Price",
      category:"normal",
    },
    {
      key: 18,
      name: `Section 3`,
      quantity: 8,
      price: 3000,
      type: "Best Deal",
      category:"normal",
    },
    {
      key: 19,
      name: `Section 4`,
      quantity: 6,
      price: 1000,
      type: "Lowest Price",
      category:"normal",
    },
    {
      key: 20,
      name: `Section 4`,
      quantity: 14,
      price: 35000,
      type: "Best View",
      category:"vvip",
    },];
    setData(tempData);
  }

  useEffect(()=>{
    fetchData();  
  },[]);

  return (
    <div className="bg-[#151841] h-auto space-y-5">
      <NavBar />
      <div className=" text-white mx-10">
        <div className="text-2xl font-ChangaOne text-white ">
          <Link href={'/event'}><button className="flex items-center gap-2 h-[52px] w-[131px]"><BiArrowBack />Go Back</button></Link>
        </div>
        <SeatSelectionMain price={price} ticketData = {data}/>
      </div>
      <Footer />
    </div>
  );
};

export default GetTickets;
