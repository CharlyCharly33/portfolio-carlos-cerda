"use client";

import { useState } from "react";
import { pipelineStages, type PipelineStage } from "./automation-case-data";

export function AutomationPipeline() {
  const [selectedId, setSelectedId] = useState<PipelineStage["id"]>("entrada");
  const [previewId, setPreviewId] = useState<PipelineStage["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const active = pipelineStages.find((item) => item.id === activeId) ?? pipelineStages[0];

  return (
    <div className="automation-pipeline-board">
      <p className="automation-representation-label">PIPELINE SUPERVISADO / SIETE ETAPAS</p>
      <div className="automation-pipeline-stages" aria-label="Siete etapas del pipeline">
        {pipelineStages.map((stage) => (
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
      <div className="automation-pipeline-output" aria-live="polite" aria-atomic="true">
        <span>ETAPA {active.number} / 07 — {active.label.toUpperCase()}</span>
        <dl>
          <div><dt>Propósito</dt><dd>{active.purpose}</dd></div>
          <div><dt>Acción del sistema</dt><dd>{active.system}</dd></div>
          <div><dt>Participación humana</dt><dd>{active.human}</dd></div>
          <div><dt>Resultado</dt><dd>{active.result}</dd></div>
          <div><dt>Frontera de confidencialidad</dt><dd>{active.limit}</dd></div>
        </dl>
      </div>
    </div>
  );
}
