"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import Link from 'next/link';
import { ITicketData } from '@/types/ITicketDataType';

const TicketCategory = () => {
    const [ticketData] = useState<ITicketData[]>([
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
    ])

    const pricesWithCategoriesArray = ticketData.map(ticket => ({ price: ticket.price, category: ticket.category }));
    const removeDuplicates = (arr: any[], keyFn: (arg0: any) => any) => {
      const seen = new Set();
      return arr.filter(item => {
        const key = keyFn(item);
        if (!seen.has(key)) {
          seen.add(key);
          return true;
        }
        return false;
      });
    };
    const uniquePricesWithCategoriesArray = removeDuplicates(pricesWithCategoriesArray, item => JSON.stringify(item));
    const sortedUniquePricesWithCategoriesArray = uniquePricesWithCategoriesArray.sort((a, b) => a.price - b.price);

  return (
    <section className='m-10 my-20' id='ticket'>
      <div className='font-ChangaOne text-3xl text-white my-5'>Ticket Category</div>
      <div className='flex flex-wrap w-full '>
        {sortedUniquePricesWithCategoriesArray.map((ticket,index)=>{
            return(
                <div key={index} className='flex flex-col h-[272px] w-[259px] mr-10 my-10 bg-[#0B0E2F] rounded-lg items-center justify-center'>
                    <Image src={'/Ticket.png'} width={72} height={79} alt='' />
                    <div className='font-Amaranath text-lg text-white'>{ticket.category}</div>
                    <div className='font-ChangaOne text-3xl text-[#FFF974]'>Rs. {ticket.price}</div>
                    <Link
                      href={{
                        pathname: "./getTicketsCategory",
                        query: "cate=" + ticket.price
                      }}
                    >
                        <button className=' h-10 w-44 mt-10 rounded-full bg-[#6F78F4] font-ChangaOne text-base text-white flex items-center justify-center space-x-2'><span>Get Ticket</span><span className='text-2xl'><BsArrowRight /></span></button>
                    </Link>
                </div>
            )
        })}
      </div>
    </section>
  )
}

export default TicketCategory