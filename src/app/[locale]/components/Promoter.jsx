import React from "react";
import Image from "next/image";
import promoter from "../../../../public/assests/promoter/promoter.png";
import dotSvg from "../../../../public/assests/promoter/dot.svg";
import starSvg from "../../../../public/assests/star.svg";
import Image2 from "../../../../public/Image2.png";
import image1 from "../../../../public/assests/promoter/image1.png";
import Image4 from "../../../../public/assests/promoter/Vector.png";

const Promoter = () => {
  const features = [
    {
      title: "MONETIZE YOUR TALENT",
      description:
        "Monetize your talent, earn up-to 10% royalties every time your lineups win for others.",
    },
    {
      title: "DITCH RISKY GROUPS",
      description:
        "Monetize your talent, earn up-to 10% royalties every time your lineups win for others.",
    },
    {
      title: "LIFETIME SAVINGS",
      description:
        "Monetize your talent, earn up-to 10% royalties every time your lineups win for others.",
    },
    {
      title: "INVITE & EARN",
      description:
        "Monetize your talent, earn up-to 10% royalties every time your lineups win for others.",
    },
    {
      title: "INVITE & EARN",
      description:
        "Monetize your talent, earn up-to 10% royalties every time your lineups win for others.",
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
                src={starSvg}
                alt="Star background"
                width={1000}
                height={1000}
                className="opacity-70 w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]"
              />
            </div>
            {/* Badge Container */}
            <div className="relative bg-gradient-to-r from-lime-400 to-yellow-300 rounded-sm md:rounded-xl shadow-2xl w-full max-w-lg  md:max-w-md md:w-auto">
              <div className="bg-gradient-to-r from-lime-400 to-yellow-300 rounded-xl px-4 pt-4 pb-2 md:px-6 md:pt-5 md:pb-3 flex items-center gap-4 md:gap-5">
                {/* Cricket Field Icon */}
                <Image
                  src={image1}
                  alt="image1"
                  width={45}
                  height={45}
                  className="w-20 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16"
                />

                <div className="text-black">
                  <div className="text-2xl md:text-base  text-left">
                    Become a
                  </div>

                  <div className="text-xl  md:text-2xl lg:text-3xl font-bold">
                    PIPELINE  <span className="font-normal text-xl"> Promoter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Heading */}
          <div className="max-w-4xl mx-auto text-center px-2 md:px-4 -mt-10">
            <h1 className="text-[14px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-1 md:mb-4 leading-tight">
              LEAD THE FANTASY CRICKET REVOLUTION
            </h1>

            <p
              className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 mb-2 md:mb-8 lg:mb-12"
              style={{ wordSpacing: "0.25em" }} // adjust the value as needed
            >
              BUILD YOUR EMPIRE LEGALLY, OPENLY, AND WITH RESPECT
            </p>
          </div>

          {/* Seats Counter */}
          <div className="mb-6 md:mb-8 w-full py-2 px-2 md:px-6">
            <div className="inline-flex items-baseline gap-2 sm:gap-2 md:gap-3 lg:gap-4 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex-wrap justify-center w-full">
              <span className="text-white">Only</span>
              <span className="text-lime-400 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                200
              </span>
              <span className="text-white">Promoter Seats.</span>
              <span className="text-lime-400 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                145
              </span>
              <span className="text-lime-400 text-xl  sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
                Left
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center w-full font-satoshi px-4 py-4">
            <button
              className="flex items-center gap-2 px-3 py-1.5 bg-[#C6F812] text-[#1D4E00] rounded-sm font-semibold uppercase text-xs sm:text-sm tracking-wide hover:bg-lime-400 transition duration-200"
              style={{
                boxShadow: `
        inset 0 1px 2px rgba(0, 0, 0, 0.3),
        0 2px 8px rgba(0, 0, 0, 0.2)
      `,
              }}
            >
              REGISTER NOW
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
                    <div className="flex-1 relative">
                      {/* Asterisk Heading */}

                      {/* Star Image replacing the * */}
                      <Image
                        src={Image4}
                        alt="Star icon"
                        width={20} // specify actual width
                        height={20} // specify actual height
                        className="w-4 h-4"
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
 lg:pb-0"
        >
          <div className="relative aspect-[4/5] lg:aspect-auto bg-gray-800 overflow-hidden shadow-2xl">
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

                    {/* Content with Asterisk Heading */}
                    <div className="flex-1 relative">
                      {/* Asterisk Heading */}

                      {/* Star Image replacing the * */}
                      <Image
                        src={Image4}
                        alt="Star icon"
                        width={20} // specify actual width
                        height={20} // specify actual height
                        className="w-4 h-4 mb-4 -mt-6"
                      />

                      <h3 className="text-[12px] sm:text-sm md:text-base font-bold uppercase tracking-wider  md:mb-2 text-white -mt-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-[12px] sm:text-sm md:text-base leading-relaxed -mt-1 mb-4">
                        {feature.description}
                      </p>
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
