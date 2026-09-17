"use client";

import { useState } from "react";
import {
  experiments,
  routes,
  type ArmandoExperiment,
  type ArmandoRoute,
} from "./armando-project-data";

export function ArmandoLabBench() {
  const [selectedId, setSelectedId] = useState<ArmandoExperiment["id"]>("models");
  const [previewId, setPreviewId] = useState<ArmandoExperiment["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const active = experiments.find((item) => item.id === activeId) ?? experiments[0];

  return (
    <div className="armando-lab-board">
      <p className="armando-representation-label">BANCO DE PRUEBAS / CUATRO EXPERIMENTOS DESACOPLADOS</p>
      <div className="armando-lab-selectors" aria-label="Cuatro experimentos del laboratorio">
        {experiments.map((item) => (
          <button
            type="button"
            key={item.id}
            aria-pressed={selectedId === item.id}
            onClick={() => setSelectedId(item.id)}
            onMouseEnter={() => setPreviewId(item.id)}
            onMouseLeave={() => setPreviewId(null)}
            onFocus={() => setPreviewId(item.id)}
            onBlur={() => setPreviewId(null)}
          >
            <span>{item.number}</span>
            <strong>{item.label}</strong>
            <em>{selectedId === item.id ? "SELECCIONADO" : "EXAMINAR"}</em>
          </button>
        ))}
      </div>
      <div className="armando-lab-output" aria-live="polite" aria-atomic="true">
        <span>PREGUNTA / {active.label.toUpperCase()}</span>
        <p className="armando-lab-question">{active.question}</p>
        <dl>
          <div><dt>Configuración</dt><dd>{active.setup}</dd></div>
          <div><dt>Evidencia</dt><dd>{active.evidence}</dd></div>
          <div><dt>Resultado</dt><dd>{active.result}</dd></div>
          <div><dt>Limitación</dt><dd>{active.limitation}</dd></div>
          <div><dt>Decisión actual</dt><dd>{active.decision}</dd></div>
        </dl>
        <p className="armando-lab-status"><i /> {active.status}</p>
      </div>
      <ol className="armando-lab-flow" aria-label="Recorrido de cada experimento">
        {["Pregunta", "Configuración", "Evidencia", "Límite", "Decisión"].map((step, index) => (
          <li key={step} tabIndex={0}>
            <span>{String(index + 1).padStart(2, "0")}</span> {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ArmandoRoutes() {
  const [selectedId, setSelectedId] = useState<ArmandoRoute["id"]>("a");
  const [previewId, setPreviewId] = useState<ArmandoRoute["id"] | null>(null);
  const activeId = previewId ?? selectedId;
  const active = routes.find((item) => item.id === activeId) ?? routes[0];

  return (
    <div className="armando-routes-board">
      <p className="armando-representation-label">ARQUITECTURA REAL / CUATRO RUTAS DESACOPLADAS</p>
      <div className="armando-routes-selectors" aria-label="Cuatro rutas independientes">
        {routes.map((route) => (
          <button
            type="button"
            key={route.id}
            aria-pressed={selectedId === route.id}
            onClick={() => setSelectedId(route.id)}
            onMouseEnter={() => setPreviewId(route.id)}
            onMouseLeave={() => setPreviewId(null)}
            onFocus={() => setPreviewId(route.id)}
            onBlur={() => setPreviewId(null)}
          >
            {route.label}
          </button>
        ))}
      </div>
      <div className="armando-routes-output" aria-live="polite" aria-atomic="true">
        <ol aria-label={`Pasos de ${active.label}`}>
          {active.path.map((step) => (
            <li key={step} tabIndex={0}>{step}</li>
          ))}
        </ol>
        {active.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
      <p className="armando-routes-note">Sin capa central. Sin conexiones entre rutas. Raspberry Pi no forma parte de la arquitectura actual.</p>
    </div>
  );
}
