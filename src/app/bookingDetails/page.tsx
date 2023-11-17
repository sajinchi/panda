import BookingDetailsMain from '@/components/bookingDetails.tsx/bookingDetailsMain'
import Footer from '@/components/footer'
import NavBar from '@/components/navBar'
import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const BookingDetails = () => {
  return (
    <div className="bg-[#151841] h-auto space-y-5">
    <NavBar />
    <div className=" text-white mx-10">
      <div className="text-2xl font-ChangaOne text-white ">
        <Link href={'/getTickets'}><button className="flex items-center gap-2 h-[52px] w-[131px]"><BiArrowBack />Go Back</button></Link>
      </div>
      <BookingDetailsMain />
    </div>
    <Footer />
  </div>
  )
}

export default BookingDetails
