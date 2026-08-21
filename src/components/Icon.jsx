export default function Icon({ icon }) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={icon.title}>
      <path fill={`#${icon.hex}`} d={icon.path} />
    </svg>
  );
}
