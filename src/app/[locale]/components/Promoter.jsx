"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import promoter from "../../../../public/assests/promoter/promoter.png";
import dotSvg from "../../../../public/assests/promoter/dot.svg";
import star from "../../../../public/assests/promoter/star.png";
import Image2 from "../../../../public/Image2.png";
import image1 from "../../../../public/assests/promoter/image1.png";
import Image4 from "../../../../public/assests/promoter/Vector.png";
import { supabase } from "../../../../lib/supabaseClient";

import { useTranslations } from "next-intl";
const Promoter = () => {
  const t = useTranslations("Promoter");

  const [totalSpots, setTotalSpots] = useState(200);
  const [spotsLeft, setSpotsLeft] = useState(200);
  const [spotsLoading, setSpotsLoading] = useState(true);
  const [spotsError, setSpotsError] = useState(false);

  // Real-time spots functionality
  useEffect(() => {
    const fetchSpotCount = async () => {
      try {
        setSpotsLoading(true);

        const { data, error } = await supabase
          .from("tickets_config")
          .select("total_tickets, remaining_tickets")
          .eq("id", 1)
          .single();

        if (!error && data) {
          setTotalSpots(data.total_tickets);
          setSpotsLeft(data.remaining_tickets);
          setSpotsError(false);
          console.log("✅ Promoter spots loaded:", data);
        } else {
          console.error("❌ Error loading promoter spots:", error);
          setSpotsError(true);
        }
      } catch (err) {
        console.error("❌ Error fetching promoter spot count:", err);
        setSpotsError(true);
      } finally {
        setSpotsLoading(false);
      }
    };

    fetchSpotCount();

    const ticketsChannel = supabase
      .channel("promoter-tickets-live")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "tickets_config",
          filter: "id=eq.1",
        },
        (payload) => {
          console.log("🎟️ PROMOTER REAL-TIME UPDATE:", payload.new);
          setTotalSpots(payload.new.total_tickets);
          setSpotsLeft(payload.new.remaining_tickets);
          setSpotsError(false);
        }
      )
      .subscribe();

    const interval = setInterval(fetchSpotCount, 60000);

    return () => {
      ticketsChannel.unsubscribe();
      clearInterval(interval);
    };
  }, []);

  const features = [
    {
      title: t("features.0.title"),
      description: t("features.0.description"),
    },
    {
      title: t("features.1.title"),
      description: t("features.1.description"),
    },
    {
      title: t("features.2.title"),
      description: t("features.2.description"),
    },
    {
      title: t("features.3.title"),
      description: t("features.3.description"),
    },
    {
      title: t("features.4.title"),
      description: t("features.4.description"),
    },
  ];

  return (
    <div className="bg-[#121212] text-white py-12 md:py-16 md:px-4">
      <div className="relative py-8 md:py-16 px-2 md:px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Promoter Badge */}
          <div className="relative inline-block mb-15">
            {/* Star Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={star}
                alt="Star background"
                width={1000}
                height={1000}
                className="opacity-70 w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[28rem] lg:h-[28rem]"
              />
            </div>
            {/* Badge Container */}
            <div className="relative bg-gradient-to-r from-lime-400 to-yellow-300 rounded-sm md:rounded-sm shadow-2xl w-full max-w-lg  md:max-w-md md:w-auto">
              <div className="bg-gradient-to-r from-lime-400 to-yellow-300 rounded-xl px-3 py-4  md:px-6 md:pt-5 md:pb-3 flex items-center gap-4 md:gap-5">
                <Image
                  src={image1}
                  alt="image1"
                  width={45} // intrinsic width
                  height={45} // intrinsic height
                  className="w-16 h-16 md:w-16 md:h-16 lg:w-16 lg:h-16"
                />

                <div className="text-black">
                  <div className="text-2xl md:text-base  text-left">
                    {t("badge.becomeA")}
                  </div>

                  <div className="text-xl  md:text-2xl lg:text-2xl font-bold">
                    {t("badge.pipeline")}{" "}
                    <span className="font-normal text-2xl">
                      {t("badge.promoter")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Heading */}
          <div className="max-w-4xl mx-auto text-center px-2 md:px-4 -mt-10">
            <h1 className="text-[16px] sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold mb-1 md:mb-4 lg:mb-0 leading-tight [word-spacing:0.3em] lg:w-full sm:whitespace-nowrap">
              {t("heading.main")}
            </h1>
            <p className="text-[13px] sm:text-sm md:text-lg lg:text-3xl xl:text-4xl 2xl:text-3xl text-gray-300 mb-2 md:mb-8 lg:mb-12 [word-spacing:0.3em] lg:w-full lg:whitespace-nowrap">
              {t("heading.sub")}
            </p>
          </div>

          <div className="mb-6 md:mb-8 w-full py-2 px-2 md:px-6">
            <div className="inline-flex items-baseline gap-2 sm:gap-2 md:gap-3 lg:gap-4 text-base sm:text-lg md:text-lg lg:text-4xl xl:text-4xl 2xl:text-3xl flex-wrap justify-center w-full">
              <span className="text-white ">{t("seatsCounter.only")}</span>

              <span className= " lg:text-6xl text-lime-400 font-bold text-base sm:text-xl md:text-2xl  xl:text-5xl 2xl:text-5xl">
                {spotsLoading ? (
                  <span className="animate-pulse bg-gray-600 rounded w-12 h-6 inline-block"></span>
                ) : spotsError ? (
                  <span className="text-gray-400">--</span>
                ) : (
                  totalSpots
                )}
              </span>

              <span className="text-white">
                {t("seatsCounter.promoterSeats")}
              </span>

              <span
                className={`font-bold text-xl sm:text-xl md:text-2xl lg:text-5xl xl:text-5xl 2xl:text-5xl transition-colors duration-300 ${
                  spotsLeft <= 50 ? "text-red-400" : "text-lime-400"
                }`}
              >
                {spotsLoading ? (
                  <span className="animate-pulse bg-gray-600 rounded w-12 h-6 inline-block"></span>
                ) : spotsError ? (
                  <span className="text-gray-400">--</span>
                ) : (
                  spotsLeft
                )}
              </span>

              <span className="text-lime-400 text-xl sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
                {t("seatsCounter.left")}
              </span>
            </div>

            {/* Urgency message */}
            {!spotsLoading && !spotsError && spotsLeft <= 20 && (
              <div className="text-center mt-3">
                <p className="text-red-400 text-sm font-semibold animate-pulse">
                  🔥 Only {spotsLeft} promoter spots left!
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center w-full font-satoshi px-4 py-4">
            <button
              onClick={() => {
                const el = document.getElementById("signup");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  console.warn("Signup section not found in DOM");
                }
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#C6F812] text-[#1D4E00] rounded-sm font-semibold uppercase text-xs sm:text-sm tracking-wide hover:bg-lime-400 transition duration-200"
              style={{
                boxShadow: `
          inset 0 1px 2px rgba(0, 0, 0, 0.3),
          0 2px 8px rgba(0, 0, 0, 0.2)
        `,
              }}
            >
              {t("button.registerNow")}
              <span className="p-1 rounded-md flex items-center justify-center">
                <Image
                  src={Image2}
                  alt="icon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Dotted Border */}
      </div>

      {/* Features and Image Section with different mobile layout */}
      <div className="lg:max-w-7xl lg:mx-auto lg:px-4">
        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Features List */}
          <div className="flex flex-col justify-center">
            <div className="relative">
              {/* Single continuous vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-700"></div>

              {features.map((feature, index) => (
                <div key={index} className="relative pb-8 last:pb-0">
                  <div className="flex items-start gap-6">
                    {/* Dot positioned at heading level */}
                    <div className="relative flex-shrink-0">
                      <Image
                        src={dotSvg}
                        alt="Feature dot"
                        width={24}
                        height={24}
                        className="w-6 h-6 z-10 relative"
                      />
                    </div>

                    {/* Content with Asterisk Heading */}
                    <div className="flex-1 relative  -mt-4 mb-2">
                      {/* Asterisk Heading */}

                      {/* Star Image replacing the * */}
                      <Image
                        src={Image4}
                        alt="Star icon"
                        width={20} // specify actual width
                        height={20} // specify actual height
                        className="w-6 h-6"
                      />

                      {/* Feature Title */}
                      <h3 className="text-base font-bold uppercase tracking-wider mb-2 text-white mt-2">
                        {feature.title}
                      </h3>

                      {/* Feature Description */}
                      <p className="text-gray-300 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Container - Desktop */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-none">
              <div className="relative aspect-[4/5] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={promoter}
                  alt="Features showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Image Container - Responsive for Mobile & Desktop */}
        <div
          className="w-full lg:w-1/2 pb-10
 lg:pb-0 px-4"
        >
          <div className="relative aspect-[4/5] lg:aspect-auto bg-gray-800 overflow-hidden shadow-2xl ">
            <Image
              src={promoter}
              alt="Features showcase"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mobile Layout - Stacked with Full Width Image */}
        <div className="lg:hidden">
          {/* Features List - Mobile */}
          <div className="px-2 md:px-4 mb-8">
            <div className="relative max-w-6xl mx-auto">
              {/* Single continuous vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-700"></div>

              {features.map((feature, index) => (
                <div key={index} className="relative pb-4 md:pb-6 last:pb-0">
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Dot positioned at heading level */}
                    <div className="relative flex-shrink-0">
                      <Image
                        src={dotSvg}
                        alt="Feature dot"
                        width={18}
                        height={18}
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 z-10 relative"
                      />
                    </div>

                    <div className="flex-1 relative -mt-6 ">
                      <div className="flex flex-col items-start ">
                        {/* Star */}
                        <Image
                          src={Image4}
                          alt="Star icon"
                          width={20}
                          height={20}
                          className="w-5 h-5 mb-3"
                          // consistent space below
                        />

                        {/* Title + Description */}
                        <div className="flex flex-col gap-1 mb-6">
                          <h3 className="text-[12px] sm:text-sm md:text-base font-bold uppercase tracking-wider text-white leading-snug">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 text-[12px] sm:text-sm md:text-base leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr
            className="
    w-4/5 md:max-w-2xl
    mx-auto
    mt-10
  
    border-0
    h-0.5
    bg-gradient-to-r from-[#C6F812] via-[#d9ff00] to-[#C6F812]
    rounded-full
    shadow-[0_0_20px_1px_#C6F812]
  "
          />
        </div>
      </div>
    </div>
  );
};

export default Promoter;
