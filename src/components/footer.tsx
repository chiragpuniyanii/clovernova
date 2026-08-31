import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";

const Instagram = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display font-bold text-2xl tracking-tight">
                Clover<span className="gradient-text text-primary">Nova</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Turning Chaos Into Code. We build complete, production-ready
              solutions for your business.
            </p>
            <div className="flex items-center gap-4 text-foreground/70">
              <a
                href="https://www.instagram.com/clovernovatech/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/135127564/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/919146059905"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:hello@clovernova.com"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="text-muted-foreground hover:text-foreground transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo-services" className="text-muted-foreground hover:text-foreground transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/ethical-hacking" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ethical Hacking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Snippet */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>
            <p className="text-muted-foreground mb-4">
              Ready to start your next big project? We are here to help.
            </p>
            <p className="text-sm font-medium mb-1">Call / WhatsApp:</p>
            <a href="tel:+919146059905" className="text-primary hover:underline block mb-4">
              +91 91460 59905
            </a>
            <p className="text-sm font-medium mb-1">Email:</p>
            <a href="mailto:hello@clovernova.com" className="text-primary hover:underline">
              hello@clovernova.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} CloverNova. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
