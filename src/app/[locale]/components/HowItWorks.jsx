import React from "react";
import process from "../../../../public/assests/howitworks/process.svg";
import Image from "next/image";
import Image2 from "../../../../public/Image2.png";

export default function HowItWorks() {
  return (
    <div>
      <section className="relative bg-[#121212] text-white px-2 md:px-12 w-full pb-6 md:py-32 md:min-h-[800px] font-clash">
        {/* Section Heading */}
        <div className="max-w-5xl mx-auto text-left font-bold md:mb-6">
          <h2 className="text-4xl sm:text-4xl md:text-8xl font-bold uppercase px-4">
            How It<br />
            Works
          </h2>
        </div>

        {/* Image + Positioned Text */}
        <div className="relative max-w-5xl mx-auto md:mb-20">
          <div className="w-full h-[100px] relative">
            {/* SVG Line */}
            <Image
              src={process}
              alt="curved line"
              className="
                absolute top-1/2 left-1/2 
                w-[250%] sm:w-[220%] md:w-[250%]
                h-auto 
                -translate-x-1/2 -translate-y-1/2 
                pointer-events-none
              "
            />

            {/* Block 1 */}
            <div
              className="
                absolute 
                text-left 
                text-[8px] sm:text-sm md:text-base 
                leading-tight
                w-[70%] sm:w-[60%] md:w-[30%]
                left-[9%] sm:left-[10%] md:left-[10%]
                top-[102%] sm:top-[90%] md:top-[185%] uppercase
              "
            >
              Sign up as a
              <br />
              Promoter or <br /> Challenger
            </div>

            {/* Block 2 */}
            <div
              className="
                absolute 
                text-left 
                text-[8px] sm:text-sm md:text-base 
                leading-tight
                w-[60%] sm:w-[65%] md:w-[30%]
                left-[38%] sm:left-[25%] md:left-[40%]
                top-[65%] sm:top-[55%] md:top-[85%] uppercase
              "
            >
              Get access link <br />
              when app drops, <br />
              you’ll receive <br /> early access + <br />
              your earned <br />
              PipeToken bonus.
            </div>

            {/* Block 3 */}
            <div
              className="
                absolute 
                text-left 
                text-[8px] font-medium sm:text-sm md:text-base 
                leading-tight
                w-[25%] sm:w-[65%] md:w-[30%]
                right-[5%] sm:right-[5%] md:right-[-1%]
                top-[6%] sm:top-[10%] md:top-[-1%]
                uppercase
              "
            >
              Get access <br />
              link when <br />
              app drops, you’ll<br /> receive early access + your <br />
              earned <span className="font-bold text-lime-400">PipeToken</span><br />
              bonus.
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="mt-10 md:mt-40 sm:mt-12 flex justify-end pr-2 sm:pr-4 pb-2 md:pr-24 font-satoshi">
          <button className="bg-[#C6FF00] text-[#1D4E00] px-3 py-1.5 sm:px-6 sm:py-3 font-semibold rounded-sm sm:rounded-xl hover:bg-lime-300 transition flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
            GET STARTED
            <span className="p-0.5 sm:p-1 rounded-md flex items-center justify-center">
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
