import React from 'react'

import SeatLayout from './seatLayout'
import { ITicketData } from '@/types/ITicketDataType';
import SeatSelection from './seatSelection';

const SeatSelectionMain = (props:{price:string | null; ticketData:ITicketData[]}) => {
  return (
    <div>
        <div className="font-ChangaOne text-3xl my-5">Select your seat</div>
        <div className='flex flex-row  w-full space-x-5'>
            <SeatSelection 
            // price={props.price} 
            ticketData = {props.ticketData}
            />
            <SeatLayout/>
        </div>
    </div>
  )
}

export default SeatSelectionMain
