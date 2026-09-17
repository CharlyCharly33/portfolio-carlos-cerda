export type ItSupportLayer = {
  id: "usuario" | "dispositivo" | "identidad" | "red" | "servicio" | "operacion";
  number: string;
  label: string;
  observation: string;
  tools: string[];
  activities: string[];
  direct: string;
  escalate: string;
  verify: string;
};

export type SupportFlowStage = {
  number: string;
  title: string;
  goal: string;
  action: string;
  evidence: string;
  limit: string;
};

export const coverageItems = [
  "Atención de solicitudes e incidencias",
  "Soporte presencial y remoto",
  "Diagnóstico de hardware y software",
  "Preparación y configuración de equipos",
  "Configuración de dispositivos móviles",
  "Administración general de usuarios y accesos",
  "Diagnóstico de conectividad",
  "Soporte de impresoras y escáneres",
  "Atención de dispositivos especializados",
  "Inventario y seguimiento de activos",
  "Escalamiento hacia equipos responsables",
  "Seguimiento hasta validar continuidad",
  "Documentación de soluciones",
  "Orientación y capacitación a usuarios",
  "Coordinación con otras áreas técnicas",
];

export const layers: ItSupportLayer[] = [
  {
    id: "usuario",
    number: "01",
    label: "Usuario",
    observation: "Necesidad reportada, contexto de trabajo, impacto y síntomas percibidos.",
    tools: ["ServiceNow", "RITM", "Soporte remoto", "Comunicación directa", "Documentación"],
    activities: [
      "Recibir y contextualizar solicitudes",
      "Hacer preguntas de diagnóstico",
      "Reproducir o delimitar el problema",
      "Orientar al usuario",
      "Dar seguimiento",
      "Confirmar que pudiera continuar trabajando",
    ],
    direct: "Cuando la necesidad era clara y la acción estaba autorizada.",
    escalate: "Cuando el impacto excedía el alcance o requería otro equipo.",
    verify: "Confirmación directa con la persona usuaria.",
  },
  {
    id: "dispositivo",
    number: "02",
    label: "Dispositivo",
    observation: "Estado del equipo, sistema operativo, periféricos, controladores y configuración.",
    tools: ["Windows 10 y Windows 11", "BIOS y firmware", "SCCM / Configuration Manager", "Intune", "MDM", "PowerShell", "CMD", "Escritorio remoto"],
    activities: [
      "Preparación y configuración de equipos",
      "Instalación y diagnóstico de software",
      "Revisión de hardware y periféricos",
      "Configuración de dispositivos móviles",
      "Verificación de actualizaciones",
      "Diagnóstico mediante comandos y herramientas del sistema",
    ],
    direct: "Cuando el diagnóstico señalaba configuración, software o periféricos.",
    escalate: "Cuando intervenía garantía, reemplazo o imagen corporativa especializada.",
    verify: "Prueba funcional en el propio equipo.",
  },
  {
    id: "identidad",
    number: "03",
    label: "Identidad",
    observation: "Cuenta, acceso, permisos, autenticación, dominio y registro del dispositivo.",
    tools: ["Active Directory", "Microsoft 365", "Conceptos y operaciones de Azure / Entra", "Unión a dominio", "Inscripción o administración de dispositivos", "VPN"],
    activities: [
      "Verificar estado general de usuarios y accesos",
      "Apoyar en configuración y recuperación operativa",
      "Validar relación entre cuenta, dispositivo y servicio",
      "Escalar solicitudes que requirieran permisos o administración especializada",
    ],
    direct: "En verificaciones y configuración operativa autorizada.",
    escalate: "Cuando se requerían permisos elevados o administración especializada del dominio.",
    verify: "Acceso comprobado junto con la persona usuaria.",
  },
  {
    id: "red",
    number: "04",
    label: "Red",
    observation: "Conectividad local, asignación de red, resolución de nombres y acceso remoto.",
    tools: ["IPv4 e IPv6", "VLAN", "DNS", "DHCP", "Wi-Fi", "VPN", "Puertos", "Rutas", "Herramientas de diagnóstico de red"],
    activities: [
      "Identificar si la falla estaba en equipo, enlace, configuración o servicio",
      "Revisar conectividad básica",
      "Interpretar configuración de red",
      "Probar resolución y alcance",
      "Documentar evidencia para escalamiento",
    ],
    direct: "En diagnóstico y configuración local autorizada.",
    escalate: "Cuando la causa estaba en infraestructura o políticas de red.",
    verify: "Conectividad y alcance comprobados.",
  },
  {
    id: "servicio",
    number: "05",
    label: "Servicio",
    observation: "Disponibilidad de aplicaciones, impresión, comunicación y dispositivos asociados al trabajo.",
    tools: ["Microsoft 365", "Aplicaciones corporativas", "Impresoras y escáneres", "Sistemas de audio", "Dispositivos Zebra", "Datacard", "RFID", "Cámaras Cognex"],
    activities: [
      "Configuración y diagnóstico inicial",
      "Pruebas controladas",
      "Revisión de conectividad y dependencias",
      "Coordinación con propietarios del servicio o especialistas",
      "Validación funcional con el usuario",
    ],
    direct: "En configuración y diagnóstico inicial dentro del alcance.",
    escalate: "Cuando el servicio pertenecía a otro propietario o especialista.",
    verify: "Función comprobada con la persona usuaria.",
  },
  {
    id: "operacion",
    number: "06",
    label: "Operación",
    observation: "Impacto, continuidad, trazabilidad, activos y coordinación entre equipos.",
    tools: ["ServiceNow", "RITM", "Inventario de activos", "Documentación técnica", "Escalamiento", "Coordinación entre áreas", "Power BI como apoyo complementario para visualizar información"],
    activities: [
      "Registrar contexto y acciones",
      "Mantener seguimiento",
      "Escalar con evidencia",
      "Coordinar resolución",
      "Validar recuperación",
      "Documentar la solución o siguiente acción",
    ],
    direct: "En registro, seguimiento y documentación del propio caso.",
    escalate: "Hacia el equipo responsable con contexto y evidencia.",
    verify: "Continuidad validada y caso documentado.",
  },
];

