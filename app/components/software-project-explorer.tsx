"use client";

import {
  ArrowUpRight,
  Braces,
  Database,
  LayoutTemplate,
  MousePointer2,
  PackageOpen,
  ServerCog,
  type LucideIcon,
} from "lucide-react";
import { type FocusEvent, useState } from "react";
import {
  softwareAreas,
  softwareProjects,
  type SoftwareArea,
  type SoftwareProject,
} from "./software-project-data";

type SoftwareFilter = "Todos" | SoftwareArea;

const filters: SoftwareFilter[] = ["Todos", ...softwareAreas];
const constructionAreas = softwareAreas.filter(
  (area): area is Exclude<SoftwareArea, "Producto"> => area !== "Producto",
);
const areaIcons: Record<SoftwareArea, LucideIcon> = {
  Producto: PackageOpen,
  Frontend: Braces,
  Backend: ServerCog,
  Datos: Database,
  Interfaces: LayoutTemplate,
  UX: MousePointer2,
};

export function SoftwareProjectExplorer() {
  const [activeFilter, setActiveFilter] = useState<SoftwareFilter>("Todos");
  const [previewProject, setPreviewProject] = useState<string | null>(null);
  const [integratedAreas, setIntegratedAreas] = useState<SoftwareArea[]>([]);

  const previewAreas = previewProject
    ? softwareProjects.find((project) => project.slug === previewProject)?.areas ?? []
    : [];

  const integrationCount = integratedAreas.length;
  const productComplete = integrationCount === constructionAreas.length;
  const productStatus = productComplete
    ? "PRODUCTO INTEGRADO"
    : integrationCount > 0
      ? "INTEGRANDO"
      : "EN CONSTRUCCIÓN";
  const integrationMessage = productComplete
    ? "Frontend, Backend, Datos, Interfaces y UX funcionan como un mismo sistema."
    : integrationCount === 0
      ? "Selecciona las disciplinas para construir el producto."
      : integrationCount === 1
        ? `1 disciplina conectada: ${integratedAreas[0]}.`
        : `${integrationCount} disciplinas conectadas.`;

  function toggleIntegration(area: SoftwareArea) {
    setIntegratedAreas((current) => current.includes(area)
      ? current.filter((item) => item !== area)
      : [...current, area]);
  }

  return (
    <>
      <section className="software-capabilities" aria-labelledby="capabilities-title">
        <div className="software-shell">
          <header className="software-section-header reveal">
            <p>01 / MAPA DE CAPACIDADES</p>
            <h2 id="capabilities-title">Un producto conecta más de una disciplina.</h2>
            <p>
              Conecta cada disciplina y observa cómo juntas forman un producto
              digital.
            </p>
          </header>

          <div className="capability-map-stage reveal">
            <div className={`capability-map ${productComplete ? "is-complete" : ""}`} aria-label="Construcción interactiva de Producto">
              <div className="capability-connections" aria-hidden="true">
                {constructionAreas.map((area) => (
                  <i
                    className={`${integratedAreas.includes(area) ? "is-connected" : ""} ${previewAreas.includes(area) ? "is-previewed" : ""}`}
                    key={area}
                  />
                ))}
              </div>
              {constructionAreas.map((area) => {
                const Icon = areaIcons[area];
                const integrated = integratedAreas.includes(area);
                const previewed = previewAreas.includes(area);
                return (
                  <button
                    className={`capability-node capability-${area.toLowerCase()} ${integrated ? "is-integrated" : ""} ${previewed ? "is-previewed" : ""}`}
                    type="button"
                    key={area}
                    aria-pressed={integrated}
                    onClick={() => toggleIntegration(area)}
                  >
                    <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
                    <span>{area}</span>
                  </button>
                );
              })}

              <div
                className={`capability-product ${productComplete ? "is-integrated" : ""} ${integrationCount > 0 ? "is-integrating" : ""}`}
                aria-label={`Producto: ${integrationCount} de 5 disciplinas conectadas. ${productStatus}`}
              >
                <span className="capability-product-status"><i /> {productStatus}</span>
                <PackageOpen size={23} strokeWidth={1.4} aria-hidden="true" />
                <strong>Producto</strong>
                <div className="integration-segments" aria-hidden="true">
                  {constructionAreas.map((area, index) => (
                    <i className={index < integrationCount ? "is-filled" : ""} key={area} />
                  ))}
                </div>
                <span>INTEGRACIÓN {integrationCount} / 5</span>
              </div>

              <p className="integration-message" aria-live="polite" aria-atomic="true">
                {integrationMessage}
              </p>

              {integrationCount > 0 && (
                <button
                  className="integration-reset"
                  type="button"
                  onClick={() => setIntegratedAreas([])}
                >
                  Reiniciar integración
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="software-projects" id="software-projects" aria-labelledby="projects-title">
        <div className="software-shell">
          <header className="software-section-header reveal">
            <p>02 / EXPLORADOR DE PROYECTOS</p>
            <h2 id="projects-title">Cuatro planos, distintas escalas.</h2>
            <p>
              Cada caso muestra una combinación diferente de producto,
              desarrollo, datos e interfaz.
            </p>
          </header>

          <div className="software-filters reveal" aria-label="Filtrar proyectos por área">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="software-project-board reveal">
            {softwareProjects.map((project) => {
              const matches = activeFilter === "Todos" || project.areas.includes(activeFilter);
              return (
                <SoftwareProjectCard
                  project={project}
                  key={project.slug}
                  dimmed={!matches}
                  previewed={previewProject === project.slug}
                  filterState={activeFilter === "Todos"
                    ? "Vista general"
                    : matches
                      ? `Relacionado con ${activeFilter}`
                      : `Otras áreas · filtro ${activeFilter}`}
                  onActivate={() => setPreviewProject(project.slug)}
                  onDeactivate={() => setPreviewProject(null)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function SoftwareProjectCard({
  project,
  dimmed,
  previewed,
  filterState,
  onActivate,
  onDeactivate,
}: {
  project: SoftwareProject;
  dimmed: boolean;
  previewed: boolean;
  filterState: string;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      onDeactivate();
    }
  }

  return (
    <article
      className={`software-project-card project-${project.slug} ${dimmed ? "is-dimmed" : ""} ${previewed ? "is-previewed" : ""}`}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={handleBlur}
    >
      <div className="project-card-rail" aria-hidden="true">
        <span>{project.number}</span>
        <i />
      </div>

      <div className="project-card-main">
        <div className="project-card-heading">
          <div>
            <p>{project.type}</p>
            <h3>{project.name}</h3>
          </div>
          <span className="project-status"><i /> {project.status}</span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-areas" aria-label={`Áreas de ${project.name}`}>
          {project.areas.map((area) => <span key={area}>{area}</span>)}
        </div>

        {project.technicalTags && (
          <div className="project-technical-tags" aria-label="Etiquetas conceptuales">
            {project.technicalTags.map((tag) => <code key={tag}>{tag}</code>)}
          </div>
        )}

        <div className="project-card-footer">
          <span className="project-filter-state">{filterState}</span>
          <a href={`/proyectos/${project.slug}`}>
            Abrir plano <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="project-card-module" aria-hidden="true">
        <span /><span /><span /><i /><i />
      </div>
    </article>
  );
}
