"use client";

import { ArrowDown, ArrowRight, GitCommitHorizontal } from "lucide-react";
import { useState } from "react";
import {
  architectureLayers,
  membershipFlow,
  type KivonexFlowStep,
  type KivonexLayer,
} from "./kivonex-project-data";

export function KivonexArchitecture() {
  const [selectedId, setSelectedId] = useState<KivonexLayer["id"]>("interface");
  const [previewId, setPreviewId] = useState<KivonexLayer["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const activeLayer = architectureLayers.find((layer) => layer.id === activeId) ?? architectureLayers[0];

  return (
    <div className="kivonex-architecture-board">
      <p className="kivonex-representation-label">REPRESENTACIÓN DE ARQUITECTURA / MONOLITO MODULAR CLIENTE-SERVIDOR</p>
      <div className="kivonex-architecture-flow" aria-label="Cinco capas de la arquitectura de Kivonex">
        {architectureLayers.map((layer, index) => (
          <div className="kivonex-architecture-step" key={layer.id}>
            <button
              type="button"
              aria-pressed={selectedId === layer.id}
              onClick={() => setSelectedId(layer.id)}
              onMouseEnter={() => setPreviewId(layer.id)}
              onMouseLeave={() => setPreviewId(null)}
              onFocus={() => setPreviewId(layer.id)}
              onBlur={() => setPreviewId(null)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{layer.label}</strong>
              <small>{layer.technologies.join(" / ")}</small>
              <em>{selectedId === layer.id ? "SELECCIONADA" : "EXAMINAR"}</em>
            </button>
            {index < architectureLayers.length - 1 && (
              <span className="kivonex-architecture-arrow" aria-hidden="true">
                <ArrowRight className="architecture-arrow-horizontal" size={18} />
                <ArrowDown className="architecture-arrow-vertical" size={18} />
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="kivonex-architecture-output" aria-live="polite" aria-atomic="true">
        <span>RESPONSABILIDAD / {activeLayer.label}</span>
        <p>{activeLayer.responsibility}</p>
        <small>{activeLayer.state}</small>
      </div>
      <p className="kivonex-architecture-note">El frontend consume la API. El backend concentra autenticación, autorización, validaciones, reglas de negocio, acceso a datos y estados derivados.</p>
    </div>
  );
}

export function KivonexMembershipFlow() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const activeIndex = previewIndex ?? selectedIndex;
  const activeStep: KivonexFlowStep = membershipFlow[activeIndex] ?? membershipFlow[0];

  return (
    <div className="kivonex-flow-board">
      <p className="kivonex-representation-label">RECORRIDO DE NEGOCIO / ASIGNACIÓN TRANSACCIONAL</p>
      <div className="kivonex-flow-controls" aria-label="Seis pasos de asignación de membresía">
        {membershipFlow.map((step, index) => (
          <button
            type="button"
            key={step.label}
            aria-pressed={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
            onMouseEnter={() => setPreviewIndex(index)}
            onMouseLeave={() => setPreviewIndex(null)}
            onFocus={() => setPreviewIndex(index)}
            onBlur={() => setPreviewIndex(null)}
          >
            <span>{step.label}</span><strong>{step.title}</strong>
          </button>
        ))}
      </div>
      <div className="kivonex-flow-output" aria-live="polite" aria-atomic="true">
        <GitCommitHorizontal size={24} aria-hidden="true" />
        <div><span>PASO {activeStep.label} / 06</span><h3>{activeStep.title}</h3><p>{activeStep.description}</p></div>
      </div>
    </div>
  );
}
