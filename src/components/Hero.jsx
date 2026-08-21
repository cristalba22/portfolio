import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <Hero3D />
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container hero-inner">
        <p className="eyebrow">Hola, soy</p>
        <h1 className="gradient-text">Cristian Eduardo Alba</h1>
        <p className="hero-role">
          Desarrollador Full Stack Jr <span className="dot">·</span> React &amp; Node.js{' '}
          <span className="dot">·</span> Bases de datos
        </p>
        <p className="hero-desc">
          Técnico en Desarrollo Web (Instituto Cervantes) con experiencia en soporte de sistemas y
          bases de datos en el área de Sistemas del Sanatorio Allende. Construyo aplicaciones full
          stack reales, de punta a punta: interfaz, API y base de datos.
        </p>
        <div className="hero-cta">
          <a href="#proyectos" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="/cv-cristian-alba.pdf" className="btn btn-outline" download>
            Descargar CV
          </a>
        </div>
        <div className="hero-links">
          <a href="https://github.com/cristalba22" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-eduardo-alba-374098240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:crisalbavideografo@gmail.com">Email</a>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
}
