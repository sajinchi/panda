import React from 'react'

const GuestDetails = () => {
  return (
    <div className='bg-[#252A6C] w-full h-[430px] rounded-[10px] p-6'>
      <div className='font-ChangaOne text-xl mb-5'>Continue as Guest</div>
      <form className=' flex flex-col font-Amaranath text-base space-y-7'>
        <div className='flex flex-col space-y-3'>
            <label className='ml-4'>Full Name</label>
            <input type='text' placeholder='John Doe' className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
        </div>
        <div className='flex flex-col space-y-3'>
            <label className='ml-4'>Enter your email address</label>
            <input type='text' placeholder='example@email.com'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
        </div>
        <div className='flex flex-col space-y-3'>
            <label className='ml-4'>Contact Number</label>
            <input type='text' placeholder='000-000-0000'  className=' h-[50px] w-full bg-transparent rounded-full border-2 border-[#373E90] pl-5 italic outline-none'/>
        </div>
      </form>
    </div>
  )
}

export default GuestDetails
