import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/home/cta-banner";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Blocks } from "lucide-react";

const serviceDetails = {
  "web-development": {
    title: "Web Development",
    description: "Modern, scalable web applications built for performance and seamless user experiences.",
    content: "Our web development team specializes in React, Next.js, and Node.js to create lightning-fast applications. We ensure your site is optimized for SEO, accessibility, and conversions from day one.",
    features: ["Custom React/Next.js Architecture", "API Integration & Development", "Headless CMS Solutions", "E-commerce Platforms"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"]
  },
  "app-development": {
    title: "App Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    content: "From concept to App Store launch, we build mobile applications using React Native and Flutter that deliver native-like performance and beautiful UI.",
    features: ["iOS & Android Native Apps", "Cross-Platform Frameworks", "UX/UI Mobile Design", "App Store Optimization"],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns to accelerate your growth.",
    content: "We handle everything from social media management and paid advertising to content marketing and conversion rate optimization to ensure maximum ROI.",
    features: ["Social Media Management", "PPC & Google Ads", "Content Strategy", "Conversion Rate Optimization"],
    tech: ["Google Analytics", "Meta Ads", "HubSpot", "Mailchimp", "Semrush"]
  },
  "seo": {
    title: "SEO Optimization",
    description: "Rank higher, get more traffic, and dominate search results.",
    content: "Our technical and on-page SEO strategies ensure your website follows best practices, improving organic visibility and driving high-intent traffic.",
    features: ["Technical SEO Audits", "Keyword Research", "On-Page Optimization", "Link Building Strategy"],
    tech: ["Ahrefs", "Google Search Console", "Screaming Frog", "Yoast", "Moz"]
  },
  "ethical-hacking": {
    title: "Ethical Hacking & Cybersecurity",
    description: "Protecting your digital assets with advanced penetration testing.",
    content: "We simulate real-world cyberattacks to uncover vulnerabilities in your systems before malicious hackers do, ensuring your data and reputation remain safe.",
    features: ["Web App Penetration Testing", "Network Security Audits", "Vulnerability Assessments", "Compliance Readiness"],
    tech: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark"]
  }
};

export default function ServiceSlugPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-muted/20 px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 -z-10" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Link href="/services" className="inline-flex items-center text-primary mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <div className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Service Details
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{service.description}</p>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold font-space-grotesk text-foreground mb-6">Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{service.content}</p>
              </div>
              
              <div className="pt-12">
                <h2 className="text-3xl font-bold font-space-grotesk mb-8">Key Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-card border border-border/50 p-5 rounded-xl shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-8">
              <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                  <Blocks className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-xl font-space-grotesk">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((techItem, i) => (
                    <span key={i} className="px-3 py-1.5 bg-muted text-sm font-medium rounded-full text-foreground/80 border border-border/50">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-8 rounded-2xl text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-background/50 backdrop-blur-sm -z-10" />
                <h3 className="font-bold text-xl font-space-grotesk mb-3">Ready to start?</h3>
                <p className="text-sm text-muted-foreground mb-6">Let&apos;s discuss how we can help with your {service.title} needs.</p>
                <Link href="/quote" className="inline-flex w-full justify-center bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-sm">
                  Get a Quote
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
