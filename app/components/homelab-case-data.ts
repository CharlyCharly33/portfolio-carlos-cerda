export type RebuildStage = {
  id: "inventario" | "sistema" | "red" | "contenedores" | "servicios" | "operacion";
  number: string;
  label: string;
  goal: string;
  decide: string;
  validate: string;
  dependsOn: string;
  state: string;
  limit: string;
};

export const hardware = [
  "Raspberry Pi",
  "Almacenamiento local",
  "Almacenamiento externo",
  "Router doméstico",
];

export const exploredStack = [
  "Linux",
  "Docker",
  "Docker Compose",
  "Portainer",
  "Pi-hole",
  "DNS",
  "SSH",
  "Administración remota",
  "Redes domésticas",
  "Diagnóstico",
  "Mantenimiento básico",
];

export const rebuildStages: RebuildStage[] = [
  {
    id: "inventario",
    number: "01",
    label: "Inventario",
    goal: "Revisar hardware, almacenamiento y conexiones disponibles.",
    decide: "Qué se conserva y en qué estado se encuentra.",
    validate: "Estado físico y capacidad utilizable.",
    dependsOn: "Ninguna; es el punto de partida.",
    state: "Pendiente.",
    limit: "No publicar identificadores del hardware.",
  },
  {
    id: "sistema",
    number: "02",
    label: "Sistema base",
    goal: "Elegir e instalar una base Linux limpia.",
    decide: "Base del sistema, usuarios y acceso administrativo.",
    validate: "Arranque, actualización, usuarios y acceso administrativo.",
    dependsOn: "Inventario revisado.",
    state: "Pendiente.",
    limit: "No seleccionar una distribución concreta si todavía no está decidida.",
  },
  {
    id: "red",
    number: "03",
    label: "Red",
    goal: "Definir conectividad y direccionamiento seguro.",
    decide: "Acceso local y segmentación necesaria.",
    validate: "Acceso local, resolución y segmentación necesaria.",
    dependsOn: "Sistema base instalado.",
    state: "Pendiente.",
    limit: "No publicar topología, IP o configuración real.",
  },
  {
    id: "contenedores",
    number: "04",
    label: "Contenedores",
    goal: "Preparar un entorno reproducible para servicios.",
    decide: "Motor, composición, almacenamiento y reinicio.",
    validate: "Motor de contenedores, Compose, almacenamiento y reinicio.",
    dependsOn: "Red definida.",
    state: "Pendiente.",
    limit: "Sin servicios comprometidos en esta capa.",
  },
  {
    id: "servicios",
    number: "05",
    label: "Servicios",
    goal: "Incorporar servicios uno por uno.",
    decide: "Orden de incorporación y criterios de permanencia.",
    validate: "Dependencias, persistencia y recuperación.",
    dependsOn: "Entorno de contenedores preparado.",
    state: "Pendiente.",
    limit: "No listar servicios futuros como comprometidos.",
  },
  {
    id: "operacion",
    number: "06",
    label: "Operación",
    goal: "Definir mantenimiento, documentación, respaldo y observación.",
    decide: "Procedimientos de revisión y recuperación.",
    validate: "Procedimientos de actualización, revisión y recuperación.",
    dependsOn: "Servicios incorporados.",
    state: "Pendiente.",
    limit: "No afirmar monitoreo existente.",
  },
];

export const rebuildPrinciples = [
  "Base mínima antes de agregar servicios",
  "Configuración reproducible",
  "Documentación desde el inicio",
  "Separación entre datos y contenedores",
  "Respaldo antes de cambios importantes",
  "Acceso remoto controlado",
  "Un servicio por vez",
  "Validación después de cada capa",
  "Seguridad antes de exposición externa",
  "Recuperación como parte del diseño",
];

export const previouslyImplemented = [
  "Linux",
  "Docker y Docker Compose",
  "Portainer",
  "Pi-hole",
  "DNS local",
  "SSH y administración remota",
  "HomeShield DNS",
];

export const nextSteps = [
  "Revisar hardware",
  "Preparar almacenamiento",
  "Instalar Linux",
  "Validar red y acceso",
  "Preparar contenedores",
  "Documentar la base",
  "Elegir el primer servicio",
  "Definir operación y recuperación",
];
