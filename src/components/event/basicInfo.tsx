import React from 'react';
import Image from 'next/image';
import {IoIosCall} from "react-icons/io"
import {IoLocationSharp} from "react-icons/io5"
import { BsCalendarEvent, BsTwitter } from 'react-icons/bs';


interface EventDetails{
    title: string;
    description: string;
    location: string;
    date: string;
    contact: string;
    image: string;
    organizer: string
    organizer_image: string 
}

const BasicInfo = () => {
    const event:EventDetails = {
        title: 'Arjit Singh Solo Concert',
        description: 'Get ready to embark on a musical journey like no other as the legendary Indian playback singer, Arijit Singh concert in Nepal , is all set to grace the stage. Known for his soul-stirring melodies, Arijit Singh has captured the hearts of millions around the world. This eagerly anticipated Arijit Singh live concert in Nepal is going to be an unforgettable experience for music enthusiasts. ',
        location: 'Hyatt Hotel, Boudha',
        date: '8 Sept, 2023',
        contact: '+977 01412321',
        image: '/arjit2.png',
        organizer: 'Garage Entertainment Nepal Pvt. Ltd.',
        organizer_image: '/organizer.png'
    }
  return (
    <section className='m-10 my-10 space-y-5' id='basicinfo'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col w-2/4'>
            <div className='font-Amaranath text-xl text-[#D6D7FF]'>Are you ready to attend?</div>
            <div className='font-ChangaOne text-4xl text-white'>{event.title}</div>
            <div className=' font-Amaranath text-lg text-[#E3E1EC] my-10'>{event.description}</div>
            <div className='flex flex-row h-[55px] w-[659px] bg-[#FFF974] justify-between items-center rounded-full px-10 font-Amaranath text-lg'>
                <div className='flex flex-row items-center space-x-2'>
                    <span className='text-2xl'><BsCalendarEvent/></span>
                    <span>{event.date}</span>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                    <span className='text-2xl'><IoLocationSharp /></span>
                    <span>{event.location}</span>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                    <span className='text-2xl'><IoIosCall /></span>
                    <span>{event.contact}</span>
                </div>
            </div>
        </div>
        <div className='border-2 border-[#FFF974] w-[333px] h-[313px]'>
            <Image src={event.image} width={333} height={313} alt='' className='z-10 -m-5 ' />
        </div>
      </div>
      <div className='flex  flex-row text-white h-[74px] border-2 border-[#252A6C] rounded-lg items-center space-x-4'>
        <div className='font-ChangaOne text-lg bg-[#252A6C] p-[22px] rounded-lg'><div>Organized by</div></div>
        <div className='flex flex-row grow items-center space-x-2'>
        <div>
          <Image src={event.organizer_image} width={44} height={44} alt='' className='' />
        </div>
        <div className='font-Amaranath text-xl'>{event.organizer}</div>
        <div className='flex flex-row space-x-5'>
          <button className='border-2 border-white text-sm font-ChangaOne h-8 w-[107px] rounded-full'>Follow</button>
          <button className='border-2 border-white text-sm font-ChangaOne h-8 w-[107px] rounded-full'>Contact</button>
        </div>
        </div>
        <div className='flex flex-row space-x-3 items-center p-3'>
          <button><Image src={'/Facebook.png'} width={26} height={26} alt='' /></button>
          <button><Image src={'/Twitter.png'} width={26} height={26} alt='' /></button>
          <button><Image src={'/YouTube.png'} width={26} height={26} alt='' /></button>
          <button><Image src={'/TikTok.png'} width={26} height={26} alt='' /></button>
        </div>
      </div>
    </section>
  )
}

export default BasicInfo
