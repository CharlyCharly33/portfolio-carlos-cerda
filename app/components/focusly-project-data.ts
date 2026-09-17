export type FocuslyFunnelStep = {
  id: "promesa" | "interes" | "validacion" | "cuenta" | "sesion";
  number: string;
  title: string;
  visitor: string;
  system: string;
  evidence: string;
  limit: string;
};

export type FocuslyArchLayer = {
  id: "presentacion" | "interaccion" | "api" | "datos" | "persistencia";
  number: string;
  label: string;
  responsibility: string;
  items: string[];
};

export type FocuslyAuthPhase = {
  id: "entrada" | "validacion" | "persistencia" | "sesion" | "salida";
  label: string;
  steps: string[];
};

export type FocuslyMatrixZone = {
  id: "demo" | "backend" | "ilustrado" | "next";
  letter: string;
  label: string;
  accessibleState: string;
  items: string[];
};

export type FocuslyDecision = {
  id: string;
  title: string;
  decision: string;
  reason: string;
};

export type FocuslyEvolutionStage = {
  label: string;
  items: string[];
  next?: boolean;
};

export const REPO_URL = "https://github.com/CharlyCharly33/focusly-landing-page";
export const VISUAL_PROTOTYPE_URL = "https://charlycharly33.github.io/focusly-landing-page/";

export const funnelSteps: FocuslyFunnelStep[] = [
  {
    id: "promesa",
    number: "01",
    title: "Promesa",
    visitor: "Observa la propuesta de una plataforma de productividad.",
    system: "Presenta contenido, secciones, navegación y llamadas a la acción.",
    evidence: "HTML semántico, CSS responsive y JavaScript.",
    limit: "Métricas, testimonios y resultados son contenido ilustrativo.",
  },
  {
    id: "interes",
    number: "02",
    title: "Interés",
    visitor: "Explora funciones, beneficios y el formulario de registro.",
    system: "Desplaza la experiencia, gestiona el menú y dirige hacia la conversión.",
    evidence: "Navegación interna, menú responsive, botones y estados visuales.",
    limit: "No existe analítica ni medición real de conversión.",
  },
  {
    id: "validacion",
    number: "03",
    title: "Validación",
    visitor: "Completa sus datos y recibe retroalimentación.",
    system: "Valida nombre, correo, contraseña, objetivo y aceptación de términos en frontend y backend.",
    evidence: "Validación JavaScript, PHP y lista permitida de objetivos.",
    limit: "La seguridad corresponde a un prototipo local, no a una auditoría de producción.",
  },
  {
    id: "cuenta",
    number: "04",
    title: "Cuenta",
    visitor: "Solicita crear una cuenta.",
    system: "Comprueba duplicados, aplica password_hash e inserta mediante PDO.",
    evidence: "MySQL, correo único, consultas preparadas y hash de contraseña.",
    limit: "Requiere un servidor PHP y una base de datos MySQL local.",
  },
  {
    id: "sesion",
    number: "05",
    title: "Sesión",
    visitor: "Ve un estado autenticado y puede cerrar la sesión.",
    system: "Regenera el identificador, conserva datos básicos en sesión, consulta su estado y destruye la sesión al cerrar.",
    evidence: "session_regenerate_id, $_SESSION, session.php y logout.php.",
    limit: "No existen dashboard ni páginas internas posteriores al login.",
  },
];

export const archLayers: FocuslyArchLayer[] = [
  {
    id: "presentacion",
    number: "01",
    label: "Presentación",
    responsibility: "Superficie estática publicada en GitHub Pages.",
    items: ["index.html", "assets/css", "assets/js", "Páginas legales y contacto"],
  },
  {
    id: "interaccion",
    number: "02",
    label: "Interacción",
    responsibility: "La landing responde y prepara el envío hacia la API.",
    items: ["Formularios", "Validación frontend", "Estados de carga y error", "Fetch JSON", "Estado autenticado dentro de la landing"],
  },
  {
    id: "api",
    number: "03",
    label: "API",
    responsibility: "Entradas del backend local, solo en entorno PHP.",
    items: ["register.php", "login.php", "session.php", "logout.php"],
  },
  {
    id: "datos",
    number: "04",
    label: "Acceso a datos",
    responsibility: "Conexión y consultas seguras hacia MySQL.",
    items: ["Configuración PHP", "PDO", "Consultas preparadas"],
  },
  {
    id: "persistencia",
    number: "05",
    label: "Persistencia y sesión",
    responsibility: "Estado duradero en entorno local.",
    items: ["MySQL", "Tabla users", "Sesiones PHP"],
  },
];

export const authPhases: FocuslyAuthPhase[] = [
  { id: "entrada", label: "Entrada", steps: ["Capturar datos"] },
  { id: "validacion", label: "Validación", steps: ["Validar en cliente", "Validar en servidor", "Comprobar duplicados"] },
  { id: "persistencia", label: "Persistencia", steps: ["Generar hash", "Insertar usuario"] },
  { id: "sesion", label: "Sesión", steps: ["Regenerar sesión", "Mostrar estado autenticado"] },
  { id: "salida", label: "Salida", steps: ["Cerrar y destruir sesión"] },
];

