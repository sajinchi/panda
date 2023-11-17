"use client";
import React from 'react';
import Tab from '@/components/event/tab';
import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import Timer from '@/components/event/timer';
import VideoSection from '@/components/event/videoSection';
import { useSearchParams } from 'next/navigation';

const Event = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  return (
    <div className="bg-[#151841] h-auto space-y-5">
    <NavBar />

    <div className="">
        <VideoSection/>
        <Timer />
        <Tab />
    </div>
    <Footer />
  </div>
  )
}

export default Event
