"use client";
 import Image from "next/image";
import React, { useState } from "react";

const Query = () => {
    const [how, sethow] = useState(false);
    const [what, setWhat] = useState(false);
    const [is, setIs] = useState(false);
    const [contact, setContact] = useState(false);

  return (
    <div className="text-white m-20 flex mb-40">
      <div className="flex flex-col w-1/3 space-y-5">
        <div className="flex flex-col">
            <span className="font-ChangaOne text-4xl">You Asked?</span>
            <span className="font-ChangaOne text-5xl text-[#FFF974]">We Answered!</span>
        </div>
        <div>
            <Image src={"/Component 45.png"} height={260} width={190} alt="" />
        </div>
      </div>
      <div className=" flex flex-col w-3/4 space-y-4">
        <div className={` flex flex-row p-5 bg-[#252A6C] rounded-lg justify-between overflow-hidden 
        ${how ? "bg-[#6F78F4] h-auto duration-500 ": "h-auto duration-500"}
          `} onClick={()=>sethow(!how)}>
          <div className=" grow flex flex-col space-y-2 mr-10 ">
            <span className="font-ChangaOne text-lg">
              How can I use Panda Entertainment to book an event?
            </span>
            {Boolean (how) && (<>
                <span className="font-Amaranath text-base ">
                To book an event through Pandaa Entertainment, simply create an
                account, browse through the available events, select the one
                you're interested in, and follow the booking process.
                </span>
            </>)}
          </div>
          <div>
            <Image
                src={"/dropdownarrow.png"}
                height={10}
                width={19}
                alt=""
                className={` mt-2 ${how ? "rotate-180 duration-700" : " duration-700 "}`}
            />
          </div>
        </div>
        <div className={` flex flex-row p-5 bg-[#252A6C] rounded-lg justify-between overflow-hidden 
        ${what ? "bg-[#6F78F4] duration-500 ": "duration-500"}
          `} onClick={()=>setWhat(!what)}>
          <div className=" grow flex flex-col space-y-2 mr-10 ">
            <span className="font-ChangaOne text-lg">
                What types of events can I book through Pandaa Entertainment?
            </span>
            {Boolean (what) && (<>
                <span className="font-Amaranath text-base">
               details
                </span>
            </>)}
          </div>
          <div>
            <Image
                src={"/dropdownarrow.png"}
                height={10}
                width={19}
                alt=""
                className={` mt-2 ${what ? "rotate-180 duration-700" : " duration-700 "}`}
            />
          </div>
        </div>
        <div className={` flex flex-row p-5 bg-[#252A6C] rounded-lg justify-between overflow-hidden 
        ${is ? "bg-[#6F78F4] duration-500 ": "duration-500"}
          `} onClick={()=>setIs(!is)}>
          <div className=" grow flex flex-col space-y-2 mr-10 ">
            <span className="font-ChangaOne text-lg">
                Is Pandaa Entertainment available in my location?
            </span>
            {Boolean (is) && (<>
                <span className="font-Amaranath text-base">
                details
                </span>
            </>)}
          </div>
          <div>
            <Image
                src={"/dropdownarrow.png"}
                height={10}
                width={19}
                alt=""
                className={` mt-2 ${is ? "rotate-180 duration-700" : " duration-700 "}`}
            />
          </div>
        </div>
        <div className={` flex flex-row p-5 bg-[#252A6C] rounded-lg justify-between overflow-hidden 
        ${contact ? "bg-[#6F78F4] duration-500 ": "duration-500"}
          `} onClick={()=>setContact(!contact)}>
          <div className=" grow flex flex-col space-y-2 mr-10 ">
            <span className="font-ChangaOne text-lg">
                How can I contact customer support if I have issues or questions about my booking?
            </span>
            {Boolean (contact) && (<>
                <span className="font-Amaranath text-base">
                details
                </span>
            </>)}
          </div>
          <div>
            <Image
                src={"/dropdownarrow.png"}
                height={10}
                width={19}
                alt=""
                className={` mt-2 ${contact ? "rotate-180 duration-700" : " duration-700 "}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
