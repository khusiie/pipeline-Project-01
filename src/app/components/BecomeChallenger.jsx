"use client";
import React, { useEffect, useState } from "react";
import gridimage1 from "../../../public/assests/becomechallenger/gridimage1.png"
import gridimage4 from "../../../public/assests/becomechallenger/gridimage4.png"
import gridimage5 from "../../../public/assests/becomechallenger/gridimage5.png"
import gridlogo1 from "../../../public/assests/becomechallenger/gridlogo1.svg"
import becomechallengelogo from "../../../public/assests/becomechallenger/challange.png"
import vectorimage from "../../../public/vector.png"
import Image from "next/image";

const BecomeChallenger = () => {
  // Countdown logic
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-15T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="w-full flex justify-center">
          <Image
            src={becomechallengelogo}
            alt="BECOME CHALLENGER"
            className="w-auto h-auto"
            width={0}
            height={0}
            unoptimized
            priority
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {/* Card 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg flex flex-col h-full lg:col-span-2">
            <Image
              src={gridimage1}
              width={463}
              height={365}
              alt="No Bots, No Drama"
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-3 sm:gap-4 mt-auto">
              <Image
                src={gridlogo1}
                alt="Logo"
                width={32}
                height={32}
                className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                Pipeline is built with one promise: complete transparency and fair play for all users.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg flex flex-col h-full lg:col-span-2">
            <Image
              src={gridimage1}
              width={463}
              height={365}
              alt="No Bots, No Drama"
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-3 sm:gap-4 mt-auto">
              <Image
                src={gridlogo1}
                alt="Logo"
                width={32}
                height={32}
                className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                Pipeline is built with one promise: complete transparency and fair play for all users.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg flex flex-col h-full lg:col-span-2">
            <Image
              src={gridimage1}
              width={463}
              height={365}
              alt="No Bots, No Drama"
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-3 sm:gap-4 mt-auto">
              <Image
                src={gridlogo1}
                alt="Logo"
                width={32}
                height={32}
                className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                Pipeline is built with one promise: complete transparency and fair play for all users.
              </p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg flex flex-col h-full sm:col-span-2 lg:col-span-3">
            <Image
              src={gridimage4}
              width={699}
              height={520}
              alt="No Bots, No Drama"
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-3 sm:gap-4 mt-auto">
              <Image
                src={gridlogo1}
                alt="Logo"
                width={32}
                height={32}
                className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                Pipeline is built with one promise: complete transparency and fair play for all users.
              </p>
            </div>
          </div>
          
          {/* Card 5 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg flex flex-col h-full sm:col-span-2 lg:col-span-3">
            <Image
              src={gridimage5}
              width={699}
              height={520}
              alt="No Bots, No Drama"
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-3 sm:gap-4 mt-auto">
              <Image
                src={gridlogo1}
                alt="Logo"
                width={32}
                height={32}
                className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                Pipeline is built with one promise: complete transparency and fair play for all users.
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Reserve Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-500 transition">
            RESERVE MY SPOT NOW
          </button>
        </div>

        {/* Countdown */}
        <div className="bg-[url('/bg1.png')] bg-cover bg-center bg-zinc-800 mt-12 p-8 rounded-lg text-center relative">
          {/* Optional dark overlay */}
          <div className="absolute inset-0  bg-[#0000007d] bg-opacity-60 rounded-lg"></div>
        <div className="relative z-10">
            <h3 className="text-2xl uppercase font-bold mb-2">
              These benefits are only
              <br />
              available till
            </h3>
            <h2 className="text-6xl font-bold mb-4">August 15th 2025</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
  <span className="text-2xl font-normal text-white tracking-wide">200 Total</span>
  <div className="flex items-center gap-2">
    <span className="text-3xl font-black text-white">
      {timeLeft.days || 0}
    </span>
    <span className="text-lg font-medium text-white/80 uppercase">Days</span>
  </div>
  <span className="text-2xl font-bold text-white tracking-wide">Left</span>
</div>
<div className="
  inline-flex items-center
  gap-4 sm:gap-6 md:gap-12
  bg-black/10 backdrop-blur-lg rounded-2xl
  py-2 sm:py-4 md:py-6
  px-3 sm:px-6 md:px-8
  max-w-full mx-auto overflow-x-auto
  border border-white/10
">
  {["Hours","Minutes","Seconds"].map((unit,i) => {
    const value = [timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i] ?? 0;
    return (
      <div key={unit}
           className="flex flex-col items-center flex-shrink-0">
        <div className="relative">
          <span className="
            text-4xl sm:text-6xl md:text-7xl
            font-extrabold text-white
            leading-none tracking-tight
            tabular-nums
            min-w-[3ch] sm:min-w-[4ch] md:min-w-[5ch]
            text-center
          ">
            {String(value).padStart(2,'0')}
          </span>
        </div>
        <span className="
          text-xs sm:text-sm font-medium
          text-white/80 uppercase tracking-widest mt-2
        ">
          {unit}
        </span>
      </div>
    );
  })}

  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="flex items-center gap-2 sm:gap-4">
      <div className="w-px h-12 sm:h-16 bg-white/20"></div>
      <div className="w-px h-12 sm:h-16 bg-white/20 ml-[calc(3ch+2rem)] sm:ml-[calc(4ch+2.5rem)]"></div>
    </div>
  </div>
</div>

  
 
            {/* Info Boxes */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
              <div className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] rounded-xl text-sm text-white">
                <Image
                  src={vectorimage}
                  alt="Promoter Spots"
                  width={56}
                  height={40}
                />
                <span className="font-bold">PROMOTER SPOTS:</span>
                <span>ONLY 200 TOTAL (145 LEFT)</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] rounded-xl text-sm text-white">
                <Image
                  src={vectorimage}
                  alt="Challenger Perks"
                  width={56}
                  height={40}
                />
                <span className="font-bold">CHALLENGER PERKS:</span>
                <span>ONLY FOR PRE-LAUNCH SIGNUPS</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] rounded-xl text-sm text-white">
                <Image
                  src={vectorimage}
                  alt="Joined Players"
                  width={56}
                  height={40}
                />
                <span className="font-bold">JOINED 2,347</span>
                <span>PLAYERS ALREADY IN THE REVOLUTION</span>
              </div>
            </div>

            <div className="flex justify-center pt-6 gap-4">
              <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-lime-500 transition">
                RESERVE MY SPOT NOW
              </button>
              <button className="border border-lime-400 text-lime-400 font-semibold px-6 py-3 rounded-full hover:bg-lime-400 hover:text-black transition">
                SHARE
              </button>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default BecomeChallenger;
