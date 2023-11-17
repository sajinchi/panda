import React from 'react'
import Image from 'next/image'
import {BiLogoFacebook} from "react-icons/bi";
import {AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='px-20 flex flex-col h-[406px] bg-[#0B0E2F] items-center justify-center space-y-20'>
        <div className='flex flex-row justify-between w-full mt-24'>
            <div className='space-y-5'>
                <Image src={"/Frame 133.png"} height={136} width = {123} alt="" /> 
                <div className='flex flex-row space-x-2 text-white text-2xl'>
                    <BiLogoFacebook />
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                    <AiFillLinkedin />
                </div>
            </div>
            <div className='font-Amaranath text-lg space-y-5'>
                <div className='flex flex-col'>
                    <span className=' text-[#D6D7FF] font-bold'>Address:</span>
                    <span className='text-lg text-white'>4140 Parker Rd. Allentown, New Mexico 31134</span>
                </div>
                <div className='flex flex-col'>
                    <span className=' text-[#D6D7FF] font-bold'>Contact:</span>
                    <span className='text-lg text-white underline'>(270) 555-0117</span>
                    <span className='text-lg text-white'>info@example.com</span>
                </div>
            </div>
            <div className='font-Amaranath space-y-5'>
                <div className='text-[#D6D7FF]'>
                    Join our newsletter to stay up to date on features and releases
                </div>
                <div className='flex w-[465px] justify-between rounded-full border-2 border-white text-white'>
                    <input type='text' placeholder='Enter your email' className='outline-none bg-transparent h-[50px] w-full px-5 text-base'/>
                    <button className='bg-[#252A6C] font-ChangaOne text-lg border-2 border-white rounded-full h-[50px] w-[173px] '>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='flex flex-row w-full justify-between font-Amaranath text-base text-[#D6D7FF]'>
            <span >©2022, All right reserved.</span>
            <div className='space-x-5'>
                <button className='underline'>Privacy Policy</button>
                <button className='underline'>Terms of Service</button>
                <button className='underline'>Cookies Settings</button>
            </div>
        </div>
    </div>
  )
}

export default Footer
