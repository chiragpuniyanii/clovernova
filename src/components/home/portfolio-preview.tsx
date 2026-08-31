"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Development",
    color: "from-blue-500/20 to-cyan-500/20",
    image: "/fintech.png",
  },
  {
    title: "E-Commerce App",
    category: "App Development",
    color: "from-purple-500/20 to-pink-500/20",
    image: "/ecommerce.png",
  },
  {
    title: "Healthcare Portal",
    category: "Full Stack Design",
    color: "from-emerald-500/20 to-green-500/20",
    image: "/healthcare.png",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative Orb */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                Recent Projects
              </span>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Work</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore some of our recent projects and see how we've helped businesses achieve their digital goals.
            </motion.p>
          </div>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-primary font-medium hover:underline hover:underline-offset-4"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card aspect-[4/3] flex flex-col justify-end p-6 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 mix-blend-multiply group-hover:opacity-10 transition-opacity z-0`} />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors z-0" />
              
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <p className="text-sm font-medium text-green-400 mb-2 drop-shadow-md">{project.category}</p>
                  <h3 className="text-2xl font-bold font-space-grotesk text-white drop-shadow-lg">{project.title}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/40 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
