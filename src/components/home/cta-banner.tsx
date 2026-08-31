"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-background text-primary text-sm font-medium mb-6 border border-primary/20 shadow-sm">
            Ready to Start?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
            Let&apos;s Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Extraordinary</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you need a cutting-edge web application, a robust mobile app, or a complete digital transformation, our team is ready to deliver.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-8 font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md hover:shadow-primary/20"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center h-14 px-8 font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm hover:shadow-md"
            >
              Get a Free Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
