import { useEffect, useState } from "react";

const prefersDarkScheme = "(prefers-color-scheme: dark)";

export type ThemePreference = "light" | "dark";

export function usePreferredTheme(initial: ThemePreference = "light") {
  const [theme, setTheme] = useState<ThemePreference>(initial);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const media = window.matchMedia(prefersDarkScheme);
    const updateTheme = () => setTheme(media.matches ? "dark" : "light");

    updateTheme();

    media.addEventListener?.("change", updateTheme);

    return () => {
      media.removeEventListener?.("change", updateTheme);
    };
  }, []);

  return theme;
}

