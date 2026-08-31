"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const reasons = [
  "Agile & Transparent Workflow",
  "Senior-Level Expertise",
  "Focus on ROI & Scalability",
  "Cutting-Edge Tech Stack",
  "Dedicated Post-Launch Support",
  "Customized Solutions",
];

export function WhyCloverNova() {
  return (
    <section className="py-16 md:py-24 bg-muted/20 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
              Why Choose <span className="text-primary">CloverNova?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don&apos;t just build websites and apps; we build businesses. Our team is dedicated to delivering excellence through innovative solutions that solve real-world problems. We partner with you for the long term.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground/90">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-xl mx-auto lg:max-w-none"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white dark:bg-black z-10 w-full">
              <Image
                src="/clovernova.jpeg"
                alt="CloverNova Logo"
                width={800}
                height={400}
                className="w-full h-auto object-contain transition-all dark:invert dark:hue-rotate-180"
                priority
              />
            </div>
            {/* Decorative Clover Watermark */}
            <svg
              viewBox="0 0 200 200"
              className="absolute -bottom-32 -right-32 w-64 h-64 text-primary/15 dark:text-primary/10 -z-10 stroke-white dark:stroke-black"
            >
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <path
                  key={angle}
                  d="M 100 100 C 40 0, 160 0, 100 100 Z"
                  fill="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  transform={`rotate(${angle} 100 100)`}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
