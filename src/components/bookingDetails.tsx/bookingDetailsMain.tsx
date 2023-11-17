import React from "react";
import Bill from "./bill";
import EventDetail from "./eventdetail";
import MemberSignIn from "./memberSignIn";
import GuestDetails from "./guestDetails";
import PaymentOptions from "./paymentOptions";
import BookingSummary from "./bookingSummary";

const BookingDetailsMain = () => {
  return (
    <div className=" flex flex-col space-y-5">
      <EventDetail />
      <div className="flex flex-row w-full space-x-5">
        <div className="flex flex-col w-2/5 space-y-5">
          <MemberSignIn />
          <GuestDetails />
          <PaymentOptions />
        </div>
        <div className="flex flex-col w-3/5 space-y-5">
          <BookingSummary />
          <Bill />
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsMain;
