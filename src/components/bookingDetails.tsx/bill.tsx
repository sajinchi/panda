"use client";
import React, { useState } from "react";

interface BillDataType {
  quantity: number;
  price: number;
}
const Bill = () => {
  const [billData] = useState<BillDataType>({
    quantity: 5,
    price: 500,
  });
  return (
    <div className="rounded-[10px] bg-[#252A6C] w-full p-6">
      <div className=" flex flex-col font-Amaranath text-xl space-y-4 p-5 border-b-2 border-[#373E90]">
        <span className="flex flex-row items-center justify-between">
          <span>Quantity</span>
          <span>{billData.quantity}</span>
        </span>
        <span className="flex flex-row items-center justify-between">
          <span>Price</span>
          <span>Rs. {billData.price}(each)</span>
        </span>
        <span className="flex flex-row items-center justify-between">
          <span>VAT</span>
          <span>{billData.price * billData.quantity * 0.13}</span>
        </span>
      </div>
      <div className="flex flex-row items-center justify-between font-ChangaOne text-lg px-5 my-5">
        <span>Total Payable Amount</span>
        <span className=" text-2xl">
          Rs.{" "}
          {billData.price * billData.quantity +
            billData.price * billData.quantity * 0.13}
        </span>
      </div>
      <button className="w-full h-11 rounded-full font-ChangaOne text-lg text-black bg-[#FFF974] my-3">Make Payment</button>
      <div className="font-Amaranath text-base text-[#D6D7FF] m-5">By purchasing a ticket, or signing up,you agree to the use agreement and the privacy policy. All sales are final(double check the event date and location).</div>
    </div>
  );
};

export default Bill;
