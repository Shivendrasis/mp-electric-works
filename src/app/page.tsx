import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCheck,
  Check,
  Clock,
  Users,
  Star,
  IndianRupee,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTABand from "@/components/CTABand";
import { STATS, SITE } from "@/lib/site";

const SERVICES = [
  {
    chip: "Mechanical",
    img: "/images/cnc-machine.jpg",
    title: "CNC Machining & Job Work",
    text: "Precision turning, drilling and tapping in MS, CI, SS, Aluminium and EN8 to exact customer tolerances.",
  },
  {
    chip: "Fabrication",
    img: "/images/fab-structure.jpg",
    title: "Fabrication & SPM",
    text: "Heavy structures, conveyors, special purpose machines and custom fabrication, designed and executed in-house.",
  },
  {
    chip: "Electrical",
    img: "/images/winding-2.jpg",
    title: "Winding & Stators",
    text: "Wound stators for solar, agriculture and domestic pump motors — over 25 years of winding experience.",
  },
  {
    chip: "Panels",
    img: "/images/panel-1.jpg",
    title: "Electrical Panels",
    text: "PCC, MCC, APFC, metering, control & automation panels for renewable and industrial segments.",
  },
  {
    chip: "Infrastructure",
    img: "/images/substation.jpg",
    title: "HT & LT Electrical Works",
    text: "33/11 KV substations, transmission lines, cable laying, termination and street-light installation.",
  },
  {
    chip: "Precision",
    img: "/images/parts-turned.jpg",
    title: "Precision Components",
    text: "Machined shafts, housings, rings and pump components delivered with measured, tested accuracy.",
  },
];

const INDUSTRIES = [
  { img: "/images/parts-housings.jpg", title: "Pump Manufacturing", sub: "Wound stators & machined components" },
  { img: "/images/substation-sunset.jpg", title: "Solar & Renewable", sub: "Motors, panels & structures" },
  { img: "/images/fab-1.jpg", title: "Automobile", sub: "Fabrication & machined parts" },
  { img: "/images/panel-2.jpg", title: "Industrial Automation", sub: "Control & automation panels" },
  { img: "/images/spm-machine.jpg", title: "Manufacturing Plants", sub: "SPM & conveyor systems" },
  { img: "/images/lathe-2.jpg", title: "General Engineering", sub: "Precision job work" },
];

const WHY = [
  { Icon: Clock, title: "15+ Years Experience", text: "A track record built since 2008 across mechanical and electrical engineering." },
  { Icon: Users, title: "Skilled Workforce", text: "A 30+ strong team of technically capable engineers and craftsmen." },
  { Icon: Building2, title: "Modern Infrastructure", text: "An 8000 sq ft workshop with CNC, fabrication, winding and testing equipment." },
  { Icon: ShieldCheck, title: "Quality Assurance", text: "Calibrated measuring instruments and a documented inspection process." },
  { Icon: Star, title: "Timely Delivery", text: "An expert vendor base and planning that keeps commitments on schedule." },
  { Icon: IndianRupee, title: "Competitive Pricing", text: "Value-for-money engineering without compromising on standards." },
];

