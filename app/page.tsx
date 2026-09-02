import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Database,
  Globe2,
  Network,
  ServerCog,
} from "lucide-react";
import { MotionEffects } from "./motion-effects";
import { ThemeToggle } from "./theme-toggle";

const projects = [
  {
    number: "01",
    title: "Kivonex",
    type: "Producto principal / Desarrollo activo",
    description:
      "Plataforma web modular para gestionar membresías y crecer progresivamente desde un MVP local.",
    tags: ["React", "TypeScript", "API REST", "SQL", "Arquitectura"],
    status: "En desarrollo",
    featured: true,
  },
  {
    number: "02",
    title: "Smart Parking",
    type: "Proyecto académico / Producto digital",
    description:
      "Aplicación para consultar espacios disponibles y administrar usuarios y vehículos.",
    tags: ["React", "TypeScript", "UX", "Scrum"],
    href: "https://github.com/CharlyCharly33/Aplicacion-de-estacionamiento",
  },
  {
    number: "03",
    title: "Focusly",
    type: "Esoft / Proyecto propio",
    description:
      "Landing page responsive con validación local y una experiencia enfocada en conversión.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    href: "https://charlycharly33.github.io/focusly-landing-page/",
    codeHref: "https://github.com/CharlyCharly33/focusly-landing-page",
  },
  {
    number: "04",
    title: "HabitTrack",
    type: "Esoft / Integración con Astro",
    description:
      "Seguimiento de hábitos construido con Astro, React y componentes modulares.",
    tags: ["Astro", "React", "TypeScript", "UI"],
    href: "https://github.com/CharlyCharly33/Practica-Integracion",
  },
  {
    number: "05",
    title: "Práctica Git/GitHub",
    type: "Esoft / Flujo de trabajo",
    description:
      "Práctica de ramas, commits, sincronización remota y resolución de conflictos.",
    tags: ["Git", "GitHub", "Branches", "Workflow"],
    href: "https://github.com/CharlyCharly33/Practica-GIT",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Software",
    text: "Interfaces, aplicaciones web, APIs y bases de datos pensadas como un sistema completo.",
  },
  {
    icon: Network,
    title: "Infraestructura",
    text: "Redes, dispositivos, Active Directory y diagnóstico técnico en entornos reales.",
  },
  {
    icon: ServerCog,
    title: "Automatización",
    text: "Procesos, datos e inteligencia artificial aplicados con supervisión y propósito.",
  },
];

const stackGroups = [
  {
    label: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Astro"],
  },
  {
    label: "Backend + Datos",
    items: ["Node.js", "PHP", "SQL Server", "MySQL", "Power BI", "Postman"],
  },
  {
    label: "Infraestructura",
    items: ["Git", "GitHub", "Docker", "Linux", "PowerShell", "Raspberry Pi"],
  },
];

