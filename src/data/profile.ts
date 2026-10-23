export const profile = {
  name: "Jose Rene Guarachi",
  fullName: "Jose Rene Guarachi Pitiga",
  role: "AI Engineer · Full Stack",
  location: "Santa Cruz, Bolivia",
  greeting: "> hola, soy jose_",
  headline: ["Desarrollador Full Stack especializado en", "agentes de IA."],
  lede: "Soy Ingeniero de Sistemas y llevo 4 años construyendo software, de las prácticas al rol full stack. Hoy me enfoco en IA generativa: agentes para WhatsApp, arquitecturas RAG y automatizaciones que ya funcionan en producción.",
  availability: "Abierto a nuevas oportunidades",
  email: "josereneguarachi@gmail.com",
  github: "https://github.com/JRGPdev",
  linkedin: "https://linkedin.com/in/jose-rene-guarachi-pitiga",
  cv: "/jose-guarachi-cv.pdf",
};

export const metrics = [
  { value: 4, prefix: "", suffix: " años", label: "desarrollando software, desde 2022" },
  { value: 5, prefix: "", suffix: "", label: "equipos en los que he trabajado, de pasante a full stack" },
  { value: 3, prefix: "", suffix: "", label: "equipos y proyectos que lideré técnicamente: Conecta, UPSA y CESA for Life" },
  { value: 30, prefix: "+", suffix: "", label: "tecnologías usadas en proyectos reales, de LLMs a SQL Server" },
];

export type ProjectStatus = "live" | "github" | "wip" | "pending";

