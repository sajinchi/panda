import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const LocationSelector = () => {
  return (
    <div className="flex flex-row bg-[#252A6C] h-[36] w-56 rounded-full p-2 m-5 text-white items-center justify-center space-x-2 font-Amaranath text-base">
      <FaLocationDot/>
      <select id="location" name="location" defaultValue={"Kathmandu"} className="bg-transparent outline-none">
        <option value="Kathmandu">Kathmandu</option>
        <option value="Lalitpur" >Lalitpur</option>
      </select>
    </div>
  );
};

export default LocationSelector;
