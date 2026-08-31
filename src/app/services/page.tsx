import { ServicesOverview } from "@/components/home/services-overview";
import { CtaBanner } from "@/components/home/cta-banner";
import { CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Zap, title: "Lightning Fast", description: "Our solutions are optimized for maximum speed and performance." },
  { icon: Shield, title: "Highly Secure", description: "Built with industry-leading security standards from day one." },
  { icon: TrendingUp, title: "Scalable Growth", description: "Architecture designed to handle millions of users seamlessly." }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background text-center px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="container mx-auto max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Our Offerings
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide end-to-end digital solutions that help your business scale efficiently and securely.
          </p>
        </div>
      </section>
      
      <ServicesOverview />

      <section className="py-16 md:py-24 bg-muted/20 px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/2 -z-10" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Advantages
            </span>
            <h2 className="text-3xl font-bold font-space-grotesk mb-4">Why Choose <span className="text-primary">Our Services?</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We don't just write code, we deliver business value.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk mb-3">{stat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CtaBanner />
    </div>
  );
}