export default function Home() {
  return (
    <main>
      <MotionEffects />

      <header className="site-header">
        <a className="brand-lockup" href="#inicio" aria-label="Ir al inicio">
          <strong>CC/</strong>
          <span>Systems + Product</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#proyectos"><span>01</span> Proyectos</a>
          <a href="#perfil"><span>02</span> Perfil</a>
          <a href="#experiencia"><span>03</span> Experiencia</a>
        </nav>
        <ThemeToggle />
      </header>

      <section className="hero section-accent accent-blue" id="inicio">
        <div className="page-shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <span>PORTFOLIO / 2026</span>
              <span>QRO, MX</span>
              <span className="availability"><i /> Disponible</span>
            </div>
            <p className="hero-role">Ingeniería en Sistemas · Full Stack · IT</p>
            <h1>
              Construyo sistemas.
              <span>Resuelvo lo que los conecta.</span>
            </h1>
            <div className="hero-bottom">
              <p>
                Soy Carlos Cerda. Combino desarrollo web, infraestructura,
                datos y automatización para convertir problemas reales en
                soluciones claras, funcionales y bien organizadas.
              </p>
              <div className="hero-actions">
                <a className="button button-solid" href="#proyectos">
                  Explorar trabajo <ArrowDown size={17} />
                </a>
                <a className="button button-line" href="https://github.com/CharlyCharly33" target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={17} />
                </a>
                <a className="button button-line" href="https://www.linkedin.com/in/carlos-alberto-cerda-sierra-266604256/" target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>

          <figure className="portrait-block">
            <div className="portrait-index">CC—01</div>
            <div className="portrait-frame">
              <img
                src="/carlos-cerda-perfil.png"
                alt="Retrato profesional de Carlos Cerda"
              />
              <div className="portrait-monogram" aria-hidden="true">CC/</div>
            </div>
            <figcaption>
              <span>Carlos Alberto Cerda Sierra</span>
              <span>Curioso / Constructor / Sistemas</span>
            </figcaption>
          </figure>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <span>SOFTWARE</span><i>+</i><span>INFRAESTRUCTURA</span><i>+</i>
          <span>DATOS</span><i>+</i><span>AUTOMATIZACIÓN</span>
        </div>
      </section>

      <section className="content-section section-accent accent-orange" id="proyectos">
        <div className="page-shell">
          <header className="section-header reveal">
            <div className="section-number">01 / TRABAJO</div>
            <h2>Proyectos que muestran<br />cómo construyo.</h2>
            <p>
              Productos propios y prácticas seleccionadas por lo que
              demuestran: criterio, estructura y aprendizaje aplicado.
            </p>
          </header>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project-row ${project.featured ? "featured" : ""} reveal`}
                key={project.title}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-identity">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="project-detail">
                  <p>{project.description}</p>
                  <div className="project-links">
                    {project.status && <span className="status-label">{project.status}</span>}
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.codeHref ? "Ver demo" : "Ver proyecto"} <ArrowUpRight size={15} />
                      </a>
                    )}
                    {project.codeHref && (
                      <a href={project.codeHref} target="_blank" rel="noreferrer">
                        Ver código <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="lab-row reveal" aria-labelledby="lab-title">
            <div className="lab-label">LAB / SECUNDARIO</div>
            <div>
              <h3 id="lab-title">Automatización de datos de Querétaro</h3>
              <p>
                Scripts para validar archivos, detectar errores y preparar
                resultados para análisis.
              </p>
            </div>
            <Database size={28} strokeWidth={1.4} />
          </aside>
        </div>
      </section>

      <section className="content-section profile-section section-accent accent-green" id="perfil">
        <div className="page-shell">
          <header className="section-header reveal">
            <div className="section-number">02 / PERFIL</div>
            <h2>Curiosidad técnica.<br />Criterio humano.</h2>
            <p>
              Me interesa entender la experiencia, el código y la
              infraestructura que mantienen disponible una solución.
            </p>
          </header>

          <div className="profile-layout">
            <div className="profile-statement reveal">
              <p>
                No me interesa acumular tecnologías. Me interesa saber
                <strong> qué problema resuelven, cómo se conectan y cómo hacer que funcionen mejor.</strong>
              </p>
              <div className="work-principle">
                <span>PRINCIPIO / 01</span>
                <strong>Human first.<br />AI assisted.</strong>
                <small>La tecnología amplifica decisiones; no reemplaza el criterio.</small>
              </div>
            </div>

            <div className="capability-list">
              {capabilities.map(({ icon: Icon, title, text }, index) => (
                <article className="capability-row reveal" key={title}>
                  <span>0{index + 1}</span>
                  <Icon size={24} strokeWidth={1.5} />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-accent accent-violet" id="experiencia">
        <div className="page-shell">
          <header className="section-header reveal">
            <div className="section-number">03 / EXPERIENCIA</div>
            <h2>De resolver incidencias<br />a construir producto.</h2>
            <p>
              La experiencia técnica también es aprender a escuchar,
              documentar y mejorar procesos.
            </p>
          </header>

          <div className="experience-list">
            <article className="experience-row reveal">
              <div className="experience-icon"><BriefcaseBusiness size={22} /></div>
              <div className="experience-meta"><span>ACTUALIDAD</span><small>Querétaro</small></div>
              <div>
                <h3>Prácticas profesionales · Esoft</h3>
                <p>
                  Desarrollo web, colaboración con GitHub, mejora de interfaces
                  y construcción de proyectos propios sin exponer trabajo
                  confidencial de clientes.
                </p>
              </div>
            </article>

            <article className="experience-row experience-featured reveal">
              <div className="experience-icon"><Boxes size={22} /></div>
              <div className="experience-meta"><span>1 AÑO</span><small>TE Connectivity</small></div>
              <div>
                <h3>Intern RSD/IT</h3>
                <p>
                  Soporte a usuarios e infraestructura, atención de incidencias
                  de nivel 1 y participación en actividades de nivel 2.
                  Configuración de equipos, Active Directory, ServiceNow y RITMs.
                </p>
                <ul>
                  <li>Diagnóstico de red, direccionamiento IP y soporte en VLANs.</li>
                  <li>Configuración de Zebra/DataCard, RFID, audio y cámaras Cognex.</li>
                  <li>Dashboards en Power BI para indicadores operativos.</li>
                  <li>Solución OCR para automatizar ideas de mejora.</li>
                  <li>Documentación técnica y capacitación a usuarios.</li>
                </ul>
              </div>
            </article>

            <article className="experience-row reveal">
              <div className="experience-icon"><Globe2 size={22} /></div>
              <div className="experience-meta"><span>EN PARALELO</span><small>Aprendizaje continuo</small></div>
              <div>
                <h3>Proyectos personales y académicos</h3>
                <p>
                  Aplicaciones web, bases de datos, automatización,
                  documentación y metodologías ágiles convertidas en
                  entregables funcionales.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section stack-section section-accent accent-red">
        <div className="page-shell">
          <header className="section-header reveal">
            <div className="section-number">04 / HERRAMIENTAS</div>
            <h2>Un sistema completo<br />necesita más de una capa.</h2>
            <p>
              Elijo las herramientas según el problema, el contexto y la etapa
              del proyecto.
            </p>
          </header>

          <div className="stack-table">
            {stackGroups.map((group, index) => (
              <div className="stack-row reveal" key={group.label}>
                <span>0{index + 1}</span>
                <h3>{group.label}</h3>
                <div>{group.items.map((item) => <code key={item}>{item}</code>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-accent accent-yellow">
        <div className="page-shell contact-layout reveal">
          <div className="contact-monogram" aria-hidden="true">CC/</div>
          <div>
            <p className="section-number">05 / CONTACTO</p>
            <h2>Construyamos<br />algo que funcione.</h2>
          </div>
          <div className="contact-copy">
            <p>
              Estoy abierto a oportunidades y conversaciones sobre desarrollo,
              IT, automatización y nuevos retos profesionales.
            </p>
            <div className="contact-actions">
              <a className="button button-solid" href="https://github.com/CharlyCharly33" target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={17} />
              </a>
              <a className="button button-line" href="https://www.linkedin.com/in/carlos-alberto-cerda-sierra-266604256/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="page-shell footer-row">
          <span>© 2026 CARLOS CERDA</span>
          <span>QUERÉTARO, MÉXICO</span>
          <a href="#inicio">VOLVER ARRIBA ↑</a>
        </div>
      </footer>
    </main>
  );
}
