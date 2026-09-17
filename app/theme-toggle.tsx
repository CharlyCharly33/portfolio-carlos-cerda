"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Sincronización única tras montar con la fuente de verdad (data-theme
  // aplicado por el script preventivo del head). El markup renderizado es
  // idéntico en servidor y cliente; solo cambia el label accesible.
  useEffect(() => {
    const active = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(active);
  }, []);

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next: Theme = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("cc-theme", next);
    } catch {
      // Sin almacenamiento disponible: el tema solo aplica a la sesión actual.
    }
    setTheme(next);
  }

  const label = theme === null
    ? "Cambiar tema de color"
    : theme === "dark"
      ? "Cambiar a modo claro"
      : "Cambiar a modo oscuro";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle-icon theme-toggle-icon-light" aria-hidden="true">
        <Sun size={17} aria-hidden="true" />
      </span>
      <span className="theme-toggle-icon theme-toggle-icon-dark" aria-hidden="true">
        <Moon size={17} aria-hidden="true" />
      </span>
    </button>
  );
}
