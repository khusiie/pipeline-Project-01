import Image from "next/image";
export default function FeatureSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-16 max-w-6xl mx-auto">
      <div>
        <Image
        width={100}
        height={100}
          src="/images/pipeline-stadium.png"
          alt="Your Brand Banner"
          className="rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">
          We will not blow your money on IPL ads, and team sponsorships, rather we:
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔️</span>
            Reward you with real Pipe Tokens
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔️</span>
            Let you monetize your skill legally
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔️</span>
            Grow the winner payout % from 12–15% to 35–40%
          </li>
        </ul>
      </div>
    </section>
  );
}
