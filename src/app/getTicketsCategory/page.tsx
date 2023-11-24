"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useSearchParams } from "next/navigation";

import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import { ITicketData } from "@/types/ITicketDataType";
import SeatLayout from "@/components/getTickers/seatLayout";
import TicketTable from "@/components/getTickers/ticketTable";
import { IoMdCalendar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const GetTicketsCategory = () => {
  const searchParams = useSearchParams();
  const price = searchParams.get("cate");
  console.log(price);
  const [data, setData] = useState<ITicketData[]>([]);

  const fetchData = async () => {
    let tempData: ITicketData[] = [
      {
        key: 1,
        name: `Section 1`,
        quantity: 5,
        price: 25000,
        type: "Best View",
        category: "VIP",
      },
      {
        key: 2,
        name: `Section 2`,
        quantity: 2,
        price: 5000,
        type: "Lowest Price",
        category: "Standard Ticket",
      },
      {
        key: 3,
        name: `Section 3`,
        quantity: 1,
        price: 5000,
        type: "Best Deal",
        category: "Standard Ticket",
      },
      {
        key: 4,
        name: `Section 4`,
        quantity: 5,
        price: 5000,
        type: "Lowest Price",
        category: "Standard Ticket",
      },
      {
        key: 5,
        name: `Section 4`,
        quantity: 8,
        price: 35000,
        type: "Best View",
        category: "VVIP",
      },
      {
        key: 6,
        name: `Section 1`,
        quantity: 1,
        price: 25000,
        type: "Best View",
        category: "VIP",
      },
      {
        key: 7,
        name: `Section 2`,
        quantity: 2,
        price: 15000,
        type: "Lowest Price",
        category: "FanPit Ticket",
      },
      {
        key: 8,
        name: `Section 3`,
        quantity: 7,
        price: 5000,
        type: "Best Deal",
        category: "Standard Ticket",
      },
      {
        key: 9,
        name: `Section 4`,
        quantity: 11,
        price: 5000,
        type: "Lowest Price",
        category: "Standard Ticket",
      },
      {
        key: 10,
        name: `Section 4`,
        quantity: 12,
        price: 35000,
        type: "Best View",
        category: "VVIP",
      },
      {
        key: 11,
        name: `Section 1`,
        quantity: 4,
        price: 25000,
        type: "Best View",
        category: "VIP",
      },
      {
        key: 12,
        name: `Section 2`,
        quantity: 3,
        price: 15000,
        type: "Lowest Price",
        category: "FanPit Ticket",
      },
      {
        key: 13,
        name: `Section 3`,
        quantity: 11,
        price: 5000,
        type: "Best Deal",
        category: "Standard Ticket",
      },
      {
        key: 14,
        name: `Section 4`,
        quantity: 15,
        price: 5000,
        type: "Lowest Price",
        category: "Standard Ticket",
      },
      {
        key: 15,
        name: `Section 4`,
        quantity: 20,
        price: 35000,
        type: "Best View",
        category: "VVIP",
      },
      {
        key: 16,
        name: `Section 1`,
        quantity: 1,
        price: 25000,
        type: "Best View",
        category: "VIP",
      },
      {
        key: 17,
        name: `Section 2`,
        quantity: 9,
        price: 15000,
        type: "Lowest Price",
        category: "FanPit Ticket",
      },
      {
        key: 18,
        name: `Section 3`,
        quantity: 8,
        price: 5000,
        type: "Best Deal",
        category: "Standard Ticket",
      },
      {
        key: 19,
        name: `Section 4`,
        quantity: 6,
        price: 5000,
        type: "Lowest Price",
        category: "Standard Ticket",
      },
      {
        key: 20,
        name: `Section 4`,
        quantity: 14,
        price: 35000,
        type: "Best View",
        category: "VVIP",
      },
    ];
    setData(tempData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const filteredData = data.filter((item) => item.price === parseInt(price!));
  console.log(filteredData);
  return (
    <div className="bg-[#151841] h-auto space-y-5">
      <NavBar />
      <div className=" text-white mx-10">
        <div className="text-2xl font-ChangaOne text-white ">
          <Link href={"/event"}>
            <button className="flex items-center gap-2 h-[52px] w-[131px]">
              <BiArrowBack />
              Go Back
            </button>
          </Link>
        </div>
        <div className="font-ChangaOne text-3xl my-5">Select your seat</div>

        <div className="flex flex-row  w-full space-x-5">
          <div className="w-2/5 border-2 border-[#6F78F4] rounded-xl p-5">
            <div>
              <div className="font-ChangaOne text-2xl w-1/2">
                Arjit Singh Solo Live Concert 2020
              </div>

              <div className="flex text-white items-center gap-3 font-Amaranath text-sm">
                <div className="flex flex-row items-center gap-1">
                  <IoMdCalendar />
                  <span>8 Sept, 2023</span>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <IoLocationSharp />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>
            <TicketTable data={filteredData} priceRangeState={false} />
          </div>
          <SeatLayout />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetTicketsCategory;
