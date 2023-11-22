import React from 'react'

import SeatLayout from './seatLayout'
import SeatSelection from './seatSelection'

const SeatSelectionMain = () => {
  return (
    <div>
        <div className="font-ChangaOne text-3xl my-5">Select your seat</div>
        <div className='flex flex-row  w-full space-x-5'>
            <SeatSelection/>
            <SeatLayout/>
        </div>
    </div>
  )
}

export default SeatSelectionMain
