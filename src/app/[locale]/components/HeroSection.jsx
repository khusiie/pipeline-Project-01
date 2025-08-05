"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // handle first load
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="w-full h-[90vh] flex flex-col justify-center items-center text-center text-[#F7FFD9] bg-cover bg-center relative font-clash"
      style={{ backgroundImage: "url('/Homebg.png')" }}
    >
      <div className="absolute inset-0 bg-[#0d0b0bb5]" />

      <div className="relative z-10 max-w-7xl px-2 top-10">
        <div className="flex flex-col">
          <h1 className="text-[1.2rem] md:text-[5rem] lg:text-[4.8rem] font-semibold tracking-wider leading-none">
            {t("heading1")}
          </h1>
          <h2 className="text-[5rem] md:text-[4rem] lg:text-[10rem] font-extrabold leading-none">
            {t("heading2")}
          </h2>
        </div>

        <p className="text-[0.9rem] md:text-[1.5rem] lg:text-[1.75rem] text-[#C8C8C8] mb-8">
          {t("subheading")}
        </p>

        <div className="flex justify-center">
          <button className="flex items-center justify-center bg-lime-400 text-[#1D4E00] px-6 py-3 rounded-md font-semibold text-base md:text-lg hover:bg-lime-500 transition">
            {isMobile ? t("joinToday") :  t("cta")}
            <FiArrowUpRight className="ml-4 bg-white border border-black rounded-md p-1 w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
