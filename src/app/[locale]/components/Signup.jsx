"use client";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";

import React, { useState, useEffect } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import Image from "next/image";
import Image2 from "../../../../public/Image2.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";
import Signupimage from "../../../../public/Signupimage.svg";
import tick from "../../../../public/tick.svg";

export default function SignUp() {
  const t = useTranslations("SignUp");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("promoter");

  // New states for OTP flow
  const [step, setStep] = useState("signup"); // "signup" | "verify" | "success"
  const [resendCooldown, setResendCooldown] = useState(0);
  const [error, setError] = useState("");
  // iOS keyboard handling
  useEffect(() => {
    const handleResize = () => {
      // Force a reflow to prevent layout shifts on iOS
      if (window.visualViewport) {
        document.documentElement.style.height = `${window.visualViewport.height}px`;
      }
    };

    const handleFocus = (e) => {
      // Prevent zoom on iOS
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        setTimeout(() => {
          e.target.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    };

    const handleBlur = () => {
      // Reset document height when keyboard closes
      document.documentElement.style.height = "";
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    }

    document.addEventListener("focusin", handleFocus);
    document.addEventListener("focusout", handleBlur);

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("focusout", handleBlur);
      document.documentElement.style.height = "";
    };
  }, []);

  // Start resend cooldown timer
  const startResendCooldown = () => {
    setResendCooldown(60);
    const timer = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // 1️⃣ Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      setLoading(false);
      return;
    }

    // 2️⃣ Validate phone number
    if (phone && !isValidPhoneNumber("+" + phone)) {
      setError("Please enter a valid phone number!");
      setLoading(false);
      return;
    }

    try {
      // 3️⃣ Check if user already exists in your profile table
      const { data: existingUser, error: fetchError } = await supabase
        .from("profile")
        .select("id")
        .eq("email", email)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        setError("Error checking email: " + fetchError.message);
        setLoading(false);
        return;
      }

      if (existingUser) {
        setError("This email is already registered!");
        setLoading(false);
        return;
      }

      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          data: {
            name: name,
            phone: phone,
            user_type: selected,
          },
        },
      });

      if (otpError) {
        console.error("Error sending email OTP:", otpError.message);
        setError("Error sending verification email: " + otpError.message);
        setLoading(false);
        return;
      }

      // Success - move to OTP verification step
      setStep("verify");
      startResendCooldown();
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const handleOTPVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      setLoading(false);
      return;
    }

    try {
      // Verify the OTP
      const { data, error: verifyError } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });

      if (verifyError) {
        console.error("OTP verification error:", verifyError.message);
        setError("Invalid OTP. Please try again.");
        setLoading(false);
        return;
      }

      // OTP verified successfully, now create profile
      if (data.user) {
        const { error: profileError } = await supabase.from("profile").insert({
          id: data.user.id,
          email: email,
          name: name,
          phone: phone ? "+" + phone : null,
          user_type: selected,
          created_at: new Date().toISOString(),
        });

        if (profileError) {
          console.error("Error creating profile:", profileError.message);
          setError(
            "Account created but profile setup failed. Please contact support."
          );
          setLoading(false);
          return;
        }

        // Success!
        setStep("success");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong during verification. Please try again.");
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (resendCooldown > 0) return;

    setLoading(true);
    setError("");

    try {
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          data: {
            name: name,
            phone: phone,
            user_type: selected,
          },
        },
      });

      if (otpError) {
        setError("Error resending OTP: " + otpError.message);
      } else {
        startResendCooldown();
        // Clear any existing error
        setError("");
      }
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
    }

    setLoading(false);
  };

  const resetForm = () => {
    setStep("signup");
    setOtp("");
    setError("");
    setResendCooldown(0);
  };
  if (step === "success") {
    return (
      <section className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center font-clash relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center bg-no-repeat mt-10 sm:mt-20 md:mt-24
                     mx-2 h-[75vh]
                     md:mx-0 md:w-full md:h-[120vh]"
            style={{
              backgroundImage: `url('/Signupimage.svg')`,
            }}
          />
        </div>

        {/* Cross button in background image */}
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="absolute top-20 right-6 sm:top-24 sm:right-8 md:top-28 md:right-10 text-white hover:text-gray-300 transition-colors z-10"
        >
          <svg
            width="24"
            height="24"
            className="sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
            {/* Tick Icon */}
            <div className="flex-shrink-0">
              <img
                src="/tick.svg"
                alt="Success"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto"
              />
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
                You're In! Welcome to{" "}
                <span className="text-[#C6FF00]">PIPELINE</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (step === "verify") {
    // Handle OTP input change for individual boxes
    const handleOTPChange = (index, value) => {
      if (!/^\d*$/.test(value)) return; // Only allow digits

      const newOTP = otp.split("");
      newOTP[index] = value;
      const updatedOTP = newOTP.join("");
      setOtp(updatedOTP);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    };

    // Handle backspace to focus previous input
    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        if (prevInput) prevInput.focus();
      }
    };

    return (
      <section className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center px-4 py-4 font-clash relative overflow-hidden">
        {/* Background Image with same styling as success section */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center bg-no-repeat mt-10 sm:mt-20 md:mt-24
                     mx-2 h-[75vh]
                     md:mx-0 md:w-full md:h-[120vh]"
            style={{
              backgroundImage: `url('/Signupimage.svg')`,
            }}
          />
          {/* Additional gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Close button - matching success section positioning */}
        <button
          onClick={resetForm}
          className="absolute top-20 right-6 sm:top-24 sm:right-8 md:top-28 md:right-10 text-white hover:text-gray-300 transition-colors z-10"
        >
          <svg
            width="24"
            height="24"
            className="sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-full max-w-md mx-auto text-center relative z-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              OTP Verification
            </h1>
            <p className="text-gray-300 text-sm mb-2 drop-shadow-md">
              Enter the verification code we just sent to
              <br />
              your email address
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-900/20 border border-red-500 rounded-md backdrop-blur-sm">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* OTP Input Boxes */}
          <div className="mb-8">
            <div className="flex justify-center gap-3 mb-6">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={otp[index] || ""}
                  onChange={(e) => handleOTPChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 bg-black/40 backdrop-blur-sm border-2 border-lime-300 rounded-sm text-center text-xl font-mono text-white focus:border-[#C6FF00] focus:outline-none focus:bg-black/60 transition-all"
                  maxLength={1}
                  autoComplete="off"
                />
              ))}
            </div>

            {/* Resend Timer */}
            <p className="text-gray-400 text-sm mb-4 drop-shadow-md">
              {resendCooldown > 0
                ? `Resend OTP in ${resendCooldown}s`
                : "Resend OTP in 60s"}
            </p>
          </div>

          <div className="text-center mb-6">
            <button
              onClick={handleOTPVerification}
              disabled={loading || otp.length !== 6}
              className="inline-flex bg-[#C6FF00] text-[#1D4E00] font-semibold py-3 px-8 rounded-md hover:bg-lime-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              {loading ? "VERIFYING..." : "VERIFY"}
              {!loading && (
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm drop-shadow-md">
              Didn't receive a code?{" "}
              <button
                onClick={handleResendOTP}
                disabled={resendCooldown > 0 || loading}
                className="text-[#C6FF00] hover:text-lime-300 font-medium text-sm disabled:text-gray-500 disabled:cursor-not-allowed underline drop-shadow-md ml-1"
              >
                Resend
              </button>
            </p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section
      id="signup"
      className="
min-h-screen
bg-[#121212] text-white 
flex flex-col items-center justify-center 
px-3 sm:px-6 lg:px-8 
font-clash
relative
safe-area-inset
"
      style={{
        minHeight: "100vh",
        minHeight: "100dvh", // Dynamic viewport height for iOS
        minHeight: "100svh", // Small viewport height for mobile
      }}
    >
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-7xl mt-4 sm:mt-6 md:mt-8 mx-auto">
        <div className="text-center mb-6 sm:mb-10 lg:mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl pt-4 sm:pt-6 lg:text-8xl xl:text-8xl py-2 sm:py-3 2xl:text-[10rem] font-bold uppercase leading-tight">
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

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto mt-6 sm:mt-8 md:mt-10">
        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-md">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          {/* Name */}
          <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-500 focus-within:border-[#C6FF00] transition-colors py-3 sm:py-4 md:py-5">
            <label className="text-xs sm:text-sm lg:text-base w-20 sm:w-28 flex-shrink-0">
              {t("nameLabel")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("namePlaceholder")}
              required
              className="flex-1 bg-transparent focus:outline-none text-xs sm:text-sm lg:text-base min-w-0 touch-manipulation"
              style={{ fontSize: "16px" }}
              autoComplete="name"
              autoCapitalize="words"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-500 focus-within:border-[#C6FF00] transition-colors py-3 sm:py-4 md:py-5">
            <label className="text-xs sm:text-sm lg:text-base w-20 sm:w-28 flex-shrink-0">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              required
              className="flex-1 bg-transparent focus:outline-none text-xs sm:text-sm lg:text-base min-w-0 touch-manipulation"
              style={{ fontSize: "16px" }}
              autoComplete="email"
              autoCapitalize="none"
            />
          </div>

          {/* Phone No. */}
          <div className="flex items-center gap-4 border-b border-gray-500 focus-within:border-[#C6FF00] transition-colors py-3 sm:py-4 md:py-5">
            <label className="text-xs sm:text-sm lg:text-base w-20 sm:w-28 whitespace-nowrap text-gray-300 flex-shrink-0">
              {t("phoneLabel")}
            </label>
            <div className="flex-1 min-w-0">
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
                  fontSize: "16px", // Changed from 14px to 16px
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
                  transform: "scale(1.4)",
                  transformOrigin: "center",
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
                inputProps={{
                  autoComplete: "tel",
                  style: { fontSize: "16px" },
                }}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="mt-8 mb-4 sm:mt-10 lg:mt-12 w-auto sm:w-auto inline-flex justify-center items-center gap-1.5 sm:gap-2 bg-[#C6FF00] text-[#1D4E00] font-medium py-3 sm:py-4 lg:py-4 px-6 sm:px-8 lg:px-10 rounded-md hover:bg-lime-300 transition text-sm sm:text-base lg:text-lg disabled:opacity-50 touch-manipulation"
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
  mt-20 sm:mt-12 md:mt-16
  mb-0 sm:mb-12 md:mb-16
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