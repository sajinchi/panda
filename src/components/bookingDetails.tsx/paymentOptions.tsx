"use client";
import React, { useState } from "react";
import PaymentDetails from "./paymentDetails";

const PaymentOptions = () => {
  const [creditCardView,setCreditCardView] = useState(false);
  return (
    <div className={`bg-[#252A6C]  rounded-[10px] p-6 ${creditCardView ? ' h-[970px] duration-500' : ' duration-500'}`}>
      <div className="font-ChangaOne text-xl mb-2">Payment Option</div>
      <div className="font-Amaranath text-base text-[#D6D7FF] mb-5">
        All transactions are secured and encrypted via SSL/TLS technology.
      </div>
      <div className="flex flex-row space-x-5">
        <button className={`w-[93px] h-[99px] border-2 border-[#444A9C] font-ChangaOne text-sm ${creditCardView ? 'bg-[#FFF974] text-black duration-500 ' : 'duration-500'}`} onClick={()=>setCreditCardView(!creditCardView)}>
          Credit Card
        </button>
        <button className={`w-[93px] h-[99px] border-2 border-[#444A9C] font-ChangaOne text-sm `}>
          PayPal
        </button>
        <button className={`w-[93px] h-[99px] border-2 border-[#444A9C] font-ChangaOne text-sm `}>
          Credit Card
        </button>
      </div>
      {Boolean (creditCardView) && (
        <PaymentDetails />
      )}
    </div>
  );
};

export default PaymentOptions;
