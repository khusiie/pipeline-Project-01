"use client";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import React, { useState } from "react";
import { supabase } from "../../../../lib/supabaseClient"; 
import Image from "next/image";
import Image2 from "../../../../public/Image2.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";


export default function SignUp() {
  const t = useTranslations("SignUp");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("promoter");

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  // 1️⃣ Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    setLoading(false);
    return;
  }

  try {
    // 2️⃣ Optional: Check if user already exists in your profile table
    const { data: existingUser, error: fetchError } = await supabase
      .from("profile")
      .select("id")
      .eq("email", email)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      alert("Error checking email: " + fetchError.message);
      setLoading(false);
      return;
    }

    if (existingUser) {
      alert("This email is already registered!");
      setLoading(false);
      return;
    }

    // 3️⃣ Send email OTP
    const { error: otpError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo:  `${process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_URL}`,
      },
    });

    if (otpError) {
      console.error("Error sending email OTP:", otpError.message);
      alert("Error sending verification email: " + otpError.message);
      setLoading(false);
      return;
    }

    alert("We've sent you a confirmation email. Please check your inbox!");
    setLoading(false);
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
    setLoading(false);
  }
};



  return (
    <section
      id="signup"
      className="
        min-h-[50vh] sm:min-h-[70vh] md:min-h-[95vh]  lg:min-h-[85vh]
        bg-[#121212] text-white 
        flex flex-col items-center justify-center 
        px-3 sm:px-6 lg:px-8 
        font-clash pt-16
      "
    >
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-7xl mt-2 mx-auto">
        <div className="text-center mb-6 sm:mb-10 lg:mb-12">
          <h1 className="text-5xl sm:text-5xl md:text-6xl pt-2 lg:text-7xl xl:text-7xl py-1 2xl:text-[9rem] font-bold uppercase leading-tight">
            {t("title")}
          </h1>

          <div className="w-full overflow-x-auto">
            <div className="flex justify-center gap-3 sm:gap-6 mt-4 sm:mt-6 whitespace-nowrap">
              {/* PROMOTER Button */}
              <button
                onClick={() => setSelected("promoter")}
                className="relative group"
              >
                <span
                  className={`inline-block 
                    px-3 sm:px-6 md:px-8 
                    py-1.5 sm:py-2.5 md:py-3 
                    text-xs sm:text-sm md:text-base 
                    font-bold tracking-widest 
                    transform -skew-x-[20deg] 
                    rounded-md transition-all duration-300 
                    ${
                      selected === "promoter"
                        ? "bg-[#C6FF00] text-black shadow-lg"
                        : "bg-transparent text-[#C6FF00] border border-[#C6FF00] hover:bg-[#C6FF00] hover:text-black"
                    }`}
                >
                  <span className="block transform skew-x-[20deg]">
                    {t("promoter")}
                  </span>
                </span>
              </button>

              {/* CHALLENGER Button */}
              <button
                onClick={() => setSelected("challenger")}
                className="relative group"
              >
                <span
                  className={`inline-block 
                    px-3 sm:px-6 md:px-8 
                    py-1.5 sm:py-2.5 md:py-3 
                    text-xs sm:text-sm md:text-base 
                    font-bold tracking-widest 
                    transform -skew-x-[20deg] 
                    rounded-md transition-all duration-300 
                    ${
                      selected === "challenger"
                        ? "bg-[#C6FF00] text-black shadow-lg"
                        : "bg-transparent text-[#C6FF00] border border-[#C6FF00] hover:bg-[#C6FF00] hover:text-black"
                    }`}
                >
                  <span className="block transform skew-x-[20deg]">
                    {t("challenger")}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-3 sm:space-y-6 lg:space-y-8"
        >
          {/* Name */}
          <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-500 focus-within:border-[#C6FF00] transition-colors py-1.5 sm:py-3">
            <label className="text-xs sm:text-sm lg:text-base w-20 sm:w-28">
              {t("nameLabel")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("namePlaceholder")}
              required
              className="flex-1 bg-transparent focus:outline-none text-xs sm:text-sm lg:text-base"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-500 focus-within:border-[#C6FF00] transition-colors py-1.5 sm:py-3">
            <label className="text-xs sm:text-sm lg:text-base w-20 sm:w-28">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              required
              className="flex-1 bg-transparent focus:outline-none text-xs sm:text-sm lg:text-base"
            />
          </div>

          {/* Phone No. */}

          <div className="flex items-center gap-4 border-b border-gray-500 focus-within:border-[#C6FF00] transition-colors py-2">
            <label className="text-xs sm:text-sm lg:text-base w-20 sm:w-28 whitespace-nowrap text-gray-300">
              {t("phoneLabel")}
            </label>

            <div className="flex-1">
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(value) => setPhone(value)}
                placeholder={t("phonePlaceholder")}
                inputStyle={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: "white",
                  paddingLeft: "52px",
                }}
                buttonStyle={{
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  margin: 0,
                  position: "absolute",
                  left: "0",
                  transform: "scale(1.4)", // increase size
                  transformOrigin: "center", // keep it aligned
                }}
                containerStyle={{
                  width: "100%",
                  position: "relative",
                }}
                dropdownStyle={{
                  width: "auto",
                  maxWidth: "300px",
                  minWidth: "200px",
                  backgroundColor: "#121212",
                  border: "1px solid #333",
                  color: "white",
                }}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="mt-4 mb-2 sm:mt-6 lg:mt-8 w-auto sm:w-auto inline-flex justify-center items-center gap-1.5 sm:gap-2 bg-[#C6FF00] text-[#1D4E00] font-medium py-1.5 sm:py-3 lg:py-3 px-3 sm:px-6 lg:px-8 rounded-md hover:bg-lime-300 transition text-xs sm:text-sm lg:text-base"
            >
              {loading ? t("submitting") : t("submit")}
              <span className="p-0.5 md:p-1 rounded-md flex items-center justify-center">
                <Image
                  src={Image2}
                  alt="icon"
                  className="w-5 h-5 sm:w-4 sm:h-4 md:w-4 md:h-4"
                />
              </span>
            </button>
          </div>
        </form>

        <hr
          className="
            max-w-2xl
            mx-auto
            mt-6 sm:mt-10
            mb-6 sm:mb-10
            border-0
            h-0.5
            bg-gradient-to-r from-[#C6F812] via-[#d9ff00] to-[#C6F812]
            rounded-full
            shadow-[0_0_20px_1px_#C6F812]
          "
        />
      </div>
    </section>
  );
}
