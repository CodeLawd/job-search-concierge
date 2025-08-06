"use client";
import { motion } from "motion/react";
import { ArrowRight, ArrowUp } from "lucide-react";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { useState, useEffect } from "react";

export function StickyCTA() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {showBackToTop && (
        <motion.button
          className="bg-slate-800 w-fit hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all ml-auto duration-300"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <CalendlyPopupButton
          className="bg-teal-500 flex items-center hover:bg-teal-600 text-white shadow-lg px-6 py-3 rounded-lg font-semibold transition-all duration-300 glow-teal"
          url="https://calendly.com/your-calendly-username/consultation"
        >
          Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
        </CalendlyPopupButton>
      </motion.div>
    </div>
  );
}
