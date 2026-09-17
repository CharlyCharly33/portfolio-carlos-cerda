import type { Metadata } from "next";
import { ArrowDown, ArrowLeft, ArrowUpRight, CalendarDays } from "lucide-react";
import { HabitTrackArchitecture, HabitTrackJourney } from "../../components/habittrack-blueprint";
import {
  DEMO_BASE,
  REPO_URL,
  currentLimitations,
  evidenceLinks,
  evolutionStages,
  experienceZones,
  nextBuild,
  productDecisions,
  verifiedState,
} from "../../components/habittrack-project-data";
import { QuickProfileProvider } from "../../components/quick-profile";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { MotionEffects } from "../../motion-effects";

export const metadata: Metadata = {
  title: "HabitTrack | Carlos Cerda",
  description:
    "Caso de estudio de HabitTrack, aplicación web para organizar hábitos diarios y observar el progreso.",
};

const productPrinciples = [
  "Acción inmediata",
  "Información esencial",
  "Claridad visual",
  "Navegación responsive",
  "Progreso comprensible",
  "Complejidad técnica localizada",
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only">(se abre en otra pestaña)</span>
    </a>
  );
}

export default function HabitTrackPage() {
  return (
    <QuickProfileProvider>
      <div className="habittrack-page">
        <SiteHeader />
        <main>
          <section className="project-case-hero" id="producto" aria-labelledby="project-case-title">
            <div className="project-case-shell project-case-hero-layout">
              <div className="project-case-hero-copy reveal">
                <p className="project-case-eyebrow">PROYECTO 02 / SOFTWARE + EXPERIENCIA</p>
                <h1 id="project-case-title">HABITTRACK</h1>
                <p className="project-case-statement">La constancia se construye un día a la vez.</p>
                <p className="project-case-description">
                  Aplicación web para organizar hábitos diarios, registrar acciones y observar el
                  progreso mediante una experiencia clara, directa y responsive.
                </p>
                <span className="project-case-status"><i /> FASE 1 PÚBLICA</span>
                <div className="project-case-actions">
                  <ExternalLink href={`${DEMO_BASE}/app`}>Abrir demo</ExternalLink>
                  <ExternalLink href={REPO_URL}>Ver repositorio</ExternalLink>
                  <a href="#arquitectura">Examinar arquitectura <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="/software"><ArrowLeft size={16} aria-hidden="true" /> Volver a Software</a>
                </div>
              </div>

              <aside className="project-case-drawing reveal" aria-label="Ficha del proyecto HabitTrack">
                <header><span>RITMO SEMANAL / HABITTRACK</span><CalendarDays size={18} aria-hidden="true" /></header>
                <div className="habittrack-rhythm" aria-hidden="true">
                  {["L", "M", "X", "J", "V", "S", "D"].map((day, index) => (
                    <i key={day} className={index < 5 ? "is-done" : index === 5 ? "is-today" : ""}>{day}</i>
                  ))}
                  <small>LUN — VIE COMPLETADO · SÁB HOY · DOM PENDIENTE</small>
                </div>
                <dl>
                  <div><dt>TIPO</dt><dd>Producto personal</dd></div>
                  <div><dt>ROL</dt><dd>Diseño de producto + desarrollo frontend</dd></div>
                  <div><dt>ESTADO</dt><dd>Prototipo funcional en evolución</dd></div>
                  <div><dt>PLATAFORMA</dt><dd>Aplicación web responsive</dd></div>
                  <div><dt>REPO</dt><dd>Público</dd></div>
                  <div><dt>DEMO</dt><dd>Disponible</dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <nav className="project-case-index" aria-label="Índice del caso de estudio">
            <div className="project-case-shell">
              <a href="#producto">Producto</a><a href="#arquitectura">Arquitectura</a><a href="#experiencia">Experiencia</a><a href="#recorrido">Recorrido</a><a href="#decisiones">Decisiones</a><a href="#evolucion">Evolución</a><a href="#estado">Estado</a>
            </div>
          </nav>

          <section className="habittrack-product" aria-labelledby="habittrack-product-title">
            <div className="project-case-shell">
              <SectionHeader number="01" label="FICHA DEL PRODUCTO" title="Menos fricción para mantener lo importante." id="habittrack-product-title" />
              <div className="habittrack-product-brief reveal">
                <article><span>PROBLEMA</span><p>El seguimiento de hábitos suele complicarse con herramientas saturadas, registros excesivos o información difícil de interpretar.</p></article>
                <article><span>RESPUESTA</span><p>Una experiencia directa para identificar los hábitos del día, marcarlos y comprender la constancia sin pasos innecesarios.</p></article>
              </div>
              <div className="habittrack-product-ledger">
                <article className="reveal">
                  <h3>Personas y uso</h3>
                  <ul className="habittrack-audience">
                    <li>Persona que quiere organizar hábitos personales.</li>
                    <li>Usuario que necesita una lectura rápida de su día.</li>
                    <li>Persona que busca observar patrones de constancia.</li>
                  </ul>
                </article>
                <article className="reveal">
                  <h3>Principios del producto</h3>
                  <ul className="habittrack-principles">{productPrinciples.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
            </div>
          </section>

          <section className="habittrack-architecture" id="arquitectura" aria-labelledby="habittrack-architecture-title">
            <div className="project-case-shell">
              <SectionHeader number="02" label="ARQUITECTURA INTERACTIVA" title="Astro estructura. React activa lo necesario." id="habittrack-architecture-title" />
              <div className="reveal"><HabitTrackArchitecture /></div>
            </div>
          </section>

          <section className="habittrack-journey" id="recorrido" aria-labelledby="habittrack-journey-title">
            <div className="project-case-shell">
              <SectionHeader number="03" label="RECORRIDO DEL HÁBITO" title="Una acción cotidiana convertida en una señal visible." id="habittrack-journey-title" />
              <div className="reveal"><HabitTrackJourney /></div>
            </div>
          </section>

          <section className="habittrack-experience" id="experiencia" aria-labelledby="habittrack-experience-title">
            <div className="project-case-shell">
              <SectionHeader number="04" label="MAPA DE EXPERIENCIA" title="Una interfaz completa; una capa de datos todavía temporal." id="habittrack-experience-title" />
              <div className="habittrack-experience-map">
                {experienceZones.map((zone) => (
                  <div className="reveal" key={zone.id}>
                    <article className={`habittrack-zone is-${zone.id}`}>
                      <header><span>{zone.number}</span><div><p>{zone.accessibleState}</p><h3>{zone.label}</h3></div></header>
                      <p className="habittrack-zone-explanation">{zone.explanation}</p>
                      <ul>{zone.items.map((item) => <li key={item.name}><strong>{item.name}</strong><span>{item.scope}</span></li>)}</ul>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="habittrack-decisions" id="decisiones" aria-labelledby="habittrack-decisions-title">
            <div className="project-case-shell">
              <SectionHeader number="05" label="REGISTRO DE DECISIONES" title="Decisiones de producto y frontend, no tarjetas comerciales." id="habittrack-decisions-title" />
              <ol className="habittrack-decision-register reveal">
                {productDecisions.map((item) => (
                  <li key={item.id}>
                    <header><span>{item.id}</span><h3>{item.title}</h3></header>
                    <dl>
                      <div><dt>Decisión</dt><dd>{item.decision}</dd></div>
                      <div><dt>Motivo</dt><dd>{item.reason}</dd></div>
                    </dl>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="habittrack-evolution" id="evolucion" aria-labelledby="habittrack-evolution-title">
            <div className="project-case-shell">
              <SectionHeader number="06" label="EVOLUCIÓN" title="De un seguimiento interactivo a un producto publicado." id="habittrack-evolution-title" />
              <ol className="habittrack-evolution-track reveal">
                {evolutionStages.map((stage) => (
                  <li key={stage.label} className={stage.next ? "is-next" : ""}>
                    <span>{stage.label}</span><i aria-hidden="true" />
                    <ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="habittrack-current" id="estado" aria-labelledby="habittrack-current-title">
            <div className="project-case-shell">
              <SectionHeader number="07" label="ESTADO ACTUAL" title="Una experiencia usable; un producto que aún debe recordar." id="habittrack-current-title" />
              <div className="habittrack-current-board reveal">
                <article>
                  <h3>Ya comprobable</h3>
                  <ul>{verifiedState.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article>
                  <h3>Limitaciones</h3>
                  <ul>{currentLimitations.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article>
                  <h3>Siguiente construcción</h3>
                  <ul>{nextBuild.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
              <p className="habittrack-status-note reveal">
                <strong>La demo pública representa la Fase 1.</strong> Los datos se mantienen
                temporalmente en memoria y pueden reiniciarse al navegar o recargar.
              </p>
            </div>
          </section>

          <section className="habittrack-evidence" aria-labelledby="habittrack-evidence-title">
            <div className="project-case-shell">
              <SectionHeader number="08" label="EVIDENCIA VERIFICABLE" title="Recorre la demo y revisa el código." id="habittrack-evidence-title" />
              <ul className="habittrack-evidence-list reveal">
                {evidenceLinks.map((link) => (
                  <li key={link.label}>
                    <ExternalLink href={link.href}>{link.label}</ExternalLink>
                    <p>{link.description}</p>
                    <span>{link.kind === "demo" ? "DEMO PÚBLICA" : "REPOSITORIO PÚBLICO"} / ESTADO FASE 1</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="habittrack-closing" aria-labelledby="habittrack-closing-title">
            <div className="project-case-shell reveal">
              <p>REGRESAR AL SISTEMA DE PROYECTOS</p>
              <h2 id="habittrack-closing-title">HabitTrack convierte pequeñas acciones en una experiencia de producto.</h2>
              <p>Regresa al explorador para revisar cómo otros proyectos conectan frontend, backend, datos e interfaces.</p>
              <a href="/software"><ArrowLeft size={18} aria-hidden="true" /> Volver a Software + Producto</a>
            </div>
          </section>
        </main>
        <SiteFooter />
        <MotionEffects />
      </div>
    </QuickProfileProvider>
  );
}

function SectionHeader({ number, label, title, id }: { number: string; label: string; title: string; id: string }) {
  return <header className="project-case-section-header reveal"><p>{number} / {label}</p><h2 id={id}>{title}</h2></header>;
}
