"use client";
import { useEffect, useState } from "react";
import { IoMdCalendar } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import { ConfigProvider, Slider } from "antd";
import { IoLocationSharp } from "react-icons/io5";

import TicketTable from "./ticketTable";
import { ITicketData } from "@/types/ITicketDataType";

const SeatSelection = (props:{ ticketData:ITicketData[]}) => {
  const [data] = useState<ITicketData[]>(
    [
    {
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
      price: 20000,
      type: "Best View",
      category:"vip",
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
      price: 20000,
      type: "Best View",
      category:"vip",
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
      price: 20000,
      type: "Best View",
      category:"vip",
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
      price: 20000,
      type: "Best View",
      category:"vip",
    },  
  ]
  );

  // Finding minimum and maximum price and assigning to min and max variables
  let maxPrice = 0;
  for (const item of data) {
    if (item.price > maxPrice) {
      maxPrice = item.price;
    }
  }
  let minPrice = maxPrice;
  for (const item of data) {
    if (item.price < minPrice) {
      minPrice = item.price;
    }
  }
  const min = minPrice;
  const max = maxPrice;

  //Finding the Quantity categories

  const quantitiesCategories:number[] = [];

for (const item of data) {
  const quantity = item.quantity;
  
  if (!quantitiesCategories.includes(quantity)) {
    quantitiesCategories.push(quantity);
  }
}
quantitiesCategories.sort((a, b) => a - b);


    const [priceRangeState, setPriceRangeState] = useState(false);  
    const [filteredData, setFilteredData] = useState<ITicketData[]>([]);
    const [priceFilteredData, setPriceFilteredData] = useState<ITicketData[]>([]);
    const [priceOnlyFilteredData, setPriceOnlyFilteredData] = useState<ITicketData[]>(data);
    const [quantityState, setQuantityState] = useState(false);
    const [quantityValue, setQuantityValue] = useState<number>(0);
    const [currentValue,setCurrentValue] = useState<number[]>([min,max]);

    const quantity = (qty:number) => {
      setQuantityValue(qty);
      setQuantityState(!quantityState);
      let newList = data?.filter((data) => data.quantity == qty);
      setFilteredData(newList);
      setPriceFilteredData(newList);
    }

    useEffect(()=>{
      let newList = filteredData?.filter((data) => data.price >= currentValue[0] && data.price <= currentValue[1]);
      setPriceFilteredData(newList);
      if(quantityValue == 0){
        let priceFilteredList = data ?.filter((data) => data.price >= currentValue[0] && data.price <= currentValue[1]);
        setPriceOnlyFilteredData(priceFilteredList);
      }
    },[currentValue]);

    const allData = () => {
      setQuantityValue(0);
      setCurrentValue([min,max]);
      setQuantityState(!quantityState);
    }

  return (
    <div className="w-2/5 h-[804px] border-2 border-[#6F78F4] rounded-xl p-5 space-y-3">

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

      <div className="h-7 flex flex-row font-Amaranath text-xs gap-5">
        <button className="flex h-full px-3 rounded-full bg-[#252A6C] hover:bg-[#7C85FF] duration-500 border-2 border-[#7C85FF] items-center justify-center"><LuListFilter /></button>
        <div>
          <button className={`flex h-full px-3 rounded-full   hover:bg-[#7C85FF] duration-500 border-2 border-[#7C85FF] items-center justify-center ${quantityState ? 'bg-[#7C85FF]':''}`} onClick={()=>setQuantityState(!quantityState)}>
            Quantity:{Boolean (quantityValue != 0)&&(" " +quantityValue)}{Boolean (quantityValue == 0)&&(" All")}
          </button>
          {Boolean (quantityState) && (
              <div className={`flex flex-col w-auto m-1 z-50 bg-white/20 backdrop-blur-[2px]  border-t-white/30 border-l-white/30 border-r-transparent border-b-transparent drop-shadow-lg overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/30 h-48 border-[1px] rounded-lg text-white`}>
              <button className=" hover:bg-[#7C85FF]/80 p-2" onClick={()=>allData()}>All</button>
              {quantitiesCategories.map((qty)=>{
                return(
                  <button key={qty}  className=" hover:bg-[#7C85FF]/80 p-2" onClick={() => quantity(qty)}>{qty}</button>
                )
              })}
            </div>
            )}
          </div>
        <button className={`flex h-full px-3 rounded-full ${priceRangeState ? 'bg-[#7C85FF]' : 'bg-[#252A6C]'} hover:bg-[#7C85FF] duration-500 border-2 border-[#7C85FF] items-center justify-center`} onClick={() => setPriceRangeState(!priceRangeState)}>Price Range</button>
      </div>

      <div className={` overflow-hidden my-5 border-b-[1px] border-b-[#7C85FF] ${priceRangeState ? 'h-28  duration-500' : 'h-0 delay-500 duration-500'}`}>
        <div className={`flex flex-row h-auto justify-between ${priceRangeState ? 'delay-500 duration-500' : '-translate-x-full duration-500'}`}>
          <div className="text-lg font-ChangaOne">Price Range</div>
          <div className="flex flex-col w-[293px]  ">
            <ConfigProvider
              theme={{
                components: {
                  Slider: {
                    trackBg: "#FFF974",
                    trackHoverBg: "#FFF974",
                    railBg: "#7C85FF",
                    railHoverBg: "#7C85FF",
                    handleColor: "#7C85FF",
                    handleActiveColor: "#7C85FF",
                    handleLineWidth: 5,
                    dotSize: 100,
                    railSize: 6,
                  },
                },
              }}
            >
                <Slider
                  range
                  defaultValue={[min, max]}
                  min={min}
                  max={max}
                  onChange={(value: React.SetStateAction<number[]>) => setCurrentValue(value)}
                  className="m-3"
                />
            </ConfigProvider>
            <div className="flex flex-row items-center justify-between text-lg font-Amaranath">
              <div className="flex border-[1px] border-[#7C85FF] bg-transparent h-10 w-[121px] rounded-sm px-2 items-center" >{"$" + currentValue[0]}</div>
              <span className="text-[#7C85FF]">-</span>
              <div className="flex border-[1px] border-[#7C85FF] bg-transparent h-10 w-[121px] rounded-sm px-2 items-center" >{"$" + currentValue[1]}</div>
            </div>

          </div>
        </div>
      </div>
      <div>
        {Boolean(quantityValue == 0) && (<TicketTable priceRangeState={priceRangeState} data={priceOnlyFilteredData}/>)}
        {Boolean(quantityValue !== 0) && (<TicketTable priceRangeState={priceRangeState} data={priceFilteredData}/>)}
      </div>
    </div>
  );
};

export default SeatSelection;