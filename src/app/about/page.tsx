import type { Metadata } from "next";
import { experience, getCanonicalUrl, manifesto, principles } from "@/data/site";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About Chames Dhibi, design and development principles, and the experience shaping portfolio v3.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background border-x-4 border-foreground max-w-[1400px] mx-auto flex flex-col font-sans mb-20 pt-24 px-4 md:px-8">
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b-4 border-foreground mb-16">
        <div className="flex flex-col gap-4">
          <div className="inline-block border-4 border-foreground px-4 py-2 font-black uppercase text-sm bg-primary text-primary-foreground w-fit shadow-[4px_4px_0px_0px_var(--brutal-shadow)]">
            About
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-5xl">
            I build the visual system and the product underneath it.
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-3xl border-l-8 border-primary pl-6 py-2 bg-secondary/20 uppercase mt-6">
            My work sits between design direction and implementation. I care about hierarchy, interface rhythm,
            performance, and the small structural decisions that make a site feel authored.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-b-4 border-foreground pb-16 mb-16">
        <div className="w-full lg:w-1/3">
          <span className="font-mono font-bold text-muted-foreground uppercase tracking-widest text-sm block mb-4">
            [ Principles ]
          </span>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">How I think while building</h2>
          <div className="w-16 h-4 bg-primary border-4 border-foreground shadow-[2px_2px_0px_0px_var(--brutal-shadow)] mt-6"></div>
        </div>
        
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, index) => (
            <article key={item.title} className="bg-card text-card-foreground border-4 border-foreground p-6 shadow-[6px_6px_0px_0px_var(--brutal-shadow)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0px_0px_var(--brutal-shadow)] transition-all">
              <div className="font-black text-2xl text-muted-foreground/30 mb-2">0{index + 1}</div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
              <p className="text-muted-foreground font-bold font-mono text-sm leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-b-4 border-foreground pb-16 mb-16">
        <div className="w-full lg:w-1/3">
          <span className="font-mono font-bold text-muted-foreground uppercase tracking-widest text-sm block mb-4">
            [ Experience ]
          </span>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">From code-first work to product-facing presentation</h2>
          <div className="w-16 h-4 bg-secondary border-4 border-foreground shadow-[2px_2px_0px_0px_var(--brutal-shadow)] mt-6"></div>
        </div>
        
        <div className="w-full lg:w-2/3 flex flex-col border-4 border-foreground bg-card text-card-foreground shadow-[6px_6px_0px_0px_var(--brutal-shadow)]">
          {experience.map((item, index) => (
            <article key={`${item.period}-${item.title}`} className={`flex flex-col md:flex-row gap-4 p-6 hover:bg-muted transition-colors ${index !== experience.length - 1 ? 'border-b-4 border-foreground' : ''}`}>
              <div className="w-full md:w-32 shrink-0">
                <span className="inline-block bg-foreground text-background font-mono font-bold text-sm px-2 py-1 uppercase">{item.period}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-primary">{item.title}</h3>
                <strong className="font-bold text-lg uppercase tracking-wide border-b-2 border-foreground/20 pb-2 w-fit">{item.place}</strong>
                <p className="text-muted-foreground font-sans text-base leading-relaxed mt-1">{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="bg-foreground text-background border-4 border-foreground p-8 md:p-16 mb-12 shadow-[8px_8px_0px_0px_var(--primary)]">
        <span className="font-mono font-bold uppercase tracking-widest text-sm block mb-8 text-secondary">
          [ Manifesto ]
        </span>
        <div className="flex flex-col gap-6">
          {manifesto.map((line) => (
            <div key={line} className="flex items-start gap-4">
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-primary shrink-0" />
              <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] hover:text-primary transition-colors cursor-crosshair">
                {line}
              </p>
            </div>
          ))}
        </div>
      </section>
      
    </main>
  );
}
