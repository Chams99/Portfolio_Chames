"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedContent, GradientText } from "@appletosolutions/reactbits";
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
    <div className="relative z-10 grid gap-12 lg:grid-cols-[1.18fr_0.82fr] xl:grid-cols-[1.12fr_0.88fr]">
      <div className="fade-rise">
        <p className="eyebrow">{eyebrow}</p>

        <div className="mt-5 max-w-[min(11ch,100%)] sm:max-w-none">
          <AnimatedContent distance={18} duration={0.8} initialOpacity={0}>
            <div className="display-monument block text-[4rem] leading-[0.98] text-foreground sm:text-[5.4rem] md:text-[6.7rem] lg:text-[8.4rem] xl:text-[9rem] md:whitespace-nowrap">
              Building
            </div>
          </AnimatedContent>
          <AnimatedContent distance={18} duration={0.8} initialOpacity={0} delay={0.06}>
            <div className="display-monument text-[4rem] leading-[0.98] text-foreground sm:text-[5.4rem] md:text-[6.7rem] lg:text-[8.4rem] xl:text-[9rem] md:whitespace-nowrap">
              <GradientText
                className="display-monument inline-block align-baseline"
                colors={["#f3d58a", "#f5ece0", "#d37b59", "#f3d58a"]}
                animationSpeed={6}
              >
                web apps
              </GradientText>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={18} duration={0.8} initialOpacity={0} delay={0.12}>
            <div className="display-monument block text-[4rem] leading-[0.98] text-foreground sm:text-[5.4rem] md:text-[6.7rem] lg:text-[8.4rem] xl:text-[9rem] md:whitespace-nowrap">
              and systems
            </div>
          </AnimatedContent>
          <AnimatedContent distance={18} duration={0.8} initialOpacity={0} delay={0.18}>
            <div className="display-monument block text-[4rem] leading-[0.98] text-foreground sm:text-[5.4rem] md:text-[6.7rem] lg:text-[8.4rem] xl:text-[9rem] md:whitespace-nowrap">
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

      <div className="relative fade-rise [animation-delay:120ms]">
        <div className="grid gap-4 lg:grid-rows-[auto_1fr_auto]">
          <AnimatedContent distance={18} duration={0.75} initialOpacity={0} delay={0.16}>
            <div className="ml-auto max-w-sm rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
              <p className="eyebrow text-white/70">Core stack</p>
              <p className="mt-2 text-sm leading-6 text-white/86">
                Next.js, Flutter, Node.js
              </p>
            </div>
          </AnimatedContent>

          <div className="relative mx-auto w-full max-w-[31rem]">
            <div className="image-frame relative aspect-[4/5] overflow-hidden rounded-[2.6rem]">
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <Image
                src="/images/avatar.webp"
                alt="Chames Dhibi portrait"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <AnimatedContent distance={18} duration={0.75} initialOpacity={0} delay={0.26}>
            <div className="max-w-sm rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
              <p className="eyebrow text-primary">Focus</p>
              <p className="mt-2 text-sm leading-6 text-white/82">
                Web apps, mobile apps, APIs, dashboards
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}
