"use client";

import { ArrowUpRight, CheckCircle2, CircleDot, FlaskConical, Route, ShieldCheck } from "lucide-react";
import { type FocusEvent, useState } from "react";
import { systemsCases, type SystemsCase, type SystemsCaseSlug } from "./systems-case-data";

export function SystemsRouteExplorer() {
  const [activeSlug, setActiveSlug] = useState<SystemsCaseSlug>("it-support");
  const [activeStage, setActiveStage] = useState(0);
  const activeCase = systemsCases.find((item) => item.slug === activeSlug) ?? systemsCases[0];
  const stage = activeCase.stages[activeStage];

  function selectCase(slug: SystemsCaseSlug) {
    setActiveSlug(slug);
    setActiveStage(0);
  }

  return (
    <>
      <section className="systems-routes" aria-labelledby="systems-routes-title">
        <div className="systems-shell">
          <header className="systems-section-header reveal">
            <p>01 / RUTAS DE OPERACIÓN</p>
            <h2 id="systems-routes-title">Del síntoma a una salida verificable.</h2>
            <p>Selecciona un caso y recorre sus cinco etapas. El método cambia con el contexto; la trazabilidad permanece.</p>
          </header>

          <div className="systems-route-workbench reveal">
            <div className="systems-route-selector" aria-label="Seleccionar ruta de operación">
              {systemsCases.map((item) => (
                <button type="button" key={item.slug} aria-pressed={item.slug === activeSlug} onClick={() => selectCase(item.slug)}>
                  <span>{item.number}</span>
                  <strong>{item.shortName}</strong>
                  <small>{item.contextLabel}</small>
                </button>
              ))}
            </div>

            <div className="systems-route-panel">
              <header>
                <div>
                  <p>{activeCase.contextLabel} / {activeCase.context}</p>
                  <h3>{activeCase.title}</h3>
                </div>
                <Route size={28} strokeWidth={1.3} aria-hidden="true" />
              </header>

              <div className="systems-stage-track" aria-label={`Etapas de ${activeCase.title}`}>
                {activeCase.stages.map((item, index) => (
                  <button
                    type="button"
                    key={item.label}
                    aria-pressed={index === activeStage}
                    onClick={() => setActiveStage(index)}
                    onMouseEnter={() => setActiveStage(index)}
                    onFocus={() => setActiveStage(index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item.label}</strong>
                  </button>
                ))}
              </div>

              <div className="systems-stage-output" aria-live="polite" aria-atomic="true">
                <span>ETAPA {String(activeStage + 1).padStart(2, "0")} / 05</span>
                <div><CircleDot size={19} aria-hidden="true" /><h4>{stage.title}</h4></div>
                <p>{stage.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="systems-cases" id="systems-cases" aria-labelledby="systems-cases-title">
        <div className="systems-shell">
          <header className="systems-section-header reveal">
            <p>02 / DOSSIERS DE SISTEMAS</p>
            <h2 id="systems-cases-title">Experiencia y laboratorio, sin mezclar contextos.</h2>
            <p>Tres casos corresponden a experiencia profesional. El cuarto es un laboratorio personal de aprendizaje y experimentación.</p>
          </header>

          <div className="systems-context-divider reveal" role="note">
            <ShieldCheck size={20} aria-hidden="true" />
            <p><strong>Alcance público.</strong> Los casos describen método y participación; omiten datos, métricas, identificadores y detalles internos de la operación.</p>
          </div>

          <div className="systems-case-group">
            <div className="systems-group-label reveal"><span>ENTORNO 01</span><strong>Experiencia profesional / TE Connectivity</strong></div>
            <div className="systems-case-grid systems-professional-grid">
              {systemsCases.slice(0, 3).map((item) => <div className="reveal" key={item.slug}><SystemsCaseCard item={item} /></div>)}
            </div>
          </div>

          <div className="systems-case-group systems-lab-group">
            <div className="systems-group-label reveal"><span>ENTORNO 02</span><strong>Laboratorio personal / práctica independiente</strong></div>
            <div className="reveal"><SystemsCaseCard item={systemsCases[3]} /></div>
          </div>
        </div>
      </section>
    </>
  );
}

function SystemsCaseCard({ item }: { item: SystemsCase }) {
  const [active, setActive] = useState(false);

  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActive(false);
  }

  return (
    <article
      className={`systems-case-card systems-case-${item.slug} ${active ? "is-active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={handleBlur}
    >
      <header>
        <span>{item.number}</span><p>{item.contextLabel}</p>
        {item.slug === "homelab" ? <FlaskConical size={22} aria-hidden="true" /> : <CheckCircle2 size={22} aria-hidden="true" />}
      </header>
      <div className="systems-case-body">
        <p>{item.context}</p>
        <h3>{item.title}</h3>
        <p className="systems-case-description">{item.description}</p>
        <ul aria-label={`Áreas de ${item.title}`}>{item.areas.map((area) => <li key={area}>{area}</li>)}</ul>
        {item.modules && <div className="systems-case-modules"><span>MÓDULOS DEL LABORATORIO</span>{item.modules.map((module) => <code key={module}>{module}</code>)}</div>}
        <dl>
          <div><dt>Enfoque de resultado</dt><dd>{item.result}</dd></div>
        </dl>
        <a href={`/casos/${item.slug}`}>Abrir dossier <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </article>
  );
}
