export type SystemsCaseSlug =
  | "it-support"
  | "dashboards"
  | "automatizacion"
  | "homelab";

export type SystemsStage = {
  label: string;
  title: string;
  description: string;
};

export type SystemsCase = {
  number: string;
  slug: SystemsCaseSlug;
  shortName: string;
  title: string;
  context: string;
  contextLabel: string;
  description: string;
  areas: string[];
  participation: string;
  result: string;
  stages: SystemsStage[];
  modules?: string[];
};

export const systemsCases: SystemsCase[] = [
  {
    number: "01",
    slug: "it-support",
    shortName: "IT SUPPORT",
    title: "RSD Support / IT Support",
    context: "TE Connectivity",
    contextLabel: "Experiencia profesional",
    description:
      "Atención estructurada de incidencias y solicitudes, desde la lectura del contexto hasta la validación con la persona usuaria.",
    areas: ["Soporte", "Diagnóstico", "Operación", "Documentación"],
    participation:
      "Análisis inicial, resolución o canalización responsable, seguimiento y registro de conocimiento reutilizable.",
    result:
      "Una operación de soporte más clara, trazable y orientada a recuperar la continuidad del trabajo.",
    stages: [
      { label: "Entrada", title: "Entender antes de actuar", description: "Reunir el contexto necesario y delimitar el impacto sin exponer información de la operación." },
      { label: "Diagnóstico", title: "Aislar la causa probable", description: "Contrastar síntomas, cambios recientes y dependencias para reducir hipótesis de forma ordenada." },
      { label: "Acción", title: "Resolver o canalizar", description: "Aplicar una solución segura o escalar con evidencia suficiente y un contexto accionable." },
      { label: "Validación", title: "Confirmar la continuidad", description: "Verificar el comportamiento esperado junto con la persona usuaria antes de cerrar el flujo." },
      { label: "Registro", title: "Convertir el caso en conocimiento", description: "Documentar lo necesario para facilitar seguimiento y futuras intervenciones, sin conservar datos sensibles." },
    ],
  },
  {
    number: "02",
    slug: "dashboards",
    shortName: "DATOS",
    title: "Datos operativos + Dashboards",
    context: "TE Connectivity",
    contextLabel: "Experiencia profesional",
    description:
      "Transformación de información operativa en vistas comprensibles para seguimiento, revisión y toma de decisiones.",
    areas: ["Datos", "Calidad", "Visualización", "Comunicación"],
    participation:
      "Preparación de datos, definición de criterios, construcción de vistas y revisión con las personas involucradas.",
    result:
      "Lecturas consistentes de la operación, con atención a la calidad del dato y al propósito de cada visualización.",
    stages: [
      { label: "Fuente", title: "Comprender el origen", description: "Identificar qué representa cada conjunto de datos y bajo qué condiciones puede utilizarse." },
      { label: "Preparación", title: "Ordenar y validar", description: "Normalizar estructuras, revisar consistencia y separar excepciones antes de visualizar." },
      { label: "Modelo", title: "Definir una lectura común", description: "Relacionar conceptos y criterios para evitar interpretaciones incompatibles de la misma operación." },
      { label: "Vista", title: "Diseñar para decidir", description: "Priorizar jerarquía, contexto y legibilidad sobre la acumulación de indicadores." },
      { label: "Revisión", title: "Contrastar con el uso real", description: "Validar la vista con sus usuarios y ajustar las preguntas que debe ayudar a responder." },
    ],
  },
  {
    number: "03",
    slug: "automatizacion",
    shortName: "AUTOMATION",
    title: "Automatización + OCR",
    context: "TE Connectivity",
    contextLabel: "Experiencia profesional",
    description:
      "Exploración de flujos asistidos para reducir captura repetitiva, estructurar documentos y conservar puntos de revisión humana.",
    areas: ["Automatización", "OCR", "Validación", "Flujos"],
    participation:
      "Análisis del proceso, diseño del flujo, manejo de excepciones y evaluación de resultados antes de su uso.",
    result:
      "Procesos repetibles con controles visibles, intervención humana definida y mejor manejo de excepciones.",
    stages: [
      { label: "Documento", title: "Reconocer la variación", description: "Revisar formatos y condiciones de entrada para entender dónde puede fallar la extracción." },
      { label: "Extracción", title: "Convertir imagen en estructura", description: "Aplicar reconocimiento de texto y organizar los campos útiles sin asumir que toda lectura es correcta." },
      { label: "Reglas", title: "Evaluar lo recuperado", description: "Comprobar formato, presencia y coherencia para separar resultados utilizables de excepciones." },
      { label: "Revisión", title: "Mantener control humano", description: "Presentar los casos ambiguos para confirmación en lugar de automatizar decisiones inciertas." },
      { label: "Salida", title: "Entregar datos verificables", description: "Preparar una salida estructurada y trazable para el siguiente paso del proceso." },
    ],
  },
  {
    number: "04",
    slug: "homelab",
    shortName: "HOMELAB",
    title: "Laboratorio de infraestructura",
    context: "Entorno personal",
    contextLabel: "Práctica independiente",
    description:
      "Entorno controlado para aprender operación de servicios, redes, observabilidad y recuperación sin confundir práctica personal con experiencia empresarial.",
    areas: ["Linux", "Servicios", "Redes", "Observabilidad"],
    participation:
      "Diseño, despliegue, mantenimiento y documentación del laboratorio con énfasis en aprendizaje reproducible.",
    result:
      "Un espacio seguro para probar decisiones de infraestructura, documentar fallos y fortalecer criterios operativos.",
    modules: ["HomeShield DNS", "Servicios internos", "Monitoreo", "Respaldo y recuperación"],
    stages: [
      { label: "Diseño", title: "Definir el propósito", description: "Delimitar qué se quiere aprender, qué dependencias existen y cómo revertir el experimento." },
      { label: "Despliegue", title: "Construir por capas", description: "Configurar servicios de forma incremental para poder identificar el origen de cada comportamiento." },
      { label: "Observación", title: "Hacer visible el sistema", description: "Revisar salud, registros y señales útiles sin publicar direcciones, dominios o detalles de topología." },
      { label: "Fallo", title: "Practicar la recuperación", description: "Provocar escenarios controlados y comprobar que los pasos de diagnóstico y retorno sean claros." },
      { label: "Bitácora", title: "Conservar el aprendizaje", description: "Registrar decisiones y lecciones transferibles, excluyendo secretos y configuración sensible." },
    ],
  },
];
