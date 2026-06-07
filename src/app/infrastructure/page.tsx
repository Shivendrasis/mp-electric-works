import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  Settings,
  Disc3,
  Drill,
  Cog,
  Hammer,
  Flame,
  CircuitBoard,
  Box,
  type LucideIcon,
} from "lucide-react";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Infrastructure & Quality — 8000 Sq Ft Workshop",
  description:
    "MPEW's 8000 sq ft workshop: CNC turning, lathe, drill, hydraulic press, welding, coil looping machines, baking oven and calibrated measuring & testing equipment.",
  alternates: { canonical: "/infrastructure" },
};

const SHOWCASE = [
  { img: "/images/cnc-machine.jpg", cap: "CNC Turning Center", cls: "big" },
  { img: "/images/lathe-1.jpg", cap: "Lathe Machine", cls: "" },
  { img: "/images/drill-press.jpg", cap: "Drill Machine", cls: "" },
  { img: "/images/lathe-work.jpg", cap: "Precision Turning", cls: "" },
  { img: "/images/winding-1.jpg", cap: "Winding Shop", cls: "" },
  { img: "/images/oven.jpg", cap: "Baking Oven", cls: "tall" },
  { img: "/images/fab-structure.jpg", cap: "Fabrication Bay", cls: "" },
  { img: "/images/parts-turned.jpg", cap: "Finished Components", cls: "" },
];

const MACHINES: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: Settings, title: "CNC Turning Machines", text: "Automated, repeatable precision turning" },
  { Icon: Disc3, title: "Lathe Machines", text: "Conventional turning & facing" },
  { Icon: Drill, title: "Drill Machines", text: "Accurate hole-making to spec" },
  { Icon: Cog, title: "Auto Tap (Thread) Machine", text: "Automated threading operations" },
  { Icon: Hammer, title: "Hydraulic Press Machine", text: "High-tonnage pressing & forming" },
  { Icon: Flame, title: "Welding & Grinding", text: "Compressor, grinder & welding machines" },
  { Icon: CircuitBoard, title: "Automatic Coil Looping Machine", text: "Consistent coil forming for winding" },
  { Icon: Box, title: "Slot Paper Folding Machine", text: "Insulation slot paper preparation" },
  { Icon: Flame, title: "Baking Oven", text: "Controlled winding-varnish baking" },
];

const MEASURE = [
  ["Digital Height Vernier", " — 12 inch"],
  ["Bench Centre", ""],
  ["Micrometers", " — 0 to 150 mm ranges"],
  ["Bore Dial Sets", " — 10 to 160 mm"],
  ["Dial Gauge Indicators", " — 0.001 & 0.01 mm"],
  ["Digital & Analog Verniers", ""],
  ["Surface Plates", " — graphite & MS ground"],
  ["Surge, Resistance & HV Meters", ""],
];

const QUALITY = [
  { n: 1, title: "Precision Measurement", text: "Every dimension verified against drawing using calibrated instruments." },
  { n: 2, title: "Testing Process", text: "Surge, resistance and HV testing for wound stators and assemblies." },
  { n: 3, title: "Quality Inspection", text: "Documented inspection to confirm standards and specifications are met." },
  { n: 4, title: "Delivery Standards", text: "Baked, finished and dispatched — on time, every time." },
];

export default function InfrastructurePage() {
  return (
    <>
      <Banner
        current="Infrastructure"
        title="An 8000 sq ft workshop built for precision"
        description="We have developed a sophisticated infrastructure of 8000 sq ft, equipped with the best machines and testing facilities — to ensure every product is of the highest quality, and to keep improving our operations."
      />

      {/* WORKSHOP SHOWCASE */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Inside Our Workshop</span>
            <h2 style={{ fontSize: 38 }}>Where precision is made</h2>
          </Reveal>
          <Reveal className="infra-hero">
            {SHOWCASE.map((s) => (
              <div className={`ph ${s.cls}`.trim()} key={s.cap}>
                <Image src={s.img} alt={s.cap} fill sizes="(max-width: 860px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                <span className="cap">{s.cap}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* MACHINES */}
      <section className="section" style={{ paddingTop: 30, background: "var(--mist)" }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Our Machinery</span>
            <h2 style={{ fontSize: 34 }}>Machines in our workshop</h2>
          </Reveal>
          <div className="machine-grid">
            {MACHINES.map(({ Icon, title, text }, i) => (
              <Reveal className="machine" key={title} d={i % 3}>
                <div className="mi">
                  <Icon />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEASURING EQUIPMENT */}
      <section className="section">
        <div className="wrap measure-grid" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 48, alignItems: "center" }}>
          <Reveal>
            <span className="eyebrow">Precision &amp; Testing</span>
            <h2 style={{ fontSize: 34, marginTop: 14 }}>Calibrated measuring &amp; testing equipment</h2>
            <p style={{ marginTop: 16, color: "var(--slate-600)", fontSize: 16, lineHeight: 1.7 }}>
              Quality means products that meet and exceed all requirements, standards and
              specifications — achieved through attention to every stage of production. Our workshop
              is equipped with a full range of precision measuring instruments.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <div className="tag">0.001 mm accuracy</div>
              <div className="tag">Surge &amp; HV testing</div>
              <div className="tag">Documented inspection</div>
            </div>
          </Reveal>
          <Reveal className="measure" d={1}>
            <h3>In our measuring lab</h3>
            <ul className="mlist">
              {MEASURE.map(([b, rest]) => (
                <li key={b}>
                  <Check />
                  <span>
                    <b>{b}</b>
                    {rest}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* QUALITY TIMELINE */}
      <section className="section" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow center">Our Quality Process</span>
            <h2 style={{ fontSize: 34 }}>Quality, built into every stage</h2>
            <p>
              A disciplined process from measurement to dispatch ensures every component leaves the
              way it should.
            </p>
          </Reveal>
          <div className="timeline">
            {QUALITY.map((q, i) => (
              <Reveal className="tl-step" key={q.n} d={i}>
                <div className="dot">{q.n}</div>
                <h4>{q.title}</h4>
                <p>{q.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="See it for yourself"
        title="Visit our facility or request a capability deck."
        text="We're always happy to walk customers through our workshop in Dewas."
        actions={[
          { label: "Schedule a Visit", href: "/contact#quote", variant: "primary" },
          { label: "View Gallery", href: "/gallery", variant: "ghost" },
        ]}
      />
    </>
  );
}