const CHECKLIST = [
  "Reliable solutions, superb quality",
  "Skilled, experienced workforce",
  "Modern, well-equipped facility",
  "Timely, dependable delivery",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Image
          className="bg"
          src="/images/substation-sunset.jpg"
          alt="MP Electric Works electrical substation at sunset"
          fill
          priority
          sizes="100vw"
        />
        <div className="scrim" />
        <div className="scrim2" />
        <div className="wrap inner">
          <Reveal as="span" className="eyebrow on-dark">
            Engineering Excellence Since 2008
          </Reveal>
          <Reveal d={1}>
            <h1 style={{ marginTop: 20 }}>
              Electrical &amp; Mechanical Engineering <span className="o">Solutions</span> Since 2008
            </h1>
          </Reveal>
          <Reveal d={2}>
            <p className="sub">
              Trusted manufacturing, machining, fabrication, winding and electrical solutions
              partner — engineered to industrial scale from Dewas, Madhya Pradesh.
            </p>
          </Reveal>
          <Reveal d={3}>
            <div className="cta">
              <Link className="btn btn-primary btn-lg" href="/contact#quote">
                Get a Quote <ArrowRight />
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/contact">
                Contact Us
              </Link>
            </div>
          </Reveal>
          <Reveal d={4}>
            <div className="trust">
              <div className="ti">
                <ShieldCheck /> 15+ Years of Industrial Expertise
              </div>
              <div className="ti">
                <Building2 /> 8000 Sq Ft Manufacturing Facility
              </div>
              <div className="ti">
                <CheckCheck /> ISO-grade Quality Process
              </div>
            </div>
          </Reveal>
        </div>
        <div className="scroll-ind" aria-hidden="true">
          <div className="mouse" />
          SCROLL
        </div>
      </section>

      {/* HERO STATS */}
      <div className="wrap hero-stats">
        <Reveal className="box">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">
                <Counter value={s.value} />
                {s.suffix && <span className="o">{s.suffix}</span>}
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="wrap about-grid">
          <Reveal className="about-media">
            <div className="main">
              <Image src="/images/factory-exterior.jpg" alt="MPEW factory in Dewas" width={760} height={570} />
            </div>
            <div className="inset">
              <Image src="/images/cnc-worker.jpg" alt="CNC operator" width={160} height={160} />
            </div>
            <div className="badge">
              <b>2008</b>
              <span>Established in Dewas</span>
            </div>
          </Reveal>
          <Reveal d={1}>
            <span className="eyebrow">About MP Electric Works</span>
            <h2 style={{ fontSize: 40, marginTop: 16 }}>
              Built on innovation, precision and a passion for engineering.
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Set up in 2008, MPEW has grown from three employees to a 30+ strong team delivering
              electrical &amp; mechanical solutions with a strong ability to innovate, design,
              assemble and deliver — backed by an 8000 sq ft workshop with the best equipment.
            </p>
            <ul className="checklist">
              {CHECKLIST.map((c) => (
                <li key={c}>
                  <Check /> {c}
                </li>
              ))}
            </ul>
            <Link className="btn btn-dark btn-lg" href="/about" style={{ marginTop: 30 }}>
              Our Story <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section cap">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow center">What We Do</span>
            <h2>Complete electrical &amp; mechanical capabilities</h2>
            <p>
              One partner for machining, fabrication, winding and full electrical panel solutions —
              from concept to commissioning.
            </p>
          </Reveal>
          <div className="cap-grid">
            {SERVICES.map((s, i) => (
              <Reveal className="pcard" key={s.title} d={i % 3}>
                <div className="ph">
                  <span className="chip">{s.chip}</span>
                  <Image src={s.img} alt={s.title} width={420} height={264} />
                </div>
                <div className="bd">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center", marginTop: 44 }}>
            <Link className="btn btn-primary btn-lg" href="/services">
              View All 15 Services <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Industries We Serve</span>
            <h2>Engineering partners across core sectors</h2>
          </Reveal>
          <div className="ind-grid">
            {INDUSTRIES.map((ind, i) => (
              <Reveal className="ind-tile" key={ind.title} d={i % 3}>
                <Image src={ind.img} alt={ind.title} width={420} height={280} />
                <div className="ov">
                  <b>{ind.title}</b>
                  <span>{ind.sub}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why">
        <div className="wrap">
          <Reveal className="sec-head" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Why MPEW</span>
            <h2>A partner built for large industrial &amp; government projects</h2>
          </Reveal>
          <div className="why-grid">
            {WHY.map(({ Icon, title, text }, i) => (
              <Reveal className="feat" key={title} d={i % 3}>
                <div className="fico">
                  <Icon />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        eyebrow="Let's build something reliable"
        title="Have a project in mind? Let's engineer it together."
        text="Tell us your requirement and our team will respond with a tailored quotation."
        actions={[
          { label: "Get a Quote", href: "/contact#quote", variant: "primary" },
          { label: "Call Us", href: `tel:${SITE.phoneRaw}`, variant: "ghost" },
        ]}
      />
    </>
  );
}
