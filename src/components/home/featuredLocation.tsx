"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";

import { ILocationDetails } from "@/types/ILocationDetailType";
import { IGetFeaturedLocationListResponse, getFeaturedLoactionList } from "@/services/featuredlocation.service";


const FeaturedLocation = () => {
  const [locationDetails, setLocationDetails] = useState<ILocationDetails[]>([
    {
      image: "/s1.jpeg",
      title: "Dashrath Stadium",
      location: "Tripureshwor",
      seats: 320,
      popularFor: ["Sport Events", "Concerts"],
      upcomingEvents: 2,
    },
    {
      image: "/s2.jpg",
      title: "One Cinemas",
      location: "New Baneshwor",
      seats: 200,
      popularFor: ["Movies", "Live Shows"],
      upcomingEvents: 5,
    },
    {
      image: "/s3.jpeg",
      title: "Mariott Hotel",
      location: "Baluwatar",
      seats: 300,
      popularFor: ["Exhibitions", "Concerts"],
      upcomingEvents: 1,
    },
    {
      image: "/s4.jpg",
      title: "Pragya Prathisthan",
      location: "Jamal",
      seats: 500,
      popularFor: ["Drama", "Concerts"],
      upcomingEvents: 8,
    },
    {
      image: "/s4.jpg",
      title: "Pragya Prathisthan",
      location: "Jamal",
      seats: 500,
      popularFor: ["Drama", "Concerts"],
      upcomingEvents: 8,
    },
    {
      image: "/s4.jpg",
      title: "Pragya Prathisthan",
      location: "Jamal",
      seats: 500,
      popularFor: ["Drama", "Concerts"],
      upcomingEvents: 8,
    },
  ]);

      // const upcomingEventList = async () => {
      //   const response: IGetFeaturedLocationListResponse = await getFeaturedLoactionList();
      //   if (response.status == 200) {
      //     setLocationDetails(response.data);
      //   }
      // };
      // useEffect(() => {
      //   upcomingEventList();
      // }, []);

  return (
    <div className=" text-white mx-20">
      <div className=" flex flex-wrap justify-between my-10">
        <div className="font-ChangaOne text-4xl  ">Featured Location</div>
        <button className="font-ChangaOne text-base flex flex-row items-center space-x-2 "><span>See all</span><BsArrowRight/></button>
      </div>
      <div className="h-[500px] flex flex-row justify-between space-x-10">
        {locationDetails.slice(0, 4).map((location, index) => {
          const [hovered, setHovered] = useState(false);
          return (
            <div
              key={index}
              className={` min-w-[350px] h-full rounded-2xl border-2  ${hovered ? "border-[#6F78F4]" : "border-[#252A6C]" } duration-700 overflow-hidden relative items-center`}
              onMouseEnter={()=>setHovered(true)}
              onMouseLeave={()=>setHovered(false)}
            >
              <Image
                src={location.image}
                fill
                style={{ objectFit: "cover" }}
                alt="image"
              />
              <div className=" relative ">
                <div className={`flex flex-row justify-between items-center 
                ${hovered ? " mb-32 duration-1000":"mb-72 duration-1000"}
                `}>
                  <button className="p-2 m-2 bg-[#151841] hover:bg-[#6F78F4] rounded-lg">
                    <Image
                      src={"/360.png"}
                      height={17.33}
                      width={17.33}
                      alt="360"
                    />
                  </button>
                  <button className="p-2 m-2 rounded-lg">
                    <Image
                      src={"/nav.png"}
                      height={17.33}
                      width={17.33}
                      alt="360"
                    />
                  </button>
                </div>

                <div className={`flex flex-col items-center justify-center  py-10 bg-gradient-to-t from-black/80 via-black/80 from-60% to-transparent `}>
                  <Image
                    src={"/stadium.png"}
                    height={28}
                    width={28}
                    alt="image"
                  />
                  <div className="flex flex-col font-ChangaOne text-base justify-center items-center">
                    <span className="text-2xl">{location.title},</span>
                    <span>{location.location}</span>
                  </div>
                  <div className="flex flex-row font-Amaranath space-x-20 mt-10">
                    <div className="flex flex-col">
                      <div className="font-bold italic text-base">
                        Popular for
                      </div>
                      {location.popularFor.map((popular, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center italic text-sm"
                          >
                            <GoDotFill />
                            {popular}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <div className="font-bold italic">Total Seats</div>
                      <div className="italic text-sm">{location.seats}</div>
                    </div>
                  </div>
                  <button className=" rounded-full font-ChangaOne text-sm bg-[#252A6C] py-1 px-4 m-5">
                    <span className="mr-1">View Events</span>({location.upcomingEvents})
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedLocation;
