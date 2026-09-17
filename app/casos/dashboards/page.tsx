import type { Metadata } from "next";
import { ArrowDown, ArrowLeft, TableProperties } from "lucide-react";
import { DashboardsFlow } from "../../components/dashboards-data-flow";
import {
  confirmedState,
  learnings,
  notClaimedState,
  readingJourney,
  toolGroups,
  visualizationPrinciples,
} from "../../components/dashboards-case-data";
import { QuickProfileProvider } from "../../components/quick-profile";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { MotionEffects } from "../../motion-effects";

export const metadata: Metadata = {
  title: "Datos operativos + Dashboards | Carlos Cerda",
  description:
    "Experiencia profesional con Power BI, Power Query, Excel y SharePoint para preparar y visualizar información operativa interna.",
};

export default function DashboardsCasePage() {
  return (
    <QuickProfileProvider>
      <div className="dashboards-page">
        <SiteHeader previous={{ href: "/casos/it-support", label: "IT Support" }} next={{ href: "/casos/automatizacion", label: "Automatización + OCR" }} />
        <main>
          <section className="dashboards-hero" aria-labelledby="dashboards-title">
            <div className="dashboards-shell dashboards-hero-layout">
              <div className="dashboards-hero-copy reveal">
                <p className="dashboards-eyebrow">CASO 02 / SISTEMAS + DATOS</p>
                <h1 id="dashboards-title">DATOS OPERATIVOS / DASHBOARDS</h1>
                <p className="dashboards-statement">La información adquiere valor cuando se vuelve legible.</p>
                <p className="dashboards-description">
                  Experiencia profesional preparando y organizando información operativa interna para
                  convertirla en modelos, indicadores y lecturas visuales mediante Power BI, Power
                  Query, Excel y SharePoint.
                </p>
                <span className="dashboards-status"><i /> USO INTERNO CONOCIDO</span>
                <div className="dashboards-actions">
                  <a href="#flujo">Explorar el flujo <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="#herramientas">Ver herramientas <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="/sistemas"><ArrowLeft size={16} aria-hidden="true" /> Volver a Sistemas</a>
                </div>
              </div>

              <aside className="dashboards-record reveal" aria-label="Ficha profesional">
                <header><span>MESA DE LECTURA / DATOS</span><TableProperties size={18} aria-hidden="true" /></header>
                <div className="dashboards-reading-mark" aria-hidden="true">
                  <i>FUENTES</i><i>PREPARACIÓN</i><i>MODELO</i><i>LECTURA</i>
                </div>
                <dl>
                  <div><dt>EMPRESA</dt><dd>TE Connectivity</dd></div>
                  <div><dt>CARGO</dt><dd>Intern RSD/IT</dd></div>
                  <div><dt>TIPO</dt><dd>Experiencia profesional</dd></div>
                  <div><dt>HERRAMIENTAS</dt><dd>Power BI, Power Query, Excel y SharePoint</dd></div>
                  <div><dt>ESTADO</dt><dd>Uso interno conocido</dd></div>
                  <div><dt>EVIDENCIA</dt><dd>No pública por confidencialidad</dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <nav className="dashboards-index" aria-label="Índice del caso">
            <div className="dashboards-shell">
              <a href="#proposito">Propósito</a><a href="#flujo">Flujo</a><a href="#herramientas">Herramientas</a><a href="#lectura">Lectura</a><a href="#principios">Principios</a><a href="#estado">Estado</a><a href="#confidencialidad">Confidencialidad</a>
            </div>
          </nav>

          <section className="dashboards-purpose" id="proposito" aria-labelledby="dashboards-purpose-title">
            <div className="dashboards-shell">
              <SectionHeader number="01" label="PROPÓSITO" title="Antes de visualizar, hay que entender qué necesita leerse." id="dashboards-purpose-title" />
              <div className="dashboards-purpose-ledger">
                <article className="reveal">
                  <h3>Necesidad</h3>
                  <p>La información operativa puede encontrarse distribuida, tener formatos distintos o requerir preparación antes de ser interpretada.</p>
                </article>
                <article className="reveal">
                  <h3>Respuesta</h3>
                  <p>Organizar un recorrido de transformación que permita construir una lectura visual clara sin perder trazabilidad sobre el origen y preparación de la información.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="dashboards-flow" id="flujo" aria-labelledby="dashboards-flow-title">
            <div className="dashboards-shell">
              <SectionHeader number="02" label="FLUJO INTERACTIVO" title="El dato atraviesa varias decisiones antes de convertirse en información." id="dashboards-flow-title" />
              <div className="reveal"><DashboardsFlow /></div>
            </div>
          </section>

          <section className="dashboards-tools" id="herramientas" aria-labelledby="dashboards-tools-title">
            <div className="dashboards-shell">
              <SectionHeader number="03" label="HERRAMIENTAS Y RESPONSABILIDADES" title="Cada herramienta ocupa su tramo del recorrido." id="dashboards-tools-title" />
              <div className="dashboards-tool-groups">
                {toolGroups.map((group) => (
                  <article className="reveal" key={group.area}>
                    <h3>{group.area}</h3>
                    <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                ))}
              </div>
              <p className="dashboards-tools-note reveal">Carlos trabajó con información disponible en SharePoint; la administración de la plataforma no formó parte de sus responsabilidades.</p>
            </div>
          </section>

          <section className="dashboards-reading" id="lectura" aria-labelledby="dashboards-reading-title">
            <div className="dashboards-shell">
              <SectionHeader number="04" label="DE UNA NECESIDAD A UNA LECTURA" title="Ocho decisiones antes de compartir una vista." id="dashboards-reading-title" />
              <ol className="dashboards-reading-track reveal">
                {readingJourney.map((stage, index) => (
                  <li key={stage.step} tabIndex={0}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{stage.step}</h3>
                    <p><strong>Decisión:</strong> {stage.decision}</p>
                    <p><strong>Resultado:</strong> {stage.result}</p>
                    <p><strong>Control:</strong> {stage.control}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="dashboards-principles" id="principios" aria-labelledby="dashboards-principles-title">
            <div className="dashboards-shell">
              <SectionHeader number="05" label="PRINCIPIOS DE VISUALIZACIÓN" title="Una lectura clara también es una decisión técnica." id="dashboards-principles-title" />
              <ul className="dashboards-principles-grid reveal">
                {visualizationPrinciples.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="dashboards-principles-note reveal">Criterios aplicados por Carlos; no políticas oficiales de la empresa.</p>
            </div>
          </section>

          <section className="dashboards-state" id="estado" aria-labelledby="dashboards-state-title">
            <div className="dashboards-shell">
              <SectionHeader number="06" label="ESTADO REAL" title="Utilizado internamente, sin afirmar continuidad posterior." id="dashboards-state-title" />
              <div className="dashboards-state-grid">
                <article className="reveal">
                  <h3>Confirmado</h3>
                  <ul>{confirmedState.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article className="reveal">
                  <h3>No afirmado</h3>
                  <ul>{notClaimedState.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
              <p className="dashboards-state-note reveal">
                Los tableros fueron utilizados dentro del contexto operativo para el que se
                construyeron. No se afirma continuidad, adopción permanente ni seguimiento posterior.
              </p>
            </div>
          </section>

          <section className="dashboards-privacy" id="confidencialidad" aria-labelledby="dashboards-privacy-title">
            <div className="dashboards-shell">
              <SectionHeader number="07" label="CONFIDENCIALIDAD" title="El proceso puede explicarse; la operación no debe exponerse." id="dashboards-privacy-title" />
              <div className="reveal">
                <p>Esta página reconstruye el método de trabajo con fines de portafolio. No reproduce datos, indicadores, modelos, capturas ni estructuras internas de TE Connectivity.</p>
                <p>No se publica: información operativa, capturas, KPIs, métricas, fórmulas, umbrales, nombres de campos, modelos de datos, rutas de SharePoint, archivos, usuarios, áreas identificables, ubicaciones, resultados, información histórica ni frecuencias de actualización.</p>
              </div>
            </div>
          </section>

          <section className="dashboards-learnings" aria-labelledby="dashboards-learnings-title">
            <div className="dashboards-shell">
              <SectionHeader number="08" label="APRENDIZAJES Y CIERRE" title="Visualizar también significa aprender a seleccionar." id="dashboards-learnings-title" />
              <ol className="dashboards-lessons reveal">
                {learnings.map((item, index) => (
                  <li key={item}><span>{String(index + 1).padStart(2, "0")}</span> {item}</li>
                ))}
              </ol>
              <p className="dashboards-learnings-note reveal">
                La experiencia permitió conectar preparación de datos, modelado y comunicación visual
                dentro de un contexto operativo real, manteniendo la información empresarial fuera del portafolio.
              </p>
            </div>
          </section>

          <section className="dashboards-closing" aria-labelledby="dashboards-closing-title">
            <div className="dashboards-shell reveal">
              <p>VOLVER AL SISTEMA</p>
              <h2 id="dashboards-closing-title">Los datos son una capa más de una operación conectada.</h2>
              <a href="/sistemas">Explorar IT + Sistemas <ArrowLeft size={18} aria-hidden="true" /></a>
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
  return <header className="dashboards-section-header reveal"><p>{number} / {label}</p><h2 id={id}>{title}</h2></header>;
}
