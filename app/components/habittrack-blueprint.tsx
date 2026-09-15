"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  architectureLayers,
  journeySteps,
  type HabitTrackJourneyStep,
  type HabitTrackLayer,
} from "./habittrack-project-data";

export function HabitTrackArchitecture() {
  const [selectedId, setSelectedId] = useState<HabitTrackLayer["id"]>("astro");
  const [previewId, setPreviewId] = useState<HabitTrackLayer["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const activeLayer = architectureLayers.find((layer) => layer.id === activeId) ?? architectureLayers[0];

  return (
    <div className="habittrack-architecture-board">
      <p className="habittrack-representation-label">REPRESENTACIÓN DE ARQUITECTURA / ASTRO + REACT ISLANDS</p>
      <div className="habittrack-layer-grid" aria-label="Cuatro capas de la arquitectura de HabitTrack">
        {architectureLayers.map((layer) => (
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
      <div className="habittrack-layer-output" aria-live="polite" aria-atomic="true">
        <span>RESPONSABILIDAD / {activeLayer.label}</span>
        <p>{activeLayer.responsibility}</p>
        <ul aria-label={`Elementos de ${activeLayer.label}`}>
          {activeLayer.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <small>{activeLayer.state}</small>
      </div>
      <p className="habittrack-deploy-strip">
        <span>SALIDA</span> Vercel / demo pública
        <ArrowRight size={16} aria-hidden="true" />
        <ArrowDown className="habittrack-deploy-vertical" size={16} aria-hidden="true" />
      </p>
    </div>
  );
}

export function HabitTrackJourney() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const activeIndex = previewIndex ?? selectedIndex;
  const activeStep: HabitTrackJourneyStep = journeySteps[activeIndex] ?? journeySteps[0];

  return (
    <div className="habittrack-journey-board">
      <p className="habittrack-representation-label">RECORRIDO DE USO / DEFINIR → AJUSTAR</p>
      <div className="habittrack-week-strip" aria-hidden="true">
        {["L", "M", "X", "J", "V", "S", "D"].map((day, index) => (
          <i key={day} className={index < 5 ? "is-done" : ""}>{day}</i>
        ))}
      </div>
      <div className="habittrack-journey-controls" aria-label="Cinco pasos del recorrido de un hábito">
        {journeySteps.map((step, index) => (
          <button
            type="button"
            key={step.id}
            aria-pressed={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
            onMouseEnter={() => setPreviewIndex(index)}
            onMouseLeave={() => setPreviewIndex(null)}
            onFocus={() => setPreviewIndex(index)}
            onBlur={() => setPreviewIndex(null)}
          >
            <span>{step.number}</span>
            <strong>{step.title}</strong>
          </button>
        ))}
      </div>
      <div className="habittrack-journey-output" aria-live="polite" aria-atomic="true">
        <span>PASO {activeStep.number} / 05 — {activeStep.title.toUpperCase()}</span>
        <dl>
          <div><dt>Objetivo</dt><dd>{activeStep.goal}</dd></div>
          <div><dt>Interfaz</dt><dd>{activeStep.interface}</dd></div>
          <div><dt>Estado real</dt><dd>{activeStep.state}</dd></div>
          {activeStep.limitation && <div><dt>Limitación actual</dt><dd>{activeStep.limitation}</dd></div>}
        </dl>
      </div>
    </div>
  );
}
