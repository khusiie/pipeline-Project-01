"use client";
import Image2 from "../../../../public/assests/becomechallenger/Image2.png";
import React, { useEffect, useState, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gridimage1 from "../../../../public/assests/becomechallenger/gridimage1.png";
import gridimage4 from "../../../../public/assests/becomechallenger/gridimage4.png";
import gridimage5 from "../../../../public/assests/becomechallenger/gridimage5.png";
import gridimage2 from "../../../../public/assests/becomechallenger/gridimage2.png";
import gridimage3 from "../../../../public/assests/becomechallenger/gridimage3.png";
import gridlogo1 from "../../../../public/assests/becomechallenger/gridlogo1.svg";
import gridlogo2 from "../../../../public/assests/becomechallenger/ticket-01.svg";
import gridlogo5 from "../../../../public/assests/becomechallenger/game-controller-03.svg";
import gridlogo3 from "../../../../public/assests/becomechallenger/credit-card-validation.svg";
import gridlogo4 from "../../../../public/assests/becomechallenger/bot.svg";
import becomechallengelogo from "../../../../public/assests/becomechallenger/challange.png";
import vectorimage from "../../../../public/vector.png";
import Image from "next/image";

import Image3 from '../../../../public/Image2.png';
const BecomeChallenger = () => {
  // Countdown logic
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-15T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mobile card data
  const mobileCardData = [
    {
      id: 1,
      image: gridimage1,
      logo: gridlogo2,
      title: "2x Pipe Tokens",
      description: "Bonus: Double rewards at launch."
    },
    {
      id: 2,
      image: gridimage2,
      logo: gridlogo1,
      title: "15% Lifetime Fee Discount",
      description: "More winnings with savings on every contest, forever"
    },
    {
      id: 3,
      image: gridimage3,
      logo: gridlogo3,
      title: "Verified Lineups",
      description: "Play with confidence. Use strategies from trusted Promoters, no copycats."
    },
    {
      id: 4,
      image: gridimage4,
      logo: gridlogo4,
      title: "Transparent Matchups",
      description: "No Bots, No Drama: No shady deals, guaranteed payouts."
    },
    {
      id: 5,
      image: gridimage5,
      logo: gridlogo5,
      title: "PIPELINE Promise",
      description: "Built with transparency. All matchups are real. All data is clean."
    }
  ];

  // Mobile scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / mobileCardData.length;
      const currentCard = Math.round(scrollLeft / cardWidth);
      setActiveCard(Math.min(Math.max(currentCard, 0), mobileCardData.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [mobileCardData.length]);

  // Scroll to specific card (mobile)
  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = container.scrollWidth / mobileCardData.length;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-[#121212] text-white  md:px-4">
      {/* Mobile-specific styles */}
      <style jsx>{`
        /* Hide scrollbar for mobile horizontal scroll */
        .mobile-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .mobile-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Mobile card animations */
        @keyframes mobileSlideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-card-animation {
          animation: mobileSlideIn 0.6s ease-out forwards;
        }

        /* Mobile card hover effects */
        .mobile-card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-card-hover:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 35px rgba(198, 248, 18, 0.25);
        }

        /* Mobile dot indicators */
        .mobile-dot {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .mobile-dot:hover {
          transform: scale(1.2);
          opacity: 0.8;
        }

        .mobile-dot.active {
          background: linear-gradient(135deg, #C6F812, #d9ff00);
          transform: scale(1.4);
          box-shadow: 0 0 10px rgba(198, 248, 18, 0.5);
        }

        /* Responsive mobile card sizes */
        @media (max-width: 640px) {
          .mobile-card {
            width: 280px !important;
            height: 400px !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-card {
            width: 260px !important;
            height: 380px !important;
          }
        }

        @media (max-width: 380px) {
          .mobile-card {
            width: 240px !important;
            height: 360px !important;
          }
        }
      `}</style>


        




        <div className="max-w-6xl mx-auto">
       {/* Heading */}
       <div className="w-full flex justify-center">
  <Image
    src={becomechallengelogo}
    alt="BECOME CHALLENGER"
    className="w-full md:w-auto h-auto max-h-[260px] md:max-h-[250px] object-contain"
    width={800} // bigger base size for clarity
    height={400}
    unoptimized
    priority
  />
</div>


          {/* Cards Section */}
          <div className="mt-8 sm:mt-12">
            
            {/* DESKTOP VERSION - Original Grid Layout (Hidden on Mobile) */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="bg-white p-4  sm:p-6 rounded-lg flex flex-col h-full lg:col-span-2">
                <Image
                  src={gridimage1}
                  width={463}
                  height={365}
                  alt="2x Pipe Tokens"
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                  <Image
                    src={gridlogo2}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                    <span className="bg-[#C6F812] font-semibold">
                      {" "}
                      2x Pipe Tokens{" "}
                    </span>{" "}
                    Bonus: Double rewards at launch.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg flex flex-col h-full lg:col-span-2">
                <Image
                  src={gridimage2}
                  width={463}
                  height={365}
                  alt="15% Lifetime Fee Discount"
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                  <Image
                    src={gridlogo1}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                    <span className="bg-[#C6F812]  font-semibold">
                      {" "}
                      15% Lifetime Fee Discount
                    </span>{" "}
                    More winnings with savings on every contest, forever
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg flex flex-col h-full lg:col-span-2">
                <Image
                  src={gridimage3}
                  width={463}
                  height={365}
                  alt="Verified Lineups"
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                  <Image
                    src={gridlogo3}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                    <span className="bg-[#C6F812] font-semibold">
                      Verified Lineups{" "}
                    </span>{" "}
                    Play with confidence. Use strategies from{" "}
                    <span className="bg-[#C6F812] font-semibold ">
                      trusted Promoters
                    </span>
                    , no copycats.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg flex flex-col h-full sm:col-span-2 lg:col-span-3">
                <Image
                  src={gridimage4}
                  width={699}
                  height={520}
                  alt="Transparent Matchups"
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                  <Image
                    src={gridlogo4}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                    No Bots, No Drama:{" "}
                    <span className="bg-[#C6F812] font-semibold">
                      {" "}
                      Transparent matchups{" "}
                    </span>
                    , No shady deals, guaranteed payouts.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-4 sm:p-6 rounded-lg flex flex-col h-full sm:col-span-2 lg:col-span-3">
                <Image
                  src={gridimage5}
                  width={699}
                  height={520}
                  alt="PIPELINE Promise"
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                  <Image
                    src={gridlogo5}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="shrink-0 w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <p className="text-black text-sm sm:text-base leading-relaxed line-clamp-3 text-left">
                    <span className="bg-[#C6F812] font-semibold">PIPELINE </span>{" "}
                    is built with one promise transparency.{" "}
                    <span className="bg-[#C6F812] font-semibold">
                      {" "}
                      All matchups are real
                    </span>
                    . All data is clean.
                  </p>
                </div>
              </div>
            </div>
{/* MOBILE VERSION - Horizontal Scroll (Visible on Mobile/Tablet) */}
<div className="lg:hidden">
  {/* Horizontal scroll container */}
  <div className="relative">
    <div
      ref={scrollContainerRef}
      className="overflow-x-auto mobile-scrollbar-hide snap-x snap-mandatory"
    >
      <div className="flex gap-6 pb-6" style={{ width: 'max-content' }}>
        {mobileCardData.map((card, index) => (
          <div
            key={card.id}
            className="bg-white border-white border-[6px] rounded-2xl flex flex-col flex-shrink-0 snap-center shadow-md overflow-hidden mobile-card-animation"
            style={{
              width: '300px',
              height: '360px',
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Image */}
            <div className="relative">
              <div className="h-52 overflow-hidden">
                <Image
                  src={card.image}
                  width={420}
                  height={208}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg flex-shrink-0">
                  <Image
                    src={card.logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-black font-bold text-base mb-2 leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-black text-medium leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>



          </div>
        </div>
      
<hr
  className={`
    jsx-3e57943df3745036
    w-4/5 md:max-w-2xl
    mx-auto mt-5  md:mt-15 mb-10
    border-0 h-0.5
    bg-gradient-to-r from-[#C6F812] via-[#d9ff00] to-[#C6F812]
    rounded-full shadow-[0_0_20px_1px_#C6F812]
  `}
/>



      <div className="w-90% bg-[url('/bg1.png')] bg-cover bg-center bg-zinc-800 py-8 md-10 sm:rounded-lg text-center relative">
        <div className="absolute inset-0 bg-[#0000007d] bg-opacity-60 rounded-lg"></div>
        <div className="relative z-10">
 
<h3 className="text-lg md:text-3xl uppercase font-bold mb-2 leading-tight" style={{ wordSpacing: "0.2rem" }}>
  THESE BENEFITS ARE
  <br />
  ONLY AVAILABLE TILL
</h3>
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            AUGUST 15TH 2025
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xl font-normal text-white tracking-wide">
              200 Total
            </span>
            <div className="flex items-center font-bold  text-3xl gap-2">
                145 
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">
              Left
            </span>
          </div>
 <div className="inline-flex items-center gap-6 sm:gap-8 md:gap-16 bg-black/10 backdrop-blur-lg rounded-2xl py-3 sm:py-5 md:py-8 px-4 sm:px-10 md:px-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto overflow-x-auto border border-white/10">
  {["Days", "Hours", "Minutes"].map((unit, i) => {
    const value =
      [timeLeft.days, timeLeft.hours, timeLeft.minutes][i] ?? 0;
    
    return (
      <div
        key={unit}
        className="flex flex-col items-center flex-shrink-0 flex-1"
      >
        <div className="relative">
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tight tabular-nums min-w-[3ch] sm:min-w-[4ch] md:min-w-[5ch] lg:min-w-[6ch] text-center">
            {String(value).padStart(2, "0")}
          </span>
        </div>
        <span className="text-xs sm:text-sm md:text-base font-medium text-white/80 uppercase tracking-widest mt-2 sm:mt-3 md:mt-4">
          {unit}
        </span>
      </div>
    );
  })}
  
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
      <div className="w-px h-12 sm:h-16 md:h-20 bg-white/20"></div>
      <div className="w-px h-12 sm:h-16 md:h-20 bg-white/20 ml-[calc(3ch+3rem)] sm:ml-[calc(4ch+4rem)] md:ml-[calc(5ch+5rem)]"></div>
    </div>
  </div>
</div>

{/* Info Boxes */}
<div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12 mx-4">
  <div className="flex items-center gap-3 px-5 py-3 bg-black/35 backdrop-blur-2xl rounded-xl text-sm text-white border border-white/10">
    <Image
      src={vectorimage}
      alt="Promoter Spots"
      width={60}
      height={60}
    />
    <span className="font-bold">PROMOTER SPOTS:</span>
    <span>ONLY 200 TOTAL (145 LEFT)</span>
  </div>
  <div className="flex items-center gap-3 px-5 py-3 bg-black/35 backdrop-blur-2xl rounded-xl text-sm text-white border border-white/10">
    <Image
      src={vectorimage}
      alt="Challenger Perks"
      width={60}
      height={60}
    />
    <span className="font-bold">CHALLENGER PERKS:</span>
    <span>ONLY FOR PRE-LAUNCH SIGNUPS</span>
  </div>
  <div className="flex items-center gap-3 px-5 py-3 bg-black/35 backdrop-blur-2xl rounded-xl text-sm text-white border border-white/10">
    <Image
      src={vectorimage}
      alt="Joined Players"
      width={60}
      height={60}
    />
    <span className="font-bold">JOINED 2,347</span>
    <span>PLAYERS ALREADY IN THE REVOLUTION</span>
  </div>
</div>



 
  <div className="flex flex-col sm:flex-row justify-center items-center w-full font-satoshi px-4 py-10 gap-4">
  {/* Register Button */}
  <button
    className="flex items-center gap-3 px-6 py-3 bg-[#C6F812] text-[#1D4E00] rounded-md font-semibold uppercase text-base sm:text-lg tracking-wide hover:bg-lime-400 transition duration-200"
    style={{
      boxShadow: `
        inset 0 1px 2px rgba(0, 0, 0, 0.3),
        0 2px 8px rgba(0, 0, 0, 0.2)
      `,
    }}
  >
    RESERVE MY SPOT NOW
    <span className="p-1.5 rounded-md flex items-center justify-center">
      <Image src={Image3} alt="icon" className="w-6 h-6 sm:w-7 sm:h-7" />
    </span>
  </button>

  {/* Share Button */}
  <button
    className="flex items-center gap-3 px-6 py-3 bg-[#C6F812] text-[#1D4E00] rounded-full font-semibold uppercase text-base sm:text-lg tracking-wide hover:bg-lime-400 transition duration-200"
    style={{
      boxShadow: `
        inset 0 1px 2px rgba(0, 0, 0, 0.3),
        0 2px 8px rgba(0, 0, 0, 0.2)
      `,
    }}
  >
    SHARE
    <span className="p-1.5 rounded-full flex items-center justify-center">
      <Image src={Image2} alt="icon" className="w-6 h-6 sm:w-7 sm:h-7" />
    </span>
  </button>
</div>


        </div>
      </div>
      
    </section>
  );
};

export default BecomeChallenger;