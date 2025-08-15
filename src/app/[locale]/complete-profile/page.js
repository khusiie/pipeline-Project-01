"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";

export default function CompleteProfile() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const completeSignup = async () => {
      // Get saved data from localStorage
      const name = localStorage.getItem("signup_name");
      const email = localStorage.getItem("signup_email");
      const phone = localStorage.getItem("signup_phone");
      const role = localStorage.getItem("signup_role");

      // Get current authenticated user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        alert("Session not found. Please sign up again.");
        router.push("/signup");
        return;
      }

      // Insert into profile table
      const { error: insertError } = await supabase
        .from("profile")
        .insert([{
          id: user.id,
          name,
          email,
          phone,
          role,
        }]);

      if (insertError) {
        alert("Error creating profile: " + insertError.message);
        return;
      }

      // Clear localStorage
      localStorage.removeItem("signup_name");
      localStorage.removeItem("signup_email");
      localStorage.removeItem("signup_phone");
      localStorage.removeItem("signup_role");

      alert("Signup complete!");
      router.push("/");
    };

    completeSignup().finally(() => setLoading(false));
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {loading ? <p>Finalizing your signup...</p> : null}
    </div>
  );
}
