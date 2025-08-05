"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import hereiswhy from "../../../../public/assests/hereiswhy/Heading.png";

const cards = [
  {
    id: 973,
    title: "You Build Winning Teams,",
    description: "But Others Copy Them & Never Pay You For It.",
    image: "/assests/hereiswhy/left.png",
  },
  {
    id: 974,
    title: "Create Perfect Strategies,",
    description: "But Competitors Steal & Profit From Your Ideas.",
    image: "/assests/hereiswhy/imagecenter.png",
  },
  {
    id: 975,
    title: "Design Amazing Products,",
    description: "But Others Launch Copies & Take Your Market.",
    image: "/assests/hereiswhy/right.png",
  },
  {
    id: 976,
    title: "Build Strong Communities,",
    description: "But Rivals Poach Members & Use Your Methods.",
    image: "/assests/hereiswhy/image4.jpeg",
  },
  {
    id: 977,
    title: "Develop Great Content,",
    description: "But Others Repost & Get All The Credit.",
    image: "/assests/hereiswhy/cards/card5.jpg",
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
        center: { width: 400, height: 400 },
        adjacent: { width: 300, height: 300 },
        outer: { width: 250, height: 250 },
      },
      tablet: {
        center: { width: 320, height: 320 },
        adjacent: { width: 240, height: 240 },
        outer: { width: 180, height: 180 },
      },
      mobile: {
        center: { width: 280, height: 280 },
        adjacent: { width: 200, height: 200 },
        outer: { width: 150, height: 150 },
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
      title: "text-white text-xs font-medium mb-0",
      description: "text-white text-xs leading-tight",
    };
  };

  return (
    <section>
      <div className="bg-black text-white py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8 overflow-hidden">
        {/* Heading Image */}
        <div className="flex justify-center items-center pb-4 bg-black">
          <Image
            src={hereiswhy}
            alt="Sticker"
            className="w-32 sm:w-40 md:w-48 lg:w-160 h-auto"
          />
          
        </div>

        {/* Carousel Container */}
        <div className="h-[320px] sm:h-[380px] md:h-[420px] lg:h-[500px] flex items-center justify-center">
          <div className="max-w-7xl mx-auto flex justify-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 transition-all duration-500">
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
                          <h2 className={getTextStyles(position, screen).title}>
                            {card.title}
                          </h2>
                          <p
                            className={
                              getTextStyles(position, screen).description
                            }
                          >
                            {card.description}
                          </p>
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

        {/* Join Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button className="inline-flex items-center bg-lime-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base md:text-lg hover:bg-lime-500 transition-colors">
            JOIN NOW
            <FiArrowUpRight className="ml-2 sm:ml-4 border border-black bg-white rounded-md p-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HereWhy;
