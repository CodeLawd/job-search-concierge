"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Senior Developer, Toronto",
    text: "Landed a 40% salary increase at a top fintech company. The team handled everything while I stayed focused on my current job. The process was seamless and stress-free.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    title: "Tech Lead, London",
    text: "From application to offer in just 3 weeks. The interview coaching was game-changing for my confidence. I finally broke into FAANG!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Adaora Okafor",
    title: "Product Manager, Lagos",
    text: "Finally broke into a global tech company. The team understood the Nigerian market perfectly and opened doors I couldn't reach alone. Worth every penny!",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Michael Rodriguez",
    title: "DevOps Engineer, San Francisco",
    text: "The personalized approach made all the difference. They positioned me perfectly for senior roles I never thought I could get. My salary doubled!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Emma Thompson",
    title: "Frontend Developer, Vancouver",
    text: "As a working mom, I had zero time for job searching. CareerConcierge handled everything while I focused on my family and current role. Amazing service!",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
  {
    name: "David Kim",
    title: "Data Scientist, Seattle",
    text: "The success-fee model was perfect for me. No upfront costs and they only got paid when I landed my dream job at Microsoft. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Priya Patel",
    title: "Software Architect, London",
    text: "Moving from India to the UK seemed impossible until I found CareerConcierge. They understood visa requirements and positioned me perfectly for senior roles.",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1889&auto=format&fit=crop",
  },
  {
    name: "Alex Johnson",
    title: "Full Stack Developer, Toronto",
    text: "The LinkedIn optimization alone was worth the investment. I went from 0 recruiter messages to 5+ per week. The team knows what they're doing!",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Fatima Al-Rashid",
    title: "UX Designer, Dubai",
    text: "Breaking into the Middle East tech scene was challenging. CareerConcierge's global network and expertise made it possible. Landed at a unicorn startup!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    name: "Robert Chen",
    title: "Engineering Manager, New York",
    text: "Transitioning from IC to management required a different approach. The team coached me through leadership interviews and salary negotiations perfectly.",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Lisa Anderson",
    title: "Product Designer, Austin",
    text: "The monthly retainer model gave me peace of mind. Knowing experts were working on my behalf while I focused on my current projects was invaluable.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    name: "Carlos Mendoza",
    title: "Backend Engineer, Mexico City",
    text: "Remote work opportunities opened up thanks to their global network. Now working for a US company while living in Mexico. Life-changing!",
    image:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1824&auto=format&fit=crop",
  },
  {
    name: "Aisha Okonkwo",
    title: "Mobile Developer, Abuja",
    text: "The Nigeria tech market expertise was incredible. They connected me with opportunities I never knew existed. Now working for a top fintech!",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Thomas Mueller",
    title: "DevSecOps Lead, Berlin",
    text: "Relocating to Germany for work seemed daunting. CareerConcierge handled visa requirements and cultural nuances perfectly. Seamless transition!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Jennifer Park",
    title: "AI/ML Engineer, San Jose",
    text: "The AI/ML market is so competitive. Their specialized knowledge of the field and connections at top companies made all the difference.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1771&auto=format&fit=crop",
  },
  {
    name: "Mohammed Hassan",
    title: "Cloud Architect, London",
    text: "From application to offer in 6 weeks during a tough market. The team's persistence and strategy were incredible. Now at AWS!",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
  },
];

export function TestimonialCarousel() {
  return (
    <div className="font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-4 text-foreground"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Loved by Tech Professionals
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Real stories from professionals who transformed their careers with our
        concierge service
      </motion.p>

      {/* Testimonial Cards Container - Masonry-like layout */}
      <div className="w-full max-w-7xl columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="glass-effect p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 break-inside-avoid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-teal-500/30"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-teal-400 font-medium">
                  {testimonial.title}
                </p>
              </div>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              &quot;{testimonial.text}&quot;
            </p>

            {/* Rating stars */}
            <div className="flex mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-muted-foreground mb-6">
          Ready to join our success stories?
        </p>
        <motion.button
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Success Story
        </motion.button>
      </motion.div>
    </div>
  );
}
