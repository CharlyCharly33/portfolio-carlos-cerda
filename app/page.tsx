import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MotionEffects } from "./motion-effects";
import { ProfilePortrait } from "./components/profile-portrait";
import { QuickProfileProvider, QuickProfileTrigger } from "./components/quick-profile";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { WorldPanel } from "./components/world-panel";

const githubUrl = "https://github.com/CharlyCharly33";
const linkedinUrl =
  "https://www.linkedin.com/in/carlos-alberto-cerda-sierra-266604256/";

export default function Home() {
  return (
    <QuickProfileProvider>
      <MotionEffects />
      <SiteHeader />

      <main>
        <section className="world-selector" id="explorar" aria-labelledby="home-title">
          <div className="world-grid reveal-line">
            <figure className="identity-card reveal identity-reveal">
              <div className="identity-frame-label" aria-hidden="true">
                <span>IDENTIDAD / PERFIL</span>
                <i />
              </div>
              <ProfilePortrait />

              <figcaption>
                <span className="identity-signature" aria-hidden="true">CC/</span>
                <p className="identity-name reveal identity-copy">CARLOS CERDA</p>
                <h1 id="home-title" className="reveal identity-copy">
                  Ingeniería en Sistemas
                </h1>
                <p className="identity-location reveal identity-copy">Querétaro, México</p>
                <p className="identity-statement reveal identity-copy">
                  Dos áreas.<br />Una misma forma de resolver.
                </p>

                <QuickProfileTrigger className="profile-trigger reveal identity-action">
                  Ver perfil en 60 segundos
                  <ArrowUpRight size={17} aria-hidden="true" />
                </QuickProfileTrigger>

                <div className="identity-links reveal identity-action">
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                  <a href={linkedinUrl} target="_blank" rel="noreferrer">
                    LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </figcaption>
            </figure>

            <WorldPanel
              world="software"
              label="01 / SOFTWARE + PRODUCTO"
              title="Software + Producto"
              description="Convierto necesidades en productos digitales claros, funcionales y preparados para crecer."
              areas={["DESARROLLO WEB", "INTERFACES", "APIS + DATOS"]}
              experience="eSoft · Actualmente"
              href="/software"
              action="Explorar Software"
            />

            <WorldPanel
              world="systems"
              label="02 / IT + SISTEMAS"
              title="IT + Sistemas"
              description="Mejoro la tecnología que conecta personas, datos, dispositivos y operaciones."
              areas={["SOPORTE", "INFRAESTRUCTURA", "DATOS + AUTOMATIZACIÓN"]}
              experience="TE Connectivity · 1 año"
              href="/sistemas"
              action="Explorar Sistemas"
            />
          </div>

          <div className="exploration-indicator" aria-hidden="true">
            <span>ELIGE UNA RUTA PARA EXPLORAR</span>
            <ArrowDown size={15} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </QuickProfileProvider>
  );
}
