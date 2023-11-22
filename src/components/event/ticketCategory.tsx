"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

interface TicketTypes {
    type: string;
    price: number
}

const TicketCategory = () => {
    const [ticketTypes] = useState<TicketTypes[]>([
        {
            type: "Standard Ticket",
            price: 5000
        },
        {
            type: "FanPit Ticket",
            price: 15000
        },
        {
            type: "VIP Ticket",
            price: 25000
        },
        {
            type: "VVIP Ticket",
            price: 35000
        },
    ])
  return (
    <section className='m-10 my-20' id='ticket'>
      <div className='font-ChangaOne text-3xl text-white my-5'>Ticket Category</div>
      <div className='flex flex-row space-x-10'>
        {ticketTypes.map((ticket,index)=>{
            return(
                <div key={index} className='flex flex-col h-[272px] w-[259px] bg-[#0B0E2F] rounded-lg items-center justify-center'>
                    <Image src={'/Ticket.png'} width={72} height={79} alt='' />
                    <div className='font-Amaranath text-lg text-white'>{ticket.type}</div>
                    <div className='font-ChangaOne text-3xl text-[#FFF974]'>Rs. {ticket.price}</div>
                    <button className=' h-10 w-44 mt-10 rounded-full bg-[#6F78F4] font-ChangaOne text-base text-white flex items-center justify-center space-x-2'><span>Get Ticket</span><span className='text-2xl'><BsArrowRight /></span></button>
                </div>
            )
        })}
      </div>
    </section>
  )
}

export default TicketCategory