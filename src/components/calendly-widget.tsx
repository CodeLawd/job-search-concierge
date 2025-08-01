"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";

interface CalendlyWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}

export function CalendlyWidget({
  isOpen,
  onClose,
  url = "https://calendly.com/your-calendly-username/consultation",
}: CalendlyWidgetProps) {
  useEffect(() => {
    if (isOpen) {
      // Load Calendly script
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
        // Clean up script if needed
        const existingScript = document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]'
        );
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: document.getElementById("calendly-inline-widget"),
        prefill: {},
        utm: {
          utmCampaign: "Job Search Concierge",
          utmSource: "website",
          utmMedium: "consultation_booking",
        },
      });
    }
  }, [isOpen, url]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-slate-900 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] mx-4 overflow-hidden border border-white/10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-slate-800">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Book Your Free Consultation
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Let us discuss your career goals and how we can help
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-slate-300" />
          </button>
        </div>

        {/* Calendly Widget Container */}
        <div className="h-full pb-20">
          <div
            id="calendly-inline-widget"
            className="h-full w-full"
            data-url={url}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Declare Calendly global type
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: Record<string, unknown>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}
