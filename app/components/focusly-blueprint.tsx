"use client";

import { useState } from "react";
import {
  archLayers,
  authPhases,
  funnelSteps,
  type FocuslyArchLayer,
  type FocuslyAuthPhase,
  type FocuslyFunnelStep,
} from "./focusly-project-data";

export function FocuslyFunnel() {
  const [selectedId, setSelectedId] = useState<FocuslyFunnelStep["id"]>("promesa");
  const [previewId, setPreviewId] = useState<FocuslyFunnelStep["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const active = funnelSteps.find((item) => item.id === activeId) ?? funnelSteps[0];

  return (
    <div className="focusly-funnel-board">
      <p className="focusly-representation-label">EMBUDO DE ADQUISICIÓN / DEL VISITANTE A LA SESIÓN</p>
      <div className="focusly-funnel-stages" aria-label="Cinco etapas del embudo">
        {funnelSteps.map((step) => (
          <button
            type="button"
            key={step.id}
            aria-pressed={selectedId === step.id}
            onClick={() => setSelectedId(step.id)}
            onMouseEnter={() => setPreviewId(step.id)}
            onMouseLeave={() => setPreviewId(null)}
            onFocus={() => setPreviewId(step.id)}
            onBlur={() => setPreviewId(null)}
          >
            <span>{step.number}</span>
            <strong>{step.title}</strong>
          </button>
        ))}
      </div>
      <div className="focusly-funnel-output" aria-live="polite" aria-atomic="true">
        <span>ETAPA {active.number} / 05 — {active.title.toUpperCase()}</span>
        <dl>
          <div><dt>Qué ve el visitante</dt><dd>{active.visitor}</dd></div>
          <div><dt>Qué ejecuta el sistema</dt><dd>{active.system}</dd></div>
          <div><dt>Evidencia</dt><dd>{active.evidence}</dd></div>
          <div><dt>Límite</dt><dd>{active.limit}</dd></div>
        </dl>
      </div>
    </div>
  );
}

export function FocuslyArchitecture() {
  const [selectedId, setSelectedId] = useState<FocuslyArchLayer["id"]>("presentacion");
  const [previewId, setPreviewId] = useState<FocuslyArchLayer["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const active = archLayers.find((item) => item.id === activeId) ?? archLayers[0];

  return (
    <div className="focusly-architecture-board">
      <p className="focusly-representation-label">ARQUITECTURA REAL / DOS ENTORNOS DISTINTOS</p>
      <div className="focusly-arch-layers" aria-label="Cinco capas de la arquitectura">
        {archLayers.map((layer) => (
          <button
            type="button"
            key={layer.id}
            aria-pressed={selectedId === layer.id}
            onClick={() => setSelectedId(layer.id)}
            onMouseEnter={() => setPreviewId(layer.id)}
            onMouseLeave={() => setPreviewId(null)}
            onFocus={() => setPreviewId(layer.id)}
            onBlur={() => setPreviewId(null)}
          >
            <span>{layer.number}</span>
            <strong>{layer.label}</strong>
            <em>{selectedId === layer.id ? "SELECCIONADA" : "EXAMINAR"}</em>
          </button>
        ))}
      </div>
      <div className="focusly-arch-output" aria-live="polite" aria-atomic="true">
        <span>CAPA {active.number} / 05 — {active.label.toUpperCase()}</span>
        <p>{active.responsibility}</p>
        <ul aria-label={`Elementos de ${active.label}`}>
          {active.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="focusly-env-split" aria-label="Separación de entornos">
        <p><span>PUBLICACIÓN ESTÁTICA</span> GitHub Pages</p>
        <p><span>ENTORNO OPERATIVO LOCAL</span> PHP + MySQL</p>
      </div>
    </div>
  );
}

export function FocuslyAuthFlow() {
  const [selectedId, setSelectedId] = useState<FocuslyAuthPhase["id"]>("entrada");
  const [previewId, setPreviewId] = useState<FocuslyAuthPhase["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const active = authPhases.find((item) => item.id === activeId) ?? authPhases[0];

  return (
    <div className="focusly-auth-board">
      <p className="focusly-representation-label">RECORRIDO AUTENTICADO / CINCO FASES</p>
      <div className="focusly-auth-phases" aria-label="Cinco fases del recorrido autenticado">
        {authPhases.map((phase) => (
          <button
            type="button"
            key={phase.id}
            aria-pressed={selectedId === phase.id}
            onClick={() => setSelectedId(phase.id)}
            onMouseEnter={() => setPreviewId(phase.id)}
            onMouseLeave={() => setPreviewId(null)}
            onFocus={() => setPreviewId(phase.id)}
            onBlur={() => setPreviewId(null)}
          >
            {phase.label}
          </button>
        ))}
      </div>
      <div className="focusly-auth-output" aria-live="polite" aria-atomic="true">
        <span>FASE / {active.label.toUpperCase()}</span>
        <ol aria-label={`Pasos de ${active.label}`}>
          {active.steps.map((step) => (
            <li key={step} tabIndex={0}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
