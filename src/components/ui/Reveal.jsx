// Keep essential content visible immediately, including on small screens.
export default function Reveal({ children, className = '' }) {
  return <div className={className}>{children}</div>
}
