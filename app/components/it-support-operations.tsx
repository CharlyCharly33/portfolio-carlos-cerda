"use client";

import { useState } from "react";
import { layers, type ItSupportLayer } from "./it-support-case-data";

export function ItSupportConsole() {
  const [selectedId, setSelectedId] = useState<ItSupportLayer["id"]>("usuario");
  const [previewId, setPreviewId] = useState<ItSupportLayer["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const active = layers.find((item) => item.id === activeId) ?? layers[0];

  return (
    <div className="it-support-console-board">
      <p className="it-support-representation-label">CONSOLA DE COBERTURA / SEIS CAPAS CONECTADAS</p>
      <div className="it-support-layer-stack" aria-label="Seis capas de cobertura operativa">
        {layers.map((layer) => (
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
      <div className="it-support-layer-output" aria-live="polite" aria-atomic="true">
        <span>CAPA {active.number} / 06 — {active.label.toUpperCase()}</span>
        <dl>
          <div><dt>Qué se observaba</dt><dd>{active.observation}</dd></div>
          <div><dt>Resolución directa</dt><dd>{active.direct}</dd></div>
          <div><dt>Escalamiento</dt><dd>{active.escalate}</dd></div>
          <div><dt>Verificación</dt><dd>{active.verify}</dd></div>
        </dl>
        <div className="it-support-layer-detail">
          <section aria-label={`Herramientas de ${active.label}`}>
            <h3>Herramientas relacionadas</h3>
            <ul>{active.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </section>
          <section aria-label={`Actividades en ${active.label}`}>
            <h3>Actividades</h3>
            <ul>{active.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
          </section>
        </div>
      </div>
    </div>
  );
}
