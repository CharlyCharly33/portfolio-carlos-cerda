import type { Metadata } from "next";
import { ArrowDown, ArrowLeft, ArrowUpRight, Filter } from "lucide-react";
import { FocuslyArchitecture, FocuslyAuthFlow, FocuslyFunnel } from "../../components/focusly-blueprint";
import {
  REPO_URL,
  VISUAL_PROTOTYPE_URL,
  authDecisions,
  authLimits,
  decisions,
  evolutionStages,
  matrixZones,
  nextBuild,
  technologies,
  verifiedState,
} from "../../components/focusly-project-data";
import { QuickProfileProvider } from "../../components/quick-profile";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { MotionEffects } from "../../motion-effects";

export const metadata: Metadata = {
  title: "Focusly | Carlos Cerda",
  description:
    "Prototipo full stack de adquisición y autenticación para un concepto de producto enfocado en productividad.",
};

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only">(se abre en otra pestaña)</span>
    </a>
  );
}

export default function FocuslyPage() {
  return (
    <QuickProfileProvider>
      <div className="focusly-page">
        <SiteHeader />
        <main>
          <section className="project-case-hero" aria-labelledby="project-case-title">
            <div className="project-case-shell project-case-hero-layout">
              <div className="project-case-hero-copy reveal">
                <p className="project-case-eyebrow">PROYECTO 04 / SOFTWARE + ADQUISICIÓN</p>
                <h1 id="project-case-title">FOCUSLY</h1>
                <p className="project-case-statement">Primero la promesa; después la sesión.</p>
                <p className="project-case-description">
                  Prototipo full stack de adquisición y autenticación para un concepto de
                  productividad: landing responsive, registro, login con sesiones PHP y persistencia
                  MySQL en un entorno local.
                </p>
                <span className="project-case-status"><i /> PROTOTIPO FULL STACK LOCAL</span>
                <div className="project-case-actions">
                  <a href="#embudo">Examinar embudo <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="#estado">Ver estado real <ArrowDown size={17} aria-hidden="true" /></a>
                  <ExternalLink href={REPO_URL}>Ver repositorio</ExternalLink>
                  <a href="/software"><ArrowLeft size={16} aria-hidden="true" /> Volver a Software</a>
                </div>
              </div>

              <aside className="project-case-drawing reveal" aria-label="Ficha del proyecto Focusly">
                <header><span>EMBUDO TÉCNICO / FOCUSLY</span><Filter size={18} aria-hidden="true" /></header>
                <div className="focusly-funnel-mark" aria-hidden="true">
                  <i>PROMESA</i><i>INTERÉS</i><i>VALIDACIÓN</i><i>CUENTA</i><i>SESIÓN</i>
                </div>
                <dl>
                  <div><dt>TIPO</dt><dd>Prototipo personal full stack</dd></div>
                  <div><dt>ROL</dt><dd>Diseño y desarrollo frontend + backend local</dd></div>
                  <div><dt>ESTADO</dt><dd>Adquisición y autenticación funcionales en local</dd></div>
                  <div><dt>ENTORNO</dt><dd>PHP y MySQL local</dd></div>
                  <div><dt>REPO</dt><dd>Público</dd></div>
                  <div><dt>DEMO</dt><dd>Prototipo visual estático</dd></div>
                </dl>
                <div className="focusly-visual-link">
                  <ExternalLink href={VISUAL_PROTOTYPE_URL}>Ver prototipo visual</ExternalLink>
                  <p>La publicación muestra la experiencia visual. Registro e inicio de sesión requieren un entorno PHP/MySQL local.</p>
                </div>
              </aside>
            </div>
          </section>

          <nav className="project-case-index" aria-label="Índice del caso de estudio">
            <div className="project-case-shell">
              <a href="#proposito">Propósito</a><a href="#embudo">Embudo</a><a href="#arquitectura">Arquitectura</a><a href="#autenticacion">Autenticación</a><a href="#matriz">Matriz</a><a href="#decisiones">Decisiones</a><a href="#evolucion">Evolución</a><a href="#estado">Estado</a>
            </div>
          </nav>

          <section className="focusly-purpose" id="proposito" aria-labelledby="focusly-purpose-title">
            <div className="project-case-shell">
              <SectionHeader number="01" label="PROMESA Y SISTEMA" title="Una landing atrae; el sistema decide qué ocurre después." id="focusly-purpose-title" />
              <p className="focusly-section-intro reveal">
                Focusly explora cómo una propuesta visual de productividad puede transformarse en un
                recorrido técnico de registro, autenticación y sesión.
              </p>
              <div className="focusly-purpose-ledger">
                <article className="reveal">
                  <h3>Lo que el sistema hace</h3>
                  <ul>
                    <li>Presenta una landing responsive</li>
                    <li>Navega entre secciones</li>
                    <li>Valida formularios en frontend</li>
                    <li>Valida nuevamente en backend</li>
                    <li>Registra cuentas</li>
                    <li>Protege contraseñas con hash</li>
                    <li>Autentica credenciales</li>
                    <li>Mantiene una sesión PHP</li>
                    <li>Consulta el estado de la sesión</li>
                    <li>Cierra la sesión</li>
                    <li>Incluye páginas de privacidad, términos y contacto</li>
                  </ul>
                </article>
                <article className="reveal">
                  <h3>Lo que la landing ilustra</h3>
                  <ul>
                    <li>Temporizador de enfoque</li>
                    <li>Gestión de tareas</li>
                    <li>Estadísticas</li>
                    <li>Seguimiento de hábitos</li>
                    <li>Metas</li>
                    <li>Rachas</li>
                    <li>Resultados de productividad</li>
                    <li>Testimonios</li>
                    <li>Comunidad de usuarios</li>
                  </ul>
                  <p>Estas capacidades aparecen como narrativa visual del producto, pero todavía no forman parte de una aplicación funcional.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="focusly-funnel" id="embudo" aria-labelledby="focusly-funnel-title">
            <div className="project-case-shell">
              <SectionHeader number="02" label="EMBUDO DE ADQUISICIÓN" title="Cada paso convierte intención visual en estado técnico." id="focusly-funnel-title" />
              <div className="reveal"><FocuslyFunnel /></div>
            </div>
          </section>

          <section className="focusly-architecture" id="arquitectura" aria-labelledby="focusly-architecture-title">
            <div className="project-case-shell">
              <SectionHeader number="03" label="ARQUITECTURA ACTUAL" title="La experiencia pública y la operación local viven en entornos distintos." id="focusly-architecture-title" />
              <div className="reveal"><FocuslyArchitecture /></div>
              <p className="focusly-env-note reveal">
                GitHub Pages publica la landing y sus páginas estáticas, pero no ejecuta la API PHP
                ni la base de datos. El flujo completo de autenticación requiere un entorno local compatible.
              </p>
            </div>
          </section>

          <section className="focusly-auth" id="autenticacion" aria-labelledby="focusly-auth-title">
            <div className="project-case-shell">
              <SectionHeader number="04" label="RECORRIDO AUTENTICADO" title="La cuenta se construye validando cada frontera." id="focusly-auth-title" />
              <div className="reveal"><FocuslyAuthFlow /></div>
              <div className="focusly-auth-ledger">
                <article className="reveal">
                  <h3>Decisiones verificadas</h3>
                  <ul>{authDecisions.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article className="reveal">
                  <h3>Trabajo pendiente de hardening</h3>
                  <ul>{authLimits.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
            </div>
          </section>

          <section className="focusly-matrix" id="matriz" aria-labelledby="focusly-matrix-title">
            <div className="project-case-shell">
              <SectionHeader number="05" label="MAPA DE REALIDAD" title="No todo lo que se visualiza tiene el mismo nivel de implementación." id="focusly-matrix-title" />
              <div className="focusly-matrix-map">
                {matrixZones.map((zone) => (
                  <div className="reveal" key={zone.id}>
                    <article className={`focusly-zone is-${zone.id}`}>
                      <header><span>{zone.letter}</span><div><p>{zone.accessibleState}</p><h3>{zone.label}</h3></div></header>
                      <ul>{zone.items.map((item) => <li key={item}>{item}</li>)}</ul>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="focusly-decisions" id="decisiones" aria-labelledby="focusly-decisions-title">
            <div className="project-case-shell">
              <SectionHeader number="06" label="REGISTRO DE DECISIONES" title="El prototipo creció desde presentación hasta estado persistente." id="focusly-decisions-title" />
              <ol className="focusly-decision-register reveal">
                {decisions.map((item) => (
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

          <section className="focusly-evolution" id="evolucion" aria-labelledby="focusly-evolution-title">
            <div className="project-case-shell">
              <SectionHeader number="07" label="EVOLUCIÓN COMPROBABLE" title="La landing ganó profundidad al atravesar el frontend." id="focusly-evolution-title" />
              <ol className="focusly-evolution-track reveal">
                {evolutionStages.map((stage) => (
                  <li key={stage.label} className={stage.next ? "is-next" : ""}>
                    <span>{stage.next ? "07 / Producto funcional — Siguiente construcción" : stage.label}</span><i aria-hidden="true" />
                    <ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="focusly-current" id="estado" aria-labelledby="focusly-current-title">
            <div className="project-case-shell">
              <SectionHeader number="08" label="ESTADO ACTUAL" title="Una adquisición funcional en local; un producto todavía representado." id="focusly-current-title" />
              <div className="focusly-current-board reveal">
                <article>
                  <h3>Ya comprobable</h3>
                  <ul>{verifiedState.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article>
                  <h3>Siguiente construcción</h3>
                  <ul>{nextBuild.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
              <div className="focusly-tech-ledger reveal" aria-label="Tecnologías verificadas de Focusly">
                <h3>Tecnologías verificadas</h3>
                <ul>{technologies.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <p className="focusly-status-note reveal">
                <strong>La publicación pública funciona como prototipo visual.</strong> El flujo de
                autenticación completo se ejecuta únicamente en un entorno PHP/MySQL local.
              </p>
            </div>
          </section>

          <section className="focusly-closing" aria-labelledby="focusly-closing-title">
            <div className="project-case-shell reveal">
              <p>REGRESAR AL SISTEMA DE PROYECTOS</p>
              <h2 id="focusly-closing-title">Focusly convierte una promesa visual en una frontera técnica real.</h2>
              <p>Explora cómo producto, interfaces, backend y datos se conectan en los demás proyectos.</p>
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
