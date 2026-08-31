import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { CtaBanner } from "@/components/home/cta-banner";
import { Eye, Code, Rocket } from "lucide-react";

const approaches = [
  { icon: Eye, title: "Discovery", desc: "Understanding the brand and goals." },
  { icon: Code, title: "Execution", desc: "Building the solution cleanly." },
  { icon: Rocket, title: "Delivery", desc: "Launching and scaling fast." }
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background text-center px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 -z-10" />

        <div className="container mx-auto max-w-2xl relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Past Work
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped brands transform their digital presence.
          </p>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <PortfolioPreview />

      {/* Approach Strip */}
      <section className="py-16 md:py-24 bg-muted/20 px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 -z-10" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk">Our Approach to <span className="text-primary">Excellence</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-card border border-border/50 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all group">
                <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CtaBanner />
    </div>
  );
}
