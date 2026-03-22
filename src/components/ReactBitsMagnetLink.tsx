"use client";

import type { ReactNode } from "react";
import Link from "next/link";

interface ReactBitsMagnetLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ReactBitsMagnetLink({
  href,
  children,
  className = "",
}: ReactBitsMagnetLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex transition-transform duration-300 ease-out hover:-translate-y-0.5 ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
