"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image2 from "../../../../public/Image2.png";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="w-full h-screen flex flex-col justify-center items-center text-center text-[#F7FFD9] bg-cover bg-center relative font-clash"
      style={{ backgroundImage: "url('/Homebg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000060]" />
      <div className="relative z-10 max-w-7xl px-2 top-10">
        {/* Headings */}
        <div className="flex flex-col">
          <h1
  className="
    text-[1.55em] leading-[2rem]     /* Mobile */
    md:text-[5rem] md:leading-[5.5rem] /* Tablet/Desktop */
    lg:-mt-6 lg:text-[5.5rem] lg:leading-[3rem] /* Large screens */
    -mt-8 font-semibold text-[#F7FFD9]
  "
  style={{ letterSpacing: "0.04em" }}
>
  {t("heading1")}
</h1>

  
             <h2
            className="text-[6rem] md:text-[4rem] lg:text-[10rem] font-extrabold leading-[0.85]  lg:pb-1 pb-2 md:leading-none"
            style={{ letterSpacing: "0.08em" }}
          >
            {t("heading2")}
          </h2>
        </div>

        {/* Subheading */}
        <p
          className="text-[1.0rem] font-[490] md:text-[1.5rem] lg:text-[1.50rem]  text-[#F7FFD9] top-[20px] lg:pb-0 pb-10  "
          style={{ letterSpacing: "0.04em" }}
        >
          {t("subheading")}
        </p>

     {/* CTA Button */}
<div className="flex justify-center font-satoshi py-3">
  <button
    onClick={() => {
      document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="flex items-center justify-center gap-3 pr-2 lg:pr-2 lg:px-4 lg:py-4 px-4 py-1.5 bg-[#C6F812] text-[#1D4E00] rounded-lg font-semibold text-base md:text-lg uppercase tracking-wide hover:bg-lime-400 transition duration-200"
    style={{
      boxShadow: `
        inset 0 2px 4px rgba(0, 0, 0, 0.3),
        0 4px 15px rgba(0, 0, 0, 0.2)
      `,
    }}
  >
    {isMobile ? t("joinToday") : t("cta")}
    <span className="p-1 md:p-1.5 rounded-md flex items-center justify-center">
      <Image
        src={Image2}
        alt="icon"
        className="w-6 h-6 md:w-5 md:h-5"
      />
    </span>
  </button>
</div>

      </div>
    </section>
  );
}
