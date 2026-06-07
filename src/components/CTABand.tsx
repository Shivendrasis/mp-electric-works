import Link from "next/link";

type CTAAction = { label: string; href: string; variant: "primary" | "ghost" };

/** Dark navy call-to-action band used at the foot of most pages. */
export default function CTABand({
  eyebrow,
  title,
  text,
  actions,
}: {
  eyebrow: string;
  title: string;
  text: string;
  actions: CTAAction[];
}) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div>
          <span className="eyebrow on-dark">{eyebrow}</span>
          <h2 style={{ marginTop: 14 }}>{title}</h2>
          <p>{text}</p>
        </div>
        <div style={{ display: "flex", gap: 14, flex: "none", flexWrap: "wrap" }}>
          {actions.map((a) => (
            <Link
              key={a.label}
              className={`btn btn-${a.variant} btn-lg`}
              href={a.href}
            >
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
