"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and requirements to form a solid foundation.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description: "Creating comprehensive blueprints and beautiful, user-centric designs tailored to your brand.",
  },
  {
    number: "03",
    title: "Development",
    description: "Our engineers turn designs into robust, scalable, and high-performance digital products.",
  },
  {
    number: "04",
    title: "Launch & Iterate",
    description: "Rigorous testing precedes deployment. Post-launch, we monitor and optimize for continuous growth.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Our Process
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How We <span className="text-primary">Work</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A proven, transparent process designed to deliver exceptional results on time, every time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-border/50 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-card border-2 border-border/50 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md group-hover:border-primary/50 transition-all">
                <span className="text-3xl font-bold font-space-grotesk text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-space-grotesk">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
