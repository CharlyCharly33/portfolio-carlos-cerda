export type HabitTrackLayer = {
  id: "astro" | "islands" | "domain" | "presentation";
  number: string;
  label: string;
  responsibility: string;
  items: string[];
  state: string;
};

export type HabitTrackJourneyStep = {
  id: string;
  number: string;
  title: string;
  goal: string;
  interface: string;
  state: string;
  limitation?: string;
};

export type HabitTrackExperienceZone = {
  id: "demo" | "prototype" | "next";
  number: string;
  label: string;
  accessibleState: string;
  explanation: string;
  items: { name: string; scope: string }[];
};

export type HabitTrackDecision = {
  id: string;
  title: string;
  decision: string;
  reason: string;
};

export type HabitTrackEvolutionStage = {
  label: string;
  items: string[];
  next?: boolean;
};

export type HabitTrackEvidenceLink = {
  label: string;
  href: string;
  kind: "demo" | "repo";
  description: string;
};

export const DEMO_BASE = "https://habit-track-theta.vercel.app";
export const REPO_URL = "https://github.com/CharlyCharly33/HabitTrack";

export const architectureLayers: HabitTrackLayer[] = [
  {
    id: "astro",
    number: "01",
    label: "Astro",
    responsibility: "Estructura, páginas, layouts y generación del sitio.",
    items: ["/", "/login", "/register", "/app", "/app/habits", "/app/progress"],
    state: "Base estable publicada en la demo.",
  },
  {
    id: "islands",
    number: "02",
    label: "React Islands",
    responsibility: "Agrega interacción únicamente donde el producto la necesita.",
    items: ["DashboardIsland", "HabitsIsland"],
    state: "Islas confirmadas en /app y /app/habits.",
  },
  {
    id: "domain",
    number: "03",
    label: "Dominio",
    responsibility: "Representa hábitos, frecuencia, colores, estado y acciones disponibles.",
    items: ["Título", "Descripción", "Frecuencia", "Días", "Color", "Estado", "Completado del día"],
    state: "Modelo público estable de la Fase 1.",
  },
  {
    id: "presentation",
    number: "04",
    label: "Presentación",
    responsibility: "Tailwind CSS v4, tokens visuales, navegación desktop/móvil, estados vacíos, modal y confirmaciones.",
    items: ["Tokens crema / negro / naranja", "AppHeader + MobileNav", "EmptyState", "HabitModal", "ConfirmDialog"],
    state: "Experiencia responsive publicada.",
  },
];

export const journeySteps: HabitTrackJourneyStep[] = [
  {
    id: "definir",
    number: "01",
    title: "Definir",
    goal: "Dar nombre, descripción y color a un hábito para reconocerlo de un vistazo.",
    interface: "HabitModal: título, descripción, frecuencia, días y color.",
    state: "Disponible en la demo.",
  },
  {
    id: "programar",
    number: "02",
    title: "Programar",
    goal: "Elegir cuándo aplica el hábito: diario, de lunes a viernes o días específicos.",
    interface: "Selector de frecuencia y días dentro del modal.",
    state: "Disponible en la demo.",
  },
  {
    id: "completar",
    number: "03",
    title: "Completar",
    goal: "Marcar o deshacer el estado del día con una sola acción.",
    interface: "Botones de completar en Dashboard y Gestión.",
    state: "Funciona durante la sesión de la pantalla.",
    limitation: "El estado se reinicia al navegar o recargar.",
  },
  {
    id: "observar",
    number: "04",
    title: "Observar",
    goal: "Consultar progreso diario, resumen semanal y vista de constancia.",
    interface: "DailyProgress, WeeklySummary y vista /app/progress.",
    state: "Interfaz completa con datos ilustrativos.",
    limitation: "Las cifras históricas son ilustrativas, no cálculos reales.",
  },
  {
    id: "ajustar",
    number: "05",
    title: "Ajustar",
    goal: "Editar, pausar, reactivar o eliminar el hábito cuando la rutina cambia.",
    interface: "Tarjetas de gestión con editar, pausar, activar y eliminar.",
    state: "Disponible en la demo durante la sesión.",
    limitation: "Los cambios no persisten entre sesiones en la versión publicada.",
  },
];

