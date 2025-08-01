"use client";

import type React from "react";

import { useEffect } from "react";
import { motion } from "motion/react";

interface CalendlyPopupButtonProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
  prefill?: Record<string, unknown>;
  utm?: Record<string, string>;
}

export function CalendlyPopupButton({
  children,
  url = "https://calendly.com/your-calendly-username/consultation",
  className = "",
  prefill = {},
  utm = {
    utmCampaign: "Job Search Concierge",
    utmSource: "website",
    utmMedium: "consultation_booking",
  },
}: CalendlyPopupButtonProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      (
        window.Calendly as {
          initInlineWidget: (options: {
            url: string;
            prefill?: Record<string, unknown>;
            utm?: Record<string, string>;
          }) => void;
        }
      ).initInlineWidget({
        url: url,
        prefill: prefill,
        utm: utm,
      });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

// Extend global Window interface for popup
// declare global {
//   interface Window {
//     Calendly?: {
//       initInlineWidget: (options: {
//         url: string;
//         parentElement: HTMLElement | null;
//         prefill?: Record<string, any>;
//         utm?: Record<string, string>;
//       }) => void;
//       initPopupWidget: (options: {
//         url: string;
//         prefill?: Record<string, any>;
//         utm?: Record<string, string>;
//       }) => void;
//     };
//   }
// }
