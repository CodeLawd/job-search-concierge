"use client"
import { motion } from "motion/react"
import { Clock, TrendingUp, DollarSign, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { FloatingCard } from "@/components/floating-card"
import { GradientCard } from "@/components/gradient-card"
import { CalendlyPopupButton } from "@/components/calendly-popup-button"

export function Pricing() {
  const plans = [
    {
      title: "Package Deal",
      desc: "Perfect for focused job searches",
      price: "$2,997",
      period: "One-time payment",
      icon: Clock,
      gradient: "from-blue-500/80 to-blue-600/80",
      features: [
        "Complete profile optimization",
        "30-day application management",
        "Interview coaching sessions",
        "Salary negotiation support",
      ],
    },
    {
      title: "Monthly Retainer",
      desc: "Ongoing support until you land",
      price: "$1,497",
      period: "Per month",
      icon: TrendingUp,
      gradient: "from-teal-500/80 to-teal-600/80",
      popular: true,
      features: [
        "Everything in Package Deal",
        "Unlimited application management",
        "Weekly strategy calls",
        "Priority support",
      ],
    },
    {
      title: "Success Fee",
      desc: "Pay only when you get hired",
      price: "15%",
      period: "Of first year salary",
      icon: DollarSign,
      gradient: "from-purple-500/80 to-purple-600/80",
      features: [
        "Zero upfront cost",
        "Full concierge service",
        "Unlimited timeline",
        "Maximum ROI guarantee",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Choose Your Success Path</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Flexible options designed for different career stages and risk preferences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <FloatingCard key={index} delay={index * 0.1}>
              <GradientCard gradient={plan.gradient} className="h-full">
                <div className="relative">
                  {plan.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <Badge className="bg-teal-500 text-white px-4 py-1">Most Popular</Badge>
                    </motion.div>
                  )}
                  <div className="text-center pb-8">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <plan.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                    <p className="text-slate-400 mb-4">{plan.desc}</p>
                    <div className="text-3xl font-bold text-white">{plan.price}</div>
                    <div className="text-sm text-slate-400">{plan.period}</div>
                  </div>
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 + 0.3 }}
                      >
                        <CheckCircle className="h-5 w-5 text-teal-400" />
                        <span className="text-slate-400">{feature}</span>
                      </motion.div>
                    ))}
                    <CalendlyPopupButton
                      className={`w-full mt-6 bg-gradient-to-r ${plan.gradient} text-white border-0 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}
                      url="https://calendly.com/your-calendly-username/consultation"
                    >
                      {index === 0 ? "Get Started" : index === 1 ? "Start Now" : "Apply Now"}
                    </CalendlyPopupButton>
                  </div>
                </div>
              </GradientCard>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  )
}