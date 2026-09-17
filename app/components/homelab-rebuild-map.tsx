"use client";

import { useState } from "react";
import { rebuildStages, type RebuildStage } from "./homelab-case-data";

export function HomelabRebuildMap() {
  const [selectedId, setSelectedId] = useState<RebuildStage["id"]>("inventario");
  const [previewId, setPreviewId] = useState<RebuildStage["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const active = rebuildStages.find((item) => item.id === activeId) ?? rebuildStages[0];

  return (
    <div className="homelab-rebuild-board">
      <p className="homelab-representation-label">MAPA DE RECONSTRUCCIÓN / SEIS CAPAS — PLANIFICADO, NO INICIADO</p>
      <div className="homelab-rebuild-stages" aria-label="Seis capas de reconstrucción">
        {rebuildStages.map((stage) => (
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
            <em>PENDIENTE</em>
          </button>
        ))}
      </div>
      <div className="homelab-rebuild-output" aria-live="polite" aria-atomic="true">
        <span>ETAPA {active.number} / 06 — {active.label.toUpperCase()} / PENDIENTE</span>
        <dl>
          <div><dt>Objetivo</dt><dd>{active.goal}</dd></div>
          <div><dt>Qué deberá decidirse</dt><dd>{active.decide}</dd></div>
          <div><dt>Qué deberá validarse</dt><dd>{active.validate}</dd></div>
          <div><dt>Dependencia anterior</dt><dd>{active.dependsOn}</dd></div>
          <div><dt>Límite de seguridad</dt><dd>{active.limit}</dd></div>
        </dl>
      </div>
    </div>
  );
}
