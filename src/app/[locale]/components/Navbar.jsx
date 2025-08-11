"use client";
import Image from "next/image";
import Image2 from "../../../../public/Image2.png";
import menu from "../../../../public/menu-11.png";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import hindilogo from "../../../../public/assests/language/hindi.svg";
import englishlogo from "../../../../public/assests/language/english.svg";
import bengalilogo from "../../../../public/assests/language/bengali.svg";
import telugulogo from "../../../../public/assests/language/telugu.svg";
import tamilogo from "../../../../public/assests/language/tamil.svg";
import gujratilogo from "../../../../public/assests/language/gujrati.svg";
import malayalamlogo from "../../../../public/assests/language/malayalam.svg";
import kannadalogo from "../../../../public/assests/language/kannada.svg";

export default function Navbar() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1] || "en";

  const langMap = {
    en: { code: "en", logo: englishlogo, name: t("languages.english") },
    hi: { code: "hi", logo: hindilogo, name: t("languages.hindi") },
    bn: { code: "bn", logo: bengalilogo, name: t("languages.bengali") },
    te: { code: "te", logo: telugulogo, name: t("languages.telugu") },
    ta: { code: "ta", logo: tamilogo, name: t("languages.tamil") },
    gu: { code: "gu", logo: gujratilogo, name: t("languages.gujarati") },
    ml: { code: "ml", logo: malayalamlogo, name: t("languages.malayalam") },
    kn: { code: "kn", logo: kannadalogo, name: t("languages.kannada") },
  };
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return langMap[currentLocale] || langMap["en"];
  });

  const languages = [
    { code: "en", logo: englishlogo, name: t("languages.english") },
    { code: "hi", logo: hindilogo, name: t("languages.hindi") },
    { code: "bn", logo: bengalilogo, name: t("languages.bengali") },
    { code: "te", logo: telugulogo, name: t("languages.telugu") },
    { code: "ta", logo: tamilogo, name: t("languages.tamil") },
    { code: "gu", logo: gujratilogo, name: t("languages.gujarati") },
    { code: "ml", logo: malayalamlogo, name: t("languages.malayalam") },
    { code: "kn", logo: kannadalogo, name: t("languages.kannada") },
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);

    // Get the path without locale
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

    // Navigate to the new locale
    router.push(`/${language.code}${pathWithoutLocale}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="md:px-0 mx-auto fixed top-6 lg:top-6  left-0 right-0 z-50 s lg:px-4 px-2">
        <div className="lg:rounded-[50px] rounded-2xl bg-[#0e0c0c15] backdrop-blur text-white border border-[#ffffff33] shadow-[0_0_0.5px_1px_rgba(255,255,255,0.15)]">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center px-12 py-4  lg:px-[15px] lg:py-[12px]">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="logo" width={120} height={40} />
            </div>
            <ul className="flex space-x-8 text-sm uppercase tracking-wider">
              <li>
                <a href="#" className="hover:border-b-3 hover:border-lime-400">
                  {t("navigation.home")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:border-b-3 hover:border-lime-400">
                  {t("navigation.collection")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:border-b-3 hover:border-lime-400">
                  {t("navigation.services")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:border-b-3 hover:border-lime-400">
                  {t("navigation.news")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:border-b-3 hover:border-lime-400">
                  {t("navigation.pricing")}
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-10">
              {/* Language Selector Dropdown - Updated Design */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 px-0.5 pr-1 py-0.5 rounded bg-[#FFFFFF20] backdrop-blur-sm border border-[#FFFFFF30] hover:bg-[#FFFFFF25] transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-[12px] bg-white/10">
                    <Image
                      src={selectedLanguage.logo}
                      alt={selectedLanguage.name}
                      width={20}
                      height={20}
                      className="w-9 h-9"
                    />
                  </div>
                  <span className="text-white font-medium text-sm min-w-[50px] text-left border p-1 rounded-[8px] w-[100px]">
                    {selectedLanguage.name}
                  </span>
                  <FaChevronDown
                    className={`text-white text-xs transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-[#000] backdrop-blur-md rounded-[20px] border border-[#FFFFFF20] overflow-hidden min-w-[180px] shadow-lg">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FFFFFF20] transition-colors duration-150 text-left"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                          <Image
                            src={language.logo}
                            alt={language.name}
                            width={16}
                            height={16}
                            className="w-7 h-7"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white">
                            {language.name}
                          </span>
                          <span className="text-xs text-gray-300">
                            {language.code}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-center font-satoshi">
                <button
                  className="flex items-center gap-3 px-4 py-2 bg-[#C6F812] text-[#1D4E00] rounded-sm font-bold text-medium uppercase tracking-wide hover:bg-lime-400 transition duration-200"
                  style={{
                    boxShadow: `
        inset 0 2px 4px rgba(0, 0, 0, 0.3),
        0 4px 15px rgba(0, 0, 0, 0.2)
      `,
                  }}
                >
                  {t("navigation.joinToday")}
                  <span className=" p-1.5 md:p-0.5 rounded-md flex items-center justify-center">
                    <Image
                      src={Image2}
                      alt="icon"
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center py-2 px-2">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="logo" width={100} height={32} />
            </div>
            <button onClick={toggleMobileMenu} className="w-8 h-8 p-1">
              <Image
                src={menu}
                alt="Mobile Menu Icon"
                className="w-full h-full object-contain transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="fixed top-24 left-4 right-4 bg-[#FFFFFF15] backdrop-blur-md rounded-[24px] border border-[#FFFFFF20] p-6">
            {/* Mobile Navigation Links */}
            <ul className="space-y-6 text-center">
              <li>
                <a
                  href="#"
                  className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition"
                >
                  Pricing
                </a>
              </li>
            </ul>

            {/* Mobile Language Selector - Updated Design */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FFFFFF20] backdrop-blur-sm border-2 border-[#FFFFFF50] hover:bg-[#FFFFFF25] hover:border-[#FFFFFF70] transition-all duration-200 shadow-lg"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                    <Image
                      src={selectedLanguage.logo}
                      alt={selectedLanguage.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-white font-medium text-sm min-w-[50px] text-left">
                    {selectedLanguage.name}
                  </span>
                  <FaChevronDown
                    className={`text-white text-xs transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-[#FFFFFF1A] backdrop-blur-md rounded-[16px] border border-[#FFFFFF20] overflow-hidden min-w-[180px] shadow-lg">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FFFFFF20] transition-colors duration-150 text-left text-white"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                          <Image
                            src={language.logo}
                            alt={language.name}
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {language.name}
                          </span>
                          <span className="text-xs text-gray-300">
                            {language.code}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
