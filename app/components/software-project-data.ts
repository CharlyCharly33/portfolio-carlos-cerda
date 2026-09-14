export type SoftwareArea =
  | "Producto"
  | "Frontend"
  | "Backend"
  | "Datos"
  | "Interfaces"
  | "UX";

export type SoftwareProject = {
  number: string;
  slug: "kivonex" | "habittrack" | "armando" | "focusly";
  name: string;
  type: string;
  description: string;
  areas: SoftwareArea[];
  participation: string;
  status: string;
  technicalTags?: string[];
};

export const softwareAreas: SoftwareArea[] = [
  "Producto",
  "Frontend",
  "Backend",
  "Datos",
  "Interfaces",
  "UX",
];

export const softwareProjects: SoftwareProject[] = [
  {
    number: "01",
    slug: "kivonex",
    name: "Kivonex",
    type: "Producto full stack",
    description:
      "Plataforma en evolución para apoyar la administración y operación de gimnasios mediante módulos conectados.",
    areas: ["Producto", "Frontend", "Backend", "Datos", "Interfaces", "UX"],
    participation:
      "Dirección del producto, arquitectura, desarrollo y revisión técnica.",
    status: "En desarrollo activo",
  },
  {
    number: "02",
    slug: "habittrack",
    name: "HabitTrack",
    type: "Aplicación web",
    description:
      "Producto personal orientado al seguimiento de hábitos y a la construcción de una experiencia clara y utilizable.",
    areas: ["Producto", "Frontend", "Datos", "Interfaces", "UX"],
    participation:
      "Definición del producto, desarrollo, organización técnica y evolución funcional.",
    status: "Producto en evolución",
  },
  {
    number: "03",
    slug: "armando",
    name: "Armando",
    type: "Laboratorio de inteligencia artificial",
    description:
      "Entorno personal de experimentación con agentes, MCP, contexto, permisos, seguridad y automatización supervisada.",
    areas: ["Backend", "Datos", "Producto"],
    technicalTags: ["IA", "AGENTES", "MCP", "SEGURIDAD", "AUTOMATIZACIÓN"],
    participation:
      "Diseño del enfoque, experimentación, definición de permisos y validación de comportamientos.",
    status: "Laboratorio técnico",
  },
  {
    number: "04",
    slug: "focusly",
    name: "Focusly",
    type: "Experiencia frontend",
    description:
      "Landing page desarrollada como práctica profesional para trabajar interfaz, comunicación visual, responsive y refinamiento de experiencia.",
    areas: ["Frontend", "Interfaces", "UX"],
    participation:
      "Implementación frontend, ajustes visuales, responsive y refinamiento de interacción.",
    status: "Caso frontend",
  },
];
