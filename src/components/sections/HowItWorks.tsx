"use client"
import { motion } from "motion/react"
import { Users, Target, MessageSquare, Trophy } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"

export function HowItWorks() {
  const steps = [
    {
      icon: Users,
      title: "1. Intake & Strategy",
      desc: "Deep dive consultation to understand your goals, experience, and target roles",
      color: "teal",
    },
    {
      icon: Target,
      title: "2. Profile Optimization",
      desc: "Professional CV and LinkedIn makeover tailored to your target market",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "3. Application Management",
      desc: "We handle job matching, applications, and follow-ups while you focus on your current role",
      color: "purple",
    },
    {
      icon: Trophy,
      title: "4. Interview & Negotiation",
      desc: "Confidence coaching, mock interviews, and salary negotiation support",
      color: "orange",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Four simple steps to transform your job search from overwhelming to effortless
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FloatingCard key={index} delay={index * 0.1}>
              <div className="text-center group bg-slate-900/50 p-6 rounded-xl h-full border border-slate-800">
                <motion.div
                  className={`bg-${step.color}-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${step.color}-500/30 transition-colors`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className={`h-8 w-8 text-${step.color}-400`} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  )
}