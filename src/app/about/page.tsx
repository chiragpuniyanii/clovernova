import { WhyCloverNova } from "@/components/home/why-clovernova";
import { TrustBar } from "@/components/home/trust-bar";
import { CtaBanner } from "@/components/home/cta-banner";
import { Users, Target, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Mission Driven", desc: "We focus on real outcomes, not just beautiful code." },
  { icon: Users, title: "Collaborative", desc: "We work with you, integrating closely with your team." },
  { icon: Heart, title: "Passionate", desc: "We love what we do, and it shows in our craftsmanship." }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />

        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">CloverNova</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We are a team of passionate engineers, designers, and marketers dedicated to building the future of the web. 
            We turn chaos into code, creating scalable platforms for ambitious brands.
          </p>
        </div>
      </section>
      
      <TrustBar />
      <WhyCloverNova />

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/4 -translate-y-1/4 -z-10" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">Our <span className="text-primary">Core Values</span></h2>
            <p className="text-muted-foreground text-lg">The principles that guide everything we build.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="bg-card border border-border/50 p-8 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all group">
                <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                  <val.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-3">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
