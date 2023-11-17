"use client";
import React, { useEffect, useState } from 'react'

import Schedule from './schedule';
import BasicInfo from './basicInfo';
import VenueLayout from './venueLayout';
import TicketCategory from './ticketCategory';

const Tab = () => {
    const [tab, setTab] = useState("basicinfo");

    useEffect(() => {
      const sections = document.querySelectorAll('section');
  
      const options = {
        root: null,
        rootMargin: '-105px 0px 0px 0px',
        threshold: 0.5,
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTab(entry.target.id);
          }
        });
      }, options);
  
      sections.forEach((section) => {
        observer.observe(section);
      });
  
      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, []);
  
    const scrollToSection = (sectionId: string) => {
      setTab(sectionId);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div className=" m-20 flex flex-col  h-auto border-2 border-[#373E90] rounded-3xl space-x-5">
        <div className={`sticky top-28 flex z-40 -mt-8 h-[55px] w-[702px] text-white border-2 border-[#6F78F4] bg-[#252A6C] rounded-lg items-center`} >
          <div className={`absolute flex bg-[#6F78F4]  w-1/4 h-[55px] rounded-lg items-center justify-center 
            ${
              tab == "basicinfo"
                ? "translate-x-0 duration-500"
                : "duration-500"
            }
            ${
              tab == "schedule"
                ? "translate-x-full duration-500"
                : "duration-500"
            }
            ${
              tab == "ticket"
                ? " translate-x-[200%] duration-500"
                : "duration-500"
            }
            ${
              tab == "venuelayout"
                ? "translate-x-[301%] duration-500"
                : "duration-500"
            }
            `}
          >  
        </div>
          <div className={`z-20 flex w-full font-ChangaOne text-xl`}>
            <button className = "w-1/4 h-[55px]" onClick={() => scrollToSection("basicinfo")}>Basic Info</button>
            <button className = "w-1/4 h-[55px]" onClick={() => scrollToSection("schedule")}>Schedule</button>
            <button className = "w-1/4 h-[55px]" onClick={() => scrollToSection("ticket")}>Ticket</button>
            <button className = "w-1/4 h-[55px]" onClick={() => scrollToSection("venuelayout")}>Venue Layout</button>
          </div>
        </div>
        <div className='pr-5 mt-10'>
            <BasicInfo />
            <Schedule />
            <TicketCategory />
            <VenueLayout />
        </div>
      </div>
  )
}

export default Tab
