"use client";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Job Search Concierge",
        "Profile Optimization",
        "Interview Coaching",
        "Salary Negotiation",
      ],
    },
    {
      title: "Markets",
      links: ["United States", "Canada", "United Kingdom", "Nigeria"],
    },
    {
      title: "Contact",
      links: [
        "hello@careerconcierge.com",
        "+1 (555) 123-4567",
        "Book a consultation",
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-6 w-6 text-teal-400" />
              <span className="text-lg font-bold">CareerConcierge</span>
            </div>
            <p className="text-slate-400 text-sm">
              Empowering tech professionals globally with stress-free career
              advancement.
            </p>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {section.title === "Services" ? (
                      <Link
                        href="#"
                        className="hover:text-teal-400 transition-colors"
                      >
                        {link}
                      </Link>
                    ) : (
                      link
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p>
            &copy; 2024 CareerConcierge. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
