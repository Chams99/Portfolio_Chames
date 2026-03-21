import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CornerDownRight } from "lucide-react";
import { capabilities, getCanonicalUrl, heroStats, manifesto, projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Chames Dhibi | Brutalist Portfolio",
  description: "High contrast, structural product building.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background border-x-4 border-foreground max-w-[1400px] mx-auto flex flex-col font-sans pt-24">
      
      {/* Extreme Hero Section */}
      <section className="flex flex-col lg:flex-row border-b-4 border-foreground relative z-10 bg-background">
        
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-foreground">
          <div className="inline-block border-4 border-foreground px-4 py-2 font-black uppercase text-sm bg-secondary text-secondary-foreground w-fit mb-8 shadow-brutalist">
            NEW STANDALONE DIRECTION
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-foreground">
            SIGNAL.<br/>
            SHAPE.<br/>
            SHIP.
          </h1>
          
          <p className="text-xl md:text-2xl font-bold max-w-xl border-l-8 border-primary pl-6 py-2 mb-10 bg-secondary/20 text-foreground uppercase">
            Chames Dhibi designs and builds bold web experiences with strong hierarchy and raw power.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="#work" className="inline-flex items-center justify-center h-16 px-10 border-4 border-foreground bg-primary hover:bg-primary font-black text-lg uppercase shadow-brutalist hover-brutalist rounded-none text-primary-foreground">
              View Work <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center h-16 px-10 border-4 border-foreground font-black text-lg uppercase shadow-brutalist hover-brutalist rounded-none bg-card text-card-foreground">
              Start a project
            </Link>
          </div>
        </div>

        {/* Hero Visual / Aside */}
        <div className="w-full lg:w-[450px] flex flex-col bg-muted border-foreground">
          {/* Portrait Container */}
          <div className="flex-1 border-b-4 border-foreground relative overflow-hidden group min-h-[400px]">
            <Image 
              src="/images/avatar.webp" 
              alt="Chames Dhibi portrait" 
              fill 
              className="object-cover cursor-crosshair filter grayscale group-hover:grayscale-0 transition-all duration-300" 
              priority 
            />
            {/* Stamp / Sticker */}
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground border-4 border-foreground p-3 font-black text-xs uppercase transform rotate-6 shadow-brutalist">
               Tunisia Base
            </div>
            
            <div className="absolute bottom-0 inset-x-0 border-t-4 border-foreground bg-card text-card-foreground p-4 font-black text-xl uppercase flex justify-between">
              <span>Chames</span>
              <span>Dhibi</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 divide-x-4 divide-y-4 divide-foreground [&>*:nth-child(2)]:border-t-0 [&>*:nth-child(1)]:border-t-0">
            {heroStats.map((stat, i) => (
              <div key={i} className={`p-6 bg-card text-card-foreground flex flex-col justify-center border-foreground relative group overflow-hidden ${i === heroStats.length - 1 && heroStats.length % 2 !== 0 ? 'col-span-2' : ''}`}>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
                <strong className="text-4xl md:text-5xl font-black relative z-10 group-hover:text-primary-foreground">{stat.value}</strong>
                <span className="text-sm font-bold uppercase mt-2 relative z-10 group-hover:text-primary-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Band */}
      <section className="bg-foreground text-background border-b-4 border-foreground p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="font-black text-3xl uppercase shrink-0 w-64 text-primary">Manifesto.</div>
          <div className="flex flex-wrap gap-4 font-bold text-lg md:text-xl uppercase">
            {manifesto.map((line, i) => (
              <span key={i} className="border-2 border-background px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-crosshair">
                <CornerDownRight className="inline mr-2 w-5 h-5"/> {line}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-b-4 border-foreground bg-background">
        <div className="p-8 md:p-12 border-b-4 border-foreground bg-secondary text-secondary-foreground">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Three projects.<br/>
            Three moods.<br/>
            One raw system.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 p-8 md:p-12 bg-background">
          {projects.map((project, index) => (
            <Link href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`} key={project.title} className="group flex flex-col relative bg-card text-card-foreground border-4 border-foreground shadow-[8px_8px_0px_0px_var(--brutal-shadow)] hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[16px_16px_0px_0px_var(--brutal-shadow)] transition-all duration-300">
              {/* Media Block */}
              <div className="relative aspect-[4/3] border-b-4 border-foreground overflow-hidden bg-muted">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-300 group-hover:scale-105" 
                />
                
                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground border-4 border-foreground px-3 py-1 font-black text-lg shadow-brutalist transform -rotate-3 group-hover:rotate-0 transition-transform">
                  {project.year}
                </div>
              </div>

              {/* Content Block */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors pr-4">{project.title}</h4>
                    <span className="font-black text-2xl border-4 border-foreground w-14 h-14 shrink-0 flex items-center justify-center bg-secondary text-secondary-foreground shadow-brutalist">0{index + 1}</span>
                  </div>
                  <p className="font-bold font-mono text-[15px] leading-relaxed border-l-4 border-foreground pl-5 text-foreground/80">
                    {project.summary}
                  </p>
                </div>
                
                <div className="mt-auto font-black uppercase text-2xl border-t-4 border-foreground pt-6 flex justify-between items-center text-primary group-hover:text-foreground">
                  View Case <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-background border-b-4 border-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-foreground">
          <div className="p-8 md:p-12 bg-background">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 text-foreground">
              Built for<br/>
              shipping,<br/>
              not just<br/>
              showing.
            </h2>
            <div className="w-20 h-4 bg-primary border-4 border-foreground shadow-brutalist mb-2"></div>
          </div>
          <div className="p-8 lg:col-span-2 flex flex-wrap gap-4 items-center bg-secondary text-secondary-foreground">
            {capabilities.map((cap) => (
              <div 
                key={cap} 
                className="px-6 py-3 border-4 border-foreground font-black text-lg uppercase bg-card text-card-foreground shadow-brutalist hover-brutalist cursor-crosshair transform hover:-rotate-2"
              >
                {cap}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="bg-primary text-primary-foreground p-8 md:p-16 text-center border-t-8 border-foreground">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 drop-shadow-[4px_4px_0_var(--brutal-shadow)]">
          Need a brutalist<br/>
          product build?
        </h2>
        <Link href="/contact" className="inline-flex items-center justify-center h-20 px-12 border-4 border-foreground bg-card text-card-foreground hover:bg-secondary hover:text-secondary-foreground font-black text-2xl uppercase shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover-brutalist rounded-none">
          Get in touch <ArrowRight className="ml-4 w-8 h-8" />
        </Link>
      </section>
    </main>
  );
}
