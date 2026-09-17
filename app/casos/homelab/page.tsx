import type { Metadata } from "next";
import { ArrowDown, ArrowLeft, HousePlus } from "lucide-react";
import { HomelabRebuildMap } from "../../components/homelab-rebuild-map";
import {
  exploredStack,
  hardware,
  nextSteps,
  previouslyImplemented,
  rebuildPrinciples,
} from "../../components/homelab-case-data";
import { QuickProfileProvider } from "../../components/quick-profile";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { MotionEffects } from "../../motion-effects";

export const metadata: Metadata = {
  title: "Homelab | Carlos Cerda",
  description:
    "Laboratorio personal de infraestructura actualmente pausado y preparado para reconstruirse desde cero con Linux, contenedores y redes.",
};

export default function HomelabCasePage() {
  return (
    <QuickProfileProvider>
      <div className="homelab-page">
        <SiteHeader previous={{ href: "/casos/automatizacion", label: "Automatización + OCR" }} />
        <main>
          <section className="homelab-hero" aria-labelledby="homelab-title">
            <div className="homelab-shell homelab-hero-layout">
              <div className="homelab-hero-copy reveal">
                <p className="homelab-eyebrow">CASO 04 / LABORATORIO PERSONAL</p>
                <h1 id="homelab-title">HOMELAB</h1>
                <p className="homelab-statement">Reiniciar también es una decisión de arquitectura.</p>
                <p className="homelab-description">
                  Laboratorio personal para aprender infraestructura mediante hardware propio, Linux,
                  contenedores, redes y operación de servicios. Después de una primera etapa
                  funcional, el entorno se encuentra pausado y preparado para reconstruirse desde cero.
                </p>
                <span className="homelab-status"><i /> PAUSADO / RECONSTRUCCIÓN PLANIFICADA</span>
                <div className="homelab-actions">
                  <a href="#etapa-anterior">Ver etapa anterior <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="#reconstruccion">Explorar reconstrucción <ArrowDown size={17} aria-hidden="true" /></a>
                  <a href="/sistemas"><ArrowLeft size={16} aria-hidden="true" /> Volver a Sistemas</a>
                </div>
              </div>

              <aside className="homelab-record reveal" aria-label="Ficha del laboratorio">
                <header><span>PLANO DE RECONSTRUCCIÓN / HOMELAB</span><HousePlus size={18} aria-hidden="true" /></header>
                <div className="homelab-blueprint-mark" aria-hidden="true">
                  <i>BASE</i><i>RED</i><i>SERVICIOS</i>
                </div>
                <dl>
                  <div><dt>TIPO</dt><dd>Laboratorio personal</dd></div>
                  <div><dt>PROPÓSITO</dt><dd>Aprendizaje práctico de infraestructura y operación</dd></div>
                  <div><dt>HARDWARE</dt><dd>Raspberry Pi, almacenamiento local, almacenamiento externo y router doméstico</dd></div>
                  <div><dt>ETAPA ANTERIOR</dt><dd>HomeShield DNS</dd></div>
                  <div><dt>ESTADO ACTUAL</dt><dd>Pausado</dd></div>
                  <div><dt>SIGUIENTE ETAPA</dt><dd>Reconstrucción desde cero</dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <nav className="homelab-index" aria-label="Índice del caso">
            <div className="homelab-shell">
              <a href="#proposito">Propósito</a><a href="#inventario">Inventario</a><a href="#etapa-anterior">Etapa anterior</a><a href="#estado">Estado</a><a href="#reconstruccion">Reconstrucción</a><a href="#principios">Principios</a><a href="#seguridad">Seguridad</a><a href="#proxima">Próxima etapa</a>
            </div>
          </nav>

          <section className="homelab-purpose" id="proposito" aria-labelledby="homelab-purpose-title">
            <div className="homelab-shell">
              <SectionHeader number="01" label="PROPÓSITO" title="Aprender infraestructura significa operarla y volver a construirla." id="homelab-purpose-title" />
              <p className="homelab-section-intro reveal">Un Homelab no solo sirve para instalar servicios; también permite aprender a documentarlos, mantenerlos y reconstruirlos mejor.</p>
              <ul className="homelab-purpose-grid reveal">
                <li>Instalar un sistema base</li>
                <li>Trabajar con Linux</li>
                <li>Desplegar contenedores</li>
                <li>Administrar servicios</li>
                <li>Configurar un servicio DNS local</li>
                <li>Practicar acceso remoto</li>
                <li>Diagnosticar red y servicios</li>
                <li>Documentar decisiones</li>
                <li>Identificar límites de la primera implementación</li>
              </ul>
            </div>
          </section>

          <section className="homelab-inventory" id="inventario" aria-labelledby="homelab-inventory-title">
            <div className="homelab-shell">
              <SectionHeader number="02" label="INVENTARIO" title="Lo que se conserva y lo que se exploró." id="homelab-inventory-title" />
              <div className="homelab-inventory-grid">
                <article className="reveal">
                  <h3>Hardware conservado</h3>
                  <ul>{hardware.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article className="reveal">
                  <h3>Software y conceptos explorados</h3>
                  <ul>{exploredStack.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
            </div>
          </section>

          <section className="homelab-previous" id="etapa-anterior" aria-labelledby="homelab-previous-title">
            <div className="homelab-shell">
              <SectionHeader number="03" label="PRIMERA ETAPA" title="HomeShield DNS fue un módulo, no todo el laboratorio." id="homelab-previous-title" />
              <div className="homelab-homeshield reveal">
                <p>HomeShield DNS fue una implementación anterior de un servicio DNS local con bloqueo mediante Pi-hole, desplegado con Docker Compose y administrado desde una Raspberry Pi.</p>
                <ol aria-label="Esquema abstracto de HomeShield DNS">
                  <li tabIndex={0}>Dispositivos</li>
                  <li tabIndex={0}>Red doméstica</li>
                  <li tabIndex={0}>Servicio DNS</li>
                  <li tabIndex={0}>Pi-hole</li>
                  <li tabIndex={0}>Resolución</li>
                </ol>
                <span>IMPLEMENTADO ANTERIORMENTE / ACTUALMENTE INACTIVO</span>
              </div>
            </div>
          </section>

          <section className="homelab-state" id="estado" aria-labelledby="homelab-state-title">
            <div className="homelab-shell">
              <SectionHeader number="04" label="ESTADO ACTUAL" title="El laboratorio está pausado; el aprendizaje permanece." id="homelab-state-title" />
              <div className="homelab-state-grid">
                <article className="reveal">
                  <h3>Conservado</h3>
                  <ul>
                    <li>Hardware</li>
                    <li>Experiencia obtenida</li>
                    <li>Decisiones documentables</li>
                    <li>Conocimiento de la primera implementación</li>
                    <li>Objetivo de reconstrucción</li>
                  </ul>
                </article>
                <article className="reveal">
                  <h3>Actualmente inactivo</h3>
                  <ul>
                    <li>Sistema operativo del laboratorio</li>
                    <li>Contenedores</li>
                    <li>Pi-hole</li>
                    <li>DNS local</li>
                    <li>Portainer</li>
                    <li>Administración remota</li>
                    <li>Servicios</li>
                    <li>Monitoreo</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="homelab-rebuild" id="reconstruccion" aria-labelledby="homelab-rebuild-title">
            <div className="homelab-shell">
              <SectionHeader number="05" label="MAPA DE RECONSTRUCCIÓN" title="Reconstruir por capas permitirá validar cada dependencia." id="homelab-rebuild-title" />
              <div className="reveal"><HomelabRebuildMap /></div>
            </div>
          </section>

          <section className="homelab-principles" id="principios" aria-labelledby="homelab-principles-title">
            <div className="homelab-shell">
              <SectionHeader number="06" label="PRINCIPIOS DE LA NUEVA ETAPA" title="Principios planificados para la reconstrucción." id="homelab-principles-title" />
              <ul className="homelab-principles-grid reveal">
                {rebuildPrinciples.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="homelab-capabilities" aria-labelledby="homelab-capabilities-title">
            <div className="homelab-shell">
              <SectionHeader number="07" label="ESTADO DE CAPACIDADES" title="Tres tiempos del mismo laboratorio." id="homelab-capabilities-title" />
              <div className="homelab-capability-bands">
                <article className="reveal">
                  <h3>Implementado anteriormente</h3>
                  <ul>{previouslyImplemented.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article className="reveal">
                  <h3>Actualmente</h3>
                  <ul>
                    <li>Hardware conservado</li>
                    <li>Laboratorio pausado</li>
                    <li>Servicios inactivos</li>
                    <li>Reconstrucción no iniciada</li>
                  </ul>
                </article>
                <article className="reveal">
                  <h3>Próxima construcción</h3>
                  <ul>
                    <li>Revisión de inventario</li>
                    <li>Instalación limpia</li>
                    <li>Base de red</li>
                    <li>Entorno de contenedores</li>
                    <li>Primer servicio</li>
                    <li>Documentación y operación</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="homelab-security" id="seguridad" aria-labelledby="homelab-security-title">
            <div className="homelab-shell">
              <SectionHeader number="08" label="SEGURIDAD Y PRIVACIDAD" title="Un laboratorio doméstico también necesita fronteras públicas." id="homelab-security-title" />
              <div className="reveal">
                <p>El portafolio no muestra: IP pública o privada, MAC, SSID, contraseñas, usuarios, claves SSH, puertos expuestos, configuración del router, dominios locales, archivos de entorno, tokens, logs, topología exacta, copias de seguridad, ubicación física ni datos almacenados.</p>
              </div>
            </div>
          </section>

          <section className="homelab-next" id="proxima" aria-labelledby="homelab-next-title">
            <div className="homelab-shell">
              <SectionHeader number="09" label="PRÓXIMA CONSTRUCCIÓN" title="La siguiente versión comenzará por la base, no por la cantidad de servicios." id="homelab-next-title" />
              <ol className="homelab-next-track reveal">
                {nextSteps.map((step, index) => (
                  <li key={step} tabIndex={0}><span>{String(index + 1).padStart(2, "0")}</span> {step}</li>
                ))}
              </ol>
              <p className="homelab-next-note reveal">Estado: planificado, sin fecha pública.</p>
            </div>
          </section>

          <section className="homelab-closing" aria-labelledby="homelab-closing-title">
            <div className="homelab-shell reveal">
              <p>VOLVER AL SISTEMA</p>
              <h2 id="homelab-closing-title">El laboratorio personal completa la práctica profesional con experimentación controlada.</h2>
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
  return <header className="homelab-section-header reveal"><p>{number} / {label}</p><h2 id={id}>{title}</h2></header>;
}
