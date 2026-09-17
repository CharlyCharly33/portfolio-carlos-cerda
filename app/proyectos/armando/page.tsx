import type { Metadata } from "next";
import { ArrowDown, ArrowLeft, FlaskConical } from "lucide-react";
import { ArmandoLabBench, ArmandoRoutes } from "../../components/armando-blueprint";
import {
  decisions,
  evolutionStages,
  nextBuild,
  technologies,
  verifiedCapabilities,
} from "../../components/armando-project-data";
import { QuickProfileProvider } from "../../components/quick-profile";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { MotionEffects } from "../../motion-effects";

export const metadata: Metadata = {
  title: "Armando | Carlos Cerda",
  description:
    "Laboratorio modular para evaluar modelos locales, herramientas MCP, controles de seguridad y memoria persistente.",
};

export default function ArmandoPage() {
  return (
    <QuickProfileProvider>
      <div className="armando-page">
        <SiteHeader />
        <main>
          <section className="project-case-hero" aria-labelledby="project-case-title">
            <div className="project-case-shell project-case-hero-layout">
              <div className="project-case-hero-copy reveal">
                <p className="project-case-eyebrow">PROYECTO 03 / SOFTWARE + IA LOCAL</p>
                <h1 id="project-case-title">ARMANDO</h1>
                <p className="project-case-statement">Antes de construir un asistente, hay que comprobar sus piezas.</p>
                <p className="project-case-description">
                  Laboratorio modular para evaluar modelos locales, herramientas MCP, controles de
                  seguridad y memoria persistente antes de integrarlos en un futuro asistente
                  personal de IA.
                </p>
                <span className="project-case-status"><i /> LABORATORIO EN EVOLUCIÓN</span>
                <div className="project-case-actions">
                  <a href="#laboratorios">Examinar laboratorios <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="#arquitectura">Ver arquitectura <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="/software"><ArrowLeft size={16} aria-hidden="true" /> Volver a Software</a>
                </div>
              </div>

              <aside className="project-case-drawing reveal" aria-label="Ficha del laboratorio Armando">
                <header><span>RACK TÉCNICO / ARMANDO</span><FlaskConical size={18} aria-hidden="true" /></header>
                <div className="armando-rack" aria-hidden="true">
                  <i>MODELOS</i><i>TOOLS</i><i>MCP</i><i>MEMORIA</i>
                </div>
                <dl>
                  <div><dt>TIPO</dt><dd>Laboratorio personal de ingeniería de IA</dd></div>
                  <div><dt>ROL</dt><dd>Investigación, arquitectura y experimentación</dd></div>
                  <div><dt>ESTADO</dt><dd>Experimentos funcionales desacoplados</dd></div>
                  <div><dt>ENTORNO</dt><dd>Ejecución local</dd></div>
                  <div><dt>REPO</dt><dd>Privado</dd></div>
                  <div><dt>DEMO</dt><dd>No disponible</dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <nav className="project-case-index" aria-label="Índice del caso de estudio">
            <div className="project-case-shell">
              <a href="#proposito">Propósito</a><a href="#laboratorios">Laboratorios</a><a href="#arquitectura">Arquitectura</a><a href="#seguridad">Seguridad</a><a href="#decisiones">Decisiones</a><a href="#evolucion">Evolución</a><a href="#estado">Estado</a>
            </div>
          </nav>

          <section className="armando-purpose" id="proposito" aria-labelledby="armando-purpose-title">
            <div className="project-case-shell">
              <SectionHeader number="01" label="HIPÓTESIS DEL SISTEMA" title="Un asistente confiable se construye validando cada capacidad por separado." id="armando-purpose-title" />
              <p className="armando-section-intro reveal">
                Armando funciona actualmente como espacio de investigación para comprender modelos
                locales, probar llamadas a herramientas, explorar protocolos MCP, diseñar límites de
                ejecución, evaluar memoria persistente y registrar resultados y limitaciones.
              </p>
              <div className="armando-purpose-ledger">
                <article className="reveal">
                  <h3>Lo que existe</h3>
                  <ul>
                    <li>Experimentos independientes</li>
                    <li>Clientes para Ollama</li>
                    <li>Tool calling</li>
                    <li>Servidores y clientes MCP</li>
                    <li>Controles de rutas y argumentos</li>
                    <li>Laboratorio aislado de Engram</li>
                  </ul>
                </article>
                <article className="reveal">
                  <h3>Lo que todavía no existe</h3>
                  <ul>
                    <li>Agente central</li>
                    <li>Interfaz pública</li>
                    <li>Memoria general integrada</li>
                    <li>Router automático de modelos</li>
                    <li>Aplicación permanente</li>
                    <li>Implementación en Raspberry Pi</li>
                    <li>Voz, RAG y automatización integrada</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="armando-labs" id="laboratorios" aria-labelledby="armando-labs-title">
            <div className="project-case-shell">
              <SectionHeader number="02" label="BANCO DE PRUEBAS" title="Cada experimento responde una pregunta distinta." id="armando-labs-title" />
              <div className="reveal"><ArmandoLabBench /></div>
            </div>
          </section>

          <section className="armando-architecture" id="arquitectura" aria-labelledby="armando-architecture-title">
            <div className="project-case-shell">
              <SectionHeader number="03" label="ARQUITECTURA ACTUAL" title="Las piezas existen, pero todavía no forman un solo agente." id="armando-architecture-title" />
              <div className="reveal"><ArmandoRoutes /></div>
              <div className="armando-tech-ledger reveal" aria-label="Tecnologías verificadas de Armando">
                <h3>Tecnologías verificadas</h3>
                <ul>{technologies.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className="armando-security" id="seguridad" aria-labelledby="armando-security-title">
            <div className="project-case-shell">
              <SectionHeader number="04" label="FRONTERA DE EJECUCIÓN" title="El modelo propone; el programa conserva los límites." id="armando-security-title" />
              <ol className="armando-security-levels reveal">
                <li>
                  <span>01</span>
                  <div><h3>Lectura controlada</h3><p>Información básica. Recursos permitidos. Rutas restringidas.</p></div>
                </li>
                <li>
                  <span>02</span>
                  <div><h3>Propuesta</h3><p>Validación de schemas. Validación de argumentos. Preparación sin ejecución inmediata.</p></div>
                </li>
                <li>
                  <span>03</span>
                  <div><h3>Ejecución autenticada</h3><p>Approval ID. Secreto mediante variable de entorno. Comparación segura. Sandbox y allowlists.</p></div>
                </li>
              </ol>
              <p className="armando-security-warning reveal">
                <strong>Advertencia.</strong> Este flujo demuestra autorización por credencial y
                separación de capacidades. Todavía no demuestra aprobación humana interactiva,
                identidad individual ni doble control.
              </p>
            </div>
          </section>

          <section className="armando-decisions" id="decisiones" aria-labelledby="armando-decisions-title">
            <div className="project-case-shell">
              <SectionHeader number="05" label="REGISTRO DE DECISIONES" title="Investigar también significa decidir qué todavía no integrar." id="armando-decisions-title" />
              <p className="armando-section-intro reveal">Registro editorial de decisiones técnicas del laboratorio.</p>
              <ol className="armando-decision-register reveal">
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

          <section className="armando-evolution" id="evolucion" aria-labelledby="armando-evolution-title">
            <div className="project-case-shell">
              <SectionHeader number="06" label="EVOLUCIÓN DEL LABORATORIO" title="El sistema crece mediante preguntas comprobables." id="armando-evolution-title" />
              <ol className="armando-evolution-track reveal">
                {evolutionStages.map((stage) => (
                  <li key={stage.label} className={stage.next ? "is-next" : ""}>
                    <span>{stage.next ? "07 / Integración — Siguiente etapa" : stage.label}</span><i aria-hidden="true" />
                    <ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="armando-current" id="estado" aria-labelledby="armando-current-title">
            <div className="project-case-shell">
              <SectionHeader number="07" label="ESTADO ACTUAL" title="Un laboratorio funcional; un asistente todavía por construir." id="armando-current-title" />
              <div className="armando-current-board reveal">
                <article>
                  <h3>Ya comprobable</h3>
                  <ul>{verifiedCapabilities.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article>
                  <h3>Siguiente construcción</h3>
                  <ul>{nextBuild.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
              <p className="armando-status-note reveal">
                <strong>Las capacidades mostradas corresponden a experimentos independientes.</strong> Armando
                todavía no opera como un asistente integrado.
              </p>
            </div>
          </section>

          <section className="armando-closing" aria-labelledby="armando-closing-title">
            <div className="project-case-shell reveal">
              <p>REGRESAR AL SISTEMA DE PROYECTOS</p>
              <h2 id="armando-closing-title">Armando convierte la experimentación en decisiones técnicas.</h2>
              <p>Explora cómo software, datos, interfaces y experiencia se conectan en el resto del portafolio.</p>
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
