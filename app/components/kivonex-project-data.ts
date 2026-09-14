export type KivonexLayer = {
  id: "interface" | "api" | "business" | "data" | "environment";
  label: string;
  technologies: string[];
  responsibility: string;
  state: string;
};

export type KivonexFlowStep = {
  label: string;
  title: string;
  description: string;
};

export type KivonexImplementationZone = {
  id: "interface" | "backend" | "next";
  number: string;
  label: string;
  accessibleState: string;
  explanation: string;
  modules: { name: string; scope: string }[];
  capabilities: string[];
};

export const architectureLayers: KivonexLayer[] = [
  {
    id: "interface",
    label: "Interfaz",
    technologies: ["React 19", "TypeScript", "Vite"],
    responsibility: "Presenta los flujos administrativos y consume la API. No se conecta directamente con PostgreSQL.",
    state: "Disponible para autenticación, usuarios internos y socios.",
  },
  {
    id: "api",
    label: "API",
    technologies: ["NestJS 11", "REST", "DTO"],
    responsibility: "Recibe solicitudes, valida DTO y organiza las capacidades del sistema en módulos.",
    state: "Implementada como punto de entrada al backend.",
  },
  {
    id: "business",
    label: "Negocio",
    technologies: ["JWT", "Roles", "Validaciones"],
    responsibility: "Decide permisos, estados y reglas operativas para autenticación, socios, planes y membresías.",
    state: "Reglas implementadas por incrementos; el MVP continúa abierto.",
  },
  {
    id: "data",
    label: "Datos",
    technologies: ["Prisma 7", "PostgreSQL", "Migraciones"],
    responsibility: "Conserva relaciones, historial, pagos y trazabilidad mediante una base de datos central.",
    state: "Modelo preparado para historial, snapshots y evolución posterior.",
  },
  {
    id: "environment",
    label: "Entorno",
    technologies: ["Docker Compose", "Variables locales"],
    responsibility: "Proporciona una instancia reproducible de PostgreSQL para el desarrollo local.",
    state: "Entorno local; no existe un despliegue público confirmado.",
  },
];

export const implementationZones: KivonexImplementationZone[] = [
  {
    id: "interface",
    number: "01",
    label: "Disponible en interfaz",
    accessibleState: "Disponible en interfaz",
    explanation: "Capacidades que ya pueden operarse desde el panel web.",
    modules: [
      { name: "Autenticación", scope: "Inicio, cierre y persistencia local de sesión." },
      { name: "Usuarios internos", scope: "Gestión y navegación adaptada al rol." },
      { name: "Socios", scope: "Registro, consulta, búsqueda, actualización y estados." },
    ],
    capabilities: [
      "Inicio de sesión",
      "Cierre de sesión",
      "Sesión almacenada localmente",
      "Panel administrativo responsive",
      "Navegación según rol",
      "Gestión de usuarios internos",
      "Registro, consulta, búsqueda y actualización de socios",
      "Manejo de estados de socios",
      "Restricciones visuales según rol",
    ],
  },
  {
    id: "backend",
    number: "02",
    label: "Implementado en backend",
    accessibleState: "Implementado en API o modelo, interfaz pendiente",
    explanation: "Existe en la API o el modelo de datos, aunque todavía no todo tiene interfaz.",
    modules: [
      { name: "Planes y tarifas", scope: "Catálogo, periodos, ventanas y actualización." },
      { name: "Asignación de membresías", scope: "Reglas y escritura transaccional." },
      { name: "Pagos iniciales", scope: "Pago e inscripción asociados a la asignación." },
      { name: "Detalle e historial", scope: "Consulta pública y recorrido por socio." },
    ],
    capabilities: [
      "Catálogo inicial de planes",
      "Tarifas mensuales y anuales",
      "Ventanas de acceso modeladas",
      "Consulta y actualización de planes",
      "Asignación transaccional de membresías",
      "Estados pendiente, programada y activa durante la asignación",
      "Registro del pago inicial",
      "Folios internos",
      "Registro de inscripción inicial",
      "Confirmación del plan estudiante",
      "Ajustes de precio restringidos al administrador",
      "Snapshots de precio, plan, periodo y duración",
      "Número público de membresía",
      "Consulta del detalle de una membresía",
      "Historial de membresías por socio",
      "Registro de ajustes de precio",
      "Relaciones para renovaciones y cambios posteriores",
    ],
  },
  {
    id: "next",
    number: "03",
    label: "Siguiente etapa",
    accessibleState: "Planeado, no implementado",
    explanation: "Dirección prevista que no se presenta como funcionalidad disponible.",
    modules: [
      { name: "Interfaz de membresías", scope: "Asignación, consulta y pagos desde el panel." },
      { name: "Renovaciones", scope: "Cambios de estado, suspensión y reactivación." },
      { name: "Simulador de accesos", scope: "Entradas, salidas, reglas e historial." },
      { name: "Indicadores reales", scope: "Dashboard conectado a la operación." },
      { name: "Ventas e inventario", scope: "Punto de venta, productos y existencias." },
    ],
    capabilities: [
      "Interfaz para planes",
      "Interfaz para asignar y consultar membresías",
      "Flujo completo de pagos desde la interfaz",
      "Renovación",
      "Suspensión y reactivación de membresías",
      "Simulador de entradas y salidas",
      "Reglas completas de autorización de acceso",
      "Historial de accesos",
      "Dashboard conectado con indicadores reales",
      "Punto de venta",
      "Productos e inventario",
      "Despliegue público",
      "Integración física con huella, tarjeta, QR o PIN",
    ],
  },
];

