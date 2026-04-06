export const profile = {
  name: "Anthony MB",
  role: "FullStack Developer",
  tagline:
    "Construyo experiencias web modernas, rápidas y centradas en el usuario.",
  summary:
    "Desarrollador fullstack enfocado en construir aplicaciones web eficientes, escalables y centradas en el usuario, integrando frontend, backend y automatización de procesos.",
  quickStats: ["Fullstack Dev", "Scalable Systems", "Automation Ready"],
  typewriterRoles: [
    "Fullstack Developer",
    "Web Application Builder",
    "System & Data Developer",
    "Software Engineer",
  ],
  missionBrief: [
    { label: "OBJECTIVE", value: "Build High-Impact Apps" },
    { label: "STATUS", value: "Available for Projects" },
    { label: "SECTOR", value: "Gov + HealthTech" },
    { label: "LOCATION", value: "Peru · Remote Ready" },
  ],
  cvUrl: "https://www.linkedin.com/in/anthony-meza-bautista-48801a323",
  operatorStats: [
    { label: "FRONTEND", value: 80 },
    { label: "BACKEND", value: 90 },
    { label: "UI/UX", value: 85 },
  ],
  social: {
    github: "https://github.com/TonyMB17",
    linkedin: "https://www.linkedin.com/in/anthony-meza-bautista-48801a323",
    whatsapp: "https://wa.me/+51927386272",
    email: "mailto:mailanthonyamb17@gmail.com",
  },
  operatorAvatar: "/images/my-image.png",
};

export const aboutLog = [
  "status: activo",
  "rol: fullstack developer",
  "especialidad: desarrollo de aplicaciones web y sistemas",
  "enfoque: arquitectura escalable, automatización y diseño centrado en el usuario",
  "objetivo: construir soluciones digitales eficientes, intuitivas y de alto impacto",
];

