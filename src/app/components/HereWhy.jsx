"use client";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const cards = [
  { id: 973, title: "", likes: 1247, image: "/assests/hereiswhy/player1.png" },
  { id: 974, title: "", likes: 850, image: "/assests/hereiswhy/player2.png" },
  { id: 975, title: "", likes: 910, image: "/assests/hereiswhy/player3.png" },
  { id: 976, title: "", likes: 630, image: "/assests/hereiswhy/player1.png" },
  { id: 977, title: "", likes: 720, image: "/assests/hereiswhy/player2.png" },
];

const HereWhy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;

  const getIndex = (index) => (index + totalCards) % totalCards;

  const visibleIndices = [
    getIndex(currentIndex - 2),
    getIndex(currentIndex - 1),
    getIndex(currentIndex),
    getIndex(currentIndex + 1),
    getIndex(currentIndex + 2),
  ];

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

    const sizeCategory = position === 0 ? "center" : Math.abs(position) === 1 ? "adjacent" : "outer";
    return sizes[screenSize][sizeCategory];
  };

  return (
    <section>
      <div className="bg-black text-white py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8 overflow-hidden">
        {/* Heading image */}
        <div className="flex justify-center items-center pb-4 bg-black">
          <Image
            src="/assets/hereiswhy/Heading.png"
            alt="Sticker"
            width={300}
            height={80}
            className="w-32 sm:w-40 md:w-48 lg:w-160 h-auto"
          />
        </div>

        {/* Carousel container */}
        <div className="h-[320px] sm:h-[380px] md:h-[420px] lg:h-[500px] flex items-center justify-center">
          <div className="max-w-7xl mx-auto flex justify-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 transition-all duration-500">
              {visibleIndices.map((cardIndex, i) => {
                const position = i - 2; // -2, -1, 0, 1, 2
                const card = cards[cardIndex];
                const isCenter = position === 0;

                const renderCard = (screen) => {
                  const size = getCardSize(position, screen);
                  return (
                    <div
                      key={screen}
                      className={`${
                        screen === "desktop"
                          ? "hidden lg:block"
                          : screen === "tablet"
                          ? "hidden md:block lg:hidden"
                          : "block md:hidden"
                      } relative rounded-lg shadow-xl transition-all duration-500 ${
                        isCenter ? "z-20" : "z-10"
                      }`}
                      style={{
                        width: `${size.width}px`,
                        height: `${size.height}px`,
                        cursor: isCenter ? "default" : "pointer",
                        opacity: Math.abs(position) === 2 ? 0.6 : 1,
                      }}
                      onClick={() => {
                        if (!isCenter) setCurrentIndex(cardIndex);
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={size.width}
                        height={size.height}
                        className="object-cover rounded-lg"
                        draggable={false}
                      />
                   
                    </div>
                  );
                };

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

        {/* Join button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button className="inline-flex items-center bg-lime-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-sm sm:text-base md:text-lg hover:bg-lime-500 transition-colors">
            JOIN NOW
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HereWhy;
