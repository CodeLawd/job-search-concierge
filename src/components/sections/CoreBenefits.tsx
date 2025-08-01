"use client"
import { motion } from "motion/react"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"

export function CoreBenefits() {
  const benefits = [
    {
      title: "Tailored CV & LinkedIn Optimization",
      desc: "Professional makeover that gets you noticed by top employers",
    },
    {
      title: "Hands-Off Application Tracking",
      desc: "We manage the entire application process while you stay focused",
    },
    {
      title: "Confidence & Negotiation Coaching",
      desc: "Expert guidance to maximize your offer and career growth",
    },
    {
      title: "Global Market Expertise",
      desc: "Deep knowledge of tech markets across US, Canada, UK, and Nigeria",
    },
    {
      title: "Success-Based Options Available",
      desc: "Pay only when you land your dream job with our success-fee model",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Why Choose Our Concierge Service?</h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <CheckCircle className="h-6 w-6 text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-slate-400">{benefit.desc}</p>
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
            <ParallaxSection offset={20}>
              <div className="relative rounded-2xl overflow-hidden glow">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional team collaboration"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </ParallaxSection>
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-r from-teal-500/80 to-blue-500/80 text-white p-6 rounded-xl backdrop-blur-sm border border-slate-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold">30-60 Days</div>
              <div className="text-sm opacity-90">Average Time to Offer</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}