export const projects = [
  {
    id: "p-01",
    title: "DNT Web",
    description:
      "Sistema para el registro y atencion de pacientes de daños no transmisibles en establecimientos de la Red de Salud Abancay",
    objective:
      "Centralizar el flujo de registro, seguimiento y consulta clinica para reducir tiempos operativos.",
    impact:
      "Estandarizo el ingreso de datos y redujo friccion entre establecimientos al consultar historiales.",
    status: "ACTIVE",
    caseStudy: {
      challenge:
        "Los establecimientos manejaban informacion clinica fragmentada y con tiempos altos de actualizacion.",
      architecture:
        "Frontend React + Tailwind para operacion diaria, API FastAPI para reglas de negocio y MySQL para persistencia central.",
      keyDecisions: [
        "Separar modulos de admision, atencion y seguimiento para reducir acoplamiento.",
        "Implementar validaciones tempranas en formularios para disminuir errores de registro.",
        "Definir endpoints orientados a flujos reales del personal de salud.",
      ],
      implementation:
        "Se construyeron vistas orientadas por rol y reportes de seguimiento para evitar reprocesos en campo.",
      result:
        "El equipo obtuvo mejor continuidad del historial de pacientes y menor tiempo de busqueda de informacion.",
      metric: "Reduccion estimada de 30% en tiempo operativo por registro",
      lessonsLearned: [
        "Modelar primero los procesos reales evita retrabajo en formularios clinicos.",
        "La retroalimentacion temprana de usuarios finales acelera adopcion.",
      ],
    },
    stack: ["React", "Tailwind", "Vite", "Python", "fastAPI", "MySQL"],
    year: "2026",
    imageUrl: "/images/no-image.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com/TonyMB17/DNT_web",
  },
  {
    id: "p-02",
    title: "App Viewer Indicators",
    description:
      "App web para visualizacion de indicadores de salud de la red de Salud Abancay.",
    objective:
      "Visualizar indicadores criticos en tiempo real para apoyar decisiones de gestion sanitaria.",
    impact:
      "Mejoro la lectura de tendencias y priorizacion de acciones con dashboards claros para equipos tecnicos.",
    status: "DEPLOYED",
    caseStudy: {
      challenge:
        "Se necesitaba monitorear indicadores de salud sin depender de reportes manuales dispersos.",
      architecture:
        "SPA en React + TypeScript con Recharts para visualizacion y servicios Python para consolidacion de datos.",
      keyDecisions: [
        "Priorizar visualizaciones comparativas por periodo para detectar tendencias rapido.",
        "Usar componentes reutilizables para tarjetas KPI y graficos por categoria.",
        "Estandarizar transformaciones de datos antes de render para evitar inconsistencia visual.",
      ],
      implementation:
        "Se implemento tablero modular con filtros por periodo y vistas de resumen para equipos tecnicos.",
      result:
        "La lectura de tendencias mejoro y el equipo pudo priorizar acciones sanitarias con mayor claridad.",
      metric: "Consulta de indicadores en segundos en lugar de reportes manuales",
      lessonsLearned: [
        "Los dashboards deben contar una historia, no solo mostrar numeros.",
        "TypeScript ayuda a evitar errores en pipelines de datos complejos.",
      ],
    },
    stack: ["React", "Recharts", "TypeScript", "Python"],
    year: "2026",
    imageUrl: "/images/no-image.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com/TonyMB17/mi-app-excel",
  },
  {
    id: "p-03",
    title: "Sistema de Tickets",
    description:
      "Sistema web de gestión de incidencias con notificaciones y chatbot integrado.",
    objective:
      "Acelerar la atencion de incidencias y reducir tiempos de respuesta con trazabilidad completa.",
    impact:
      "Automatizo alertas y facilito seguimiento de soporte tecnico para equipos internos.",
    status: "ACTIVE",
    caseStudy: {
      challenge:
        "El seguimiento de incidencias era poco trazable y generaba demoras en la atencion tecnica.",
      architecture:
        "Aplicacion Laravel monolitica con MySQL, colas para notificaciones y capa de presentacion Bootstrap.",
      keyDecisions: [
        "Definir estados de ticket y SLA visibles desde el panel principal.",
        "Integrar notificaciones para reducir tiempos muertos entre asignacion y respuesta.",
        "Agregar chatbot como primera linea para clasificacion inicial.",
      ],
      implementation:
        "Se construyo flujo end-to-end: apertura, asignacion, seguimiento y cierre con historial auditable.",
      result:
        "El soporte tecnico mejoro su trazabilidad y redujo cuellos de botella operativos.",
      metric: "Mejora sostenida en tiempo de respuesta de incidencias",
      lessonsLearned: [
        "La visibilidad de estado reduce friccion entre areas tecnicas y usuarios.",
        "Automatizar alertas es clave para mantener SLA.",
      ],
    },
    stack: ["Laravel", "MySQL", "Bootstrap"],
    year: "2025",
    imageUrl: "/images/no-image.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com/AlbertPF/tickets",
  },
  {
    id: "p-04",
    title: "Mi Cole con Agua Segura",
    description:
      "Sistema web para el registro y seguimiento de la calidad del agua en colegios del departamento de Apurimac.",
    objective:
      "Monitorear de forma simple y auditable la calidad de agua por institucion educativa.",
    impact:
      "Aporto control historico y evidencia para acciones preventivas en entornos escolares.",
    status: "DEPLOYED",
    caseStudy: {
      challenge:
        "No existia un mecanismo central para registrar y seguir controles de calidad de agua en colegios.",
      architecture:
        "Sistema web Laravel + MySQL con panel administrativo y registros historicos por institucion.",
      keyDecisions: [
        "Diseñar formularios simples para captura de datos en campo.",
        "Mantener trazabilidad por colegio y por periodo para auditoria.",
        "Incluir vistas de estado para identificar alertas operativas rapidamente.",
      ],
      implementation:
        "Se definieron modulos de registro, consulta historica y control de seguimiento para personal responsable.",
      result:
        "Se mejoro el control documental y la capacidad de reaccion ante riesgos detectados.",
      metric: "Cobertura de seguimiento institucional en multiples colegios",
      lessonsLearned: [
        "La usabilidad en formularios de campo impacta directamente la calidad del dato.",
        "El historial estructurado facilita accion preventiva y reportes.",
      ],
    },
    stack: ["Laravel", "MySQL", "Bootstrap"],
    year: "2025",
    imageUrl: "/images/no-image.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com/TonyMB17/MiCole",
  },
  {
    id: "p-05",
    title: "FED - Apurimac",
    description:
      "Pagina web informativa del Fondo de Estabilizacion de Precios de los Combustibles del departamento de Apurimac.",
    objective:
      "Publicar informacion institucional de forma clara, rapida y accesible para ciudadanos.",
    impact:
      "Aumento la visibilidad de contenido oficial y simplifico el acceso desde dispositivos moviles.",
    status: "ARCHIVE",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    year: "2025",
    imageUrl: "/images/no-image.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com/TonyMB17/FED",
  },
  {
    id: "p-06",
    title: "CRA Apurimac",
    description:
      "Sistema web para registro de denuncias anominas sobre actos de corrupcion en el sector público en el departamento de Apurimac.",
    objective:
      "Habilitar un canal confiable y anonimizado para reportes ciudadanos.",
    impact:
      "Fortalecio el proceso de registro y organizacion de denuncias para su seguimiento interno.",
    status: "ACTIVE",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    year: "2024",
    imageUrl: "/images/no-image.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com/TonyMB17/crapurimac",
  },
  {
    id: "p-07",
    title: "Ecommerce Laravel",
    description:
      "Sistema web de comercio electrónico desarrollado con Laravel, MySQL y Bootstrap.",
    objective:
      "Construir un flujo completo de catalogo, carrito y gestion de pedidos.",
    impact:
      "Consolido base funcional para ventas online y administracion inicial de productos.",
    status: "ARCHIVE",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    year: "2023",
    imageUrl: "/images/no-image.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com/TonyMB17/ecomerce-laravel",
  },
  {
    id: "p-08",
    title: "Meraki",
    description:
      "Tienda virtual de regalos y arreglos personalizados desarrollada con Laravel, MySQL y Bootstrap.",
    objective:
      "Digitalizar vitrina y pedidos para negocio de regalos personalizados.",
    impact:
      "Permitio exhibir catalogo y recibir solicitudes con mejor presentacion de marca.",
    status: "ARCHIVE",
    stack: ["Laravel", "MySQL", "Bootstrap"],
    year: "2023",
    imageUrl: "/images/no-image.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com/TonyMB17/ecomerce-laravel",
  },
  {
    id: "p-09",
    title: "Math Collections",
    description:
      "App movil para coleccionar formulas matematicas desarrollada con Ionic.",
    objective:
      "Ofrecer consulta rapida de formulas matematicas en una app ligera para estudio.",
    impact:
      "Mejoro acceso offline y velocidad de consulta en sesiones de aprendizaje.",
    status: "PROTOTYPE",
    stack: ["Ionic", "TypeScript", "Capacitor"],
    year: "2023",
    imageUrl: "/images/no-image.jpg",
    demoUrl: "#",
    repoUrl: "https://github.com/TonyMB17/math-collections",
  },
];

