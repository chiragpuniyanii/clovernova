"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Rohit Shukla",
    role: "Full Stack Developer",
    bio: "Specializes in building robust, high-performance web and mobile applications.",
  },
  {
    name: "Siya Marotkar",
    role: "Digital Marketing",
    bio: "Data-driven marketer focused on scaling brands and maximizing ROI.",
  },
  {
    name: "Simran Katrapwar",
    role: "WordPress Developer",
    bio: "Creates custom, scalable, and beautifully designed WordPress websites.",
  },
  {
    name: "Pavan Raghuwanshi",
    role: "Backend Developer",
    bio: "Designs highly scalable cloud architectures and secure database infrastructures.",
  },
];

export function TeamMarquee() {
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
              Our Experts
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet The <span className="text-primary">Team</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The brilliant minds driving innovation and delivering exceptional results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all relative group flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 flex items-center justify-center text-2xl font-bold text-primary border border-primary/20 shadow-inner group-hover:scale-105 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4 px-3 py-1 bg-primary/10 rounded-full text-xs inline-block">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
