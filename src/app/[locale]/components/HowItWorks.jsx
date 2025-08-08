import React from "react";
import process from "../../../../public/assests/howitworks/process.svg";
import Image from "next/image";
import Image2 from "../../../../public/Image2.png";
import { FiArrowUpRight } from "react-icons/fi";

export default function HowItWorks() {
  return (
    <div>
      <section className="relative bg-[#121212] text-white px-2 md:px-12 w-full  md:py-16 font-clash">
        {/* Section Heading */}
        <div className="max-w-5xl mx-auto text-left font-bold md:mb-6">
          <h2 className="text-6xl sm:text-4xl md:text-7xl font-bold uppercase">
            How It Works
          </h2>
        </div>

        {/* Image + Positioned Text */}
        <div className="relative max-w-5xl mx-auto">
          <div className="w-full h-[250px] relative">
            {/* SVG Line */}
            <Image
              src={process}
              alt="curved line"
              className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none"
            />

            {/* Block 1 */}
            <div
              className="
              absolute 
              text-left 
              text-[11px] sm:text-sm md:text-base 
              leading-tight
              w-[70%] sm:w-[60%] md:w-[30%]
              left-[5%] sm:left-[10%] md:left-[8%]
              top-[75%] sm:top-[90%] md:top-[95%]
            "
            >
              Get access link when <br />
              app drops, you’ll <br />
              receive early access <br />
              + your earned <span className="font-bold text-lime-400">PipeToken</span> <br />
              bonus.
            </div>

            {/* Block 2 */}
            <div
              className="
              absolute 
              text-left 
              text-[11px] sm:text-sm md:text-base 
              leading-tight
              w-[60%] sm:w-[65%] md:w-[30%]
              left-[45%] sm:left-[25%] md:left-[40%]
              top-[65%] sm:top-[55%] md:top-[60%]
            "
            >
              Get access link when <br />
              App drops, you’ll <br />
              receive early Access + <br />
              your earned PipeToken <br />
              bonus.
            </div>

            {/* Block 3 */}
            <div
              className="
              absolute 
              text-left 
              text-[11px] sm:text-sm md:text-base 
              leading-tight
              w-[25%] sm:w-[65%] md:w-[30%]
              right-[2%] sm:right-[5%] md:right-[1%]
              top-[45%] sm:top-[10%] md:top-[5%]
            "
            >
              Sign up as a Promoter
              <br />
              or Challenger
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="mt-12 flex justify-end pr-4 pb-2 md:pr-24 font-satoshi">
          <button className="bg-[#C6FF00] text-[#1D4E00] px-6 py-3 font-semibold rounded-xl hover:bg-lime-300 transition flex items-center gap-2 text-sm sm:text-base">
            GET STARTED
            <span className="p-1 rounded-md flex items-center justify-center">
              <Image
                src={Image2}
                alt="icon"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </span>
          </button>
        </div>

 
        
        
      </section>

      <hr className="hidden sm:block h-0.5 bg-[#ffffff5f] max-w-5xl mx-auto relative z-10" />
    </div>
  );
}
