"use client";

import { useEffect, useState } from "react";
import { List, ChevronRight } from "lucide-react";
import type { BlogTableOfContent } from "@/data/blogs";

interface BlogTableOfContentsProps {
  items: BlogTableOfContent[];
}

export default function BlogTableOfContents({ items }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Table of Contents"
      className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4"
    >
      <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
        <List className="w-4 h-4 text-[#1E6DEB]" aria-hidden="true" />
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
          Table of Contents
        </h3>
      </div>

      <ul className="space-y-2 text-xs font-medium">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`flex items-start gap-2 py-1.5 px-2.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#F0F6FE] text-[#1E6DEB] font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <ChevronRight
                  className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-transform ${
                    isActive ? "text-[#1E6DEB] translate-x-0.5" : "text-slate-400"
                  }`}
                  aria-hidden="true"
                />
                <span className="leading-snug">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
