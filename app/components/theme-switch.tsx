"use client";
import * as React from "react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { FaCircleHalfStroke } from "react-icons/fa6";

const storageKey = "theme-preference";

const THEME_BG = { light: "#ffffff", dark: "#0d1117" } as const;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">("light");
  const [transitionTarget, setTransitionTarget] = React.useState<"light" | "dark" | null>(null);
  const [overlayExiting, setOverlayExiting] = React.useState(false);

  const getColorPreference = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      const storedPreference = localStorage.getItem(storageKey);
      if (storedPreference) return storedPreference as "light" | "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  };

  const reflectPreference = (theme: "light" | "dark") => {
    document.documentElement.classList.remove("bg-light", "bg-dark");
    document.documentElement.classList.add(`bg-${theme}`);
    setCurrentTheme(theme);
    setTheme(theme);
  };

  React.useEffect(() => {
    setMounted(true);
    reflectPreference(getColorPreference());
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      localStorage.setItem(storageKey, newTheme);
      reflectPreference(newTheme);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme]);

  // When overlay is shown, start exit animation after paint
  React.useEffect(() => {
    if (transitionTarget === null) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setOverlayExiting(true));
    });
    return () => cancelAnimationFrame(id);
  }, [transitionTarget]);

  const handleTransitionEnd = () => {
    setTransitionTarget(null);
    setOverlayExiting(false);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    setTransitionTarget(newTheme);
    reflectPreference(newTheme);
  };

  const overlay =
    transitionTarget !== null && typeof document !== "undefined"
      ? createPortal(
          <div
            role="presentation"
            aria-hidden="true"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              backgroundColor: THEME_BG[transitionTarget],
              opacity: overlayExiting ? 0 : 1,
              pointerEvents: overlayExiting ? "none" : "auto",
              transition: "opacity 0.35s ease-out",
            }}
            onTransitionEnd={handleTransitionEnd}
          />,
          document.body
        )
      : null;

  if (!mounted) {
    return (
      <FaCircleHalfStroke
        className="h-4 w-4 text-[#57606a] dark:text-[#8b949e]"
        aria-hidden="true"
      />
    );
  }

  return (
    <>
      {overlay}
      <button
        id="theme-toggle"
        aria-label={`${currentTheme} mode`}
        onClick={toggleTheme}
        className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 md:min-w-0 md:min-h-0 md:p-0 rounded-lg transition-all duration-200 text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-[#c9d1d9] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] hover:scale-110 active:scale-95"
      >
        <FaCircleHalfStroke className="h-4 w-4 shrink-0" />
      </button>
    </>
  );
};