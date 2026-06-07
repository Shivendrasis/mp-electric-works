import Link from "next/link";

/** MPEW logo lockup — bolt mark + wordmark. */
export default function Brand({
  className = "",
  closeLabel,
}: {
  className?: string;
  closeLabel?: boolean;
}) {
  return (
    <Link className={`brand ${className}`} href="/" aria-label="MP Electric Works — home">
      <span className="mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
        </svg>
      </span>
      <span>
        <b style={closeLabel ? { color: "#fff" } : undefined}>MPEW</b>
        <small style={closeLabel ? { color: "#7c8a98" } : undefined}>
          M.P. ELECTRIC WORKS
        </small>
      </span>
    </Link>
  );
}
