import { ArrowDown, ArrowUpRight, Database, Network, ScanText, Wrench } from "lucide-react";
import { QuickProfileProvider } from "../components/quick-profile";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SystemsRouteExplorer } from "../components/systems-route-explorer";
import { MotionEffects } from "../motion-effects";

export default function SystemsPage() {
  return (
    <QuickProfileProvider>
      <div className="systems-page">
        <SiteHeader />
        <main>
          <section className="systems-intro" aria-labelledby="systems-title">
            <div className="systems-shell systems-intro-layout">
              <div className="systems-intro-copy reveal">
                <p className="systems-kicker">SISTEMAS / OPERACIÓN / INFRAESTRUCTURA</p>
                <h1 id="systems-title">Resolver también es entender el sistema completo.</h1>
                <p className="systems-intro-description">
                  Soporte IT, datos y automatización conectados por un mismo
                  enfoque: observar, diagnosticar, intervenir y verificar.
                </p>
                <div className="systems-intro-actions">
                  <a href="#systems-cases">Explorar casos <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="/software">Ver Software <ArrowUpRight size={17} aria-hidden="true" /></a>
                </div>
              </div>

              <div className="systems-console reveal" aria-label="Mapa conceptual de sistemas">
                <header><span>OPS.CONSOLE</span><i>ESTADO / OBSERVABLE</i></header>
                <div className="systems-console-grid" aria-hidden="true">
                  <span className="systems-console-node node-support"><Wrench /><small>SOPORTE</small></span>
                  <span className="systems-console-node node-data"><Database /><small>DATOS</small></span>
                  <span className="systems-console-node node-automation"><ScanText /><small>AUTOMATIZACIÓN</small></span>
                  <span className="systems-console-core"><Network /><strong>SISTEMA</strong><small>VERIFICADO</small></span>
                  <i className="console-line line-one" />
                  <i className="console-line line-two" />
                  <i className="console-line line-three" />
                </div>
                <footer><span>SEÑAL</span><b /><b /><b /><i>CONTEXTO → ACCIÓN → VALIDACIÓN</i></footer>
              </div>
            </div>
          </section>

          <SystemsRouteExplorer />

          <section className="systems-transition" aria-labelledby="systems-transition-title">
            <div className="systems-shell systems-transition-layout reveal">
              <p>03 / DOS PERSPECTIVAS</p>
              <h2 id="systems-transition-title">Operar sistemas. Construir productos.</h2>
              <p>La experiencia técnica también informa cómo diseño software: considerando contexto, fallos, datos y personas desde el inicio.</p>
              <a href="/software">Explorar Software <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </section>
        </main>
        <SiteFooter />
        <MotionEffects />
      </div>
    </QuickProfileProvider>
  );
}
