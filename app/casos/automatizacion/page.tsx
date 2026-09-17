import type { Metadata } from "next";
import { ArrowDown, ArrowLeft, ScanText } from "lucide-react";
import { AutomationPipeline } from "../../components/automation-ocr-pipeline";
import {
  archBlocks,
  confirmedState,
  confirmedTechnologies,
  learnings,
  notClaimedState,
  outputDestinations,
  validationNotes,
  validationStates,
} from "../../components/automation-case-data";
import { QuickProfileProvider } from "../../components/quick-profile";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { MotionEffects } from "../../motion-effects";

export const metadata: Metadata = {
  title: "Automatización + OCR | Carlos Cerda",
  description:
    "Prototipo funcional con Python y OCR mediante API para extraer, validar y estructurar información con salida hacia Excel.",
};

export default function AutomationCasePage() {
  return (
    <QuickProfileProvider>
      <div className="automation-page">
        <SiteHeader previous={{ href: "/casos/dashboards", label: "Dashboards" }} next={{ href: "/casos/homelab", label: "Homelab" }} />
        <main>
          <section className="automation-hero" aria-labelledby="automation-title">
            <div className="automation-shell automation-hero-layout">
              <div className="automation-hero-copy reveal">
                <p className="automation-eyebrow">CASO 03 / SISTEMAS + AUTOMATIZACIÓN</p>
                <h1 id="automation-title">AUTOMATIZACIÓN / OCR</h1>
                <p className="automation-statement">Automatizar no es solo leer; es validar antes de actuar.</p>
                <p className="automation-description">
                  Prototipo funcional para leer documentos mediante OCR, extraer y validar
                  información, estructurarla en Excel y preparar una salida capaz de alimentar
                  visualizaciones y alertas condicionales.
                </p>
                <span className="automation-status"><i /> PROTOTIPO FUNCIONAL</span>
                <div className="automation-actions">
                  <a href="#pipeline">Explorar el procesamiento <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="#arquitectura">Ver arquitectura <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="/sistemas"><ArrowLeft size={16} aria-hidden="true" /> Volver a Sistemas</a>
                </div>
              </div>

              <aside className="automation-record reveal" aria-label="Ficha del prototipo">
                <header><span>LÍNEA SUPERVISADA / OCR</span><ScanText size={18} aria-hidden="true" /></header>
                <div className="automation-reading-mark" aria-hidden="true">
                  <i>DOCUMENTO</i><i>LECTURA</i><i>ESTRUCTURA</i><i>SEÑAL</i>
                </div>
                <dl>
                  <div><dt>EMPRESA</dt><dd>TE Connectivity</dd></div>
                  <div><dt>CARGO</dt><dd>Intern RSD/IT</dd></div>
                  <div><dt>TIPO</dt><dd>Prototipo de automatización</dd></div>
                  <div><dt>TECNOLOGÍAS</dt><dd>Python, servicio OCR mediante API y Excel</dd></div>
                  <div><dt>ESTADO</dt><dd>Prototipo funcional completado</dd></div>
                  <div><dt>USO COTIDIANO</dt><dd>No confirmado</dd></div>
                  <div><dt>EVIDENCIA</dt><dd>No pública por confidencialidad</dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <nav className="automation-index" aria-label="Índice del caso">
            <div className="automation-shell">
              <a href="#proposito">Propósito</a><a href="#pipeline">Pipeline</a><a href="#arquitectura">Arquitectura</a><a href="#validacion">Validación</a><a href="#salida">Salida</a><a href="#estado">Estado</a><a href="#confidencialidad">Confidencialidad</a>
            </div>
          </nav>

          <section className="automation-purpose" id="proposito" aria-labelledby="automation-purpose-title">
            <div className="automation-shell">
              <SectionHeader number="01" label="PROPÓSITO" title="El documento era la entrada; la información utilizable era el objetivo." id="automation-purpose-title" />
              <div className="automation-purpose-ledger">
                <article className="reveal">
                  <h3>Proceso manual</h3>
                  <p>Leer documentos, localizar información, trasladarla a una estructura y revisar condiciones puede convertirse en una cadena repetitiva y propensa a inconsistencias.</p>
                </article>
                <article className="reveal">
                  <h3>Prototipo</h3>
                  <p>Explorar una automatización supervisada capaz de extraer información mediante OCR, validarla y prepararla para continuar hacia Excel, visualizaciones y alertas.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="automation-pipeline" id="pipeline" aria-labelledby="automation-pipeline-title">
            <div className="automation-shell">
              <SectionHeader number="02" label="PIPELINE INTERACTIVO" title="Cada documento atraviesa controles antes de producir una señal." id="automation-pipeline-title" />
              <div className="reveal"><AutomationPipeline /></div>
            </div>
          </section>

          <section className="automation-architecture" id="arquitectura" aria-labelledby="automation-architecture-title">
            <div className="automation-shell">
              <SectionHeader number="03" label="ARQUITECTURA ABSTRACTA" title="Un prototipo conectado por responsabilidades, no por marcas." id="automation-architecture-title" />
              <ol className="automation-arch-track reveal" aria-label="Cinco bloques de la arquitectura">
                {archBlocks.map((block, index) => (
                  <li key={block.label} tabIndex={0}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{block.label}</strong>
                    <p>{block.note}</p>
                  </li>
                ))}
              </ol>
              <p className="automation-arch-note reveal">La arquitectura fue simplificada y reconstruida para el portafolio. No reproduce configuraciones, documentos ni integraciones internas.</p>
            </div>
          </section>

          <section className="automation-validation" id="validacion" aria-labelledby="automation-validation-title">
            <div className="automation-shell">
              <SectionHeader number="04" label="VALIDACIÓN Y SUPERVISIÓN" title="Reconocer texto no significa comprenderlo correctamente." id="automation-validation-title" />
              <div className="automation-validation-states">
                {validationStates.map((state, index) => (
                  <article className={`reveal is-state-${index + 1}`} key={state.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{state.title}</h3>
                    <p>{state.description}</p>
                  </article>
                ))}
              </div>
              <ul className="automation-validation-notes reveal">
                {validationNotes.map((note) => <li key={note}>{note}</li>)}
              </ul>
            </div>
          </section>

          <section className="automation-output" id="salida" aria-labelledby="automation-output-title">
            <div className="automation-shell">
              <SectionHeader number="05" label="SALIDA, VISUALIZACIÓN Y ALERTA" title="El valor aparecía cuando la extracción podía continuar hacia otra acción." id="automation-output-title" />
              <div className="automation-output-grid">
                {outputDestinations.map((destination) => (
                  <article className="reveal" key={destination.title}>
                    <h3>{destination.title}</h3>
                    <p>{destination.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="automation-state" id="estado" aria-labelledby="automation-state-title">
            <div className="automation-shell">
              <SectionHeader number="06" label="ESTADO REAL" title="Funcional como prototipo; no confirmado como operación cotidiana." id="automation-state-title" />
              <div className="automation-state-grid">
                <article className="reveal">
                  <h3>Confirmado</h3>
                  <ul>{confirmedState.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article className="reveal">
                  <h3>No afirmado</h3>
                  <ul>{notClaimedState.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
              <div className="automation-tech-ledger reveal" aria-label="Tecnologías confirmadas">
                <h3>Tecnologías confirmadas</h3>
                <ul>{confirmedTechnologies.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className="automation-privacy" id="confidencialidad" aria-labelledby="automation-privacy-title">
            <div className="automation-shell">
              <SectionHeader number="07" label="CONFIDENCIALIDAD" title="La arquitectura puede explicarse sin revelar los documentos." id="automation-privacy-title" />
              <div className="reveal">
                <p>Esta página presenta una reconstrucción abstracta del prototipo. No reproduce documentos, campos, reglas, código ni configuraciones internas de TE Connectivity.</p>
              </div>
            </div>
          </section>

          <section className="automation-learnings" aria-labelledby="automation-learnings-title">
            <div className="automation-shell">
              <SectionHeader number="08" label="APRENDIZAJES" title="Automatizar también significa diseñar para la excepción." id="automation-learnings-title" />
              <ol className="automation-lessons reveal">
                {learnings.map((item, index) => (
                  <li key={item}><span>{String(index + 1).padStart(2, "0")}</span> {item}</li>
                ))}
              </ol>
              <p className="automation-learnings-note reveal">
                El prototipo permitió explorar cómo Python, un servicio OCR mediante API y una salida
                estructurada podían reducir pasos repetitivos sin eliminar la necesidad de validación
                y supervisión humana.
              </p>
            </div>
          </section>

          <section className="automation-closing" aria-labelledby="automation-closing-title">
            <div className="automation-shell reveal">
              <p>VOLVER AL SISTEMA</p>
              <h2 id="automation-closing-title">La automatización es una capa dentro de una operación más amplia.</h2>
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
  return <header className="automation-section-header reveal"><p>{number} / {label}</p><h2 id={id}>{title}</h2></header>;
}
