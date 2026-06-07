import Link from "next/link";
import Reveal from "./Reveal";

/** Inner-page hero banner with breadcrumb. */
export default function Banner({
  current,
  title,
  description,
}: {
  current: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="banner">
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="cur">{current}</span>
        </nav>
        <Reveal as="div">
          <h1>{title}</h1>
        </Reveal>
        {description && (
          <Reveal as="div" d={1}>
            <p>{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
