export type PipelineStage = {
  id: "entrada" | "preparacion" | "ocr" | "extraccion" | "validacion" | "estructuracion" | "salida";
  number: string;
  label: string;
  purpose: string;
  system: string;
  human: string;
  result: string;
  limit: string;
};

export const pipelineStages: PipelineStage[] = [
  {
    id: "entrada",
    number: "01",
    label: "Entrada",
    purpose: "Recibir un documento dentro del flujo del prototipo.",
    system: "Identificar una entrada disponible para procesamiento.",
    human: "Seleccionar o proporcionar el documento correspondiente.",
    result: "Entrada disponible.",
    limit: "No describir formato, origen, contenido o ruta.",
  },
  {
    id: "preparacion",
    number: "02",
    label: "Preparación",
    purpose: "Acondicionar la entrada antes de la lectura.",
    system: "Preparar el contenido para enviarlo al servicio OCR.",
    human: "Verificar que la entrada fuera utilizable.",
    result: "Documento preparado para lectura.",
    limit: "No inventar técnicas específicas de imagen si no están confirmadas.",
  },
  {
    id: "ocr",
    number: "03",
    label: "OCR",
    purpose: "Reconocer contenido mediante un servicio OCR.",
    system: "Enviar la entrada mediante API y recibir una respuesta de lectura.",
    human: "Supervisar la ejecución y revisar fallos.",
    result: "Contenido reconocido de forma preliminar.",
    limit: "No identificar el proveedor de la API.",
  },
  {
    id: "extraccion",
    number: "04",
    label: "Extracción",
    purpose: "Localizar la información requerida dentro de la respuesta.",
    system: "Separar contenido útil de la respuesta general.",
    human: "Comprobar que la extracción correspondiera con la entrada.",
    result: "Información candidata.",
    limit: "No mostrar campos, etiquetas o reglas reales.",
  },
  {
    id: "validacion",
    number: "05",
    label: "Validación",
    purpose: "Evitar que una lectura se aceptara automáticamente sin revisión.",
    system: "Aplicar comprobaciones sobre la información extraída.",
    human: "Revisar excepciones o resultados dudosos.",
    result: "Información validada o marcada para revisión.",
    limit: "No mostrar reglas, umbrales ni condiciones internas.",
  },
  {
    id: "estructuracion",
    number: "06",
    label: "Estructuración",
    purpose: "Organizar la información para una salida consistente.",
    system: "Transformar la información validada en una estructura utilizable.",
    human: "Confirmar orden y consistencia.",
    result: "Datos preparados para Excel.",
    limit: "No mostrar columnas, plantillas o estructuras reales.",
  },
  {
    id: "salida",
    number: "07",
    label: "Salida",
    purpose: "Continuar el proceso con una salida utilizable.",
    system: "Transferir información hacia Excel y dejarla preparada para visualización y evaluación de condiciones.",
    human: "Interpretar resultados y atender alertas cuando correspondiera.",
    result: "Salida estructurada con posibilidad de visualización y alerta.",
    limit: "No afirmar qué herramienta generaba las gráficas o enviaba la alerta.",
  },
];

export const archBlocks = [
  { label: "Entrada documental", note: "Documento disponible para el prototipo." },
  { label: "Orquestación en Python", note: "Coordina cada paso del recorrido." },
  { label: "Servicio OCR mediante API", note: "Lectura preliminar, proveedor no confirmado." },
  { label: "Validación y estructuración", note: "Comprobaciones y orden antes de la salida." },
  { label: "Excel / Visualización / Alerta", note: "Salida utilizable y evaluación condicional." },
];

export const validationStates = [
  { title: "Lectura aceptable", description: "La información podía continuar hacia estructuración." },
  { title: "Revisión necesaria", description: "El resultado requería comprobación humana antes de continuar." },
  { title: "Excepción", description: "La entrada o la respuesta no permitían completar el recorrido esperado." },
];

export const validationNotes = [
  "El OCR puede producir lecturas incompletas",
  "La calidad de entrada afecta el resultado",
  "La estructura del documento puede cambiar",
  "Un campo reconocido no necesariamente es correcto",
  "Las decisiones relevantes necesitan validación",
  "La supervisión humana permanece dentro del flujo",
];

export const outputDestinations = [
  { title: "Excel", description: "Información estructurada para continuar el trabajo." },
  { title: "Visualización", description: "Preparación para convertir la información en gráficas o lecturas." },
  { title: "Alerta condicional", description: "Evaluación de una condición capaz de señalar que algo requería atención." },
];

export const confirmedState = [
  "Se completó un prototipo funcional",
  "Python participó en la construcción",
  "Se integró un servicio OCR mediante API",
  "Se extrajo y estructuró información",
  "Excel formaba parte de la salida",
  "El flujo contemplaba visualización y alerta",
  "Se realizaron pruebas y validaciones",
];

export const notClaimedState = [
  "Uso cotidiano",
  "Despliegue en producción",
  "Adopción permanente",
  "Procesamiento masivo",
  "Precisión cuantificada",
  "Reducción de tiempo",
  "Eliminación de captura manual",
  "Proveedor concreto de OCR",
  "Herramienta concreta de visualización",
  "Canal concreto de alertas",
  "Continuidad posterior",
];

export const learnings = [
  "El OCR produce una lectura preliminar, no una verdad definitiva",
  "La validación debe formar parte del flujo",
  "Una salida necesita estructura para poder reutilizarse",
  "Las alertas requieren condiciones claras y revisión",
  "Un prototipo funcional no equivale a una solución de producción",
  "La confidencialidad limita la evidencia, no el aprendizaje técnico",
];

export const confirmedTechnologies = [
  "Python",
  "Servicio OCR mediante API",
  "Excel",
  "Visualización posterior",
  "Alerta condicional",
  "Revisión humana",
];
