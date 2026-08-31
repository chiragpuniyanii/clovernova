"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Megaphone, Search, ShieldAlert, Layout, ShoppingCart, PenTool, Cloud, ArrowRight, Server, Plus } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive, and high-performance websites built with the latest technologies like Next.js and React.",
    icon: Code2,
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to expand your reach, engage your audience, and drive conversions.",
    icon: Megaphone,
  },
  {
    title: "SEO Optimization",
    description: "Comprehensive SEO services to improve your search rankings and drive organic traffic to your business.",
    icon: Search,
  },
  {
    title: "Ethical Hacking",
    description: "Proactive security assessments and penetration testing to identify and secure vulnerabilities in your systems.",
    icon: ShieldAlert,
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress themes, plugins, and scalable websites designed for easy management and growth.",
    icon: Layout,
  },
  {
    title: "Shopify E-Commerce",
    description: "High-converting, robust e-commerce stores built on Shopify to supercharge your online product sales.",
    icon: ShoppingCart,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and beautiful user interfaces that enhance user experience and maximize engagement.",
    icon: PenTool,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud architecture and deployment solutions to ensure your applications run smoothly and securely.",
    icon: Cloud,
  },
  {
    title: "DevOps & CI/CD",
    description: "Streamline your development lifecycle with Docker, Kubernetes, automated deployment pipelines, and many more.",
    icon: Server,
  },
  {
    title: "And Many More...",
    description: "Discover a wide range of additional services designed to accelerate your business growth and digital transformation.",
    icon: Plus,
  },
];

interface ServicesOverviewProps {
  limit?: number;
}

const getServiceHref = (title: string) => {
  switch (title) {
    case "Web Development":
      return "/contact?service=web-development";
    case "App Development":
      return "/contact?service=app-development";
    case "Digital Marketing":
      return "/contact?service=digital-marketing";
    case "SEO Optimization":
      return "/contact?service=seo";
    case "UI/UX Design":
      return "/contact?service=ui-ux-design";
    case "Shopify E-Commerce":
      return "/contact?service=ecommerce";
    default:
      return "/contact?service=other";
  }
};

export function ServicesOverview({ limit }: ServicesOverviewProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 md:py-32 bg-background border-b border-border/50 relative overflow-hidden">
      {/* Decorative Orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 shadow-sm">
              Our Expertise
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Services</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Digital solutions tailored to help your business thrive in the modern landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link
                href={getServiceHref(service.title)}
                className="block h-full bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all group relative overflow-hidden cursor-pointer"
              >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-space-grotesk">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {limit && (
          <motion.div
            className="flex justify-end mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              See all services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
