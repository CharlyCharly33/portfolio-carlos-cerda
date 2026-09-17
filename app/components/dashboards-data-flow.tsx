"use client";

import { useState } from "react";
import { flowStages, type DataFlowStage } from "./dashboards-case-data";

export function DashboardsFlow() {
  const [selectedId, setSelectedId] = useState<DataFlowStage["id"]>("necesidad");
  const [previewId, setPreviewId] = useState<DataFlowStage["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const active = flowStages.find((item) => item.id === activeId) ?? flowStages[0];

  return (
    <div className="dashboards-flow-board">
      <p className="dashboards-representation-label">FLUJO DE TRANSFORMACIÓN / SEIS ETAPAS</p>
      <div className="dashboards-flow-stages" aria-label="Seis etapas del flujo de datos">
        {flowStages.map((stage) => (
          <button
            type="button"
            key={stage.id}
            aria-pressed={selectedId === stage.id}
            onClick={() => setSelectedId(stage.id)}
            onMouseEnter={() => setPreviewId(stage.id)}
            onMouseLeave={() => setPreviewId(null)}
            onFocus={() => setPreviewId(stage.id)}
            onBlur={() => setPreviewId(null)}
          >
            <span>{stage.number}</span>
            <strong>{stage.label}</strong>
            <em>{selectedId === stage.id ? "SELECCIONADA" : "EXAMINAR"}</em>
          </button>
        ))}
      </div>
      <div className="dashboards-flow-output" aria-live="polite" aria-atomic="true">
        <span>ETAPA {active.number} / 06 — {active.label.toUpperCase()}</span>
        <dl>
          <div><dt>Propósito</dt><dd>{active.purpose}</dd></div>
          <div><dt>Trabajo realizado</dt><dd>{active.work}</dd></div>
          <div><dt>Resultado general</dt><dd>{active.result}</dd></div>
          <div><dt>Límite de confidencialidad</dt><dd>{active.limit}</dd></div>
        </dl>
        <div className="dashboards-flow-tools" aria-label={`Herramientas de ${active.label}`}>
          <h3>Herramientas relacionadas</h3>
          <ul>{active.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
