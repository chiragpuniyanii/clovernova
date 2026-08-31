"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "CloverNova completely transformed our online presence. Their development team is top-notch and delivered ahead of schedule.",
    name: "Sarah Jenkins",
    role: "CEO, TechStart Inc",
  },
  {
    quote: "The digital marketing strategy they implemented increased our leads by 150% in just three months. Highly recommended!",
    name: "Michael Chen",
    role: "Marketing Director, Bloom",
  },
  {
    quote: "Their security audit revealed vulnerabilities we had no idea existed. The team is professional, thorough, and incredibly skilled.",
    name: "Elena Rodriguez",
    role: "CTO, SecurePay",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Testimonials
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Client <span className="text-primary">Success Stories</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our partners have to say about working with CloverNova.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all relative group"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <p className="text-foreground/90 italic mb-8 relative z-10 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold font-space-grotesk">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
