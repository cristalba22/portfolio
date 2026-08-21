const PROJECTS = [
  {
    name: 'Cerca Liceo',
    thumb: './proyectos/cerca-liceo.jpg',
    badge: { text: 'En producción', className: 'badge-cyan' },
    description:
      'Guía barrial publicada y activa que conecta vecinos con comercios, promociones y servicios cercanos. Implementé búsqueda por rubro, producto o servicio, acceso directo a Maps y contacto por WhatsApp.',
    tags: ['React', 'Vite', 'Supabase/PostgreSQL', 'Cloudflare Pages'],
    links: [
      { label: 'Ver sitio en vivo ↗', href: 'https://cercaliceo.com.ar' },
      { label: 'Código', href: 'https://github.com/cristalba22/cerca-liceo' },
    ],
  },
  {
    name: 'PadelBook',
    thumb: './proyectos/padelbook.jpg',
    badge: { text: 'En producción', className: 'badge-cyan' },
    description:
      'Sistema web para un club de pádel: reservas online, torneos, agenda del jugador y paneles por rol. Construí la API backend con autenticación (JWT), gestión de roles y persistencia en MongoDB, más un frontend en React con calendario de disponibilidad.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    links: [
      { label: 'Ver sitio en vivo ↗', href: 'https://padelbookv6.vercel.app/' },
      { label: 'Código', href: 'https://github.com/cristalba22/padelbook' },
    ],
  },
  {
    name: 'FinanzArc',
    thumb: './proyectos/finanzarc.jpg',
    badge: { text: 'Proyecto de tesis', className: 'badge-pink' },
    description:
      'Proyecto de tesis de la Tecnicatura: aplicación para gestión de finanzas personales, con frontend en React consumiendo una API propia en ASP.NET para registrar y consultar movimientos financieros.',
    tags: ['React', 'ASP.NET', 'SQL'],
    links: [
      { label: 'Ver sitio en vivo ↗', href: 'https://finanzarc.vercel.app/' },
      { label: 'Código', href: 'https://github.com/cristalba22/FinanzArc-Tesis' },
    ],
  },
  {
    name: 'Bodegón El Mister',
    thumb: null,
    badge: { text: 'Demo funcional', className: 'badge-purple' },
    description:
      'Sistema de pedidos por QR para restaurante: flujo de pedidos por mesa con carta visual, carrito, observaciones y checkout demo. Vistas separadas para cliente, cocina y administrador, con seguimiento de comandas por estado y base para integración con Mercado Pago.',
    tags: ['JavaScript', 'HTML/CSS', 'localStorage', 'Mercado Pago'],
    note: 'Código disponible a pedido',
  },
];

function ProjectThumb({ project }) {
  if (project.thumb) {
    return (
      <img
        className="project-thumb"
        src={project.thumb}
        alt={`Captura de pantalla de ${project.name}`}
        loading="lazy"
      />
    );
  }
  return (
    <div className="project-thumb-empty" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 4H4v16h16v-4M14 4h6v6M20 4l-9 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Sin demo pública</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article className="project-card tilt-card" key={project.name}>
              <ProjectThumb project={project} />
              <div className="project-body">
                <div className="project-top">
                  <h3>{project.name}</h3>
                  <span className={`project-badge ${project.badge.className}`}>
                    {project.badge.text}
                  </span>
                </div>
                <p>{project.description}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.links
                    ? project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))
                    : <span className="project-links-note">{project.note}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
