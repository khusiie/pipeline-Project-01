// Add this to your SignUp component - Enhanced with auto-scroll to verification screen

"use client";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";

import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import Image from "next/image";
import Image2 from "../../../../public/Image2.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";
import Signupimage from "../../../../public/Signupimage.svg";
import tick from "../../../../public/tick.svg";

// Enhanced Toast Notification Component with different types
const ToastNotification = ({ message, type = 'default', isVisible, onHide }) => {
  useEffect(() => {
    if (isVisible) {
      const duration = type === 'success' ? 6000 : 4000; // Success messages stay longer
      const timer = setTimeout(onHide, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide, type]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-lime-300 to-lime-500 text-white border-lime-500 animate-pulse';
      case 'warning':
        return 'bg-[#C6FF00] text-black border-black animate-bounce';
      default:
        return 'bg-[#C6FF00] text-black border-black animate-bounce';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '🔥';
      case 'warning':
        return '🔥';
      default:
        return '🔥';
    }
  };

  return (
    <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg border-2 ${getToastStyles()}`}>
      <div className="flex items-center gap-3">
        <span className="text-xl">{getIcon()}</span>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-sm">{message}</span>
          {type === 'success' && (
            <span className="text-xs opacity-90">Registered successfully</span>
          )}
        </div>
      </div>
    </div>
  );
};


const LiveCounter = ({ spotsLeft, spotsLoading }) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border border-[#C6FF00]/30 rounded-lg p-4 mb-6">
      <div className="text-center">
        <p className="text-gray-300 text-sm mb-2">🔥 Limited Time Offer</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-white text-lg">Only</span>
          {spotsLoading ? (
            <div className="w-12 h-8 bg-gray-600 animate-pulse rounded"></div>
          ) : (
            <span className={`text-3xl font-bold ${spotsLeft <= 50 ? 'text-red-400 animate-pulse' : 'text-[#C6FF00]'}`}>
              {spotsLeft}
            </span>
          )}
          <span className="text-white text-lg">spots left!</span>
        </div>
        {spotsLeft <= 20 && (
          <p className="text-red-400 text-xs mt-2 animate-pulse">⚡ Almost sold out!</p>
        )}
      </div>
    </div>
  );
};

export default function SignUp() {
  const t = useTranslations("SignUp");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("promoter");

  // OTP flow states
  const [step, setStep] = useState("signup");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [error, setError] = useState("");

  // Real-time counter and notification states
  const [spotsLeft, setSpotsLeft] = useState(200);
  const [spotsLoading, setSpotsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("default");
  const [userRegistrationNumber, setUserRegistrationNumber] = useState(null);

  // Add refs for auto-scrolling
  const verifyScreenRef = useRef(null);
  const successScreenRef = useRef(null);

  // Function to show notification with type
  const showToast = (message, type = "default") => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
  };

  // Function to hide notification
  const hideToast = () => {
    setShowNotification(false);
  };

  // Auto-scroll function with smooth animation
  const scrollToScreen = (screenRef, delay = 300) => {
    setTimeout(() => {
      if (screenRef.current) {
        // Try multiple scroll methods for better cross-browser support
        if (screenRef.current.scrollIntoView) {
          screenRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',  // Center the element in the viewport
            inline: 'center' 
          });
        }
        
        // Fallback scroll method
        const elementTop = screenRef.current.offsetTop;
        const elementHeight = screenRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = elementTop - (windowHeight - elementHeight) / 2;
        
        window.scrollTo({
          top: Math.max(0, scrollTop),
          behavior: 'smooth'
        });
      }
    }, delay);
  };

  // Real-time counter setup
  useEffect(() => {
    const fetchSpotCount = async () => {
      try {
        setSpotsLoading(true);
        
        const { data, error } = await supabase
          .from('tickets_config')
          .select('remaining_tickets')
          .eq('id', 1)
          .single();

        if (!error && data) {
          setSpotsLeft(data.remaining_tickets);
          console.log('✅ Spots loaded:', data.remaining_tickets);
        } else {
          console.error('❌ Error loading spots:', error);
        }
      } catch (err) {
        console.error('❌ Error fetching spot count:', err);
      } finally {
        setSpotsLoading(false);
      }
    };

    // Load spots when component first loads
    fetchSpotCount();
    
    // Real-time updates
    const ticketsChannel = supabase
      .channel('signup-tickets-updates')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'tickets_config',
          filter: 'id=eq.1'
        },
        (payload) => {
          const newCount = payload.new.remaining_tickets;
          const oldCount = payload.old.remaining_tickets;
          
          console.log('🎟️ LIVE UPDATE! New spots:', newCount);
          setSpotsLeft(newCount);
          
          if (newCount < oldCount && step !== "verify") {
            const peopleJoined = oldCount - newCount;
            if (peopleJoined === 1) {
              showToast(`Someone just registered! ${newCount} spots left`, "warning");
            } else {
              showToast(`${peopleJoined} people just registered! ${newCount} spots left`, "warning");
            }
          }
        }
      )
      .subscribe((status) => {
        console.log('📡 Real-time connection:', status);
      });

    // Cleanup
    return () => {
      ticketsChannel.unsubscribe();
    };
  }, [step]);

  // Auto-scroll when step changes
  useEffect(() => {
    if (step === "verify") {
      scrollToScreen(verifyScreenRef, 500); // Scroll to verify screen after 500ms
    } else if (step === "success") {
      scrollToScreen(successScreenRef, 500); // Scroll to success screen after 500ms
    }
  }, [step]);

  // iOS keyboard handling
  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        document.documentElement.style.height = `${window.visualViewport.height}px`;
      }
    };

    const handleFocus = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        setTimeout(() => {
          e.target.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    };

    const handleBlur = () => {
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

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      setLoading(false);
      return;
    }

    // Validate phone number
    if (phone && !isValidPhoneNumber("+" + phone)) {
      setError("Please enter a valid phone number!");
      setLoading(false);
      return;
    }

    try {
      // Check if user already exists
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
      
      // Auto-scroll will be handled by useEffect
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

      if (data.user) {
        // Get the current spots count to calculate user's registration number
        const { data: ticketsData } = await supabase
          .from('tickets_config')
          .select('remaining_tickets, total_tickets')
          .eq('id', 1)
          .single();

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
          setError("Account created but profile setup failed. Please contact support.");
          setLoading(false);
          return;
        }

        // Calculate user's registration number and show success notification
        if (ticketsData) {
          const registrationNumber = (ticketsData.total_tickets || 200) - (ticketsData.remaining_tickets || 0) + 1;
          setUserRegistrationNumber(registrationNumber);
          
          // Show success notification immediately
          showToast(`Congratulations! #${registrationNumber}`, "success");
        }

        // Success!
        setStep("success");
        setLoading(false);
        
        // Auto-scroll will be handled by useEffect
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
    setUserRegistrationNumber(null);
    
    // Scroll back to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Success page with enhanced messaging
  if (step === "success") {
    return (
      <section 
        ref={successScreenRef}
        className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center font-clash relative overflow-hidden"
      >
        {/* Toast Notification - keep it visible on success page too */}
        <ToastNotification 
          message={notificationMessage}
          type={notificationType}
          isVisible={showNotification}
          onHide={hideToast}
        />

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
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
            <div className="flex-shrink-0">
              <img
                src="/tick.svg"
                alt="Success"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto"
              />
            </div>

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

  // OTP verification page with auto-scroll ref
  if (step === "verify") {
    const handleOTPChange = (index, value) => {
      if (!/^\d*$/.test(value)) return;

      const newOTP = otp.split("");
      newOTP[index] = value;
      const updatedOTP = newOTP.join("");
      setOtp(updatedOTP);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    };

    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        if (prevInput) prevInput.focus();
      }
    };

    return (
      <section 
        ref={verifyScreenRef}
        className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center px-4 py-4 font-clash relative overflow-hidden"
      >
        {/* Toast Notification */}
        <ToastNotification 
          message={notificationMessage}
          type={notificationType}
          isVisible={showNotification}
          onHide={hideToast}
        />

        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center bg-no-repeat mt-10 sm:mt-20 md:mt-24
                     mx-2 h-[75vh]
                     md:mx-0 md:w-full md:h-[120vh]"
            style={{
              backgroundImage: `url('/Signupimage.svg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

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
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
             {t("titleotp")}
            </h1>
            <p className="text-gray-300 text-sm mb-2 drop-shadow-md">
               {t("subtitle")}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-900/20 border border-red-500 rounded-md backdrop-blur-sm">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

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
             {loading ? t("button.verifying") : t("button.verify")}
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
              {t("footer.noCode")}{" "}
              <button
                onClick={handleResendOTP}
                disabled={resendCooldown > 0 || loading}
                className="text-[#C6FF00] hover:text-lime-300 font-medium text-sm disabled:text-gray-500 disabled:cursor-not-allowed underline drop-shadow-md ml-1"
              >
                {t("button.resend")}
              </button>
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Main signup form - OPTIMIZED FOR SMALLER DESKTOP LAYOUT
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
        minHeight: "100dvh",
        minHeight: "100svh",
      }}
    >
      {/* Toast Notification */}
      <ToastNotification 
        message={notificationMessage}
        type={notificationType}
        isVisible={showNotification}
        onHide={hideToast}
      />

      {/* TITLE SECTION - Smaller on desktop */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl mt-4 sm:mt-6 md:mt-8 mx-auto">
        <div className="text-center mb-6 sm:mb-8 lg:mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl pt-4 sm:pt-6 lg:pt-2 py-2 sm:py-3 lg:py-1 font-bold uppercase leading-tight">
            {t("title")}
          </h1>

          <div className="w-full overflow-x-auto">
            <div className="flex justify-center gap-3 sm:gap-6 lg:gap-4 mt-4 sm:mt-6 lg:mt-3 whitespace-nowrap">
              <button
                onClick={() => setSelected("promoter")}
                className="relative group"
              >
                <span
                  className={`inline-block 
                    px-3 sm:px-6 md:px-8 lg:px-6
                    py-1.5 sm:py-2.5 md:py-3 lg:py-2
                    text-xs sm:text-sm md:text-base lg:text-sm
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

              <button
                onClick={() => setSelected("challenger")}
                className="relative group"
              >
                <span
                  className={`inline-block 
                    px-3 sm:px-6 md:px-8 lg:px-6
                    py-1.5 sm:py-2.5 md:py-3 lg:py-2
                    text-xs sm:text-sm md:text-base lg:text-sm
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

      {/* FORM SECTION - Smaller max width for desktop */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto mt-6 sm:mt-8 lg:mt-4">
        {/* Live Counter Display */}
        <LiveCounter spotsLeft={spotsLeft} spotsLoading={spotsLoading} />

        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-md">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 sm:space-y-8 lg:space-y-6"
        >
          {/* Name */}
          <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-500 focus-within:border-[#C6FF00] transition-colors py-3 sm:py-4 lg:py-3">
            <label className="text-xs sm:text-sm lg:text-sm w-20 sm:w-28 lg:w-24 flex-shrink-0">
              {t("nameLabel")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("namePlaceholder")}
              required
              className="flex-1 bg-transparent focus:outline-none text-xs sm:text-sm lg:text-sm min-w-0 touch-manipulation"
              style={{ fontSize: "16px" }}
              autoComplete="name"
              autoCapitalize="words"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-500 focus-within:border-[#C6FF00] transition-colors py-3 sm:py-4 lg:py-3">
            <label className="text-xs sm:text-sm lg:text-sm w-20 sm:w-28 lg:w-24 flex-shrink-0">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              required
              className="flex-1 bg-transparent focus:outline-none text-xs sm:text-sm lg:text-sm min-w-0 touch-manipulation"
              style={{ fontSize: "16px" }}
              autoComplete="email"
              autoCapitalize="none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 border-b border-gray-500 focus-within:border-[#C6FF00] transition-colors py-3 sm:py-4 lg:py-3">
            <label className="text-xs sm:text-sm lg:text-sm w-20 sm:w-28 lg:w-24 whitespace-nowrap text-gray-300 flex-shrink-0">
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
                  fontSize: "16px",
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
              className="mt-8 mb-4 sm:mt-10 lg:mt-6 w-auto sm:w-auto inline-flex justify-center items-center gap-1.5 sm:gap-2 bg-[#C6FF00] text-[#1D4E00] font-medium py-3 sm:py-4 lg:py-3 px-6 sm:px-8 lg:px-6 rounded-md hover:bg-lime-300 transition text-sm sm:text-base lg:text-sm disabled:opacity-50 touch-manipulation"
            >
              {loading ? t("submitting") : t("submit")}
              <span className="p-0.5 md:p-1 lg:p-0.5 rounded-md flex items-center justify-center">
                <Image
                  src={Image2}
                  alt="icon"
                  className="w-5 h-5 sm:w-4 sm:h-4 lg:w-3 lg:h-3"
                />
              </span>
            </button>
          </div>
        </form>

        <hr
          className="
            max-w-2xl lg:max-w-xl
            mx-auto
            mt-20 sm:mt-12 md:mt-16 lg:mt-8
            mb-0 sm:mb-12 md:mb-16 lg:mb-8
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