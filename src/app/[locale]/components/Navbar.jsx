"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Logo from "../../../../public/logo.svg";
import cancel from "../../../../public/cancel.svg";
import Image2 from "../../../../public/Image2.png";
import menu from "../../../../public/menu-11.png";
import { FaChevronDown } from "react-icons/fa";

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
  const [scrollTarget, setScrollTarget] = useState(null);
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
    setIsMobileMenuOpen((prev) => !prev);
  };

useEffect(() => {
  document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

  // NEW: Scroll to target section after menu is closed
  if (!isMobileMenuOpen && scrollTarget) {
    const el = document.getElementById(scrollTarget);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setScrollTarget(null); // reset target
  }
}, [isMobileMenuOpen, scrollTarget]);


  return (
    <>
      <nav className="md:px-0 mx-auto fixed top-6 lg:top-6  left-0 right-0 z-50 s lg:px-4 px-2">
        <div className="lg:rounded-[50px] rounded-2xl  backdrop-blur text-white border border-[#ffffff33] shadow-[0_0_0.5px_1px_rgba(255,255,255,0.15)]">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-between items-center px-12 py-4  lg:px-[15px] lg:py-[12px]">
            <div className="flex items-center py-1 space-x-2">
              <Image src={Logo} alt="logo" width={120} height={40} />
            </div>
            <ul className="flex text-[12px] space-x-4 uppercase tracking-wider">
              {[
                { id: "home", label: t("navigation.home") },
                { id: "promoter", label: t("navigation.collection") },
                { id: "challenger", label: t("navigation.services") },
                { id: "reservespot", label: t("navigation.news") },
                { id: "howitworks", label: t("navigation.pricing") },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      } else {
                        console.warn(`${link.id} section not found in DOM`);
                      }
                    }}
                    className="text-white hover:border-b-3 hover:border-lime-400 uppercase tracking-wider"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
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
                  onClick={() => {
                    const el = document.getElementById("signup");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    } else {
                      console.warn("Signup section not found in DOM");
                    }
                  }}
                  className="flex items-center gap-3 px-4 py-2 bg-[#C6F812] text-[#1D4E00] rounded-sm font-bold text-medium uppercase tracking-wide hover:bg-lime-400 transition duration-200"
                  style={{
                    boxShadow: `
      inset 0 2px 4px rgba(0, 0, 0, 0.3),
      0 4px 15px rgba(0, 0, 0, 0.2)
    `,
                  }}
                >
                  {t("navigation.joinToday")}
                  <span className="p-1.5 md:p-0.5 rounded-md flex items-center justify-center">
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
          <div className="flex lg:hidden items-center justify-between px-4 py-3 mx-auto">
            {/* Logo */}
            <div className="flex items-center h-full">
              <Image
                src={Logo}
                alt="logo"
                className="h-[26px] w-auto object-contain"
              />
            </div>

            {/* Mobile Menu Icon */}
            <button onClick={toggleMobileMenu} className="h-[24px] w-[24px]">
              <Image
                src={isMobileMenuOpen ? cancel : menu} // swap image based on state
                alt={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                className="h-full w-full object-contain transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40  bg-opacity-50 backdrop-blur-sm">
          <div className="fixed top-24 left-4 right-4  bg-[#3A3A3A]  backdrop-blur-md rounded-[24px] border border-[#FFFFFF20] p-6">
            {/* Mobile Navigation Links */}
            <ul className="space-y-6 text-center">
              {[
                { id: "home", label: t("navigation.home") },
                { id: "promoter", label: t("navigation.collection") },
                { id: "challenger", label: t("navigation.services") },
                { id: "reservespot", label: t("navigation.news") },
                { id: "howitworks", label: t("navigation.pricing") },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setScrollTarget(link.id); // NEW: store target section
                      setIsMobileMenuOpen(false); // close menu first
                    }}
                    className="inline-block text-white text-lg uppercase tracking-wider border-b-2 border-transparent hover:border-lime-500 active:border-lime-500 focus:border-lime-500 transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Language Selector - Updated Design */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 px-2 py-1 rounded-lg bg-[#FFFFFF20] backdrop-blur-sm   hover:bg-[#FFFFFF25]  transition-all duration-200 shadow-lg"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full  bg-white/10">
                    <Image
                      src={selectedLanguage.logo}
                      alt={selectedLanguage.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-white font-medium text-sm min-w-[50px] text-left border border-white/30 rounded px-2 py-0.5">
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
                  <div
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                  bg-[#2B2B2B] backdrop-blur-md rounded-[16px] border border-[#FFFFFF20] 
                  overflow-hidden min-w-[180px] shadow-lg 
                  max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FFFFFF20] 
                   transition-colors duration-150 text-left text-white"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
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
