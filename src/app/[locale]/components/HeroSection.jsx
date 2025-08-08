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

      <div className="relative z-10 max-w-7xl px-2 top-6">
        {/* Headings */}
        <div className="flex flex-col">
          <h1
            className="text-[1.2rem] md:text-[5rem] lg:text-[4.8rem] font-semibold leading-none text-[#F7FFD9]"
            style={{ letterSpacing: "0.08em" }}
          >
            {t("heading1")}
          </h1>

          <h2
            className="text-[5rem] md:text-[4rem] lg:text-[10rem] font-extrabold leading-[0.85] md:leading-none"
            style={{ letterSpacing: "0.08em" }}
          >
            {t("heading2")}
          </h2>
        </div>

        {/* Subheading */}
        <p className="text-[0.9rem] md:text-[1.5rem] lg:text-[1.50rem] text-[#C8C8C8] pt-4 mb-5"     style={{ letterSpacing: "0.08em" }}>
          {t("subheading")}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center font-satoshi mt-1">
          <button
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C6F812] text-[#1D4E00] rounded-lg font-semibold text-base md:text-lg uppercase tracking-wide hover:bg-lime-400 transition duration-200"
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
