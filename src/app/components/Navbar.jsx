"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "EN",
    flag: "🇺🇸",
    name: "English"
  });

  const languages = [
    { code: "EN", flag: "🇺🇸", name: "English" },
    { code: "ES", flag: "🇪🇸", name: "Español" },
    { code: "FR", flag: "🇫🇷", name: "Français" },
    { code: "DE", flag: "🇩🇪", name: "Deutsch" },
    { code: "IT", flag: "🇮🇹", name: "Italiano" },
    { code: "PT", flag: "🇵🇹", name: "Português" },
    { code: "RU", flag: "🇷🇺", name: "Русский" },
    { code: "ZH", flag: "🇨🇳", name: "中文" },
    { code: "JA", flag: "🇯🇵", name: "日本語" },
    { code: "KO", flag: "🇰🇷", name: "한국어" }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="max-w-7xl mx-auto fixed top-6 left-0 right-0 z-50 px-4 md:px-0">
        <div className="rounded-[42px] bg-[#FFFFFF15] backdrop-blur text-white">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center px-12 py-4 lg:px-[30px] lg:py-[15px]">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="logo" width={120} height={40} />
            </div>
            <ul className="flex space-x-8 text-sm uppercase tracking-wider">
              <li><a href="#" className="hover:border-b-3 hover:border-lime-400">Home</a></li>
              <li><a href="#" className="hover:border-b-3 hover:border-lime-400">Collection</a></li>
              <li><a href="#" className="hover:border-b-3 hover:border-lime-400">Services</a></li>
              <li><a href="#" className="hover:border-b-3 hover:border-lime-400">News</a></li>
              <li><a href="#" className="hover:border-b-3 hover:border-lime-400">Pricing</a></li>
            </ul>
            <div className="flex items-center gap-10">
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center rounded-[15px] bg-[#FFFFFF10] transition-all duration-200 border border-[#FFFFFF20] overflow-hidden"
                >
                  <div className="flex items-center gap-2 bg-[#FFFFFF40] px-4 py-2 rounded-[20px] m-0.5">
                    <span className="text-lg">{selectedLanguage.flag}</span>
                  </div>
                  <div className="px-3 py-2">
                    <FaChevronDown 
                      className={`text-xs transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 right-0 bg-[#FFFFFF1A] backdrop-blur-md rounded-[16px] border border-[#FFFFFF20] overflow-hidden min-w-[180px] shadow-lg">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FFFFFF20] transition-colors duration-150 text-left"
                      >
                        <span className="text-lg">{language.flag}</span>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{language.code}</span>
                          <span className="text-xs text-gray-300">{language.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="flex gap-3 items-center bg-lime-400 text-black px-4 py-2 rounded-md hover:bg-lime-500 transition">
                Join Today 
                <FiArrowUpRight className="ml-1 bg-white rounded-md p-1 w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center px-6 py-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="logo" width={100} height={32} />
            </div>
            
            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
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
              <li><a href="#" className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition">Home</a></li>
              <li><a href="#" className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition">Collection</a></li>
              <li><a href="#" className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition">Services</a></li>
              <li><a href="#" className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition">News</a></li>
              <li><a href="#" className="block text-white text-lg uppercase tracking-wider hover:text-lime-400 transition">Pricing</a></li>
            </ul>

            {/* Mobile Language Selector */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center rounded-[15px] bg-[#FFFFFF10] transition-all duration-200 border border-[#FFFFFF20] overflow-hidden"
                >
                  <div className="flex items-center gap-2 bg-[#FFFFFF40] px-4 py-2 rounded-[20px] m-0.5">
                    <span className="text-lg">{selectedLanguage.flag}</span>
                  </div>
                  <div className="px-3 py-2">
                    <FaChevronDown 
                      className={`text-xs text-white transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
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
                        <span className="text-lg">{language.flag}</span>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{language.code}</span>
                          <span className="text-xs text-gray-300">{language.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Join Today Button */}
            <div className="mt-8 flex justify-center">
              <button className="flex gap-3 items-center bg-lime-400 text-black px-6 py-3 rounded-md hover:bg-lime-500 transition">
                Join Today 
                <FiArrowUpRight className="ml-1 bg-white rounded-md p-1 w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}