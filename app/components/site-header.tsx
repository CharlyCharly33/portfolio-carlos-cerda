import { ArrowUpRight, Menu } from "lucide-react";
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

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-brand" href="/" aria-label="Carlos Cerda, ir al inicio">
        CC/
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        <NavigationLinks />
      </nav>

      <div className="header-tools">
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
