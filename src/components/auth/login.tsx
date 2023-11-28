"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface LoginFormData {
  username: string;
  password: string;
}

const LogIn = () => {
  const [passwordState, setPasswordState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ mode: "all" });

  const onSubmit = (data:LoginFormData) => {
    console.log(data.password, data.username);
  }

  return (
    <div className="w-2/6  rounded-2xl p-5 py-10">
      <div className=" text-white font-ChangaOne text-xl text-center">
        LOGIN
      </div>
      <form className="space-y-5 " onSubmit={handleSubmit(onSubmit)}>
        <div className=" font-Amaranath space-y-3">
          <label className="text-white text-base p-2">Username</label>
          <div>
          <input
            type="text"
            placeholder="Enter Username"
            className="p-5 bg-transparent border-2 border-[#373E90] outline-none rounded-full w-full h-[50px] text-[#696FC4]"
            {...register("username", {
              required: { value: true, message: "*Username is required" },
              min: 1,
              pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "Invalid email pattern",}
            })}
          />
          <div className=" px-2 text-[#696FC4] italic text-sm ">
            {errors.username?.message}
          </div>
          </div>
        </div>
        <div className=" font-Amaranath space-y-3">
          <label className="text-white text-base p-2">Password</label>
            <div>
                <div className="flex flex-row items-center p-5 border-2 border-[#373E90] rounded-full w-full h-[50px]">
                    <input
                    type={passwordState ? "text" : "password"}
                    className=" bg-transparent  outline-none w-full text-[#696FC4]"
                    placeholder="Enter Password"
                    {...register("password", {
                        required: { value: true, message: "*Password is required" },
                        min: 1,
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message: "Password must be minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                        },
                    })}
                    />
                    <button
                    className=" text-[#696FC4] text-2xl hover:scale-110 duration-300 "
                    onClick={() => setPasswordState(!passwordState)}
                    >
                    {passwordState ? <IoMdEye /> : <IoMdEyeOff />}
                    </button>
                </div>
                <div className=" px-2 text-[#696FC4] italic text-sm ">
                    {errors.password?.message}
                </div>
          </div>
        </div>
        <button className=" w-full h-[50px] bg-[#FFF974] border-1 border-[#FFFFFF] rounded-full font-ChangaOne text-lg">
          LOGIN
        </button>
      </form>
      <Link href={'/signup'}>
      <button className="flex w-full items-center justify-center my-5 text-white font-Amaranath underline" >Sign Up</button>
      </Link>
    </div>
  );
};

export default LogIn;
