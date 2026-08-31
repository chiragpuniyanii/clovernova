"use client";

import { motion } from "framer-motion";
import { Users, Building2, Globe2, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Delivered" },
  { icon: Globe2, value: "12", label: "Countries Served" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
  { icon: Building2, value: "5+", label: "Years Experience" },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-border/50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4 group"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold font-space-grotesk text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
