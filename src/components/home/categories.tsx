"use client";
import Image from "next/image";
import { useState } from "react";

const Categories = () => {
  const [hoveredConference, setHoveredConference] = useState(false);
  const [hoveredConcerts, setHoveredConcerts] = useState(false);
  const [hoveredSports, setHoveredSports] = useState(false);
  const [hoveredCeremony, setHoveredCeremony] = useState(false);
  const [hoveredTheatres, setHoveredTheatres] = useState(false);
  const [hoveredOthers, setHoveredOthers] = useState(false);
  return (
    <div className="mx-20 font-ChangaOne text-white">
      <div className=" text-4xl my-10 ">Categories</div>
      <div className=" flex flex-row h-[215px] items-end justify-between ">
        <div onMouseEnter={()=>setHoveredConference(true)} onMouseLeave={()=>setHoveredConference(false)} className={`flex items-end h-[71px] hover:h-full duration-500 border-2 ${hoveredConference ? "border-white" : "border-transparent"} bg-[#252A6C] rounded-lg`}>
          {Boolean (!hoveredConference) && (<Image src={"/conference1.png"} height={132} width={87} alt="" className="absolute mb-11 ml-11"/>)}
          {Boolean (hoveredConference) && (<Image src={"/conference2.png"} height={132} width={87} alt="" className="absolute mb-11 ml-11"/>)}
        <button className={`w-[170px] h-[71px] bg-[#252A6C] border-2 ${hoveredConference ? " border-white":"border-transparent"} rounded-lg `}>Conference</button>
        </div>
        <div onMouseEnter={()=>setHoveredConcerts(true)} onMouseLeave={()=>setHoveredConcerts(false)} className={`flex items-end h-[71px] hover:h-full duration-500 border-2 ${hoveredConcerts ? "border-white" : "border-transparent"} bg-[#252A6C] rounded-lg`}>
          {Boolean (!hoveredConcerts) && (<Image src={"/concerts1.png"} height={113} width={104} alt="" className="absolute mb-12 ml-11"/>)}
          {Boolean (hoveredConcerts) && (<Image src={"/concerts2.png"} height={128} width={100} alt="" className="absolute mb-12 ml-11"/>)}
          <button className={`w-[170px] h-[71px] bg-[#252A6C] border-2 ${hoveredConcerts ? " border-white":"border-transparent"} rounded-lg `}>Concerts</button>
        </div>
        <div onMouseEnter={()=>setHoveredSports(true)} onMouseLeave={()=>setHoveredSports(false)} className={`flex items-end h-[71px] hover:h-full duration-500 border-2 ${hoveredSports ? "border-white" : "border-transparent"} bg-[#252A6C] rounded-lg`}>
          {Boolean (!hoveredSports) && (<Image src={"/sports1.png"} height={130} width={112} alt="" className="absolute mb-11 ml-8"/>)}
          {Boolean (hoveredSports) && (<Image src={"/sports2.png"} height={130} width={112} alt="" className="absolute mb-11 ml-8"/>)}
        <button className={`w-[170px] h-[71px] bg-[#252A6C] border-2 ${hoveredSports ? " border-white":"border-transparent"} rounded-lg `}>Sports</button>
        </div>
        <div onMouseEnter={()=>setHoveredCeremony(true)} onMouseLeave={()=>setHoveredCeremony(false)} className={`flex items-end h-[71px] hover:h-full duration-500 border-2 ${hoveredCeremony ? "border-white" : "border-transparent"} bg-[#252A6C] rounded-lg`}>
          {Boolean (!hoveredCeremony) && (<Image src={"/ceremony1.png"} height={132} width={87} alt="" className="absolute mb-12 ml-11"/>)}
          {Boolean (hoveredCeremony) && (<Image src={"/ceremony2.png"} height={132} width={87} alt="" className="absolute mb-12 ml-11"/>)}
        <button className={`w-[170px] h-[71px] bg-[#252A6C] border-2 ${hoveredCeremony ? " border-white":"border-transparent"} rounded-lg `}>Ceremony</button>
        </div>
        <div onMouseEnter={()=>setHoveredTheatres(true)} onMouseLeave={()=>setHoveredTheatres(false)} className={`flex items-end h-[71px] hover:h-full duration-500 border-2 ${hoveredTheatres ? "border-white" : "border-transparent"} bg-[#252A6C] rounded-lg`}>
          {Boolean (!hoveredTheatres) && (<Image src={"/theatre1.png"} height={132} width={87} alt="" className="absolute mb-14 ml-11"/>)}
          {Boolean (hoveredTheatres) && (<Image src={"/theatre2.png"} height={132} width={87} alt="" className="absolute mb-14 ml-11"/>)}
        <button className={`w-[170px] h-[71px] bg-[#252A6C] border-2 ${hoveredTheatres ? " border-white":"border-transparent"} rounded-lg `}>Theatres</button>
        </div>
        <div onMouseEnter={()=>setHoveredOthers(true)} onMouseLeave={()=>setHoveredOthers(false)} className={`flex items-end h-[71px] hover:h-full duration-500 border-2 ${hoveredOthers ? "border-white" : "border-transparent"} bg-[#252A6C] rounded-lg`}>
          {Boolean (!hoveredOthers) && (<Image src={"/others1.png"} height={132} width={87} alt="" className="absolute mb-12 ml-11"/>)}
          {Boolean (hoveredOthers) && (<Image src={"/others2.png"} height={132} width={87} alt="" className="absolute mb-12 ml-11"/>)}
        <button className={`w-[170px] h-[71px] bg-[#252A6C] border-2 ${hoveredOthers ? " border-white":"border-transparent"} rounded-lg `}>Others</button>
        </div>
        </div>
    </div>
  );
};

export default Categories;
