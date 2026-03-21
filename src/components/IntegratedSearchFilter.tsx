"use client";

import { Check, ChevronDown, Filter, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FilterOption } from "@/lib/projectFilters";

interface IntegratedSearchFilterProps {
  onSearch: (query: string) => void;
  onCategoryChange: (categories: string[]) => void;
  onTechnologyChange: (technologies: string[]) => void;
  categories: FilterOption[];
  technologies: FilterOption[];
  selectedCategories: string[];
  selectedTechnologies: string[];
  placeholder?: string;
  className?: string;
}

export function IntegratedSearchFilter({
  onSearch,
  onCategoryChange,
  onTechnologyChange,
  categories,
  technologies,
  selectedCategories,
  selectedTechnologies,
  placeholder = "Search projects...",
  className,
}: IntegratedSearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const maxInitialItems = 4;
  const displayedCategories = showAllCategories ? categories : categories.slice(0, maxInitialItems);
  const displayedTechnologies = showAllTechnologies
    ? technologies
    : technologies.slice(0, maxInitialItems);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      handleClear();
      inputRef.current?.blur();
    }
  };

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const handleTechnologyToggle = (technology: string) => {
    if (selectedTechnologies.includes(technology)) {
      onTechnologyChange(selectedTechnologies.filter((t) => t !== technology));
    } else {
      onTechnologyChange([...selectedTechnologies, technology]);
    }
  };

  const clearAllFilters = () => {
    onCategoryChange([]);
    onTechnologyChange([]);
    setSearchQuery("");
    onSearch("");
  };

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedTechnologies.length > 0 || searchQuery.length > 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`flex flex-col gap-4 w-full ${className || ""}`}>
      <div className="flex items-center gap-2 flex-wrap">
        {/* Search Input */}
        <div
          className={`flex-1 flex items-center gap-2 border-2 border-foreground bg-background px-3 py-2 transition-all ${
            isFocused
              ? "translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0px_0px_var(--brutal-shadow)]"
              : "shadow-[4px_4px_0px_0px_var(--brutal-shadow)]"
          }`}
        >
          <Search className="text-foreground shrink-0" size={20} />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none font-sans text-foreground placeholder:text-muted-foreground w-full min-w-0"
            aria-label="Search projects"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 hover:bg-muted text-foreground transition-colors shrink-0"
              aria-label="Clear search"
              title="Clear search (Esc)"
            >
              <X size={16} />
            </button>
          )}
          {!searchQuery && (
            <div className="hidden sm:flex items-center gap-1 text-xs font-mono font-bold text-muted-foreground shrink-0">
              <kbd className="px-1.5 py-0.5 border-2 border-muted-foreground bg-muted">⌘</kbd>
              <kbd className="px-1.5 py-0.5 border-2 border-muted-foreground bg-muted">K</kbd>
            </div>
          )}
        </div>

        {/* Filter Toggle Button */}
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2 font-bold uppercase tracking-wide border-2 border-foreground transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--brutal-shadow)] ${
            showFilters || hasActiveFilters
              ? "bg-primary text-primary-foreground translate-x-[2px] translate-y-[2px] shadow-[2px_2px_0px_0px_var(--brutal-shadow)]"
              : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground shadow-[4px_4px_0px_0px_var(--brutal-shadow)]"
          }`}
        >
          <Filter size={16} />
          <span className="hidden sm:inline">Filters</span>
          {hasActiveFilters && (
            <span className="bg-background text-foreground text-xs px-1.5 py-0.5 border-2 border-foreground ml-1">
              {selectedCategories.length + selectedTechnologies.length + (searchQuery ? 1 : 0)}
            </span>
          )}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${showFilters ? "rotate-180" : ""}`}
          />
        </button>

        {/* Clear All Button */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAllFilters}
            className="flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wide border-2 border-transparent hover:border-foreground transition-colors hover:bg-muted"
          >
            <X size={14} />
            <span className="hidden sm:inline">Clear all</span>
          </button>
        )}
      </div>

      {/* Filter Panels */}
      {showFilters && (
        <div className="flex flex-col sm:flex-row gap-6 p-4 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_var(--brutal-shadow)]">
          
          {/* Categories */}
          <div className="flex-1 flex flex-col gap-3">
            <h3 className="font-bold uppercase tracking-widest text-sm border-b-2 border-foreground pb-2">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {displayedCategories.map((category) => {
                const isActive = selectedCategories.includes(category.value);
                return (
                  <button
                    type="button"
                    key={category.value}
                    onClick={() => handleCategoryToggle(category.value)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold border-2 transition-colors ${
                      isActive
                        ? "bg-primary border-foreground text-primary-foreground"
                        : "bg-transparent border-foreground hover:bg-secondary text-foreground"
                    }`}
                  >
                    {isActive && <Check size={14} />}
                    <span>{category.label}</span>
                    <span className="opacity-70 text-xs">({category.count})</span>
                  </button>
                );
              })}
              {categories.length > maxInitialItems && (
                <button
                  type="button"
                  onClick={() => setShowAllCategories(!showAllCategories)}
                  className="px-3 py-1.5 text-sm font-bold font-mono underline decoration-2 underline-offset-4 hover:text-primary transition-colors"
                >
                  {showAllCategories ? "Show less" : `Show ${categories.length - maxInitialItems} more`}
                </button>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex-1 flex flex-col gap-3">
            <h3 className="font-bold uppercase tracking-widest text-sm border-b-2 border-foreground pb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {displayedTechnologies.map((technology) => {
                const isActive = selectedTechnologies.includes(technology.value);
                return (
                  <button
                    type="button"
                    key={technology.value}
                    onClick={() => handleTechnologyToggle(technology.value)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold border-2 transition-colors ${
                      isActive
                        ? "bg-primary border-foreground text-primary-foreground"
                        : "bg-transparent border-foreground hover:bg-secondary text-foreground"
                    }`}
                  >
                    {isActive && <Check size={14} />}
                    <span>{technology.label}</span>
                    <span className="opacity-70 text-xs">({technology.count})</span>
                  </button>
                );
              })}
              {technologies.length > maxInitialItems && (
                <button
                  type="button"
                  onClick={() => setShowAllTechnologies(!showAllTechnologies)}
                  className="px-3 py-1.5 text-sm font-bold font-mono underline decoration-2 underline-offset-4 hover:text-primary transition-colors"
                >
                  {showAllTechnologies ? "Show less" : `Show ${technologies.length - maxInitialItems} more`}
                </button>
              )}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
