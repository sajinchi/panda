"use client";
import React, { useEffect, useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

import { ITicketData } from "@/types/ITicketDataType";

const TicketTable = (props: { priceRangeState: boolean; data: ITicketData[]; }) => {
  const originalData = props.data;
  const [dataDisplayed, setDataDisplayed] = useState<ITicketData[]>([]);
  
  useEffect(() => {
    setDataDisplayed(props.data);
  }, [props.data]);
  
  const [order, setOrder] = useState("nosorting");

  const sorting = () => {
    if (order == "nosorting") {
      const sortedData = props.data.slice().sort((a, b) => b.price - a.price);
      setDataDisplayed(sortedData);
      setOrder("ascending");
    }
    if (order == "ascending") {
      const sortedData = props.data.slice().sort((a, b) => a.price - b.price);
      setDataDisplayed(sortedData);
      setOrder("descending");
    }
    if (order == "descending") {
      setDataDisplayed(originalData!);
      setOrder("nosorting");
    }
  };

  return (
    <div
      className={` ${
        props.priceRangeState ? "max-h-[475px] delay-500" : "max-h-[590px]"
      } overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#7C85FF]`}
    >
      <table className="w-full ">
        <thead className=" top-0">
          <tr className="text-base  bg-gradient-to-b from-[#151841]  to-transparent  font-Amaranath h-[52px]">
            <th className="w-1/3 text-left">No. of listing</th>
            <th className="w-1/3"></th>
            <th
              className="w-full h-[52px] flex items-center justify-end"
              onClick={() => sorting()}
            >
              <button className="flex items-center space-x-2 ">
                <span>Sort by Price</span>
                <span className="flex flex-col">
                  <span
                    className={`${
                      order == "descending"
                        ? "text-[#FFF974]"
                        : "text-[#9DA3FF]"
                    }`}
                  >
                    <AiFillCaretUp />
                  </span>
                  <span
                    className={`${
                      order == "ascending" ? "text-[#FFF974]" : "text-[#9DA3FF]"
                    }`}
                  >
                    <AiFillCaretDown />
                  </span>
                </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {dataDisplayed.map((data, index) => {
            const qty: number[] = [];
            for (let index = 1; index <= data.quantity; index++) {
              qty.push(index);
            }
            return (
              <tr key={index} className="text-base font-ChangaOne h-[52px]  ">
                <td
                  className={` flex flex-col text-left border-l-4 pl-2 ${
                    data.category == "vip" ? "border-[#FF897D]" : "border-white"
                  } `}
                >
                  <span>{data.name}</span>
                  <span className="font-Amaranath text-sm font-bold italic text-[#FFF974] ">
                    {data.type}
                  </span>
                </td>
                <td className="text-center space-x-2">
                  <div className="flex flex-row items-center space-x-2">
                    <span>Qty</span>
                    <select
                      className="w-[47px] h-6 bg-transparent rounded-full font-Amaranath text-sm border-[1px] border-[#7C85FF] outline-none"
                      defaultValue={data.quantity}
                    >
                      {qty.map((qty, index) => {
                        return (
                          <option key={index} className="text-black ">
                            {qty}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </td>
                <td className="text-right text-xl pr-5">Rs.{data.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
