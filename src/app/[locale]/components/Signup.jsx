"use client";

import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { supabase } from "../../../../lib/supabaseClient"; // adjust path if needed

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("profile").insert([
      {
        name,
        email,
        phone,
      },
    ]);

    if (error) {
      alert("Failed to sign up: " + error.message);
    } else {
      alert("Signup successful!");
      setName("");
      setEmail("");
      setPhone("");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 font-clash">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-7xl mx-auto">
        <hr
  className="
    max-w-5xl
    mx-auto
    mt-10
    my-8
    border-0
    h-1
    bg-gradient-to-r from-[#C6F812] via-[#d9ff00] to-[#C6F812]
    rounded-full
    shadow-[0_0_20px_5px_#C6F812]
  "
/>
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-[9rem] font-bold uppercase leading-tight">
            Sign Up
          </h1>
        </div>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 lg:space-y-8"
        >
          <div className="flex flex-col text-left">
            <label className="text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="bg-transparent border-b border-gray-500 focus:outline-none py-2 sm:py-3 text-xs sm:text-sm lg:text-base focus:border-[#C6FF00] transition-colors"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="demo@gmail.com"
              required
              className="bg-transparent border-b border-gray-500 focus:outline-none py-2 sm:py-3 text-xs sm:text-sm lg:text-base focus:border-[#C6FF00] transition-colors"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
              Phone No.
            </label>
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                value="+92"
                readOnly
                className="w-12 sm:w-16 lg:w-20 bg-transparent border-b border-gray-500 py-2 sm:py-3 text-xs sm:text-sm lg:text-base text-gray-400"
              />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="000 - 000 - 000"
                required
                className="flex-1 bg-transparent border-b border-gray-500 focus:outline-none py-2 sm:py-3 text-xs sm:text-sm lg:text-base focus:border-[#C6FF00] transition-colors"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="mt-6 sm:mt-8 lg:mt-10 w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#C6FF00] text-[#1D4E00] font-medium py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-md hover:bg-lime-300 transition text-sm sm:text-base lg:text-lg"
            >
              {loading ? "Submitting..." : "SUBMIT"}
              <FiArrowUpRight className="ml-2 sm:ml-4 bg-white rounded-md p-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </button>
          </div>
        </form>
             <hr
  className="
    max-w-5xl
    mx-auto
    mt-15
    my-8
    border-0
    h-1
    bg-gradient-to-r from-[#C6F812] via-[#d9ff00] to-[#C6F812]
    rounded-full
    shadow-[0_0_20px_5px_#C6F812]
  "
/>
      </div>
 
    </section>
  );
}