export const authDecisions = [
  "filter_var para correo",
  "Allowlist de objetivos",
  "PDO sin emulación de preparadas",
  "password_hash",
  "password_verify",
  "session_regenerate_id(true)",
  "Destrucción de cookie y sesión durante logout",
];

export const authLimits = [
  "Sin CSRF",
  "Sin rate limiting",
  "Sin recuperación de contraseña",
  "Sin verificación de correo",
  "Sin endurecimiento documentado para producción",
  "Sin pruebas automatizadas",
];

export const matrixZones: FocuslyMatrixZone[] = [
  {
    id: "demo",
    letter: "A",
    label: "Experiencia demostrable",
    accessibleState: "Demostrable en local y superficie estática publicada",
    items: ["Landing responsive", "Navegación", "Formularios", "Validaciones", "Registro local", "Login local", "Consulta de sesión", "Logout", "Privacidad", "Términos", "Contacto"],
  },
  {
    id: "backend",
    letter: "B",
    label: "Backend local",
    accessibleState: "Funcional en entorno PHP y MySQL local",
    items: ["PHP", "PDO", "MySQL", "Consultas preparadas", "Hash de contraseñas", "Sesiones"],
  },
  {
    id: "ilustrado",
    letter: "C",
    label: "Producto ilustrado",
    accessibleState: "Narrativa visual, no funcionalidad implementada",
    items: ["Temporizador", "Tareas", "Estadísticas", "Hábitos", "Metas", "Rachas", "Testimonios", "Usuarios y porcentajes promocionales"],
  },
  {
    id: "next",
    letter: "D",
    label: "Siguiente construcción",
    accessibleState: "Planeado, no implementado",
    items: ["Dashboard real", "Temporizador funcional", "Tareas persistentes", "Estadísticas calculadas", "Despliegue compatible con backend", "Hardening", "Pruebas automatizadas"],
  },
];

export const decisions: FocuslyDecision[] = [
  {
    id: "DECISIÓN 01",
    title: "Stack directo",
    decision: "Construir con HTML, CSS, JavaScript, PHP y MySQL sin framework.",
    reason: "Comprender directamente la relación entre interfaz, solicitudes, servidor, sesión y base de datos.",
  },
  {
    id: "DECISIÓN 02",
    title: "Validación en dos fronteras",
    decision: "Validar entradas en frontend y nuevamente en backend.",
    reason: "La validación visual mejora la experiencia, pero el servidor conserva la autoridad.",
  },
  {
    id: "DECISIÓN 03",
    title: "Acceso mediante PDO",
    decision: "Utilizar consultas preparadas y desactivar la emulación.",
    reason: "Separar los datos de la sentencia SQL.",
  },
  {
    id: "DECISIÓN 04",
    title: "Contraseñas no reversibles",
    decision: "Usar password_hash y password_verify.",
    reason: "No almacenar contraseñas en texto plano.",
  },
  {
    id: "DECISIÓN 05",
    title: "Sesión del lado del servidor",
    decision: "Regenerar el ID después de autenticar y destruir la sesión durante logout.",
    reason: "Mantener el estado autenticado con mecanismos nativos de PHP.",
  },
  {
    id: "DECISIÓN 06",
    title: "Alcance editorial honesto",
    decision: "Separar las capacidades funcionales de las representaciones visuales.",
    reason: "Evitar presentar el concepto de producto como una plataforma terminada.",
  },
];

export const evolutionStages: FocuslyEvolutionStage[] = [
  { label: "01 / Landing inicial", items: ["Estructura, propuesta visual y navegación"] },
  { label: "02 / Publicación", items: ["GitHub Pages y enlace público"] },
  { label: "03 / Registro", items: ["Formulario y validación"] },
  { label: "04 / Autenticación", items: ["PHP, MySQL, hash y login"] },
  { label: "05 / Sesión", items: ["Persistencia, consulta y logout"] },
  { label: "06 / Identidad", items: ["Branding, favicon y páginas legales"] },
  { label: "07 / Producto funcional", items: ["Siguiente etapa"], next: true },
];

export const verifiedState = [
  "Landing responsive",
  "Navegación móvil",
  "Registro y login",
  "Persistencia MySQL",
  "Hash de contraseñas",
  "Sesiones PHP",
  "Logout",
  "Páginas legales",
  "Repositorio público",
  "Prototipo visual estático",
];

export const nextBuild = [
  "Despliegue real del backend",
  "Dashboard",
  "Temporizador",
  "Gestión de tareas",
  "Estadísticas reales",
  "Recuperación y verificación de cuentas",
  "Hardening",
  "Pruebas automatizadas",
];

export const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Fetch API",
  "PHP",
  "PDO",
  "MySQL",
  "Sesiones PHP",
  "Git",
  "GitHub Pages para la superficie estática",
];
