"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";

export function StickyCTA() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <CalendlyPopupButton
        className="bg-teal-500 flex items-center hover:bg-teal-600 text-white shadow-lg px-6 py-3 rounded-lg font-semibold transition-all duration-300 glow-teal"
        url="https://calendly.com/your-calendly-username/consultation"
      >
        Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
      </CalendlyPopupButton>
    </motion.div>
  );
}