export const flowStages: SupportFlowStage[] = [
  {
    number: "01",
    title: "Recepción",
    goal: "Registrar la necesidad sin perder contexto.",
    action: "Recibir la solicitud por los canales definidos.",
    evidence: "Registro con contexto inicial.",
    limit: "No diagnosticar antes de escuchar.",
  },
  {
    number: "02",
    title: "Contexto",
    goal: "Entender impacto y condiciones.",
    action: "Preguntar, reproducir y delimitar.",
    evidence: "Síntomas y alcance descritos.",
    limit: "No asumir la causa.",
  },
  {
    number: "03",
    title: "Diagnóstico",
    goal: "Localizar la capa probable.",
    action: "Relacionar usuario, dispositivo, identidad, red y servicio.",
    evidence: "Hipótesis verificables.",
    limit: "No intervenir sin autorización.",
  },
  {
    number: "04",
    title: "Acción o escalamiento",
    goal: "Resolver o canalizar con evidencia.",
    action: "Intervenir dentro del alcance o escalar documentado.",
    evidence: "Acción registrada o caso escalado.",
    limit: "No exceder permisos ni alcance.",
  },
  {
    number: "05",
    title: "Validación",
    goal: "Confirmar la continuidad.",
    action: "Verificar con la persona usuaria.",
    evidence: "Funcionamiento comprobado.",
    limit: "No cerrar sin confirmación.",
  },
  {
    number: "06",
    title: "Registro",
    goal: "Dejar trazabilidad útil.",
    action: "Documentar acciones y siguiente paso.",
    evidence: "Caso documentado.",
    limit: "Sin datos sensibles ni identificadores.",
  },
];

export const toolGroups = [
  { area: "Atención y seguimiento", items: ["ServiceNow", "RITM", "Soporte remoto", "Documentación"] },
  { area: "Dispositivos y despliegue", items: ["Windows 10/11", "SCCM / Configuration Manager", "Intune", "MDM", "BIOS y firmware", "PowerShell", "CMD"] },
  { area: "Identidad y colaboración", items: ["Active Directory", "Microsoft 365", "Azure / Entra", "Dominio", "VPN"] },
  { area: "Conectividad", items: ["VLAN", "IPv4/IPv6", "DNS", "DHCP", "Wi-Fi", "Puertos y rutas", "Herramientas de diagnóstico"] },
  { area: "Operación especializada", items: ["Impresoras y escáneres", "Zebra", "Datacard", "RFID", "Cámaras Cognex", "Sistemas de audio", "Inventario de activos"] },
  { area: "Datos como apoyo", items: ["Power BI", "Organización y visualización de información"] },
];

export const directResolution = [
  "La necesidad estaba dentro del alcance de primer nivel",
  "Existía autorización para realizar la acción",
  "El diagnóstico era suficientemente claro",
  "La intervención podía ejecutarse de forma controlada",
  "Era posible validar el resultado con el usuario",
];

export const escalationCriteria = [
  "Se requerían permisos elevados",
  "El cambio pertenecía al propietario de otro sistema",
  "Existía impacto de infraestructura",
  "Intervenían políticas de seguridad",
  "Se necesitaba un especialista o proveedor",
  "La causa excedía el alcance disponible",
];

export const specialDevices = [
  { name: "Impresoras", scope: "Configuración y diagnóstico inicial de impresión." },
  { name: "Escáneres", scope: "Revisión de digitalización y dependencias." },
  { name: "Dispositivos Zebra", scope: "Configuración y pruebas controladas." },
  { name: "Datacard", scope: "Apoyo operativo y coordinación con especialistas." },
  { name: "RFID", scope: "Diagnóstico inicial y validación funcional." },
  { name: "Cámaras Cognex", scope: "Revisión de conectividad y dependencias." },
  { name: "Sistemas de audio", scope: "Configuración y pruebas con el usuario." },
  { name: "Dispositivos móviles", scope: "Configuración y verificación de acceso." },
];
