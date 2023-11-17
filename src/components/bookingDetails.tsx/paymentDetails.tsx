import React from 'react'

const PaymentDetails = () => {
  return (
      <form className=' flex flex-col font-Amaranath text-base space-y-7 my-5'>
        <div className='flex flex-col space-y-3'>
            <label className='ml-4'>Card Number</label>
            <input type='text' placeholder='0000-0000-0000-0000' className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
        </div>
        <div className="flex flex-row w-full space-x-5">
          <div className='flex flex-col w-full space-y-3'>
              <label className='ml-4'>Expiry Date</label>
              <input type='text' placeholder='Month/Year'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
          </div>
          <div className='flex flex-col w-full space-y-3'>
              <label className='ml-4'>Security Code</label>
              <input type='password' placeholder='XXXX'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
          </div>
        </div>
        <div className="font-ChangaOne text-xl">Billing Address</div>
        <div className='flex flex-col w-full space-y-3'>
            <label className='ml-4'>Full Name</label>
            <input type='text' placeholder='John Doe'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
        </div>
        <div className='flex flex-col space-y-3'>
            <label className='ml-4'>Address</label>
            <input type='text' placeholder='ABC Street'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
        </div>
        <div className="flex flex-row w-full space-x-5">
          <div className='flex flex-col space-y-3'>
              <label className='ml-4'>City</label>
              <input type='text' placeholder='City Name'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
          </div>
          <div className='flex flex-col space-y-3'>
              <label className='ml-4'>State</label>
              <input type='text' placeholder='State Name'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
          </div>
          <div className='flex flex-col space-y-3'>
              <label className='ml-4'>Zip Code</label>
              <input type='text' placeholder='12345'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
          </div>
        </div>
        <div className="flex flex-row w-full space-x-5">
          <div className='flex flex-col w- 1/5 space-y-3'>
              <label className='ml-4'>Country</label>
              <input type='text' placeholder=''  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
          </div>
          <div className='flex flex-col w-full space-y-3'>
              <label className='ml-4'>Phone Number</label>
              <input type='text' placeholder='000-000-0000'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
          </div>
        </div>
      </form>
  )
}

export default PaymentDetails
