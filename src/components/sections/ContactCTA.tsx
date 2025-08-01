"use client";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";

export function ContactCTA() {
  return (
    <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center opacity-10 w-full h-full"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-400">
            Join hundreds of tech professionals who've accelerated their careers
            with our concierge service. Book your free consultation today.
          </p>

          <motion.div
            className="max-w-md mx-auto space-y-4 bg-slate-900/50 p-6 rounded-xl border border-slate-800"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Input
              placeholder="Enter your email"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
            />
            <Input
              placeholder="Your current role"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
            />
            <Textarea
              placeholder="Tell us about your career goals..."
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
            />
            <CalendlyPopupButton
              className="w-full bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 glow-teal"
              url="https://calendly.com/your-calendly-username/consultation"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </CalendlyPopupButton>
          </motion.div>

          <p className="text-sm mt-4 text-slate-400">
            No spam, ever. We respect your privacy and will only contact you
            about your career goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
