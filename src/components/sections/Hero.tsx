"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Globe, Sparkles, Calendar } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animated-counter";
import { MagneticButton } from "@/components/magnetic-button";
import { ParallaxSection } from "@/components/parallax-section";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative bg-slate-950 text-white py-20 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                  <Sparkles className="h-3 w-3 mr-1" /> Serving Tech
                  Professionals Globally
                </Badge>
              </motion.div>
              <motion.h1
                className="text-4xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Your Personal Job Search{" "}
                <span className="gradient-text">Concierge</span>
              </motion.h1>
              <motion.p
                className="text-xl text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                End-to-end support for busy professionals—get expert help, land
                your dream role, and thrive. Stress-free tech career moves
                across the US, Canada, UK, and Nigeria.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <MagneticButton
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-sm glow-teal"
                onClick={onGetStarted}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </MagneticButton>
              <CalendlyPopupButton
                className="border-2 text-sm border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-6 py-3 bg-transparent rounded-lg font-semibold transition-all duration-300"
                url="https://calendly.com/your-calendly-username/consultation"
              >
                Book Free Consultation
              </CalendlyPopupButton>
            </motion.div>

            <motion.div
              className="flex items-center space-x-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <AnimatedCounter end={95} suffix="%" />
                <div className="text-sm text-slate-400">Success Rate</div>
              </div>
              <div className="text-center">
                <AnimatedCounter end={30} />
                <div className="text-sm text-slate-400">Days Avg. to Offer</div>
              </div>
              <div className="text-center">
                <AnimatedCounter end={500} suffix="+" />
                <div className="text-sm text-slate-400">
                  Professionals Placed
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ParallaxSection offset={30}>
              <div className="relative rounded-2xl overflow-hidden glow">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Diverse tech professionals celebrating career success"
                  width={500}
                  height={600}
                  className="rounded-2xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </ParallaxSection>
            <motion.div
              className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-teal-400" />
                <span className="font-semibold text-white">Global Reach</span>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                US • Canada • UK • Nigeria
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
