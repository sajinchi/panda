import React from "react";

const MemberSignIn = () => {
  return (
    <div className=" flex flex-row h-[80px]  bg-[#252A6C] rounded-[10px] font-ChangaOne text-white items-center justify-between p-6">
      <span className="text-xl">Member Sign in</span>
      <span className=" flex flex-row text-sm space-x-4">
        <button className="h-8 w-[101px] bg-[#FFF974] rounded-full text-black">LOGIN</button>
        <button>Create Account</button>
      </span>
    </div>
  );
};

export default MemberSignIn;
