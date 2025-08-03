"use client";

import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function SignUp() {
  const [role, setRole] = useState("promoter");

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-7xl mx-auto ">
        <div className="w-full h-0.5 bg-[#C6FF00] mx-auto mb-6 sm:mb-8 lg:mb-10"></div>
        
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[9rem] font-bold uppercase leading-tight">
            Sign Up As
          </h1>
        </div>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto ">
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <button
            onClick={() => setRole("promoter")}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-md font-black uppercase transition transform -skew-x-12 text-sm sm:text-base lg:text-lg ${
              role === "promoter"
                ? "bg-[#C6FF00] text-black"
                : "border border-[#C6FF00] text-[#C6FF00]"
            }`}
          >
            <span className="block transform skew-x-12">Promoter</span>
          </button>

          <button
            onClick={() => setRole("challenger")}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-md font-black uppercase transition transform -skew-x-12 text-sm sm:text-base lg:text-lg ${
              role === "challenger"
                ? "bg-[#C6FF00] text-black"
                : "border border-[#C6FF00] text-[#C6FF00]"
            }`}
          >
            <span className="block transform skew-x-12">Challenger</span>
          </button>
        </div>

        <form className="space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="flex flex-col text-left">
            <label className="text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">Name</label>
            <input
              type="text"
              placeholder="enter your name"
              className="bg-transparent border-b border-gray-500 focus:outline-none py-2 sm:py-3 text-xs sm:text-sm lg:text-base focus:border-[#C6FF00] transition-colors"
            />
          </div>
          
          <div className="flex flex-col text-left">
            <label className="text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">Email</label>
            <input
              type="email"
              placeholder="demo@gmail.com"
              className="bg-transparent border-b border-gray-500 focus:outline-none py-2 sm:py-3 text-xs sm:text-sm lg:text-base focus:border-[#C6FF00] transition-colors"
            />
          </div>
          
          <div className="flex flex-col text-left">
            <label className="text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">Phone No.</label>
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                value="+92"
                readOnly
                className="w-12 sm:w-16 lg:w-20 bg-transparent border-b border-gray-500 py-2 sm:py-3 text-xs sm:text-sm lg:text-base text-gray-400"
              />
              <input
                type="text"
                placeholder="000 - 000 - 000"
                className="flex-1 bg-transparent border-b border-gray-500 focus:outline-none py-2 sm:py-3 text-xs sm:text-sm lg:text-base focus:border-[#C6FF00] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 sm:mt-8 lg:mt-10 w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#C6FF00] 
            text-black font-medium py-3 sm:py-4 lg:py-5 px-6 sm:px-8
             lg:px-10 rounded-md hover:bg-lime-300 transition text-sm sm:text-base lg:text-lg"
          >
            SUBMIT
            <FiArrowUpRight className="ml-2 sm:ml-4 bg-white rounded-md p-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </button>
        </form>
  </div>
        <hr className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-0.5 sm:h-1 bg-[#C6FF00] mx-auto mt-8 sm:mt-10 lg:mt-12"/>
     
    </section>
  );
}