export const languages = [
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "PHP", level: 80 },
  { name: "Python", level: 80 },
  { name: "Java", level: 70 },
  { name: "C#", level: 70 },
  { name: "C++", level: 65 },
  { name: "SQL", level: 80 },
];

export const frontend = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "React", level: 85 },
  { name: "Vue", level: 75 },
  { name: "Angular", level: 70 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Bootstrap", level: 85 },
  { name: "Vite", level: 85 },
  { name: "Ionic", level: 75 },
  { name: "Flutter", level: 75 },
  { name: "Dart", level: 75 },
];

export const backend = [
  { name: "Laravel", level: 80 },
  { name: "CodeIgniter", level: 75 },
  { name: "Lumen", level: 75 },
  { name: "FastAPI", level: 80 },
  { name: "Flask", level: 75 },
  { name: "Node.js", level: 75 },
];

export const databases = [
  { name: "MySQL", level: 85 },
  { name: "SQL Server", level: 80 },
  { name: "Diseño de bases de datos", level: 80 },
];

export const frameworks = [
  { name: "React", level: 85, iconKey: "react" },
  { name: "Laravel", level: 80, iconKey: "laravel" },
  { name: "Tailwind CSS", level: 90, iconKey: "tailwind" },
  { name: "Bootstrap", level: 85, iconKey: "bootstrap" },
  { name: "Vite", level: 85, iconKey: "vite" },
];

