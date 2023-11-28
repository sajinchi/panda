"use client";
import Image from "next/image";
import {BsArrowRight} from "react-icons/bs"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { INewsAndBlog } from "@/types/INewsBlogsType";
import { IGetNewsandBlogListResponse, GetNewsandBlogListService } from "@/services/newsandblogs.service";

const NewsAndBlogs = () => {
  const [news, setNews] = useState<INewsAndBlog[]>([
    {
      title: "Panda Entertainment Panda Entertainment Panda Entertainment Panda Entertainment",
      image: "/panda.jpg",
    },
    {
      title: "Panda Entertainment",
      image: "/s2.jpg",
    },
    {
      title: "Panda Entertainment",
      image: "/panda.jpg",
    },
    {
      title: "Panda Entertainment",
      image: "/panda.jpg",
    },
    {
      title: "Panda Entertainment",
      image: "/panda.jpg",
    },
    {
      title: "Panda Entertainment",
      image: "/panda.jpg",
    },
    {
      title: "Panda Entertainment",
      image: "/panda.jpg",
    },
    {
      title: "Panda Entertainment",
      image: "/panda.jpg",
    },
    {
      title: "Panda Entertainment",
      image: "/s2.jpg",
    },
  ]);


        // const newsBlogList = async () => {
        //   const response: IGetNewsandBlogListResponse = await GetNewsandBlogListService();
        //   if (response.status == 200) {
        //     setNews(response.data);
        //   }
        // };
        // useEffect(() => {
        //   newsBlogList();
        // }, []);

  return (
    <div className="mx-20 mt-10 font-ChangaOne text-white">
      <div className="text-4xl my-10">News and Blogs</div>
      <Swiper spaceBetween={20} slidesPerView={4} autoplay={true} loop={false}>
        {news.map((event, index) => {
          return (
            <SwiperSlide key={index} className={`space-y-5 bg-[#252A6C] hover:bg-[#6F78F4]  rounded-lg unblur-slide`}>
              <div className="flex  space-x-5 items-center w-full">
                <div className="flex relative justify-start  h-[98px] w-[98px] overflow-hidden ">
                  <Image alt="" src={event.image} fill style={{ objectFit: "cover",padding: 10, borderRadius: 20 }} />
                </div>
                <div className="flex flex-col text-white w-3/5 space-y-2 justify-start ">
                  <span className="flex font-ChangaOne text-base text-left  overflow-hidden h-12 text-ellipsis">
                    {event.title}
                  </span>
                  <button className=" flex flex-row font-Amaranath text-sm items-center space-x-2 "><span>View Details</span> <BsArrowRight/></button>
                  
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewsAndBlogs;