import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 CARLOS CERDA</span>
      <nav aria-label="Navegación del pie">
        <a href="/software">Software</a>
        <a href="/sistemas">Sistemas</a>
        <a href="https://github.com/CharlyCharly33" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/carlos-alberto-cerda-sierra-266604256/" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
      <Link href="/">Inicio</Link>
    </footer>
  );
}
