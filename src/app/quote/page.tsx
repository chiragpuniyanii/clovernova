import { CtaBanner } from "@/components/home/cta-banner";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background text-center px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="container mx-auto max-w-2xl relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Let's Talk
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Get a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Custom Quote</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
            At CloverNova, every project is unique. Our pricing depends on the scope, complexity, and specific requirements of your business. Let's discuss your vision and we'll craft a tailored proposal just for you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Option 1: WhatsApp */}
            <div className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-green-500/50 transition-all group">
              <div className="h-16 w-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-colors">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-space-grotesk mb-3">Chat with us instantly</h3>
              <p className="text-muted-foreground mb-8">
                Want a quick estimate? Drop us a message on WhatsApp and our team will reply within minutes.
              </p>
              <a 
                href="https://wa.me/919146059905" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a] h-12 flex items-center justify-center rounded-md font-medium transition-colors shadow-sm hover:shadow-md"
              >
                Start WhatsApp Chat
              </a>
            </div>

            {/* Option 2: Contact Form */}
            <div className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-primary/50 transition-all group">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold font-space-grotesk mb-3">Submit Project Details</h3>
              <p className="text-muted-foreground mb-8">
                Have a detailed brief? Fill out our comprehensive form and we'll send you a formal proposal.
              </p>
              <Link 
                href="/contact" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 flex items-center justify-center rounded-md font-medium transition-colors shadow-sm hover:shadow-md"
              >
                Fill out Contact Form
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CtaBanner />
    </div>
  );
}
