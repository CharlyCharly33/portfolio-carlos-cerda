import type { Metadata } from "next";
import { ArrowDown, ArrowLeft, ShieldCheck } from "lucide-react";
import { ItSupportConsole } from "../../components/it-support-operations";
import {
  coverageItems,
  directResolution,
  escalationCriteria,
  flowStages,
  specialDevices,
  toolGroups,
} from "../../components/it-support-case-data";
import { QuickProfileProvider } from "../../components/quick-profile";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { MotionEffects } from "../../motion-effects";

export const metadata: Metadata = {
  title: "RSD Support / IT Operations | Carlos Cerda",
  description:
    "Experiencia de un año en soporte IT, diagnóstico y continuidad operativa en TE Connectivity.",
};

export default function ItSupportCasePage() {
  return (
    <QuickProfileProvider>
      <div className="it-support-page">
        <SiteHeader />
        <main>
          <section className="it-support-hero" aria-labelledby="it-support-title">
            <div className="it-support-shell it-support-hero-layout">
              <div className="it-support-hero-copy reveal">
                <p className="it-support-eyebrow">CASO 01 / SISTEMAS + OPERACIÓN</p>
                <h1 id="it-support-title">RSD SUPPORT / IT OPERATIONS</h1>
                <p className="it-support-statement">Mantener la operación exige entender el sistema completo.</p>
                <p className="it-support-description">
                  Experiencia profesional en soporte IT, diagnóstico y continuidad operativa dentro de
                  un entorno empresarial, conectando usuarios, dispositivos, identidad, red y servicios.
                </p>
                <span className="it-support-status"><i /> EXPERIENCIA PROFESIONAL / 1 AÑO</span>
                <div className="it-support-actions">
                  <a href="#cobertura">Explorar cobertura <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="#herramientas">Ver herramientas <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="/sistemas"><ArrowLeft size={16} aria-hidden="true" /> Volver a Sistemas</a>
                </div>
              </div>

              <aside className="it-support-record reveal" aria-label="Ficha de experiencia">
                <header><span>CASO 01 / EXPEDIENTE</span><ShieldCheck size={18} aria-hidden="true" /></header>
                <dl>
                  <div><dt>EMPRESA</dt><dd>TE Connectivity</dd></div>
                  <div><dt>ROL</dt><dd>Intern RSD/IT</dd></div>
                  <div><dt>ÁREA</dt><dd>RSD Support / IT Operations</dd></div>
                  <div><dt>DURACIÓN</dt><dd>1 año</dd></div>
                  <div><dt>MODALIDAD</dt><dd>Soporte presencial y remoto</dd></div>
                  <div><dt>CONTEXTO</dt><dd>Entorno empresarial</dd></div>
                  <div><dt>ESTADO</dt><dd>Experiencia concluida</dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <nav className="it-support-index" aria-label="Índice del caso">
            <div className="it-support-shell">
              <a href="#cobertura">Cobertura</a><a href="#flujo">Flujo</a><a href="#herramientas">Herramientas</a><a href="#escalamiento">Escalamiento</a><a href="#confidencialidad">Confidencialidad</a><a href="#estado">Estado</a>
            </div>
          </nav>

          <section className="it-support-scope" aria-labelledby="it-support-scope-title">
            <div className="it-support-shell">
              <SectionHeader number="01" label="ALCANCE REAL DEL ROL" title="Cobertura operativa, no una lista de tecnologías." id="it-support-scope-title" />
              <ul className="it-support-scope-grid reveal">
                {coverageItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="it-support-coverage" id="cobertura" aria-labelledby="it-support-coverage-title">
            <div className="it-support-shell">
              <SectionHeader number="02" label="CONSOLA DE COBERTURA" title="Una incidencia rara vez pertenece a una sola capa." id="it-support-coverage-title" />
              <p className="it-support-section-intro reveal">Explora las capas que Carlos relacionaba para localizar el origen de una necesidad y recuperar la continuidad operativa.</p>
              <div className="reveal"><ItSupportConsole /></div>
            </div>
          </section>

          <section className="it-support-flow" id="flujo" aria-labelledby="it-support-flow-title">
            <div className="it-support-shell">
              <SectionHeader number="03" label="FLUJO DE SOPORTE" title="Del reporte a la continuidad validada." id="it-support-flow-title" />
              <ol className="it-support-flow-track reveal">
                {flowStages.map((stage) => (
                  <li key={stage.number} tabIndex={0}>
                    <span>{stage.number}</span>
                    <h3>{stage.title}</h3>
                    <dl>
                      <div><dt>Objetivo</dt><dd>{stage.goal}</dd></div>
                      <div><dt>Acción</dt><dd>{stage.action}</dd></div>
                      <div><dt>Evidencia</dt><dd>{stage.evidence}</dd></div>
                      <div><dt>Límite</dt><dd>{stage.limit}</dd></div>
                    </dl>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="it-support-tools" id="herramientas" aria-labelledby="it-support-tools-title">
            <div className="it-support-shell">
              <SectionHeader number="04" label="ECOSISTEMA DE HERRAMIENTAS" title="Herramientas agrupadas por función." id="it-support-tools-title" />
              <div className="it-support-tool-groups">
                {toolGroups.map((group) => (
                  <article className="reveal" key={group.area}>
                    <h3>{group.area}</h3>
                    <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="it-support-escalation" id="escalamiento" aria-labelledby="it-support-escalation-title">
            <div className="it-support-shell">
              <SectionHeader number="05" label="RESOLUCIÓN Y ESCALAMIENTO" title="Escalar correctamente también es resolver." id="it-support-escalation-title" />
              <div className="it-support-escalation-grid">
                <article className="reveal">
                  <h3>Resolución directa</h3>
                  <p>Aplicaba cuando:</p>
                  <ul>{directResolution.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article className="reveal">
                  <h3>Escalamiento con evidencia</h3>
                  <p>Aplicaba cuando:</p>
                  <ul>{escalationCriteria.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
            </div>
          </section>

          <section className="it-support-devices" aria-labelledby="it-support-devices-title">
            <div className="it-support-shell">
              <SectionHeader number="06" label="DISPOSITIVOS ESPECIALIZADOS" title="El soporte no se limitaba a laptops." id="it-support-devices-title" />
              <ul className="it-support-device-grid reveal">
                {specialDevices.map((device) => (
                  <li key={device.name}><strong>{device.name}</strong><span>{device.scope}</span></li>
                ))}
              </ul>
            </div>
          </section>

          <section className="it-support-comms" aria-labelledby="it-support-comms-title">
            <div className="it-support-shell">
              <SectionHeader number="07" label="COMUNICACIÓN Y DOCUMENTACIÓN" title="Resolver también significa explicar y dejar trazabilidad." id="it-support-comms-title" />
              <ul className="it-support-comms-list reveal">
                <li>Comunicación con usuarios no técnicos</li>
                <li>Traducción de síntomas a evidencia técnica</li>
                <li>Seguimiento de solicitudes</li>
                <li>Coordinación con otros equipos</li>
                <li>Documentación de acciones y resultados</li>
                <li>Capacitación y orientación</li>
                <li>Confirmación final con el usuario</li>
              </ul>
            </div>
          </section>

          <section className="it-support-privacy" id="confidencialidad" aria-labelledby="it-support-privacy-title">
            <div className="it-support-shell">
              <SectionHeader number="08" label="CONFIDENCIALIDAD" title="Información profesional, representación segura." id="it-support-privacy-title" />
              <div className="reveal">
                <p>Esta página resume responsabilidades, herramientas y métodos de trabajo. Los diagramas y ejemplos fueron reconstruidos para el portafolio y no reproducen sistemas, tickets ni configuraciones internas de TE Connectivity.</p>
                <p>No se muestran: tickets reales, capturas corporativas, usuarios o correos, direcciones IP, dominios, nombres de equipos o servidores, identificadores de dispositivos, Tenant IDs, rutas internas, configuraciones copiadas, métricas operativas, información de empleados, ubicaciones exactas ni políticas internas.</p>
              </div>
            </div>
          </section>

          <section className="it-support-state" id="estado" aria-labelledby="it-support-state-title">
            <div className="it-support-shell">
              <SectionHeader number="09" label="APRENDIZAJES Y ESTADO" title="Un año conectando diagnóstico técnico con continuidad operativa." id="it-support-state-title" />
              <ol className="it-support-lessons reveal">
                <li><span>01</span> Diagnosticar por capas evita tratar únicamente el síntoma.</li>
                <li><span>02</span> La comunicación con el usuario también produce evidencia.</li>
                <li><span>03</span> Una resolución incluye validación, seguimiento y documentación.</li>
              </ol>
              <p className="it-support-state-note reveal">
                La experiencia de un año en TE Connectivity fortaleció una práctica de soporte
                orientada al contexto, la trazabilidad y la continuidad operativa.
              </p>
            </div>
          </section>

          <section className="it-support-closing" aria-labelledby="it-support-closing-title">
            <div className="it-support-shell reveal">
              <p>VOLVER AL SISTEMA</p>
              <h2 id="it-support-closing-title">La operación también se entiende desde los datos, la automatización y la infraestructura.</h2>
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
  return <header className="it-support-section-header reveal"><p>{number} / {label}</p><h2 id={id}>{title}</h2></header>;
}
