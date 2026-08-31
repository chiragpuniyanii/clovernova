"use client";

import { useState, Suspense, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useSearchParams } from "next/navigation";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactFormContent() {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get("service");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: serviceQuery || "",
    }
  });

  useEffect(() => {
    if (serviceQuery) {
      const validOptions = ["web-development", "app-development", "digital-marketing", "seo", "ethical-hacking", "other"];
      if (validOptions.includes(serviceQuery)) {
        setValue("service", serviceQuery);
      } else {
        setValue("service", "other");
      }
    }
  }, [serviceQuery, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <>
      {isSuccess && (
        <div className="mb-8 p-4 bg-primary/10 border border-primary/20 text-primary rounded-lg text-center font-medium">
          Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name <span className="text-primary">*</span></label>
            <input 
              id="name"
              {...register("name")}
              className={`w-full h-12 px-4 rounded-md border bg-background ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-input focus:border-primary focus:ring-1 focus:ring-primary'} outline-none transition-all`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address <span className="text-primary">*</span></label>
            <input 
              id="email"
              type="email"
              {...register("email")}
              className={`w-full h-12 px-4 rounded-md border bg-background ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-input focus:border-primary focus:ring-1 focus:ring-primary'} outline-none transition-all`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Phone Number</label>
            <input 
              id="phone"
              {...register("phone")}
              className="w-full h-12 px-4 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-foreground/80">Company Name</label>
            <input 
              id="company"
              {...register("company")}
              className="w-full h-12 px-4 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder="Acme Inc."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium text-foreground/80">Service of Interest <span className="text-primary">*</span></label>
            <select 
              id="service"
              {...register("service")}
              className={`w-full h-12 px-4 rounded-md border bg-background text-foreground ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-input focus:border-primary focus:ring-1 focus:ring-primary'} outline-none transition-all`}
            >
              <option value="">Select a service...</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="seo">SEO Optimization</option>
              <option value="ethical-hacking">Ethical Hacking</option>
              <option value="other">Other</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="budget" className="text-sm font-medium text-foreground/80">Project Budget <span className="text-primary">*</span></label>
            <select 
              id="budget"
              {...register("budget")}
              className={`w-full h-12 px-4 rounded-md border bg-background text-foreground ${errors.budget ? 'border-red-500 focus:ring-red-500' : 'border-input focus:border-primary focus:ring-1 focus:ring-primary'} outline-none transition-all`}
            >
              <option value="">Select budget range...</option>
              <option value="<5k">Less than $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
            {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground/80">Project Details <span className="text-primary">*</span></label>
          <textarea 
            id="message"
            {...register("message")}
            rows={5}
            className={`w-full p-4 rounded-md border bg-background resize-y ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-input focus:border-primary focus:ring-1 focus:ring-primary'} outline-none transition-all`}
            placeholder="Tell us about your project goals, timeline, and any specific requirements..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-14 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 -z-10" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Let&apos;s Work <span className="text-primary">Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below or use our direct contact details. Our team will get back to you within 24 hours to discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
              <h3 className="text-xl font-bold font-space-grotesk mb-6">Direct Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <a href="mailto:hello@clovernova.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">hello@clovernova.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call or WhatsApp</p>
                    <a href="tel:+919146059905" className="text-muted-foreground hover:text-primary transition-colors text-sm">+91 91460 59905</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Global Team</p>
                    <p className="text-muted-foreground text-sm">Available for remote partnerships worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold font-space-grotesk mb-4">What happens next?</h3>
              <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-3">
                <li>We review your project details.</li>
                <li>We schedule a brief discovery call.</li>
                <li>We send a detailed proposal and timeline.</li>
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <Suspense fallback={<div className="flex justify-center p-8"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
              <ContactFormContent />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
