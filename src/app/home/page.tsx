import React from "react";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Query from "@/components/home/query";
import Create from "@/components/home/create";
import BookNow from "@/components/home/bookNow";
import Categories from "@/components/home/categories";
import FeaturedLocation from "@/components/home/featuredLocation";
import LocationSelector from "@/components/home/locationSelector";
import FirstCarousel from "@/components/home/firstcarousel/firstCarousel";
import SecondCarousel from "@/components/home/secondcarousel/secondCarousel";
import NewsAndBlogs from "@/components/home/newsAndBlogs";

const Home = () => {
  return (
    <div className="bg-[#151841] h-auto space-y-5">
      <NavBar />
      <div className=" ">
        <LocationSelector />
        <FirstCarousel />
        <SecondCarousel />
        <Categories />
        <Create />
        <FeaturedLocation />
        <NewsAndBlogs />
        <Query />
        <BookNow />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