export const membershipFlow: KivonexFlowStep[] = [
  { label: "01", title: "Identificar socio", description: "Consulta mediante número público y confirma que el socio exista y esté activo." },
  { label: "02", title: "Validar disponibilidad", description: "Impide asignar otra membresía cuando existe una abierta o reservada." },
  { label: "03", title: "Resolver plan y tarifa", description: "Verifica plan, periodo, precio configurado y disponibilidad." },
  { label: "04", title: "Aplicar reglas", description: "Evalúa fecha de inicio, inscripción, plan estudiante, rol y posibles ajustes de precio." },
  { label: "05", title: "Registrar transacción", description: "Crea membresía, pago, inscripción y ajuste dentro de una transacción serializable." },
  { label: "06", title: "Devolver trazabilidad", description: "Genera número público, folios, fechas, estado, pagos y datos históricos." },
];

export const membershipRules = [
  "Una membresía pendiente no registra pagos.",
  "Solo el administrador puede modificar el precio.",
  "Un ajuste exige un motivo.",
  "El precio original del catálogo se conserva como referencia.",
  "Los datos principales del plan se guardan como snapshot.",
  "Las fechas de inicio utilizan fecha civil.",
  "La lógica considera America/Mexico_City.",
  "Los conflictos transaccionales devuelven una respuesta controlada.",
];

export const engineeringDecisions = [
  { id: "ADR-01", title: "Monolito modular", decision: "Separar frontend, API y datos, manteniendo el backend como una aplicación modular durante el MVP.", reason: "Permite desarrollar y probar los módulos sin introducir complejidad innecesaria de microservicios." },
  { id: "ADR-02", title: "Seguridad aplicada en backend", decision: "JWT, hash de contraseñas, DTO y guards de roles.", reason: "La interfaz puede adaptar sus opciones, pero los permisos definitivos se validan en la API." },
  { id: "ADR-03", title: "Identificadores públicos", decision: "Usar números públicos incrementales para usuarios, socios y membresías sin exponer identificadores internos.", reason: "Facilita la operación diaria y desacopla referencias públicas de claves internas." },
  { id: "ADR-04", title: "Historial preservado", decision: "Guardar snapshots del plan, precio, periodo y duración dentro de la membresía.", reason: "Los cambios futuros del catálogo no deben modificar la información histórica." },
  { id: "ADR-05", title: "Operaciones transaccionales", decision: "Asignar membresía, inscripción, pago y ajuste dentro de una misma transacción.", reason: "Evita estados parciales cuando una parte del proceso falla." },
  { id: "ADR-06", title: "Desarrollo guiado por pruebas", decision: "Mantener pruebas unitarias, de componentes y end-to-end alrededor de autenticación, permisos, socios y membresías.", reason: "Las reglas operativas y de autorización requieren comprobaciones repetibles." },
];

export const projectEvolution = [
  { label: "01 / Base", items: ["Estructura frontend, backend y PostgreSQL", "Variables locales", "Autenticación inicial"] },
  { label: "02 / Operación interna", items: ["Panel administrativo", "Roles", "Gestión de usuarios internos", "Identidad y correo"] },
  { label: "03 / Socios", items: ["API de socios", "Interfaz de búsqueda, registro y edición", "Restricciones según rol"] },
  { label: "04 / Catálogo", items: ["Modelo de membresías", "Planes y tarifas", "Catálogo inicial"] },
  { label: "05 / Membresías", items: ["Números públicos", "Asignación transaccional", "Pagos iniciales", "Detalle", "Historial"] },
];

export const currentState = {
  verified: ["Autenticación", "Roles", "Usuarios internos", "Socios", "Catálogo y reglas desde API", "Asignación transaccional", "Historial técnico", "Pruebas automatizadas", "Migraciones y entorno local"],
  next: ["Conectar membresías con la interfaz", "Completar renovaciones y cambios de estado", "Implementar el simulador de accesos", "Conectar el dashboard", "Ejecutar el flujo completo desde la interfaz", "Actualizar la documentación general", "Definir despliegue"],
};

export const technologies = [
  { area: "Frontend", items: ["React 19", "TypeScript", "Vite", "Vitest", "Testing Library", "CSS propio"] },
  { area: "Backend", items: ["NestJS 11", "TypeScript", "API REST", "JWT", "bcrypt", "class-validator", "Jest", "Supertest"] },
  { area: "Datos + entorno local", items: ["PostgreSQL", "Prisma 7", "Docker Compose", "Variables de entorno", "Migraciones", "Semilla administrativa"] },
];
