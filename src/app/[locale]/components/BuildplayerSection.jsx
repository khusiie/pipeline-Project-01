"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import star from "../../../../public/assests/star.svg";
import buildplayer1 from "../../../../public/assests/buildplayer/frame1.png";
import helmet from "../../../../public/assests/buildplayer/cricketHelmet.svg";
import pipline from "../../../../public/assests/buildplayer/pipline.png";
import mobile2 from "../../../../public/assests/buildplayer/mobile2.png";

export default function BuildplayerSection() {
  const t = useTranslations("BuildPlayerSection");

  return (
    <section className="text-center px-0 sm:px-4 sm:py-10 relative bg-[#121212] text-white">
      {/* Background Star */}
      <hr className="w-4/5 md:max-w-2xl mx-auto mb-8 border-0 h-0.5 bg-gradient-to-r from-[#C6F812] via-[#d9ff00] to-[#C6F812] rounded-full shadow-[0_0_20px_1px_#C6F812]" />

      <div className="relative z-10 py-8 sm:mt-16 lg:mt-30">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 -z-10">
          <Image
            width={400}
            height={400}
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]"
            src={star}
            alt={t("headingAlt")}
          />
        </div>

        <h2 className="text-[12px] sm:text-xl md:text-3xl lg:text-2xl xl:text-5xl font-medium uppercase tracking-widest px-2 text-white leading-tight [word-spacing:0.3rem]">
          {t("headingAlt")}
        </h2>

        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[140px] font-extrabold my-1 sm:my-2 text-white leading-none [word-spacing:0.5rem]">
          {t("mainHeading")}
        </h1>

        <p className="uppercase text-[12px] sm:text-base md:text-xl lg:text-2xl xl:text-[40px] tracking-widest px-2 text-white leading-tight [word-spacing:0.2rem]">
          {t("subheading")}
        </p>
      </div>

      {/* Mobile */}
      <div className="py-6 px-2 sm:mt-8 flex justify-center mx-2 rounded-2 sm:px-2">
        <div className="relative block sm:hidden flex justify-center" style={{ width: "376px", height: "251px", flexShrink: 0 }}>
          <Image src={mobile2} alt="Pipeline Cricket Player - Mobile" className="shadow-lg w-[95%] h-full object-cover object-center mx-2 rounded-lg" />
          <Image src={pipline} alt="Overlay Graphic" className="absolute top-1/2 left-1/2 w-30 h-30 object-contain object-center transform -translate-x-1/2 -translate-y-[20%]" />
          <div className="absolute bottom-0 left-1/2 w-[95%] -translate-x-1/2 bg-gradient-to-t from-black/70 to-transparent px-4 rounded-b-lg">
            <h2 className="text-white text-[12px] font-medium text-center py-4">{t("mobileText")}</h2>
          </div>
        </div>

        {/* Tablet & Desktop */}
        <div className="hidden sm:block relative w-full sm:max-w-4xl">
          <Image src={mobile2} alt="Pipeline Cricket Player - Website" className="shadow-lg w-full h-[240px] sm:h-[500px] lg:h-[350px] object-contain rounded-lg" />
          <Image src={pipline} alt="Overlay Graphic" className="absolute top-1/2 left-1/2 w-45 h-45 object-contain object-center transform -translate-x-1/2 -translate-y-[20%]" />
          <div className="absolute inset-0 flex items-end justify-center px-6 pb-4 sm:pb-8">
            <h2 className="text-white text-lg lg:text-xl font-normal max-w-[95%] text-center drop-shadow-md">{t("desktopText")}</h2>
          </div>
        </div>
      </div>

      {/* Section with list */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-2 sm:px-4 py-0 sm:py-8 max-w-6xl mx-auto gap-6 lg:gap-12 bg-[#121212]">
        <div className="flex justify-center lg:justify-end">
          <Image width={300} height={300} className="w-full h-auto sm:w-80 mx-2 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-none sm:rounded-xl" src={buildplayer1} alt="Your Brand Banner" />
        </div>

        <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6">
          <h3 className="text-left text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-snug sm:leading-snug lg:leading-[3rem] mb-4 sm:mb-6 ml-3 sm:ml-0 [word-spacing:0.3rem] sm:[word-spacing:normal]">
            {t("sectionHeading")}
          </h3>

          <ul className="space-y-6 sm:space-y-4 text-left mx-6 sm:ml-0">
            <li className="flex items-center gap-6 sm:gap-4 text-sm sm:text-base md:text-lg sm:rounded-lg">
              <Image width={30} height={30} className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" src={helmet} alt="helmet" />
              <span>{t("sectionList.item1")}</span>
            </li>
            <li className="flex items-center gap-6 sm:gap-4 text-sm sm:text-base md:text-lg">
              <Image width={30} height={30} className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" src={helmet} alt="helmet" />
              <span>{t("sectionList.item2")}</span>
            </li>
            <li className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base md:text-lg">
              <Image width={30} height={30} className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" src={helmet} alt="helmet" />
              <span>{t("sectionList.item3")}</span>
            </li>
          </ul>
        </div>
      </section>

      <hr className="w-4/5 md:max-w-2xl mx-auto mt-12 border-0 h-0.5 bg-gradient-to-r from-[#C6F812] via-[#d9ff00] to-[#C6F812] rounded-full shadow-[0_0_20px_1px_#C6F812]" />
    </section>
  );
}
