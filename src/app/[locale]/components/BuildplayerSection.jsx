import Image from "next/image";
import star from "../../../../public/assests/star.svg";
import buildplayer from "../../../../public/assests/buildplayer.png";
import buildplayer1 from "../../../../public/assests/buildplayer/frame1.png";
import helmet from "../../../../public/assests/buildplayer/cricketHelmet.svg";

export default function BuildplayerSection() {
  return (
    <section className="text-center px-0 sm:px-4  sm:py-10 relative bg-[#121212] text-white">
      {/* Background Star */}
   <hr
  className="
    w-4/5 md:max-w-2xl
    mx-auto
   
    mb-10
    border-0
    h-0.5
    bg-gradient-to-r from-[#C6F812] via-[#d9ff00] to-[#C6F812]
    rounded-full
    shadow-[0_0_20px_1px_#C6F812]
  "
/>




      <div className="relative z-10 mt-8 sm:mt-16 lg:mt-30">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 -z-10">
  <Image
    width={400}
    height={400}
    className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]"
    src={star}
    alt="star"
  />
</div>

        <h2 className="text-[12px] sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium uppercase tracking-widest px-2 text-white">
          This isn't just another fantasy platform
        </h2>
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[140px] font-extrabold my-2 sm:my-4 text-white">
          THIS IS PIPELINE
        </h1>
        <p className="uppercase text-[12px] sm:text-base md:text-xl lg:text-2xl xl:text-[40px] tracking-widest px-2 text-white">
          Built by players – for players.
        </p>
      </div>

      <div className="mt-6 sm:mt-8 flex justify-center px-0 sm:px-2">
        <Image
          src={buildplayer}
          alt="Pipeline Cricket Player"
          className="shadow-lg w-full h-auto sm:max-w-4xl"
        />
      </div>

  <section className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-0 sm:px-4 py-0 sm:py-8 max-w-6xl mx-auto gap-6 lg:gap-12">
  {/* Image */}
  <div className="flex justify-center lg:justify-end">
    <Image
      width={300}
      height={300}
      className="w-full h-auto sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-none sm:rounded-xl"
      src={buildplayer1}
      alt="Your Brand Banner"
    />
  </div>

  {/* Text */}
  <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6">
    <h3 className="text-left text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-snug sm:leading-snug lg:leading-[3rem] mb-4 sm:mb-6 ml-3 sm:ml-0">
      We will not blow your <br className="hidden sm:block" />
      <span className="inline-block mt-1">money on IPL ads, and</span> <br className="hidden sm:block" />
      <span className="inline-block mt-1">team sponsorships,</span> <br className="hidden sm:block" />
      <span className="inline-block mt-1">rather we:</span>
    </h3>

    <ul className="space-y-6 sm:space-y-4 text-left mx-6 sm:ml-0">
      <li className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg sm:rounded-lg">
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
    </section>
  );
}