export type Project = {
  name: string;
  kind: string;
  status: ProjectStatus;
  description: string;
  highlights?: string[];
  meter?: { label: string; value: number; total: number };
  tags: string[];
  links: { label: string; href?: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Ari",
    kind: "Agente conversacional · WhatsApp",
    status: "live",
    featured: true,
    description:
      "Agente de IA basado en LLMs que atiende a estudiantes por WhatsApp: entrega certificados, grabaciones y justificaciones, enruta cada contacto al equipo correcto y deriva a humanos solo los casos complejos.",
    highlights: [
      "82% del enrutamiento automatizado en 3 meses",
      "54 conversaciones cerradas de forma autónoma",
      "Menor tiempo de espera para cada estudiante",
    ],
    meter: { label: "Asignaciones resueltas por el agente", value: 382, total: 465 },
    tags: ["LLMs", "WhatsApp Cloud API", "Respond.io", "Prompt engineering"],
    links: [{ label: "En producción en CESA for Life" }],
  },
  {
    name: "Recomendador RAG",
    kind: "Arquitectura RAG",
    status: "live",
    description:
      "Recomendador conversacional con IA. Colaboré definiendo el pipeline de recuperación, los embeddings y la estrategia de bases de datos vectoriales.",
    tags: ["RAG", "Embeddings", "Vector DB"],
    links: [{ label: "Proyecto interno" }],
  },
  {
    name: "n8n MCP Server",
    kind: "Model Context Protocol",
    status: "pending",
    description:
      "Servidor MCP en Python que le permite a Claude listar, ejecutar y revisar workflows de n8n. Incluye tests con respuestas simuladas de la API.",
    tags: ["Python", "FastMCP", "n8n API", "MCP"],
    links: [{ label: "Código pronto en GitHub" }],
  },
  {
    name: "Claude RAG Agent",
    kind: "Agente sobre documentos",
    status: "github",
    description:
      "Responde preguntas sobre documentos propios usando embeddings locales y la API de Claude. Próximo paso: comparar bases vectoriales y medir la calidad de las respuestas.",
    tags: ["Python", "RAG", "Embeddings", "Claude API"],
    links: [{ label: "Ver código", href: "https://github.com/JRGPdev/claude-rag-agent" }],
  },
  {
    name: "CRM Harness",
    kind: "Loop de agente",
    status: "wip",
    description:
      "Loop de agente escrito a mano sobre un CRM de prueba: busca clientes y pedidos, registra cada paso y se detiene a los 10 pasos. Va a crecer con trazas, confirmación humana y evaluaciones.",
    tags: ["TypeScript", "Node.js", "Tool use"],
    links: [{ label: "Código pronto en GitHub" }],
  },
  {
    name: "Listening widget",
    kind: "Clasificación con IA",
    status: "live",
    description:
      "Widget que analiza y clasifica automáticamente las solicitudes entrantes para que cada una llegue al equipo indicado. Desarrollado de forma individual.",
    tags: ["LLMs", "Clasificación", "Full stack"],
    links: [{ label: "Proyecto interno" }],
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  live: "en producción",
  github: "código abierto",
  wip: "en desarrollo",
  pending: "por publicar",
};

export const jobs = [
  {
    company: "Crehana / CESA for Life",
    role: "Desarrollador Full Stack",
    place: "Remoto · Colombia",
    period: "Oct 2025 — Sep 2026",
    points: [
      "Diseñé y desarrollé Ari, el agente de IA para WhatsApp que automatizó el 82% del enrutamiento de contactos.",
      "Lideré técnicamente el rediseño de la plataforma CESA for Life y la migración a cesaforlife.cesa.edu.co, trabajando con diseño bajo Shape Up.",
      "Colaboré en la arquitectura RAG de un recomendador conversacional y desarrollé un listening widget de clasificación con IA.",
      "Lideré la analítica de producto con Amplitude y automaticé releases con CI/CD en GitHub Actions.",
      "Eliminé los errores de “entidad fantasma” en producción con un proyecto de integridad de datos en SQL Server.",
      "Construí un contador de reservas por cohorte, un foro que reemplazó los grupos de WhatsApp y asistencia con código QR.",
      "Impulsé la adopción de Claude (skills, agentes, MCP) y colaboré en un harness interno de agentes.",
    ],
    tags: ["LLMs", "RAG", "Next.js", "SQL Server", "GitHub Actions", "Amplitude"],
  },
  {
    company: "Alvind",
    role: "Desarrollador Front End",
    place: "Web, mobile y automatización",
    period: "Abr 2025 — Oct 2025",
    points: [
      "Bots con n8n para consultar inventario, precios y productos vía la API de BigCommerce.",
      "E-commerce con Next.js, TypeScript, Prismic y BigCommerce, monitoreado con Sentry.",
      "App iOS en SwiftUI con notificaciones push mediante Firebase Cloud Messaging.",
      "Mantenimiento y mejora continua de sitios WordPress y tiendas Shopify.",
    ],
    tags: ["n8n", "Next.js", "SwiftUI", "Sentry"],
  },
  {
    company: "Conecta",
    role: "Analista de Desarrollo",
    place: "Santa Cruz, Bolivia",
    period: "Abr 2024 — May 2025",
    points: [
      "Lideré de forma independiente el equipo de desarrollo durante un período, bajo Scrum.",
      "Soluciones RPA con UiPath que eliminaron tareas repetitivas.",
      "Transcripción y análisis de audio con Whisper, Python y SQL.",
      "Agentes que responden sobre PDFs con embeddings y LangChain.",
      "Interfaces con Angular, React y Tailwind CSS.",
    ],
    tags: ["UiPath", "Python", "LangChain", "Angular"],
  },
];

export const internships = [
  {
    company: "Conecta",
    role: "Pasante · RPA e Innovación",
    place: "Santa Cruz, Bolivia",
    period: "Ene 2024 — Abr 2024",
    points: [
      "Lideré el desarrollo de un MVP con inteligencia artificial, incluyendo el diseño de prompts y su implementación.",
      "Integré módulos de OpenAI como Whisper, Assistants y Fine-tuning.",
      "Implementé soluciones RPA con UiPath y di soporte técnico para su funcionamiento continuo. Al terminar pasé a Analista de Desarrollo.",
    ],
  },
  {
    company: "Universidad UPSA",
    role: "Becario de Desarrollo",
    place: "Santa Cruz, Bolivia",
    period: "Ago 2023 — Oct 2023",
    points: [
      "Desarrollo de sistemas web con Laravel.",
      "Lideré la coordinación y capacitación del equipo que desarrolló el sistema web.",
    ],
  },
  {
    company: "Transformación digital",
    role: "Pasante de Desarrollo",
    place: "Remoto",
    period: "Sep 2022 — Ene 2023",
    points: [
      "Desarrollo de aplicaciones móviles con Flutter y Dart.",
      "Diseño de la experiencia con mockups en Balsamiq.",
      "Trabajo con Scrum para organizar las entregas.",
    ],
  },
];

export const stack = [
  {
    group: "IA y agentes",
    file: "ai.ts",
    items: ["LLMs", "Agentes de IA", "RAG", "Embeddings", "Bases vectoriales", "LangChain", "MCP", "Claude", "OpenAI API"],
  },
  {
    group: "Automatización",
    file: "automation.ts",
    items: ["n8n", "UiPath", "APIs REST", "WhatsApp Cloud API", "Respond.io"],
  },
  {
    group: "Frontend y mobile",
    file: "frontend.tsx",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "SwiftUI", "Flutter"],
  },
  {
    group: "Backend y datos",
    file: "backend.py",
    items: ["Node.js", "Python", "C# / .NET", "Laravel", "SQL Server", "MySQL"],
  },
  {
    group: "DevOps",
    file: "ci.yml",
    items: ["Git", "GitHub Actions", "DbUp", "Sentry", "Firebase", "Amplitude"],
  },
  {
    group: "Forma de trabajo",
    file: "team.md",
    items: ["Shape Up", "Scrum", "Linear", "Trello", "100% remoto"],
  },
];

