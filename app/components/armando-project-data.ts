export type ArmandoExperiment = {
  id: "models" | "tools" | "mcp" | "memory";
  number: string;
  label: string;
  question: string;
  setup: string;
  evidence: string;
  result: string;
  limitation: string;
  decision: string;
  status: string;
  accessibleState: string;
};

export type ArmandoRoute = {
  id: "a" | "b" | "c" | "d";
  label: string;
  path: string[];
  notes: string[];
};

export type ArmandoDecision = {
  id: string;
  title: string;
  decision: string;
  reason: string;
};

export type ArmandoEvolutionStage = {
  label: string;
  items: string[];
  next?: boolean;
};

export const experiments: ArmandoExperiment[] = [
  {
    id: "models",
    number: "01",
    label: "Modelos locales",
    question: "¿Es posible trabajar directamente con modelos locales desde scripts controlados?",
    setup: "Node.js, API HTTP local de Ollama, llama3.2 y qwen2.5-coder:3b.",
    evidence: "Envío de prompts, comparación de modelos, pruebas de contexto y benchmarks experimentales.",
    result: "Comunicación local funcional y comparación básica de respuestas.",
    limitation: "Los resultados dependen del hardware, la configuración y los modelos instalados.",
    decision: "Seguir evaluando.",
    status: "EXPERIMENTO FUNCIONAL",
    accessibleState: "Experimento funcional",
  },
  {
    id: "tools",
    number: "02",
    label: "Tool calling",
    question: "¿Puede un modelo seleccionar una herramienta sin recibir control directo sobre la ejecución?",
    setup: "Ollama, schemas y validación de argumentos.",
    evidence: "Generación de solicitudes de herramientas y validación previa de entradas.",
    result: "El modelo puede proponer una llamada; el programa conserva el control de ejecución.",
    limitation: "No constituye todavía una capa general de orquestación.",
    decision: "Adoptar el patrón de separación.",
    status: "PATRÓN COMPROBADO",
    accessibleState: "Patrón comprobado",
  },
  {
    id: "mcp",
    number: "03",
    label: "MCP seguro",
    question: "¿Cómo exponer herramientas locales con el menor privilegio posible?",
    setup: "Model Context Protocol, SDK JavaScript, procesos locales, sandbox y allowlists.",
    evidence: "Descubrimiento de tools, resources y prompts; lectura controlada; propuestas de escritura y canal autenticado de ejecución.",
    result: "Separación funcional entre lectura, propuesta y ejecución autorizada.",
    limitation: "No existe todavía una confirmación humana interactiva con identidad y auditoría.",
    decision: "Mantener la separación de capacidades.",
    status: "PROTOTIPO DE SEGURIDAD",
    accessibleState: "Prototipo de seguridad",
  },
  {
    id: "memory",
    number: "04",
    label: "Memoria persistente",
    question: "¿Puede conservarse contexto local separado por proyecto?",
    setup: "Engram v1.20.0 ejecutado de forma aislada.",
    evidence: "Persistencia local, búsqueda, restauración sobre base vacía y exportaciones de prueba con datos ficticios.",
    result: "La persistencia aislada funciona dentro del laboratorio.",
    limitation: "No está integrada con OpenCode ni funciona como memoria general de Armando.",
    decision: "Continuar evaluación.",
    status: "LABORATORIO AISLADO",
    accessibleState: "Laboratorio aislado",
  },
];

export const routes: ArmandoRoute[] = [
  {
    id: "a",
    label: "Ruta A",
    path: ["Scripts JavaScript", "API local de Ollama", "Modelos locales"],
    notes: ["Consultas y comparaciones controladas desde scripts."],
  },
  {
    id: "b",
    label: "Ruta B",
    path: ["OpenCode", "Configuración MCP", "Servidor local de solo lectura"],
    notes: ["OpenCode solo está conectado al MCP local básico."],
  },
  {
    id: "c",
    label: "Ruta C",
    path: ["Cliente MCP", "Propuesta de escritura", "Canal autenticado de ejecución", "Sandbox"],
    notes: ["Los MCP de escritura no están configurados como herramientas generales."],
  },
  {
    id: "d",
    label: "Ruta D",
    path: ["Cliente MCP de prueba", "Engram aislado", "Almacenamiento experimental"],
    notes: ["Engram no está integrado con OpenCode."],
  },
];

export const decisions: ArmandoDecision[] = [
  {
    id: "ADR-01",
    title: "Local-first",
    decision: "Evaluar inicialmente modelos y servicios ejecutados en el equipo local.",
    reason: "Conservar control del entorno y entender las piezas antes de depender de servicios externos.",
  },
  {
    id: "ADR-02",
    title: "Experimentos desacoplados",
    decision: "Separar cada investigación en un laboratorio pequeño.",
    reason: "Evitar que resultados provisionales se conviertan prematuramente en arquitectura permanente.",
  },
  {
    id: "ADR-03",
    title: "Herramientas validadas",
    decision: "Validar schemas y argumentos antes de ejecutar una herramienta.",
    reason: "La salida del modelo no debe considerarse confiable por sí sola.",
  },
  {
    id: "ADR-04",
    title: "Mínimo privilegio",
    decision: "Separar lectura, propuesta y ejecución.",
    reason: "Cada proceso debe recibir únicamente las capacidades necesarias.",
  },
  {
    id: "ADR-05",
    title: "Memoria aislada",
    decision: "Evaluar Engram fuera de la integración principal.",
    reason: "Comprobar persistencia, búsqueda y restauración antes de adoptarlo.",
  },
  {
    id: "ADR-06",
    title: "Evidencia antes de integración",
    decision: "Registrar resultados y limitaciones antes de conectar nuevas piezas.",
    reason: "Distinguir investigación funcional de producto terminado.",
  },
];

export const evolutionStages: ArmandoEvolutionStage[] = [
  { label: "01 / Base documental", items: ["README, AGENTS y estructura inicial"] },
  { label: "02 / Ollama", items: ["Modelos, API, contexto y comparaciones"] },
  { label: "03 / Tool calling", items: ["Selección de herramientas y argumentos"] },
  { label: "04 / MCP", items: ["Tools, resources, prompts y primer servidor"] },
  { label: "05 / Seguridad", items: ["Sandbox, allowlists, propuesta y ejecución autenticada"] },
  { label: "06 / Memoria", items: ["Investigación y laboratorio aislado de Engram"] },
  { label: "07 / Integración", items: ["Siguiente etapa, todavía no implementada"], next: true },
];

export const verifiedCapabilities = [
  "Clientes locales para Ollama",
  "Comparación de modelos",
  "Pruebas de contexto",
  "Tool calling",
  "Validación de argumentos",
  "MCP de solo lectura",
  "Sandbox y allowlists",
  "Propuesta separada de escritura",
  "Canal autenticado de ejecución",
  "Laboratorio aislado de Engram",
];

export const nextBuild = [
  "Consolidar documentación estable",
  "Mejorar reproducibilidad",
  "Integrar memoria solamente si supera la evaluación",
  "Diseñar una capa central de orquestación",
  "Definir una interfaz",
  "Evaluar router de modelos",
  "Explorar posteriormente RAG, voz y Raspberry Pi",
];

export const technologies = [
  "JavaScript",
  "Node.js",
  "Ollama",
  "API HTTP local",
  "llama3.2",
  "qwen2.5-coder:3b",
  "Model Context Protocol",
  "SDK JavaScript de MCP",
  "Schemas y validación de argumentos",
  "Procesos locales",
  "Engram v1.20.0",
  "Git",
];
