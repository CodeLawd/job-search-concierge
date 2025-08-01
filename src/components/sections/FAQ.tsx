"use client"
import { motion } from "motion/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Who is this service for?",
      answer:
        "Our service is designed for mid-level to senior tech professionals who are currently employed and want to advance their careers without the stress of managing a job search. Perfect for developers, product managers, designers, and tech leaders in the US, Canada, UK, and Nigeria.",
    },
    {
      question: "How does the process work?",
      answer:
        "We start with a comprehensive consultation to understand your goals, then optimize your profile, manage applications on your behalf, and provide coaching throughout the interview process. You stay focused on your current role while we handle the heavy lifting.",
    },
    {
      question: "What's the ROI of using your service?",
      answer:
        "Our clients typically see 25-50% salary increases, with the average being 35%. Most recover their investment within 2-3 months of starting their new role. Plus, you save 20+ hours per week that would otherwise be spent on job searching.",
    },
    {
      question: "Do you guarantee job placement?",
      answer:
        "While we can't guarantee specific outcomes, we have a 95% success rate with our clients. Our success-fee option means we only get paid when you land a job, aligning our incentives with your success.",
    },
    {
      question: "How long does the process typically take?",
      answer:
        "Most clients receive offers within 30-60 days of starting our program. The timeline depends on your specific requirements, market conditions, and the level of roles you're targeting.",
    },
  ]

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-400">Everything you need to know about our concierge service</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem
                  value={`item-${index + 1}`}
                  className="border border-slate-800 rounded-lg px-6 bg-slate-900/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}