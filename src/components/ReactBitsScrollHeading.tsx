"use client";

interface ReactBitsScrollHeadingProps {
  text: string;
  className?: string;
}

export function ReactBitsScrollHeading({
  text,
  className = "",
}: ReactBitsScrollHeadingProps) {
  return (
    <div
      className={`display-monument max-w-4xl text-balance text-[3.5rem] leading-[0.92] text-foreground sm:text-[4.5rem] md:text-[6rem] ${className}`}
    >
      {text}
    </div>
  );
}
