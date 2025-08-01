"use client";
import { motion } from "motion/react";
import { Shield, Globe } from "lucide-react";
import Image from "next/image";
import { ParallaxSection } from "@/components/parallax-section";

export function AboutUs() {
  const highlights = [
    { icon: Shield, title: "Trusted Process", desc: "Proven methodology" },
    { icon: Globe, title: "Global Reach", desc: "4 key markets" },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Choose CareerConcierge?
            </h2>
            <p className="text-lg text-slate-400 mb-6">
              Founded by former tech executives and HR leaders from Google,
              Microsoft, and top startups, we understand the unique challenges
              of the global tech job market.
            </p>
            <p className="text-lg text-slate-400 mb-8">
              Our team combines deep industry knowledge with proven recruitment
              strategies, delivering personalized support that transforms your
              job search from stressful to successful.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-slate-900/50 p-6 rounded-xl border border-slate-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                  <div className="font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="text-sm text-slate-400">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ParallaxSection offset={15}>
              <div className="relative rounded-2xl overflow-hidden glow">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Our professional team"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </ParallaxSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
