"use client";
import { FiArrowUpRight } from "react-icons/fi";


export default function HeroSection() {
  return (
    <section
      className="w-full h-[90vh] flex flex-col justify-center items-center text-center text-[#F7FFD9] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/Homebg.png')" }}
    >
     
      <div className="absolute inset-0 bg-[#0d0b0bb5]" />

  
      <div className="relative z-10 max-w-7xl px-2 top-10">
      <div className="flex flex-col">
  <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[5rem] font-semibold tracking-wider leading-none">
    FANTASY CRICKET'S
  </h1>
  <h2 className="text-[3rem] md:text-[5rem] lg:text-[10rem] font-extrabold leading-none">
    YOUR GAME
  </h2>
</div>

        <p className="text-[1.1rem] md:text-[1.5rem] lg:text-[1.75rem] text-[#C8C8C8] mb-8">
          WHY LET PLATFORMS RIGG IT?
        </p>
       <div className="flex justify-center">
  <button className="flex items-center justify-center bg-lime-400 text-black px-6 py-3 rounded-md font-semibold text-base md:text-lg hover:bg-lime-500 transition">
    CLAIM YOUR SPOT NOW
         <FiArrowUpRight className="ml-4 bg-white rounded-md p-1 w-7 h-7" />
  </button>
</div>

      </div>

    </section>
  );
}
