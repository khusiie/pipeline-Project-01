"use client";
import Image2 from "../../../../public/Image2.png";
import React, { useState, useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import hereiswhy from "../../../../public/assests/hereiswhy/Heading.png";

const cards = [
  {
    id: 973,
    title: "Winning teams, but no payout.,",

    image: "/assests/hereiswhyimage/Winning.jpg",
  },
  {
    id: 974,
    title: "Shady deals, full tension.",

    image: "/assests/hereiswhyimage/Shady.jpg"
  },
  {
    id: 975,
    title: " Bots win, you lose.",

    image: "/assests/hereiswhyimage/Bots.jpg",
  },
  {
    id: 976,
    title: "To win more, pay more.",

    image: "/assests/hereiswhyimage/Towin.jpg",
  },
  {
    id: 977,
    title: "Your grind, their profit.",

    image: "/assests/hereiswhyimage/Yourgrind.jpg",
  },
];

const HereWhy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef(null);
  const totalCards = cards.length;

  const getIndex = (index) => (index + totalCards) % totalCards;

  const visibleIndices = [
    getIndex(currentIndex - 2),
    getIndex(currentIndex - 1),
    getIndex(currentIndex),
    getIndex(currentIndex + 1),
    getIndex(currentIndex + 2),
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => getIndex(prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => getIndex(prev + 1));
  };

  // Auto-slide every 3 seconds if not paused
  useEffect(() => {
    if (!isPaused) {
      autoSlideRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => clearInterval(autoSlideRef.current);
  }, [isPaused, currentIndex]);

  const getCardSize = (position, screenSize) => {
    const sizes = {
      desktop: {
        center: { width: 400, height: 500 }, // +100 for rectangle look
        adjacent: { width: 300, height: 380 }, // +80
        outer: { width: 250, height: 320 }, // +70
      },

      tablet: {
        center: { width: 320, height: 320 },
        adjacent: { width: 240, height: 240 },
        outer: { width: 180, height: 180 },
      },
      mobile: {
        center: { width: 280, height: 350 },
        adjacent: { width: 200, height: 260 },
        outer: { width: 150, height: 200 },
      },
    };
    const sizeCategory =
      position === 0
        ? "center"
        : Math.abs(position) === 1
        ? "adjacent"
        : "outer";
    return sizes[screenSize][sizeCategory];
  };

  const getGlassOverlayStyles = (position, screenSize) => {
    const isCenter = position === 0;
    const base =
      "absolute left-3 right-3 backdrop-blur-sm border border-white/20 rounded-2xl";
    if (screenSize === "desktop")
      return `${base} bottom-4 ${isCenter ? "p-4" : "p-3"} bg-white/20`;
    if (screenSize === "tablet")
      return `${base} bottom-3 ${isCenter ? "p-3" : "p-2"} bg-white/20`;
    return `${base} bottom-2 ${isCenter ? "p-2" : "p-1.5"} bg-white/20`;
  };

  const getTextStyles = (position, screenSize) => {
    const isCenter = position === 0;
    return {
      title: "text-white font-bold  text-center text-[15px] md:text-xl font-medium mb-0",
      description: "text-white text-xs leading-tight",
    };
  };

  return (
    <section>
      <div className="bg-[#121212] text-white  py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8 overflow-hidden">
        {/* Heading Image */}
        <div className="flex justify-center items-center  bg-[#121212]">
          <Image
            src={hereiswhy}
            alt="Sticker"
            className="w-75 sm:w-40 md:w-48 lg:w-160 h-auto lg:mb:0 mb-12"
          />
        </div>

        {/* Carousel Container */}
        <div className="h-[320px] pb-8 sm:h-[380px] md:h-[420px] lg:h-[500px] flex items-center justify-center">
          <div className="max-w-7xl mx-auto flex justify-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 transition-all duration-500">
              {visibleIndices.map((cardIndex, i) => {
                const position = i - 2;
                const card = cards[cardIndex];
                const isCenter = position === 0;

                const cardClick = () => {
                  if (!isCenter) {
                    setCurrentIndex(cardIndex);
                    setIsPaused(true);
                    // Optional: Resume after 10s
                    setTimeout(() => setIsPaused(false), 10000);
                  }
                };

                const renderCard = (screen) => (
                  <div
                    key={`${card.id}-${screen}`}
                    className={`${
                      screen === "desktop"
                        ? "hidden lg:block"
                        : screen === "tablet"
                        ? "hidden md:block lg:hidden"
                        : "block md:hidden"
                    } relative rounded-lg shadow-xl transition-all duration-500 overflow-hidden ${
                      isCenter ? "z-20" : "z-10"
                    }`}
                    style={{
                      width: `${getCardSize(position, screen).width}px`,
                      height: `${getCardSize(position, screen).height}px`,
                      cursor: isCenter ? "default" : "pointer",
                      opacity: Math.abs(position) === 2 ? 0.6 : 1,
                      borderRadius: "19px",
                    }}
                    onClick={cardClick}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover rounded-[19px]"
                      style={{ borderRadius: "19px" }}
                      draggable={false}
                    />

                    <div
                      className={getGlassOverlayStyles(position, screen)}
                      style={{ borderRadius: "19px" }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h2
                            className={`${
                              getTextStyles(position, screen).title
                            } text-4xl`}
                          >
                            {card.title}
                          </h2>
                        </div>
                        <div className="ml-2 bg-white rounded-full p-1 flex-shrink-0">
                          <FiArrowUpRight className="text-black w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <div key={card.id} className="flex-shrink-0">
                    {renderCard("desktop")}
                    {renderCard("tablet")}
                    {renderCard("mobile")}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center pt-6 gap-4 font-satoshi">
          {/* Reserve Button */}
          <button
            className="inline-flex items-center pr-3 gap-2 px-5 py-2.5 bg-[#C6F812] text-[#1D4E00] rounded-lg font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide hover:bg-lime-400 transition duration-200"
            style={{
              boxShadow: `
        inset 0 2px 4px rgba(0, 0, 0, 0.3),
        0 4px 15px rgba(0, 0, 0, 0.2)
      `,
            }}
          >
            JOIN TODAY
            <FiArrowUpRight className="bg-white border border-black rounded-md p-1 w-6 h-6 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HereWhy;
