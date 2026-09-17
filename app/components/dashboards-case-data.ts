export type DataFlowStage = {
  id: "necesidad" | "fuentes" | "preparacion" | "modelo" | "indicadores" | "lectura";
  number: string;
  label: string;
  purpose: string;
  work: string;
  tools: string[];
  result: string;
  limit: string;
};

export const flowStages: DataFlowStage[] = [
  {
    id: "necesidad",
    number: "01",
    label: "Necesidad",
    purpose: "Entender qué pregunta operativa debía responderse.",
    work: "Delimitar la necesidad, el contexto y la lectura esperada.",
    tools: ["Conversación, análisis y documentación"],
    result: "Pregunta de trabajo definida.",
    limit: "No publicar el área, proceso o necesidad concreta.",
  },
  {
    id: "fuentes",
    number: "02",
    label: "Fuentes",
    purpose: "Identificar dónde se encontraba la información disponible.",
    work: "Reconocer archivos, espacios compartidos y estructuras utilizables.",
    tools: ["Excel", "SharePoint"],
    result: "Fuentes identificadas para preparación.",
    limit: "No mostrar nombres, rutas, bibliotecas, archivos ni estructura corporativa.",
  },
  {
    id: "preparacion",
    number: "03",
    label: "Preparación",
    purpose: "Convertir información dispersa en una base consistente.",
    work: "Limpieza, transformación, normalización y revisión.",
    tools: ["Power Query", "Excel"],
    result: "Información preparada para modelado.",
    limit: "No mostrar columnas, fórmulas, reglas ni valores reales.",
  },
  {
    id: "modelo",
    number: "04",
    label: "Modelo",
    purpose: "Organizar relaciones y estructuras para permitir análisis.",
    work: "Definición de relaciones, jerarquías y lógica de lectura.",
    tools: ["Power BI", "Power Query"],
    result: "Modelo preparado para construir indicadores.",
    limit: "No reproducir el modelo corporativo ni sus entidades reales.",
  },
  {
    id: "indicadores",
    number: "05",
    label: "Indicadores",
    purpose: "Traducir el modelo en señales interpretables.",
    work: "Construcción y organización de indicadores relacionados con la necesidad.",
    tools: ["Power BI"],
    result: "Lecturas operativas estructuradas.",
    limit: "No publicar KPIs, fórmulas, umbrales, cifras ni nombres reales.",
  },
  {
    id: "lectura",
    number: "06",
    label: "Lectura",
    purpose: "Presentar información con una jerarquía visual comprensible.",
    work: "Organización de vistas, filtros y elementos visuales.",
    tools: ["Power BI"],
    result: "Dashboard disponible para lectura interna.",
    limit: "No mostrar capturas ni recreaciones que puedan confundirse con el original.",
  },
];

export const toolGroups = [
  { area: "Fuentes y colaboración", items: ["SharePoint", "Excel"] },
  { area: "Preparación", items: ["Power Query", "Excel"] },
  { area: "Modelo y visualización", items: ["Power BI", "Power Query"] },
  { area: "Lectura y comunicación", items: ["Jerarquía visual", "Organización de indicadores", "Contexto operativo", "Validación de interpretación"] },
];

export const readingJourney = [
  { step: "Comprender la pregunta", decision: "Delimitar qué necesita leerse.", result: "Necesidad definida.", control: "¿La información responde a la necesidad?" },
  { step: "Revisar la información disponible", decision: "Identificar fuentes utilizables.", result: "Fuentes reconocidas.", control: "¿Las transformaciones son consistentes?" },
  { step: "Preparar la información", decision: "Limpiar y normalizar.", result: "Base consistente.", control: "¿Las transformaciones son consistentes?" },
  { step: "Organizar el modelo", decision: "Definir relaciones y jerarquías.", result: "Modelo de lectura.", control: "¿Los filtros conservan el contexto?" },
  { step: "Diseñar los indicadores", decision: "Traducir el modelo en señales.", result: "Indicadores estructurados.", control: "¿La lectura puede interpretarse sin explicación excesiva?" },
  { step: "Construir la lectura", decision: "Ordenar vistas y filtros.", result: "Dashboard interno.", control: "¿La vista evita ruido innecesario?" },
  { step: "Validar la interpretación", decision: "Contrastar con la necesidad.", result: "Lectura validada.", control: "¿La lectura puede interpretarse sin explicación excesiva?" },
  { step: "Ponerla a disposición interna", decision: "Compartir en el contexto previsto.", result: "Uso interno conocido.", control: "¿Los filtros conservan el contexto?" },
];

export const visualizationPrinciples = [
  "Jerarquía antes que decoración",
  "Contexto antes que volumen",
  "Indicadores alineados con una pregunta",
  "Consistencia visual",
  "Filtros comprensibles",
  "Lecturas progresivas",
  "Validación antes de compartir",
  "Evitar conclusiones fuera de contexto",
];

export const confirmedState = [
  "Se trabajó con información operativa interna",
  "Se utilizaron Power BI, Power Query, Excel y SharePoint",
  "Se construyeron dashboards",
  "Hasta donde Carlos tuvo conocimiento, llegaron a utilizarse en el contexto interno correspondiente",
];

export const notClaimedState = [
  "Seguimiento posterior",
  "Adopción permanente",
  "Uso actual",
  "Alcance organizacional",
  "Impacto cuantitativo",
  "Ahorro de tiempo",
  "Mejora porcentual",
  "Despliegue para toda la empresa",
];

export const learnings = [
  "Una gráfica no corrige una pregunta mal definida",
  "Preparar información es tan importante como visualizarla",
  "Un indicador necesita contexto para ser interpretado",
  "La confidencialidad también forma parte del diseño",
  "El seguimiento posterior no debe suponerse sin evidencia",
];
