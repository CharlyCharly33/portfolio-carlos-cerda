import { ArrowLeft, ArrowRight, ArrowUpRight, Menu } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { QuickProfileTrigger } from "./quick-profile";

const githubUrl = "https://github.com/CharlyCharly33";
const linkedinUrl =
  "https://www.linkedin.com/in/carlos-alberto-cerda-sierra-266604256/";

function NavigationLinks() {
  return (
    <>
      <a href="/">Inicio</a>
      <a href="/#explorar">Explorar</a>
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
  return (
    <header className="site-header">
      <a className="site-brand" href="/" aria-label="Carlos Cerda, ir al inicio">
        CC/
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        <NavigationLinks />
      </nav>

      <div className="header-tools">
        {(previous || next) && (
          <nav className="header-case-nav" aria-label="Navegación secuencial">
            {previous && (
              <a href={previous.href} aria-label={`Anterior: ${previous.label}`}>
                <ArrowLeft size={18} aria-hidden="true" />
                <span className="sr-only">{previous.label}</span>
              </a>
            )}
            {next && (
              <a href={next.href} aria-label={`Siguiente: ${next.label}`}>
                <ArrowRight size={18} aria-hidden="true" />
                <span className="sr-only">{next.label}</span>
              </a>
            )}
          </nav>
        )}
        <ThemeToggle />
        <details className="mobile-nav">
          <summary>
            <Menu size={18} aria-hidden="true" />
            <span>Menú</span>
          </summary>
          <nav aria-label="Navegación móvil">
            <NavigationLinks />
          </nav>
        </details>
      </div>
    </header>
  );
}
