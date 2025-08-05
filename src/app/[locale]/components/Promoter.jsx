import React from 'react';
import Image from 'next/image';
import promoter from "../../../../public/assests/promoter/promoter.png"
import dotSvg from "../../../../public/assests/promoter/dot.svg"
import starSvg from "../../../../public/assests/star.svg"
import { FiArrowUpRight } from 'react-icons/fi';
import image1 from "../../../../public/assests/promoter/image1.png"

const Promoter = () => {
  const features = [
    {
      title: "MONETIZE YOUR TALENT",
      description: "Monetize your talent, earn up-to 10% royalties every time your lineups win for others."
    },
    {
      title: "DITCH RISKY GROUPS",
      description: "Monetize your talent, earn up-to 10% royalties every time your lineups win for others."
    },
    {
      title: "LIFETIME SAVINGS",
      description: "Monetize your talent, earn up-to 10% royalties every time your lineups win for others."
    },
    {
      title: "INVITE & EARN",
      description: "Monetize your talent, earn up-to 10% royalties every time your lineups win for others."
    },
    {
      title: "INVITE & EARN",
      description: "Monetize your talent, earn up-to 10% royalties every time your lineups win for others."
    }
  ];

  return (
         <div className="bg-black text-white py-8 md:py-16 px-4">
        <div className="relative py-8 md:py-16 px-2 md:px-4">
         <div className="max-w-6xl mx-auto text-center">
                                {/* Promoter Badge */}
            <div className="relative inline-block mb-8">
              {/* Star Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src={starSvg}
                  alt="Star background"
                  width={800}
                  height={800}
                  className="opacity-70 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                />
              </div>
              
             {/* Badge Container */}
             <div className="relative bg-gradient-to-r from-lime-400 to-yellow-300 rounded-2xl p-1 shadow-2xl">
               <div className="bg-gradient-to-r from-lime-400 to-yellow-300 rounded-xl px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3">
                 {/* Cricket Field Icon Placeholder */}
                 <Image 
                 src={image1}
                 alt='image1'
                 width={40}
                 height={40}
                 className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                 />
                 
                 <div className="text-black">
                   <div className="text-xs md:text-sm font-medium text-left">Become a</div>
                   <div className="text-sm md:text-lg lg:text-xl font-bold">PIPELINE <span className="font-normal">Promoter</span></div>
                 </div>
               </div>
             </div>
           </div>

                                           {/* Main Heading */}
            <div className="max-w-4xl mx-auto text-center px-2 md:px-4">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 md:mb-4 leading-tight">
      LEAD THE FANTASY CRICKET REVOLUTION
    </h1>

    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 mb-6 md:mb-8 lg:mb-12">
      BUILD YOUR EMPIRE LEGALLY, OPENLY, AND WITH RESPECT
    </p>
  </div>

                                           {/* Seats Counter */}
            <div className="mb-6 md:mb-8 px-2 md:px-4">
              <div className="inline-flex items-baseline gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex-wrap justify-center">
                <span className="text-white">Only</span>
                <span className="text-lime-400 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">200</span>
                <span className="text-white">Promoter Seats.</span>
                <span className="text-lime-400 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">14</span>
                <span className="text-lime-400 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-normal">Left</span>
              </div>
            </div>

                                           {/* Register Button */}
            <div className="flex justify-center px-2 md:px-4">
    <button className="bg-lime-400 hover:bg-lime-300 text-[#1D4E00] font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg text-xs sm:text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-1 md:gap-2">
      REGISTER NOW <FiArrowUpRight className="bg-white rounded-md p-1 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
    </button>
  </div>

        </div>

        {/* Dotted Border */}
       </div>
                           <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
           {/* Features List - Equal Height Container */}
           <div className="flex flex-col justify-center">
             <div className="relative">
               {/* Single continuous vertical line */}
               <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-700"></div>
               
                               {features.map((feature, index) => (
                  <div key={index} className="relative pb-4 md:pb-6 lg:pb-8 last:pb-0">
                    <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                                           {/* Dot positioned at heading level */}
                       <div className="relative flex-shrink-0">
                         <Image 
                           src={dotSvg} 
                           alt="Feature dot" 
                           width={24} 
                           height={24} 
                           className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 z-10 relative"
                         />
                       </div>

                      {/* Content with Asterisk Heading */}
                      <div className="flex-1 relative">
                        {/* Asterisk Heading */}
                        <h2 className="text-lime-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none">*</h2>

                        {/* Feature Title */}
                        <h3 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-1 md:mb-2 text-white mt-1 md:mt-2">
                          {feature.title}
                        </h3>

                        {/* Feature Description */}
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

                                           {/* Image Container - Equal Height */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] bg-gray-800 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
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
      </div>
    </div>
  );
};

export default Promoter;