"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";
import { House, User, GridFour, EnvelopeSimple, Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Map routes to phosphor icons
const iconMap: Record<string, React.ReactNode> = {
  "/": <House weight="bold" className="w-4 h-4" />,
  "/about": <User weight="bold" className="w-4 h-4" />,
  "/work": <GridFour weight="bold" className="w-4 h-4" />,
  "/contact": <EnvelopeSimple weight="bold" className="w-4 h-4" />,
};

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none hidden md:flex">
      <header className="pointer-events-auto bg-background border-2 border-foreground shadow-brutalist flex items-center p-2">
        <nav className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest font-extrabold" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = iconMap[item.href];

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 border-2 transition-all duration-200 active:translate-x-0 active:translate-y-0 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-foreground relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[6px] after:bg-foreground"
                    : "border-transparent hover:border-foreground hover:bg-secondary hover:text-secondary-foreground hover:-translate-x-[2px] hover:-translate-y-[2px]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {Icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
          
          <div className="w-[2px] h-6 bg-foreground opacity-20 mx-1 rounded-full"></div>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center justify-center p-2 border-2 border-transparent hover:border-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun weight="bold" className="w-5 h-5" />
              ) : (
                <Moon weight="bold" className="w-5 h-5" />
              )}
            </button>
          )}
        </nav>
      </header>
    </div>
  );
}