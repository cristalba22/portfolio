export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="about-grid">
          <p className="about-text">
            Soy Técnico en Desarrollo Web (Instituto Cervantes). Trabajé en el área de Sistemas
            del Sanatorio Allende, donde combiné soporte técnico a
            usuarios internos, documentación y manejo responsable de información sensible en un
            entorno corporativo de salud — algo que me dejó buena costumbre de precisión y criterio
            para trabajar con datos reales.
          </p>
          <p className="about-text">
            En paralelo armé varios proyectos personales full stack para aprender construyendo:
            desde sistemas de reservas con autenticación y roles, hasta una guía barrial que hoy
            está publicada y en uso real. Me interesan los roles de Desarrollador Web Jr, Backend
            Jr, Full Stack Jr o DBA Jr, y estoy buscando mi primera oportunidad formal para seguir
            creciendo.
          </p>
        </div>
        <div className="facts">
          <div className="fact tilt-card">
            <strong>Córdoba, Argentina</strong>
            <span>Ubicación</span>
          </div>
          <div className="fact tilt-card">
            <strong>Intermedio</strong>
            <span>Inglés</span>
          </div>
          <div className="fact tilt-card">
            <strong>Disponible</strong>
            <span>Para roles Jr / freelance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
