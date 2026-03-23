"use client";

import { ScrollVelocity } from "@appletosolutions/reactbits";

interface ReactBitsHelloMarqueeProps {
  texts: string[];
}

export function ReactBitsHelloMarquee({ texts }: ReactBitsHelloMarqueeProps) {
  const sequence = texts.join(" • ");

  return (
    <div className="border-y border-white/8 py-4">
      <ScrollVelocity
        texts={[sequence]}
        velocity={60}
        damping={40}
        stiffness={320}
        numCopies={8}
        className="overflow-hidden"
        parallaxClassName="overflow-hidden"
        scrollerClassName="font-display inline-flex whitespace-nowrap [text-wrap:nowrap] text-[2.6rem] leading-none tracking-[-0.03em] text-foreground/90 md:text-[4rem]"
      />
    </div>
  );
}
