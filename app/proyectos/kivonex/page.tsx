import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowLeft,
  Check,
  CircleUserRound,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { KivonexArchitecture, KivonexMembershipFlow } from "../../components/kivonex-blueprint";
import {
  currentState,
  engineeringDecisions,
  implementationZones,
  membershipRules,
  projectEvolution,
  technologies,
} from "../../components/kivonex-project-data";
import { QuickProfileProvider } from "../../components/quick-profile";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { MotionEffects } from "../../motion-effects";

export const metadata: Metadata = {
  title: "Kivonex | Carlos Cerda",
  description:
    "Caso de estudio de Kivonex, sistema full stack para la gestión modular de gimnasios pequeños y medianos.",
};

const productPrinciples = [
  "Facilidad de uso",
  "Información centralizada",
  "Seguridad por roles",
  "Desarrollo modular",
  "Preparación para integraciones futuras",
  "Crecimiento progresivo",
];

export default function KivonexPage() {
  return (
    <QuickProfileProvider>
      <div className="kivonex-page">
        <SiteHeader />
        <main>
          <section className="project-case-hero" id="producto" aria-labelledby="project-case-title">
            <div className="project-case-shell project-case-hero-layout">
              <div className="project-case-hero-copy reveal">
                <p className="project-case-eyebrow">PROYECTO 01 / SOFTWARE + PRODUCTO</p>
                <h1 id="project-case-title">KIVONEX</h1>
                <p className="project-case-statement">Gestión que mantiene tu gimnasio en movimiento.</p>
                <p className="project-case-description">Sistema web para centralizar socios, usuarios internos, planes, membresías y operaciones esenciales de gimnasios pequeños y medianos.</p>
                <span className="project-case-status"><i /> MVP EN DESARROLLO</span>
                <div className="project-case-actions">
                  <a href="#arquitectura">Examinar arquitectura <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="#implementacion">Ver estado real <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="/software"><ArrowLeft size={16} aria-hidden="true" /> Volver a Software</a>
                </div>
              </div>

              <aside className="project-case-drawing reveal" aria-label="Ficha del proyecto Kivonex">
                <header><span>MESA DE PLANOS / KIVONEX</span><LockKeyhole size={18} aria-hidden="true" /></header>
                <div className="project-case-mark" aria-hidden="true"><b>K</b><i /><i /><i /></div>
                <dl>
                  <div><dt>TIPO</dt><dd>Producto personal</dd></div>
                  <div><dt>ROL</dt><dd>Dirección de producto + desarrollo full stack</dd></div>
                  <div><dt>ESTADO</dt><dd>MVP en desarrollo</dd></div>
                  <div><dt>REPO</dt><dd>Privado</dd></div>
                  <div><dt>PLATAFORMA</dt><dd>Aplicación web responsive</dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <nav className="project-case-index" aria-label="Índice del caso de estudio">
            <div className="project-case-shell">
              <a href="#producto">Producto</a><a href="#arquitectura">Arquitectura</a><a href="#implementacion">Implementación</a><a href="#flujo">Flujo</a><a href="#decisiones">Decisiones</a><a href="#evolucion">Evolución</a><a href="#estado">Estado</a>
            </div>
          </nav>

          <section className="kivonex-product" aria-labelledby="kivonex-product-title">
            <div className="project-case-shell">
              <SectionHeader number="01" label="FICHA DEL PRODUCTO" title="Una operación centralizada, construida por etapas." id="kivonex-product-title" />
              <div className="kivonex-product-brief reveal">
                <article><span>PROBLEMA</span><p>Procesos separados y manuales dificultan el seguimiento de socios, membresías, cobros y accesos.</p></article>
                <article><span>RESPUESTA</span><p>Una plataforma modular que concentra las operaciones principales en un mismo sistema.</p></article>
              </div>
              <div className="kivonex-product-ledger">
                <article className="reveal">
                  <h3>Personas y alcance</h3>
                  <dl className="kivonex-audience">
                    <div><dt>Usuarios iniciales</dt><dd>Administrador o dueño<br />Recepcionista</dd></div>
                    <div><dt>Usuario futuro</dt><dd>Socio mediante PWA o aplicación posterior</dd></div>
                  </dl>
                </article>
                <article className="reveal">
                  <h3>Principios del producto</h3>
                  <ul className="kivonex-principles">{productPrinciples.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
              <aside className="kivonex-participation reveal"><span>PARTICIPACIÓN DE CARLOS</span><h3>Dirección de producto y desarrollo full stack</h3><p>Definición de visión y alcance, priorización del MVP, diseño de arquitectura, modelado de datos, implementación frontend y backend, reglas de negocio, pruebas, documentación técnica y control de versiones.</p></aside>
              <div className="kivonex-tech-ledger reveal" aria-label="Tecnologías verificadas de Kivonex">
                {technologies.map((group) => <section key={group.area}><h3>{group.area}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}
              </div>
            </div>
          </section>

          <section className="kivonex-architecture" id="arquitectura" aria-labelledby="kivonex-architecture-title">
            <div className="project-case-shell">
              <SectionHeader number="02" label="ARQUITECTURA INTERACTIVA" title="Cinco capas; una dirección clara de las dependencias." id="kivonex-architecture-title" />
              <div className="reveal"><KivonexArchitecture /></div>
            </div>
          </section>

          <section className="kivonex-implementation" id="implementacion" aria-labelledby="kivonex-implementation-title">
            <div className="project-case-shell">
              <SectionHeader number="03" label="MAPA DE IMPLEMENTACIÓN" title="El código no avanza todo al mismo ritmo." id="kivonex-implementation-title" />
              <p className="kivonex-section-intro reveal">La interfaz, la API y el modelo de datos evolucionan por incrementos. Este mapa diferencia lo que puede operarse desde la interfaz, lo que ya existe en backend y lo que permanece planeado.</p>
              <div className="kivonex-implementation-map">
                {implementationZones.map((zone) => (
                  <div className="reveal" key={zone.id}>
                    <article className={`kivonex-zone is-${zone.id}`}>
                      <header><span>{zone.number}</span><div><p>{zone.accessibleState}</p><h3>{zone.label}</h3></div></header>
                      <p>{zone.explanation}</p>
                      <div className="kivonex-zone-modules">{zone.modules.map((module) => <section key={module.name}><h4>{module.name}</h4><p>{module.scope}</p></section>)}</div>
                      <details><summary>Ver alcance auditado</summary><ul>{zone.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></details>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="kivonex-flow" id="flujo" aria-labelledby="kivonex-flow-title">
            <div className="project-case-shell">
              <SectionHeader number="04" label="FLUJO TÉCNICO DESTACADO" title="Asignar una membresía es una sola operación de negocio." id="kivonex-flow-title" />
              <div className="reveal"><KivonexMembershipFlow /></div>
              <div className="kivonex-rule-register reveal">
                <header><ShieldCheck size={21} aria-hidden="true" /><h3>Reglas verificadas del recorrido</h3></header>
                <ul>{membershipRules.map((rule, index) => <li key={rule}><span>{String(index + 1).padStart(2, "0")}</span>{rule}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className="kivonex-decisions" id="decisiones" aria-labelledby="kivonex-decisions-title">
            <div className="project-case-shell">
              <SectionHeader number="05" label="REGISTRO DE DECISIONES" title="Las decisiones protegen la operación antes de añadir escala." id="kivonex-decisions-title" />
              <ol className="kivonex-adr-register reveal">
                {engineeringDecisions.map((adr) => <li key={adr.id}><header><span>{adr.id}</span><h3>{adr.title}</h3></header><dl><div><dt>Decisión</dt><dd>{adr.decision}</dd></div><div><dt>Motivo</dt><dd>{adr.reason}</dd></div></dl></li>)}
              </ol>
            </div>
          </section>

          <section className="kivonex-evolution" id="evolucion" aria-labelledby="kivonex-evolution-title">
            <div className="project-case-shell">
              <SectionHeader number="06" label="EVOLUCIÓN AUDITADA" title="El sistema crece por incrementos comprobables." id="kivonex-evolution-title" />
              <ol className="kivonex-evolution-track reveal">
                {projectEvolution.map((stage) => <li key={stage.label}><span>{stage.label}</span><i aria-hidden="true" /><ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul></li>)}
              </ol>
              <p className="kivonex-documentation-note reveal">La documentación general del repositorio todavía describe un estado anterior y deberá actualizarse para reflejar estos incrementos.</p>
            </div>
          </section>

          <section className="kivonex-current" id="estado" aria-labelledby="kivonex-current-title">
            <div className="project-case-shell">
              <SectionHeader number="07" label="ESTADO ACTUAL" title="Una base operativa real; un MVP todavía abierto." id="kivonex-current-title" />
              <div className="kivonex-current-board reveal">
                <article><header><Check size={20} aria-hidden="true" /><h3>Ya comprobable</h3></header><ul>{currentState.verified.map((item) => <li key={item}>{item}</li>)}</ul></article>
                <article><header><CircleUserRound size={20} aria-hidden="true" /><h3>Siguiente construcción</h3></header><ul>{currentState.next.map((item) => <li key={item}>{item}</li>)}</ul></article>
              </div>
              <p className="kivonex-status-note reveal"><strong>Kivonex continúa en desarrollo.</strong> Esta página documenta el estado confirmado del código y no representa un producto desplegado o terminado.</p>
            </div>
          </section>

          <section className="kivonex-closing" aria-labelledby="kivonex-closing-title">
            <div className="project-case-shell reveal">
              <p>REGRESAR AL SISTEMA DE PROYECTOS</p>
              <h2 id="kivonex-closing-title">Kivonex es una pieza dentro de una práctica más amplia.</h2>
              <p>Explora cómo frontend, backend, datos, interfaces y experiencia de usuario se conectan en los demás proyectos.</p>
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
