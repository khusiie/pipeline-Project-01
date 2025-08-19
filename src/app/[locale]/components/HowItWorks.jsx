"use client";
import React from "react";
import process from "../../../../public/assests/howitworks/process.svg";
import Image from "next/image";
import Image2 from "../../../../public/Image2.png";
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks"); // Load translations

  return (
    <div className="bg-[#121212]">
      <section className="relative bg-[#121212] md:mb-16 text-white px-2 md:px-12 w-full pt-16 sm:pt-20 md:py-20 pb-6 max-h-screen md:min-h-[800px] font-clash overflow-hidden">
        
        {/* Section Heading */}
        <div className="max-w-5xl mx-auto text-left font-bold md:mb-6">
          <h2 className="text-5xl sm:text-4xl md:text-8xl font-bold uppercase px-4">
            {t("heading").split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* Image + Positioned Text */}
        <div className="relative max-w-5xl mx-auto md:mb-20 flex-1 min-h-0">
          <div className="w-full h-[100px] sm:h-[150px] md:h-[200px] relative">
            
            {/* SVG Line */}
            <Image
              src={process}
              alt="curved line"
              className="absolute top-1/2 left-1/2 w-[250%] sm:w-[220%] md:w-[250%] h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />

            {/* Block 1 */}
            <div className="absolute text-left text-[8px] sm:text-sm md:text-base leading-tight w-[70%] sm:w-[60%] md:w-[30%] left-[9%] sm:left-[10%] md:left-[10%] top-[99%] sm:top-[90%] md:top-[120%] uppercase">
              {t("block1").split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>

            {/* Block 2 */}
            <div className="absolute text-left text-[8px] sm:text-sm md:text-base leading-tight w-[60%] sm:w-[65%] md:w-[30%] left-[38%] sm:left-[25%] md:left-[40%] top-[65%] sm:top-[55%] md:top-[75%] uppercase">
              {t("block2").split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>

            {/* Block 3 */}
            <div className="absolute text-left text-[8px] font-medium sm:text-sm md:text-base leading-tight w-[25%] sm:w-[65%] md:w-[30%] right-[5%] sm:right-[5%] md:right-[-1%] top-[6%] sm:top-[10%] md:top-[-8%] uppercase">
              {t("block3").split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
           </div>
        </div>

         <div className="mt-auto pt-16 md:pt-0 sm:mt-12 md:mt-40 flex justify-end pr-2 sm:pr-4 pb-2 md:pr-24 font-satoshi">
          <button
            onClick={() => {
              const el = document.getElementById("signup");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="bg-[#C4F612] text-[#1D4E00] px-4 py-2 sm:px-2 sm:py-2 md:px-4 md:py-2 font-semibold rounded-lg sm:rounded-xl hover:bg-lime-300 transition flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg"
          >
            {t("buttonLabel")}
            <span className="p-1 sm:p-1.5 md:p-2 rounded-md flex items-center justify-center">
              <Image src={Image2} alt="icon" className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </span>
          </button>
        </div>
       </section>
      
         <div className="hidden sm:block max-w-6xl mx-auto px-4 md:px-12">
         <div className="h-0.5 bg-[#ffffff5f] relative z-10"></div>
       </div>
    </div>
  );
}