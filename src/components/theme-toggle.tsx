"use client";

import { motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();

  return (
    <div className={cn("relative flex w-fit items-center", className)}>
      <button
        className="relative z-10 flex flex-1 items-center gap-2 px-3 py-3 text-sm font-medium text-gray-50 transition-colors md:py-1.5 md:pl-3 md:pr-3.5 dark:text-gray-300"
        onClick={() => setTheme("light")}
        aria-label="Light theme"
      >
        <Sun className="size-4" />
        <span>Light</span>
      </button>
      <button
        className="relative z-10 flex flex-1 items-center gap-2 px-3 py-3 text-sm font-medium text-gray-800 transition-colors md:py-1.5 md:pl-3 md:pr-3.5 dark:text-gray-50"
        onClick={() => setTheme("dark")}
        aria-label="Dark theme"
      >
        <MoonStar className="size-4" />
        <span>Dark</span>
      </button>
      <div className="absolute inset-0 z-0 flex justify-start dark:justify-end">
        <motion.span
          layout
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="h-full w-1/2 rounded bg-gradient-to-r from-blue-500 to-sky-400 dark:from-purple-500/25 dark:to-purple-600"
        />
      </div>
    </div>
  );
}
