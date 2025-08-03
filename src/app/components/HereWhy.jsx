"use client";

import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import hereiswhy from "../../../public/assests/hereiswhy/Heading.png"
import Image from "next/image";

const cards = [
  { id: 973, title: "Through the Mountains", likes: 1247 },
  { id: 974, title: "Ocean Breeze", likes: 850 },
  { id: 975, title: "Sunset Bliss", likes: 910 },
  { id: 976, title: "City Lights", likes: 630 },
  { id: 977, title: "Forest Walk", likes: 720 },
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

  const prevSlide = () => {
    setCurrentIndex((prev) => getIndex(prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => getIndex(prev + 1));
  };

  const getCardSize = (position, screenSize) => {
    const sizes = {
      // Desktop sizes
      desktop: {
        center: { width: 400, height: 400 },
        adjacent: { width: 300, height: 300 },
        outer: { width: 250, height: 250 }
      },
      // Tablet sizes
      tablet: {
        center: { width: 320, height: 320 },
        adjacent: { width: 240, height: 240 },
        outer: { width: 180, height: 180 }
      },
      // Mobile sizes
      mobile: {
        center: { width: 280, height: 280 },
        adjacent: { width: 200, height: 200 },
        outer: { width: 150, height: 150 }
      }
    };

    const sizeCategory = position === 0 ? 'center' : Math.abs(position) === 1 ? 'adjacent' : 'outer';
    return sizes[screenSize][sizeCategory];
  };

  return (
    <section>
      <div className="bg-black text-white py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8 overflow-hidden">
        
        <div className="flex justify-center items-center pb-4 bg-black">
          <Image src={  hereiswhy} alt="Sticker" className="w-32 sm:w-40 md:w-48 lg:w-160 h-auto" />
        </div>
        
        {/* Fixed height container for carousel */}
        <div className="h-[320px] sm:h-[380px] md:h-[420px] lg:h-[500px] flex items-center justify-center">
          <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 transition-all duration-500">
            {visibleIndices.map((cardIndex, i) => {
              const position = i - 2; // -2, -1, 0, 1, 2
              const card = cards[cardIndex];
              const isCenter = position === 0;

              return (
                <div key={card.id} className="flex-shrink-0">
                  {/* Desktop version */}
                  <div
                    className={`hidden lg:block relative rounded-lg shadow-xl transition-all duration-500 ${
                      isCenter ? "z-20" : "z-10"
                    }`}
                    style={{
                      width: `${getCardSize(position, 'desktop').width}px`,
                      height: `${getCardSize(position, 'desktop').height}px`,
                      cursor: isCenter ? "default" : "pointer",
                      opacity: Math.abs(position) === 2 ? 0.7 : 1,
                    }}
                    onClick={() => {
                      if (!isCenter) setCurrentIndex(cardIndex);
                    }}
                  >
                    <img
                      src={`https://picsum.photos/id/${card.id}/${getCardSize(position, 'desktop').width}/${getCardSize(position, 'desktop').height}`}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-lg"
                      draggable={false}
                    />
                    {isCenter && (
                      <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 p-3 rounded-md">
                        <h2 className="text-white text-xl font-semibold mb-2">
                          {card.title}
                        </h2>
                        <div className="flex items-center text-red-500 space-x-2 justify-center">
                          <FaHeart />
                          <p className="text-white">
                            {card.likes.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tablet version */}
                  <div
                    className={`hidden md:block lg:hidden relative rounded-lg shadow-xl transition-all duration-500 ${
                      isCenter ? "z-20" : "z-10"
                    }`}
                    style={{
                      width: `${getCardSize(position, 'tablet').width}px`,
                      height: `${getCardSize(position, 'tablet').height}px`,
                      cursor: isCenter ? "default" : "pointer",
                      opacity: Math.abs(position) === 2 ? 0.6 : 1,
                    }}
                    onClick={() => {
                      if (!isCenter) setCurrentIndex(cardIndex);
                    }}
                  >
                    <img
                      src={`https://picsum.photos/id/${card.id}/${getCardSize(position, 'tablet').width}/${getCardSize(position, 'tablet').height}`}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-lg"
                      draggable={false}
                    />
                    {isCenter && (
                      <div className="absolute bottom-3 left-3 right-3 bg-black bg-opacity-70 p-2 rounded-md">
                        <h2 className="text-white text-lg font-semibold mb-1">
                          {card.title}
                        </h2>
                        <div className="flex items-center text-red-500 space-x-2 justify-center">
                          <FaHeart className="text-sm" />
                          <p className="text-white text-sm">
                            {card.likes.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile version */}
                  <div
                    className={`block md:hidden relative rounded-lg shadow-xl transition-all duration-500 ${
                      isCenter ? "z-20" : "z-10"
                    }`}
                    style={{
                      width: `${getCardSize(position, 'mobile').width}px`,
                      height: `${getCardSize(position, 'mobile').height}px`,
                      cursor: isCenter ? "default" : "pointer",
                      opacity: Math.abs(position) === 2 ? 0.5 : 1,
                    }}
                    onClick={() => {
                      if (!isCenter) setCurrentIndex(cardIndex);
                    }}
                  >
                    <img
                      src={`https://picsum.photos/id/${card.id}/${getCardSize(position, 'mobile').width}/${getCardSize(position, 'mobile').height}`}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-lg"
                      draggable={false}
                    />
                    {isCenter && (
                      <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-70 p-2 rounded-md">
                        <h2 className="text-white text-sm font-semibold mb-1">
                          {card.title}
                        </h2>
                        <div className="flex items-center text-red-500 space-x-1 justify-center">
                          <FaHeart className="text-xs" />
                          <p className="text-white text-xs">
                            {card.likes.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
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
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>    
     
    </section>
  );
};

export default HereWhy;