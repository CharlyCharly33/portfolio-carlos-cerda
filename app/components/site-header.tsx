"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "../theme-toggle";
import { QuickProfileTrigger } from "./quick-profile";

const githubUrl = "https://github.com/CharlyCharly33";
const linkedinUrl =
  "https://www.linkedin.com/in/carlos-alberto-cerda-sierra-266604256/";

function NavigationLinks({ showSections = false }: { showSections?: boolean }) {
  return (
    <>
      <Link href="/">Inicio</Link>
      <Link href="/#explorar">Explorar</Link>
      {showSections && (
        <>
          <Link href="/software">Software</Link>
          <Link href="/sistemas">Sistemas</Link>
        </>
      )}
      <QuickProfileTrigger className="header-link">Perfil rápido</QuickProfileTrigger>
      <a href={githubUrl} target="_blank" rel="noreferrer">
        GitHub <ArrowUpRight size={13} aria-hidden="true" />
      </a>
      <a href={linkedinUrl} target="_blank" rel="noreferrer">
        LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
      </a>
    </>
  );
}

export type SequentialLink = {
  href: string;
  label: string;
};

export function SiteHeader({ previous, next }: {
  previous?: SequentialLink;
  next?: SequentialLink;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    function handleScroll() {
      setMenuOpen(false);
    }
    function handlePointerDown(event: PointerEvent) {
      const root = detailsRef.current;
      if (root && event.target instanceof Node && !root.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    function handleNavigate() {
      setMenuOpen(false);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("vinext:navigate", handleNavigate);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("vinext:navigate", handleNavigate);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Link className="site-brand" href="/" aria-label="Carlos Cerda, ir al inicio">
        CC/
      </Link>

      <nav className="desktop-nav" aria-label="Navegación principal">
        <NavigationLinks />
      </nav>

      <div className="header-tools">
        {(previous || next) && (
          <nav className="header-case-nav" aria-label="Navegación secuencial">
            {previous && (
              <Link href={previous.href} aria-label={`Anterior: ${previous.label}`}>
                <ArrowLeft size={18} aria-hidden="true" />
                <span className="sr-only">{previous.label}</span>
              </Link>
            )}
            {next && (
              <Link href={next.href} aria-label={`Siguiente: ${next.label}`}>
                <ArrowRight size={18} aria-hidden="true" />
                <span className="sr-only">{next.label}</span>
              </Link>
            )}
          </nav>
        )}
        <ThemeToggle />
        <details
          className="mobile-nav"
          ref={detailsRef}
          open={menuOpen}
          onToggle={(event) => setMenuOpen(event.currentTarget.open)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
            }
          }}
        >
          <summary aria-expanded={menuOpen} aria-controls="navegacion-movil">
            <Menu size={18} aria-hidden="true" />
            <span>Menú</span>
          </summary>
          <nav id="navegacion-movil" aria-label="Navegación móvil" onClick={closeMenu}>
            <NavigationLinks showSections />
          </nav>
        </details>
      </div>
    </header>
  );
}
