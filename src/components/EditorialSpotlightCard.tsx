"use client";

import type { ReactNode } from "react";
import { AnimatedContent, SpotlightCard } from "@appletosolutions/reactbits";

interface EditorialSpotlightCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  delay?: number;
}

export function EditorialSpotlightCard({
  children,
  className = "",
  contentClassName = "",
  delay = 0,
}: EditorialSpotlightCardProps) {
  return (
    <AnimatedContent
      distance={30}
      duration={0.85}
      scale={0.985}
      initialOpacity={0}
      threshold={0.16}
      delay={delay}
    >
      <div className={className}>
        <SpotlightCard
          className={`rounded-[2rem] border border-white/8 bg-white/[0.025] ${contentClassName}`.trim()}
          spotlightColor="rgba(232, 188, 125, 0.12)"
        >
          {children}
        </SpotlightCard>
      </div>
    </AnimatedContent>
  );
}
