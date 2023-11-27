"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface SignUpData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  repassword: string
}

const SignUp = () => {
  const [passwordState, setPasswordState] = useState(false);
  const [repasswordState, setRepasswordState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({ mode: "all" });

  const onSubmit = (data: SignUpData) => {};
  return (
    <div className="w-2/6">
      <div className=" text-white font-ChangaOne text-xl text-center">Create a New Account</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-Amaranath text-white space-y-5"
      >
        <div>
          <label>First Name</label>
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
        <div>
          <label>Last Name</label>
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
        <div>
          <label>Email</label>
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
        <div>
          <label>Password</label>
          <div className="flex flex-row items-center p-5 border-2 border-[#373E90] rounded-full w-full h-[50px]">
            <input
              type={passwordState ? "text" : "password"}
              className=" bg-transparent  outline-none w-full text-[#696FC4]"
              placeholder="Enter Password"
              {...register("password", {
                required: { value: true, message: "*Password is required" },
                min: 1,
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
        <div>
          <label>Re-enter Password</label>
          <div className="flex flex-row items-center p-5 border-2 border-[#373E90] rounded-full w-full h-[50px]">
            <input
              type={repasswordState ? "text" : "password"}
              className=" bg-transparent  outline-none w-full text-[#696FC4]"
              placeholder="Re-enter Password"
              {...register("repassword", {
                required: { value: true, message: "*Password is required" },
                min: 1,
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
        <button className=" w-full h-[50px] bg-[#FFF974] border-1 border-[#FFFFFF] rounded-full font-ChangaOne text-lg text-black">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