export const about = {
  paragraphs: [
    "Soy Jose, de Santa Cruz, Bolivia. Estudié Ingeniería de Sistemas en la UPSA y empecé a programar en equipos reales desde las prácticas: apps móviles, sistemas web y automatizaciones con RPA.",
    "Con el tiempo me fui especializando en IA generativa. Me gusta tomar un modelo de lenguaje y convertirlo en algo que la gente usa todos los días, con datos reales y resultados que se pueden medir.",
    "Trabajo bien de forma autónoma y en equipos remotos. Disfruto liderar la parte técnica, explicar lo que hago y ayudar a otros a adoptar herramientas de IA.",
  ],
  facts: [
    { label: "Formación", value: "Ingeniería de Sistemas · UPSA, 2024" },
    { label: "Idiomas", value: "Español nativo · Inglés en formación activa" },
    { label: "Base", value: "Santa Cruz, Bolivia (GMT−4)" },
    { label: "Modalidad", value: "Remoto, híbrido o presencial en Santa Cruz" },
  ],
  softSkills: [
    { title: "Liderazgo técnico", text: "He guiado equipos y proyectos, desde la planificación hasta la entrega." },
    { title: "Autonomía", text: "Me organizo solo y cumplo entregas trabajando 100% remoto." },
    { title: "Resolución de problemas", text: "Busco la causa real antes de proponer una solución." },
    { title: "Trabajo en equipo", text: "Colaboro de cerca con producto y diseño, con una comunicación clara y respetuosa." },
    { title: "Aprendizaje continuo", text: "Me mantengo al día y comparto lo que aprendo con el equipo." },
  ],
  hobbies: [
    { icon: "gym", label: "Gimnasio", text: "Entreno con constancia; me ayuda a mantener la disciplina." },
    { icon: "football", label: "Fútbol", text: "Lo juego y lo sigo." },
    { icon: "film", label: "Cine", text: "Me gusta ir al cine." },
    { icon: "music", label: "Música", text: "Me gusta escuchar música." },
  ],
};

export const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];
