"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff, IoMdArrowRoundBack } from "react-icons/io";

import { ISignUpData } from "@/types/ISignUpData";
import { SignUpService } from "@/services/signup.service";

const SignUp = () => {
  const [passwordState, setPasswordState] = useState(false);
  const [repasswordState, setRepasswordState] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpData>({ mode: "all" });

  const onSubmit = async(data: ISignUpData) => {
    // api call for creating new account
    let response = await SignUpService(data.firstname,data.lastname,data.email,data.password);

  };
  return (
    <div className="w-2/6 p-5 py-5">
      <div className="flex flex-row items-center text-white font-ChangaOne text-xl my-5 space-x-2">
        <Link href={'./login'}><span><IoMdArrowRoundBack /></span></Link>
        <span>Create a New Account</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-Amaranath text-white space-y-5"
      >
        <div className="space-y-3">
          <label className="text-white text-base p-2">First Name</label>
          <div>
            <input
              type="text"
              placeholder="Enter First Name"
              className="p-5 bg-transparent border-2 border-[#373E90] outline-none rounded-full w-full h-[50px] text-[#696FC4]"
              {...register("firstname", {
                required: { value: true, message: "*First Name is required" },
                min: 1,
              })}
            />
            <div className=" px-2 text-[#696FC4] italic text-sm ">
              {errors.firstname?.message}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-white text-base p-2">Last Name</label>
          <div>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="p-5 bg-transparent border-2 border-[#373E90] outline-none rounded-full w-full h-[50px] text-[#696FC4]"
              {...register("lastname", {
                required: { value: true, message: "*Last Name is required" },
                min: 1,
              })}
            />
            <div className=" px-2 text-[#696FC4] italic text-sm ">
              {errors.lastname?.message}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-white text-base p-2">Email</label>
          <div>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="p-5 bg-transparent border-2 border-[#373E90] outline-none rounded-full w-full h-[50px] text-[#696FC4]"
              {...register("email", {
                required: { value: true, message: "*Email is required" },
                min: 1,
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email pattern",
                },
              })}
            />
            <div className=" px-2 text-[#696FC4] italic text-sm ">
              {errors.email?.message}
            </div>
          </div>
        </div>
        <div className="space-y-3">
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
        <div className="space-y-3">
          <label className="text-white text-base p-2">Re-enter Password</label>
          <div>
            <div className="flex flex-row items-center p-5 border-2 border-[#373E90] rounded-full w-full h-[50px]">
              <input
                type={repasswordState ? "text" : "password"}
                className=" bg-transparent  outline-none w-full text-[#696FC4]"
                placeholder="Re-enter Password"
                {...register("repassword", {
                  required: { value: true, message: "*Password is required" },
                  min: 1,
                  validate: (val: string) => {
                    if (watch('password') != val) {
                      return "Your passwords do no match";
                    }
                  }
                })}
              />
              <button
                className=" text-[#696FC4] text-2xl hover:scale-110 duration-300 "
                onClick={() => setRepasswordState(!repasswordState)}
              >
                {repasswordState ? <IoMdEye /> : <IoMdEyeOff />}
              </button>
            </div>
            <div className=" px-2 text-[#696FC4] italic text-sm ">
              {errors.repassword?.message}
            </div>
          </div>
        </div>
        <button className=" w-full h-[50px] bg-[#FFF974] border-1 border-[#FFFFFF] rounded-full font-ChangaOne text-lg text-black">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
