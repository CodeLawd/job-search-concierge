"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface GradientCardProps {
  children: ReactNode;
  gradient?: string;
  className?: string;
}

export function GradientCard({
  children,
  gradient = "from-teal-500/20 to-blue-500/20",
  className = "",
}: GradientCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-[1px] ${className}`}
    >
      <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10">
        {children}
      </div>
    </motion.div>
  );
}
