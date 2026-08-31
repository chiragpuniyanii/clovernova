import { CtaBanner } from "@/components/home/cta-banner";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { notFound } from "next/navigation";

// Mock database for articles
const articles = {
  "nextjs-future": {
    title: "Why Next.js is the Future of Enterprise Web Applications",
    category: "Development",
    date: "Aug 15, 2026",
    readTime: "5 min read",
    author: "Rohit Shukla",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          In the rapidly evolving landscape of web development, enterprise applications require a robust architecture that can handle scale, SEO, and developer experience seamlessly. Enter Next.js.
        </p>
        <h2 className="text-2xl font-bold font-space-grotesk mt-12 mb-6">Server-Side Rendering (SSR) Revolution</h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          Unlike traditional single-page applications, Next.js allows you to render pages on the server. This means users see content immediately, and search engines can easily index your pages. It&apos;s a game-changer for enterprise SEO.
        </p>
        <h2 className="text-2xl font-bold font-space-grotesk mt-12 mb-6">The App Router Paradigm</h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          With the introduction of the App Router, Next.js has embraced React Server Components, pushing the boundaries of what&apos;s possible on the server while keeping client-side JavaScript bundles minimal. This drastically improves performance metrics like First Contentful Paint.
        </p>
      </>
    )
  },
  "ui-ux-principles": {
    title: "Designing for Conversion: UI/UX Principles That Work",
    category: "Design",
    date: "Aug 02, 2026",
    readTime: "4 min read",
    author: "Priya Sharma",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          A beautiful design is a great start, but if it doesn&apos;t convert, it&apos;s not working for your business. We explore the core principles that guide users toward action.
        </p>
        <h2 className="text-2xl font-bold font-space-grotesk mt-12 mb-6">Visual Hierarchy is Everything</h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          Users don&apos;t read; they scan. By using size, color, and spacing strategically, you can guide the user&apos;s eye to the most important elements on the page, like your primary call-to-action (CTA). Let negative space work in your favor.
        </p>
        <h2 className="text-2xl font-bold font-space-grotesk mt-12 mb-6">Frictionless Forms</h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          Every extra field in a form reduces conversion rates. We advocate for progressive profiling and seamless micro-interactions that make filling out forms feel less like a chore. Use contextual validation to guide the user rather than punishing them.
        </p>
      </>
    )
  },
  "technical-seo-2026": {
    title: "The Ultimate Guide to Technical SEO in 2026",
    category: "Marketing",
    date: "Jul 28, 2026",
    readTime: "7 min read",
    author: "Dipanshu Kashyap",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Content might be king, but technical SEO is the castle. Without a solid technical foundation, your brilliant content will never see the light of page one.
        </p>
        <h2 className="text-2xl font-bold font-space-grotesk mt-12 mb-6">Core Web Vitals</h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          Speed is no longer a luxury; it&apos;s a ranking factor. Metrics like Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) directly impact how Google evaluates your site. Optimizing images and fonts is non-negotiable.
        </p>
        <h2 className="text-2xl font-bold font-space-grotesk mt-12 mb-6">Semantic HTML & Schema Markup</h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          Helping search engines understand your content is crucial. Proper use of semantic tags (like header hierarchy) and structured data (JSON-LD) ensures rich snippets and better context for crawlers, putting you steps ahead of competitors.
        </p>
      </>
    )
  }
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden bg-background flex-grow">
        {/* Decorative Orb */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 -z-10" />
        
        <div className="container mx-auto max-w-3xl px-4 relative z-10">
          <Link href="/insights" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>
          
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-3 mb-12 pb-8 border-b border-border/50">
            <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">{article.author}</p>
              <p className="text-sm text-muted-foreground">CloverNova Expert</p>
            </div>
          </div>
          
          <div className="max-w-none text-foreground/90 text-lg">
            {article.content}
          </div>
          
        </div>
      </article>

      <CtaBanner />
    </div>
  );
}
