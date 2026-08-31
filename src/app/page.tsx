import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyCloverNova } from "@/components/home/why-clovernova";
import { ProcessSteps } from "@/components/home/process-steps";
import { TeamMarquee } from "@/components/home/team-marquee";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { CtaBanner } from "@/components/home/cta-banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <ServicesOverview limit={3} />
      <WhyCloverNova />
      <ProcessSteps />
      <TeamMarquee />
      <PortfolioPreview />
      <CtaBanner />
    </div>
  );
}
