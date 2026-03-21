import type { Metadata } from "next";
import { contactChannels, getCanonicalUrl, isExternalHref } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chames Dhibi for freelance work, product design and development collaborations, and portfolio inquiries.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background border-x-4 border-foreground max-w-[1400px] mx-auto flex flex-col font-sans mb-20 pt-24 px-4 md:px-8">
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b-4 border-foreground mb-12">
        <div className="flex flex-col gap-4">
          <div className="inline-block border-4 border-foreground px-4 py-2 font-black uppercase text-sm bg-primary text-primary-foreground w-fit shadow-[4px_4px_0px_0px_var(--brutal-shadow)]">
            Contact
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl">
            Let's build something sharper than the default.
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-2xl border-l-8 border-primary pl-6 py-2 bg-secondary/20 uppercase mt-4">
            If you need a landing page, portfolio, product surface, or a stronger visual system for an existing project,
            I'm open to freelance work and focused collaborations.
          </p>
        </div>
      </section>

      {/* Channels Section */}
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-b-4 border-foreground pb-16 mb-16">
        <div className="w-full lg:w-1/3">
          <span className="font-mono font-bold text-muted-foreground uppercase tracking-widest text-sm block mb-4">
            [ Channels ]
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tight">Pick the fastest route</h2>
          <div className="w-16 h-4 bg-primary border-4 border-foreground shadow-[2px_2px_0px_0px_var(--brutal-shadow)] mt-6"></div>
        </div>
        
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactChannels.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col justify-between p-6 bg-card text-card-foreground border-4 border-foreground shadow-[6px_6px_0px_0px_var(--brutal-shadow)] hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[10px_10px_0px_0px_var(--brutal-shadow)] hover:bg-secondary hover:text-secondary-foreground transition-all active:translate-x-0 active:translate-y-0 active:shadow-none group"
              target={isExternalHref(item.href) ? "_blank" : undefined}
              rel={isExternalHref(item.href) ? "noreferrer" : undefined}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono font-bold uppercase tracking-widest text-sm bg-muted border-2 border-foreground px-2 py-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {item.label}
                </span>
                {isExternalHref(item.href) && <ArrowUpRight className="w-6 h-6 border-2 border-transparent group-hover:border-foreground rounded-full p-0.5 transition-colors" />}
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight truncate border-b-4 border-transparent group-hover:border-foreground pb-1 transition-colors">
                {item.value}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Prompt Section */}
      <section className="bg-primary text-primary-foreground border-4 border-foreground p-8 md:p-16 shadow-[8px_8px_0px_0px_var(--brutal-shadow)] mb-12">
        <span className="font-mono font-bold uppercase tracking-widest text-sm block mb-6 bg-foreground text-background w-fit px-3 py-1">
          Working together
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] max-w-4xl drop-shadow-[4px_4px_0_var(--brutal-shadow)]">
          Best fit for startup sites, personal brands, product launches, and redesigns that need more point of view.
        </h2>
      </section>
    </main>
  );
}
