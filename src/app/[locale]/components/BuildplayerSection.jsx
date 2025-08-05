import Image from "next/image";
import star from "../../../../public/assests/star.svg"
import buildplayer from "../../../../public/assests/buildplayer.png"
import buildplayer1 from "../../../../public/assests/buildplayer/frame1.png"
import helmet from "../../../../public/assests/buildplayer/cricketHelmet.svg"

export default function BuildplayerSection() {
  return (
    <section className="text-center px-4 py-6 sm:py-10 relative bg-[#000] text-white">
      {/* Background Star */}
     
      <hr className="bg-[#C6F812] text-[#C6F812] max-w-5xl mx-auto relative z-10" />
      <div className="relative z-10 mt-8 sm:mt-16 lg:mt-30">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 -z-10">
       <Image
       width={300}
       height={300}
       className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]"
       src={star}
       alt="star"
       />
      </div>
      <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-widest px-2 text-white">
        This isn't just another fantasy platform
      </h2>
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[140px] font-extrabold my-2 sm:my-4 text-white">
        THIS IS PIPELINE
      </h1>
      <p className="uppercase text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[40px] tracking-widest px-2 text-white">
        Built by players – for players.
      </p>
      </div>
      <div className="mt-6 sm:mt-8 flex justify-center px-2">
        <Image
          src={buildplayer}
          alt="Pipeline Cricket Player"
          className="rounded-lg shadow-lg max-w-full w-full max-w-4xl"
        />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 py-6 sm:py-8 max-w-6xl mx-auto gap-6 lg:gap-8">
      <div className="flex justify-center lg:justify-start">
        <Image
        width={300}
        height={300}
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-lg"
          src={buildplayer1}
          alt="Your Brand Banner"
        />
      </div>
      <div className="text-center lg:text-left">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-tight sm:leading-snug lg:leading-14 mb-4 sm:mb-6">
          We will not blow your <br className="hidden sm:block" /> money on IPL ads, and <br className="hidden sm:block" /> team sponsorships, <br className="hidden sm:block" /> rather we:
        </h3>
        <ul className="space-y-3 sm:space-y-4 text-left">
          <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
           <Image
           width={30}
           height={30}
           className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0"
           src={helmet}
           alt="helmet"
           />
            <span>Reward you with real Pipe Tokens</span>
          </li>
          <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
          <Image
           width={30}
           height={30}
           className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0"
           src={helmet}
           alt="helmet"
           />
            <span>Let you monetize your skill legally</span>
          </li>
          <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
          <Image
           width={30}
           height={30}
           className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0"
           src={helmet}
           alt="helmet"
           />
            <span>Grow the winner payout % from 12–15% to 35–40%</span>
          </li>
        </ul>
        
      </div>
      
    </section>
         
      <hr className="bg-[#C6F812] text-[#C6F812] max-w-5xl mx-auto mt-10 relative z-10" />
    </section>
  );
}