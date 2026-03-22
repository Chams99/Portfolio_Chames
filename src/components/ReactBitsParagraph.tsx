"use client";

import { AnimatedContent } from "@appletosolutions/reactbits";

interface ReactBitsParagraphProps {
  text: string;
  className?: string;
  textClassName?: string;
}

export function ReactBitsParagraph({
  text,
  className = "",
  textClassName = "text-lg leading-8 text-muted-foreground",
}: ReactBitsParagraphProps) {
  return (
    <AnimatedContent
      distance={20}
      duration={0.75}
      scale={0.99}
      initialOpacity={0}
      threshold={0.15}
    >
      <p className={`${textClassName} ${className}`.trim()}>{text}</p>
    </AnimatedContent>
  );
}
