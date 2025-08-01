"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { CalendlyWidget } from "./calendly-widget";
import { MagneticButton } from "./magnetic-button";

export function ConsultationBookingSection() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const benefits = [
    "30-minute strategy session",
    "Career goal assessment",
    "Market opportunity analysis",
    "Personalized action plan",
    "No obligation consultation",
  ];

  return (
    <>
      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to Transform Your Career?
                  </h2>
                  <p className="text-xl text-slate-400 leading-relaxed">
                    Book a free 30-minute consultation to discuss your career
                    goals and discover how our concierge service can accelerate
                    your success.
                  </p>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
                      <span className="text-slate-400">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <MagneticButton
                    onClick={() => setIsCalendlyOpen(true)}
                    className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold glow"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </MagneticButton>

                  <div className="flex items-center text-slate-400 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Usually available within 24 hours</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      What to Expect
                    </h3>
                    <p className="text-slate-400">
                      Your consultation will cover:
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Current Situation Review",
                        desc: "Assess your current role and career trajectory",
                      },
                      {
                        title: "Goal Setting",
                        desc: "Define your ideal next role and timeline",
                      },
                      {
                        title: "Strategy Discussion",
                        desc: "Explore how our service can help you succeed",
                      },
                      {
                        title: "Next Steps",
                        desc: "Create a clear action plan for your job search",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-teal-400 text-sm font-semibold">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-orange-500/90 text-white px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="text-sm font-semibold">100% Free</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-teal-500/90 text-white px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              >
                <span className="text-sm font-semibold">No Commitment</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      <CalendlyWidget
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/your-calendly-username/consultation"
      />
    </>
  );
}
