import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  return (
    <div>
      <div className="fixed top-0 z-50 w-full h-[104px] bg-[#151841] items-center flex font-Amaranath shadow-2xl ">
        <div className="m-5 flex grow">
          <div className="flex grow space-x-5 w-[553px] items-center">
            <Link href={"/home"}>
              <button className="flex space-x-2">
                <Image src={"/Group.png"} height={82} width={68} alt="image" />
                <Image
                  src={"/Group 49.png"}
                  height={45}
                  width={112}
                  alt="image"
                />
              </button>
            </Link>
            <div className="flex items-center p-5 bg-transparent rounded-full border w-[313] border-[#2B3283] h-5 space-x-2 text-base">
              <div className="text-white text-lg">
                <FiSearch />
              </div>
              <input
                type="text"
                placeholder="Search events/Artist"
                className=" text-[#D6D7FF] outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex  text-white space-x-10 p-4 items-center font-ChangaOne text-lg ">
            <Link href={"/home"}>
              <button>HOME</button>
            </Link>
            <button>ABOUT</button>
            <button>HOW TO SELL?</button>
            <button>CONTACT</button>
            <Link href={"/login"}>
              <button className="text-black bg-[#FFF974] px-5 rounded-full h-[44px]">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" h-[104px] w-full"></div>
    </div>
  );
};

export default NavBar;