export const experienceZones: HabitTrackExperienceZone[] = [
  {
    id: "demo",
    number: "01",
    label: "Disponible en la demo",
    accessibleState: "Disponible en la demo pública",
    explanation: "Lo que una persona puede usar hoy en la demo de la Fase 1.",
    items: [
      { name: "Landing pública", scope: "Hero, cómo funciona, ejemplo y llamada a la acción." },
      { name: "Dashboard del día", scope: "Hábitos de hoy, progreso diario y resumen semanal." },
      { name: "Completar y deshacer", scope: "Marca del día dentro de la sesión de la pantalla." },
      { name: "Crear hábitos", scope: "Modal único con validación." },
      { name: "Editar hábitos", scope: "Mismo modal, comportamiento consistente." },
      { name: "Eliminar con confirmación", scope: "Diálogo propio, sin dependencias del navegador." },
      { name: "Pausar y reactivar", scope: "Cambio de estado visible en la gestión." },
      { name: "Navegación desktop y móvil", scope: "Header de app y navegación móvil con estado activo." },
      { name: "Estados vacíos", scope: "Guía cuando aún no hay hábitos." },
      { name: "Vista de progreso", scope: "Consistencia, rachas y últimos 14 días como interfaz." },
    ],
  },
  {
    id: "prototype",
    number: "02",
    label: "Prototipo o dato ilustrativo",
    accessibleState: "Prototipo visual o dato ilustrativo, no funcionalidad completa",
    explanation: "Existe en pantalla pero todavía no es un sistema completo.",
    items: [
      { name: "Estado independiente por isla", scope: "Cada pantalla guarda su propio estado en memoria." },
      { name: "Datos mock en memoria", scope: "Al navegar entre rutas el estado se reinicia." },
      { name: "Progreso histórico ilustrativo", scope: "La vista de progreso usa cifras de ejemplo." },
      { name: "Rachas fijas", scope: "Valores de muestra, no cálculo sobre historial." },
      { name: "Consistencia fija", scope: "Porcentaje de muestra, no medición real." },
      { name: "Login visual", scope: "Pantalla en construcción, sin autenticación." },
      { name: "Registro visual", scope: "Pantalla en construcción, sin cuentas reales." },
    ],
  },
  {
    id: "next",
    number: "03",
    label: "Siguiente fase",
    accessibleState: "Planeado, no implementado en la demo publicada",
    explanation: "Dirección prevista para convertir el prototipo en producto que recuerda.",
    items: [
      { name: "Persistencia local", scope: "Conservar hábitos entre sesiones." },
      { name: "Estado compartido entre rutas", scope: "Una sola fuente para dashboard y gestión." },
      { name: "Historial por fechas", scope: "Registro real de completados por día." },
      { name: "Rachas calculadas", scope: "Derivadas del historial, no fijas." },
      { name: "Consistencia real", scope: "Medición sobre los últimos días." },
      { name: "Acceso directo como demo", scope: "Entrar sin depender de login." },
      { name: "Autenticación y sincronización", scope: "Evaluación posterior, sin proveedor decidido." },
    ],
  },
];

export const productDecisions: HabitTrackDecision[] = [
  {
    id: "DEC-01",
    title: "Migración a Astro",
    decision: "Usar Astro para organizar páginas y layouts.",
    reason: "La mayor parte del producto puede generarse sin hidratar toda la aplicación.",
  },
  {
    id: "DEC-02",
    title: "React Islands",
    decision: "Utilizar React solamente en Dashboard y Gestión de hábitos.",
    reason: "Concentrar JavaScript cliente donde existe interacción real.",
  },
  {
    id: "DEC-03",
    title: "Separación pública y aplicación",
    decision: "Utilizar MarketingLayout y AppLayout.",
    reason: "La landing y la herramienta tienen necesidades diferentes de navegación y contenido.",
  },
  {
    id: "DEC-04",
    title: "Un modal para crear y editar",
    decision: "Reutilizar HabitModal en ambos flujos.",
    reason: "Mantener validaciones y comportamiento consistentes.",
  },
  {
    id: "DEC-05",
    title: "Estados propios",
    decision: "Crear EmptyState y ConfirmDialog.",
    reason: "Evitar dependencias del navegador y mantener una experiencia coherente.",
  },
  {
    id: "DEC-06",
    title: "Responsive desde la estructura",
    decision: "Diseñar navegación y cuadrículas para escritorio y móvil.",
    reason: "El seguimiento diario debe poder utilizarse desde pantallas pequeñas.",
  },
];

export const evolutionStages: HabitTrackEvolutionStage[] = [
  {
    label: "01 / Base React",
    items: ["React", "TypeScript", "Vite", "Primer seguimiento interactivo"],
  },
  {
    label: "02 / Identidad visual",
    items: ["Tailwind CSS", "Interfaz editorial", "Hábitos y progreso visual"],
  },
  {
    label: "03 / Migración Astro",
    items: ["Rutas con Astro", "React Islands", "Layouts compartidos"],
  },
  {
    label: "04 / Arquitectura final",
    items: ["Dashboard", "Gestión de hábitos", "Navegación", "Estados y componentes reutilizables"],
  },
  {
    label: "05 / Productización",
    items: ["Landing pública", "Login y registro visuales", "Progreso", "Experiencia responsive", "Publicación en Vercel"],
  },
  {
    label: "06 / En construcción",
    items: ["Persistencia", "Historial real", "Estadísticas calculadas", "Flujo público directo"],
    next: true,
  },
];

export const verifiedState = [
  "Interfaz pública",
  "Dashboard",
  "Gestión de hábitos",
  "Diseño responsive",
  "React Islands",
  "Navegación",
  "Demo en Vercel",
  "Repositorio público",
];

export const currentLimitations = [
  "Sin persistencia en la versión publicada",
  "Sin autenticación real",
  "Sin backend",
  "Sin sincronización entre dispositivos",
  "Estadísticas históricas ilustrativas",
  "Login y registro en construcción",
];

export const nextBuild = [
  "Persistencia local",
  "Estado compartido",
  "Cálculos reales",
  "Mejorar la entrada a la demo",
  "Revisar accesibilidad completa",
  "Actualizar publicación",
];

export const evidenceLinks: HabitTrackEvidenceLink[] = [
  { label: "Abrir landing", href: DEMO_BASE, kind: "demo", description: "Punto de entrada público del producto." },
  { label: "Abrir dashboard", href: `${DEMO_BASE}/app`, kind: "demo", description: "Hábitos de hoy y progreso diario." },
  { label: "Abrir gestión de hábitos", href: `${DEMO_BASE}/app/habits`, kind: "demo", description: "Crear, editar, pausar y eliminar." },
  { label: "Abrir progreso", href: `${DEMO_BASE}/app/progress`, kind: "demo", description: "Vista de constancia con datos ilustrativos." },
  { label: "Revisar código", href: REPO_URL, kind: "repo", description: "Repositorio público en GitHub." },
];
