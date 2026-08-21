import Icon from './Icon';
import { BRAND_ICONS, SQL_SERVER_ICON } from '../icons';

const FRONTEND = [
  { icon: BRAND_ICONS.react, label: 'React' },
  { icon: BRAND_ICONS.javascript, label: 'JavaScript' },
  { icon: BRAND_ICONS.html5, label: 'HTML5' },
  { icon: BRAND_ICONS.css3, label: 'CSS3' },
  { icon: BRAND_ICONS.tailwind, label: 'Tailwind' },
  { icon: BRAND_ICONS.vite, label: 'Vite' },
];

const BACKEND = [
  { icon: BRAND_ICONS.nodejs, label: 'Node.js' },
  { icon: BRAND_ICONS.express, label: 'Express' },
  { icon: BRAND_ICONS.mongodb, label: 'MongoDB' },
  { icon: BRAND_ICONS.mysql, label: 'MySQL' },
  { icon: BRAND_ICONS.postgresql, label: 'PostgreSQL' },
  { icon: SQL_SERVER_ICON, label: 'SQL Server' },
  { icon: BRAND_ICONS.git, label: 'Git' },
  { icon: BRAND_ICONS.linux, label: 'Linux' },
];

function StackGrid({ items, large }) {
  return (
    <div className={`stack-grid${large ? ' stack-grid-lg' : ''}`}>
      {items.map((item) => (
        <div className="stack-card tilt-card" key={item.label}>
          <Icon icon={item.icon} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <h2 className="section-title">Stack &amp; Recursos</h2>
        <p className="stack-intro">
          Herramientas y tecnologías que uso para construir interfaces y aplicaciones completas.
        </p>

        <h3 className="stack-subtitle">Frontend</h3>
        <StackGrid items={FRONTEND} large />

        <h3 className="stack-subtitle">Backend, datos &amp; herramientas</h3>
        <StackGrid items={BACKEND} />
      </div>
    </section>
  );
}
