import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionEffects } from "../motion-effects";
import { QuickProfileProvider } from "../components/quick-profile";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SoftwareProjectExplorer } from "../components/software-project-explorer";

export default function SoftwarePage() {
  return (
    <QuickProfileProvider>
      <MotionEffects />
      <SiteHeader />

      <main className="software-page">
        <section className="software-intro" aria-labelledby="software-title">
          <div className="software-shell software-intro-layout">
            <div className="software-intro-copy">
              <p className="software-kicker reveal">CC/ SISTEMA / SOFTWARE</p>
              <h1 id="software-title" className="reveal">SOFTWARE + PRODUCTO</h1>
              <p className="software-lead reveal">
                De una necesidad inicial a una solución digital estructurada,
                funcional y preparada para evolucionar.
              </p>

              <div className="software-intro-actions reveal">
                <a className="software-action software-action-primary" href="#software-projects">
                  Ver proyectos <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="software-action" href="/sistemas">
                  Cambiar a Sistemas <ArrowRight size={17} aria-hidden="true" />
                </a>
                <Link className="software-text-link" href="/">
                  <ArrowLeft size={15} aria-hidden="true" /> Volver al inicio
                </Link>
              </div>
            </div>

            <div className="software-intro-blueprint reveal" aria-hidden="true">
              <div className="blueprint-window blueprint-window-main">
                <span /><span /><span />
              </div>
              <div className="blueprint-window blueprint-window-data">
                <i /><i /><i />
              </div>
              <div className="blueprint-window blueprint-window-flow">
                <b /><b /><b />
              </div>
              <div className="blueprint-path"><i /><i /><i /></div>
              <p>NECESIDAD → ESTRUCTURA → PRODUCTO</p>
            </div>
          </div>
        </section>

        <SoftwareProjectExplorer />

        <section className="software-transition" aria-labelledby="systems-transition-title">
          <div className="software-shell software-transition-layout reveal">
            <p>SIGUIENTE SISTEMA</p>
            <div>
              <h2 id="systems-transition-title">La infraestructura detrás de las soluciones.</h2>
              <p>
                También trabajo con la tecnología que conecta personas, datos,
                dispositivos y operaciones.
              </p>
            </div>
            <a href="/sistemas">
              Explorar IT + Sistemas <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </QuickProfileProvider>
  );
}
