"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedContent, GradientText, Silk } from "@appletosolutions/reactbits";
import { ReactBitsMagnetLink } from "@/components/ReactBitsMagnetLink";
import { Button } from "@/components/ui/button";

interface ReactBitsHeroProps {
  eyebrow: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export function ReactBitsHero({
  eyebrow,
  body,
  primaryLabel,
  secondaryLabel,
}: ReactBitsHeroProps) {
  return (
    <div className="relative z-10 grid gap-10 lg:grid-cols-[1.22fr_0.78fr] xl:grid-cols-[1.16fr_0.84fr]">
      <div className="fade-rise">
        <p className="eyebrow">{eyebrow}</p>

        <div className="mt-5 max-w-[min(11ch,100%)] sm:max-w-none">
          <AnimatedContent distance={18} duration={0.8} initialOpacity={0}>
            <div className="display-monument block text-[4rem] leading-[0.9] text-foreground sm:text-[5.4rem] md:text-[6.7rem] lg:text-[8.4rem] xl:text-[9.6rem] md:whitespace-nowrap">
              Designing
            </div>
          </AnimatedContent>
          <AnimatedContent distance={18} duration={0.8} initialOpacity={0} delay={0.06}>
            <div className="display-monument text-[4rem] leading-[0.9] text-foreground sm:text-[5.4rem] md:text-[6.7rem] lg:text-[8.4rem] xl:text-[9.6rem] md:whitespace-nowrap">
              <GradientText
                className="display-monument inline-block align-baseline"
                colors={["#f3d58a", "#f5ece0", "#d37b59", "#f3d58a"]}
                animationSpeed={6}
              >
                products
              </GradientText>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={18} duration={0.8} initialOpacity={0} delay={0.12}>
            <div className="display-monument block text-[4rem] leading-[0.9] text-foreground sm:text-[5.4rem] md:text-[6.7rem] lg:text-[8.4rem] xl:text-[9.6rem] md:whitespace-nowrap">
              and interfaces
            </div>
          </AnimatedContent>
          <AnimatedContent distance={18} duration={0.8} initialOpacity={0} delay={0.18}>
            <div className="display-monument block text-[4rem] leading-[0.9] text-foreground sm:text-[5.4rem] md:text-[6.7rem] lg:text-[8.4rem] xl:text-[9.6rem] md:whitespace-nowrap">
              that ship.
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent distance={28} duration={0.9} scale={0.98} initialOpacity={0}>
          <div className="mt-8 max-w-2xl border-l border-primary/40 pl-6">
            <p className="text-lg leading-8 text-muted-foreground">{body}</p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={22} duration={0.85} scale={0.98} initialOpacity={0} delay={0.15}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ReactBitsMagnetLink href="#selected-work">
              <Button className="rounded-full border border-primary/20 px-6 py-6 text-sm uppercase tracking-[0.22em]">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </ReactBitsMagnetLink>

            <ReactBitsMagnetLink href="/contact">
              <Button
                variant="outline"
                className="rounded-full border-white/12 bg-transparent px-6 py-6 text-sm uppercase tracking-[0.22em] text-foreground hover:bg-white/5 hover:text-foreground"
              >
                {secondaryLabel}
              </Button>
            </ReactBitsMagnetLink>
          </div>
        </AnimatedContent>
      </div>

      <div className="relative min-h-[36rem] fade-rise [animation-delay:120ms]">
        <div className="absolute inset-x-10 top-8 bottom-20 overflow-hidden rounded-[2.4rem] border border-white/10">
          <div className="absolute inset-0 opacity-80">
            <Silk speed={4.5} scale={1.1} color="#5c3b2d" noiseIntensity={1.2} rotation={18} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <Image
            src="/images/avatar.webp"
            alt="Chames Dhibi portrait"
            fill
            priority
            className="object-cover mix-blend-screen opacity-70"
          />
        </div>

        <AnimatedContent distance={18} duration={0.75} initialOpacity={0} delay={0.18}>
          <div className="atmospheric-card absolute left-0 top-0 max-w-xs p-5">
            <p className="eyebrow">Current focus</p>
            <p className="mt-3 text-base leading-7 text-foreground/85">
              Product websites, portfolio redesigns, and launch-ready interfaces with stronger visual presence.
            </p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={18} duration={0.75} initialOpacity={0} delay={0.28}>
          <div className="atmospheric-card absolute bottom-0 right-0 max-w-sm p-5">
            <p className="eyebrow text-primary">Atmosphere + clarity</p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              The visual language should feel memorable, but the message still has to land in seconds.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}
