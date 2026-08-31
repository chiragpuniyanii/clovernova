"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DotField from "../ui/DotField";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20 group">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotField
          dotRadius={2}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={true}
          waveAmplitude={0}
          gradientFrom="rgba(34, 197, 94, 0.8)" 
          gradientTo="rgba(74, 222, 128, 0.5)"
          glowColor="rgba(34, 197, 94, 0.3)"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Welcome to CloverNova
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl font-space-grotesk"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Think Big. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">We Handle The Rest.</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We are a premier freelancing agency turning your chaos into clean, scalable code. From web and app development to digital marketing and cybersecurity.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center h-12 px-8 font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