export const tools = [
  { name: "Git", level: 85 },
  { name: "GitHub", level: 85 },
  { name: "Android Studio", level: 75 },
  { name: "Blender", level: 65 },
  { name: "Unity", level: 70 },
];

export const systems = [
  { name: "Windows", level: 85 },
  { name: "Linux", level: 80 },
  { name: "Redes (TCP/IP, configuración)", level: 75 },
  { name: "Administración de sistemas", level: 75 },
];

export const experience = [
  {
    id: "exp-01",
    role: "Fullstack Developer",
    company: "Gobierno Regional de Apurímac",
    period: "2024 — Present",
    xp: 3200,
    badge: "LEGENDARY",
    achievements: [
      "Desarrollo e implementación de sistema de tickets con Laravel, MySQL y Bootstrap",
      "Integración de chatbot con IA para atención automatizada de incidencias",
      "Automatización de procesos y notificaciones mediante Telegram",
      "Optimización de flujos de atención técnica y seguimiento de incidencias",
    ],
  },
  {
    id: "exp-02",
    role: "Data & Systems Developer",
    company: "Red de Salud Abancay",
    period: "2023 — Present",
    xp: 2600,
    badge: "EPIC",
    achievements: [
      "Gestión y monitoreo del padrón nominal de niños menores de 6 años",
      "Automatización de procesos con Python y Google Sheets",
      "Diseño de dashboards y control de estados (FALTA, PENDIENTE, MIGRADO)",
      "Optimización del flujo de actualización de datos entre establecimientos de salud",
    ],
  },
  {
    id: "exp-03",
    role: "Frontend & Web Developer",
    company: "Proyectos Independientes",
    period: "2021 — 2023",
    xp: 1200,
    badge: "RARE",
    achievements: [
      "Desarrollo de interfaces web responsivas y accesibles",
      "Implementación de dashboards y visualización de datos",
      "Construcción de componentes reutilizables en múltiples proyectos",
    ],
  },
];

export const achievementsIntel = [
  {
    id: "ach-01",
    tier: "LEGENDARY",
    title: "Automatizacion de Procesos",
    metric: "+35% eficiencia operativa",
    description:
      "Implementacion de flujos automatizados con Python, bots y notificaciones para tareas repetitivas.",
  },
  {
    id: "ach-02",
    tier: "EPIC",
    title: "Sistemas de Atencion",
    metric: "2 plataformas activas",
    description:
      "Desarrollo de sistemas internos para incidencias y seguimiento de atencion en entorno institucional.",
  },
  {
    id: "ach-03",
    tier: "RARE",
    title: "Dashboards de Salud",
    metric: "Monitoreo continuo 2023-2026",
    description:
      "Visualizacion de indicadores y soporte de decisiones para equipos tecnicos del sector salud.",
  },
  {
    id: "ach-04",
    tier: "UNCOMMON",
    title: "Stack Multidisciplinario",
    metric: "+10 tecnologias aplicadas",
    description:
      "Integracion de frontend, backend, datos y automatizacion en proyectos reales con impacto regional.",
  },
]

export const contactChannels = [
  {
    id: "mail",
    label: "MAIL_LINK",
    value: "anthonyamb17@gmail.com",
    href: "mailto:anthonyamb17@gmail.com",
    tone: "neon",
    iconKey: "mail",
  },
  {
    id: "github",
    label: "GITHUB_NODE",
    value: "github.com/TonyMB17",
    href: "https://github.com/TonyMB17",
    tone: "electric",
    iconKey: "github",
  },
  {
    id: "linkedin",
    label: "LINKEDIN_NODE",
    value: "linkedin.com/in/anthony-meza-bautista-48801a323",
    href: "https://www.linkedin.com/in/anthony-meza-bautista-48801a323",
    tone: "electric",
    iconKey: "linkedin",
  },
  {
    id: "whatsapp",
    label: "WHATSAPP_NODE",
    value: "https://wa.me/+51927386272",
    href: "https://wa.me/+51927386272",
    tone: "electric",
    iconKey: "whatsapp",
  },
];
