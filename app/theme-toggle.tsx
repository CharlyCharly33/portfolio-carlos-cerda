"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const active = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(active);
    setReady(true);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("cc-theme", next);
    setTheme(next);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
    >
      <span>{ready && theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</span>
      <small>{ready ? (theme === "dark" ? "LIGHT" : "DARK") : "THEME"}</small>
    </button>
  );
}
