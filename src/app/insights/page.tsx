import { CtaBanner } from "@/components/home/cta-banner";
import { ArrowRight, BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

const insights = [
  {
    category: "Development",
    title: "Why Next.js is the Future of Enterprise Web Applications",
    description: "An in-depth look at how server-side rendering and static site generation are revolutionizing the way we build for the web.",
    icon: Code,
    date: "Aug 15, 2026",
    readTime: "5 min read"
  },
  {
    category: "Design",
    title: "Designing for Conversion: UI/UX Principles That Work",
    description: "Beautiful design is only half the battle. Learn how to structure your user interfaces to guide visitors towards taking action.",
    icon: Lightbulb,
    date: "Aug 02, 2026",
    readTime: "4 min read"
  },
  {
    category: "Marketing",
    title: "The Ultimate Guide to Technical SEO in 2026",
    description: "Stop losing traffic to competitors. Discover the technical optimizations that search engines actually care about today.",
    icon: TrendingUp,
    date: "Jul 28, 2026",
    readTime: "7 min read"
  }
];

function Code(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background text-center px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="container mx-auto max-w-2xl relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Insights & Articles
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Knowledge</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and strategies from our team on development, design, and digital growth.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-muted/20 px-4 relative overflow-hidden">
        {/* Decorative Orb */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 -z-10" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Latest Posts
            </span>
            <h2 className="text-3xl font-bold font-space-grotesk mb-4">Featured <span className="text-primary">Articles</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((post, i) => (
              <div key={i} className="bg-card border border-border/50 p-6 rounded-2xl flex flex-col shadow-sm hover:shadow-md hover:border-primary/50 transition-all group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <post.icon className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-space-grotesk mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {post.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-border/50 mt-auto">
                    <div className="text-xs text-muted-foreground">
                      {post.date} • {post.readTime}
                    </div>
                    <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
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
