"use client";
import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-slate-950 text-white border-b border-slate-800 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Briefcase className="h-8 w-8 text-teal-400" />
          <span className="text-xl font-bold">CareerConcierge</span>
        </motion.div>
        <nav className="hidden md:flex items-center space-x-8">
          {["How It Works", "Benefits", "Pricing", "Success Stories"].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            )
          )}
        </nav>
        <CalendlyPopupButton
          className="bg-teal-500 flex items-center hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          url="https://calendly.com/your-calendly-username/consultation"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book Free Consultation
        </CalendlyPopupButton>
      </div>
    </motion.header>
  );
}
