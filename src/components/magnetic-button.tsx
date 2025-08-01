"use client";

import type React from "react";

import { motion } from "motion/react";
import { type ReactNode, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "default" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  size = "default",
  variant = "default",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      style={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 5 }}
    >
      <Button
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        onClick={onClick}
        size={size}
        variant={variant}
        className={className}
      >
        {children}
      </Button>
    </motion.div>
  );
}
