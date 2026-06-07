import type { Metadata } from "next";
import Image from "next/image";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import StatStrip from "@/components/StatStrip";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Industries We Serve — Automobile, Solar, Pumps & Automation",
  description:
    "MPEW serves the automobile, renewable energy, solar, pump manufacturing, industrial automation and manufacturing-plant sectors with electrical & mechanical solutions.",
  alternates: { canonical: "/industries" },
};

const STATS = [
  { value: 6, label: "Core Sectors" },
  { value: 50, suffix: "+", label: "Industrial Clients" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 4, label: "States Served" },
  { value: 15, suffix: "+", label: "Years of Trust" },
];

const INDUSTRIES = [
  {
    num: "01",
    tag: "Automobile",
    img: "/images/fab-1.jpg",
    title: "Automobile Industry",
    text: "Machined components, operator platforms, heat-treatment baskets, trolleys and fabricated materials for leading automobile manufacturers in the region.",
    chips: ["CI & MS Machining", "Fabrication", "Trolleys", "Components"],
  },
  {
    num: "02",
    tag: "Renewable Energy",
    img: "/images/substation-sunset.jpg",
    title: "Renewable Energy",
    text: "Electrical panels, structures and metering yards for renewable power projects — including HT cable supply, termination and 4-pole structures.",
    chips: ["Metering Yards", "HT Cabling", "Structures", "Panels"],
  },
  {
    num: "03",
    tag: "Solar",
    img: "/images/winding-2.jpg",
    title: "Solar Industry",
    text: "Wound stators for oil-filled solar motors (PMSM / PMDC) and solar pump motors — supplied to solar pump manufacturers across India.",
    chips: ["Solar Pump Motors", "PMSM / PMDC", "Wound Stators"],
  },
  {
    num: "04",
    tag: "Pumps",
    img: "/images/parts-housings.jpg",
    title: "Pump Manufacturing",
    text: "Wound stators for self-priming, monoblock and openwell pumps, plus CI machining, drilling and tapping — a long-standing strength of MPEW.",
    chips: ["Monoblock", "Self-priming", "Openwell", "CI Machining"],
  },
  {
    num: "05",
    tag: "Automation",
    img: "/images/panel-2.jpg",
    title: "Industrial Automation",
    text: "Control & automation panels, RTU panels, starter panels and hydraulic power packs for automated production environments.",
    chips: ["Control Panels", "RTU", "Starters", "Power Packs"],
  },
  {
    num: "06",
    tag: "Manufacturing",
    img: "/images/spm-machine.jpg",
    title: "Manufacturing Plants",
    text: "Special purpose machines, conveyors, fabricated trolleys, scrap-bundling machines and bespoke equipment that keep production lines moving.",
    chips: ["SPM", "Conveyors", "Fabrication", "Bespoke Machines"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Banner
        current="Industries"
        title="Engineering partners across core industries"
        description="Our mechanical and electrical capabilities serve a broad base of manufacturers — from pumps and solar to automobile and industrial automation — with components, panels and complete installations."
      />

      <section className="section-sm" style={{ borderBottom: "1px solid var(--line)" }}>
        <Reveal>
          <StatStrip stats={STATS} />
        </Reveal>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Sectors We Serve</span>
            <h2 style={{ fontSize: 38 }}>Capability matched to every industry</h2>
          </Reveal>
          <div className="ind-list">
            {INDUSTRIES.map((ind) => (
              <Reveal className="ind-row" key={ind.num}>
                <div className="ir-img">
                  <span className="num">{ind.num}</span>
                  <Image src={ind.img} alt={ind.title} fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="ir-bd">
                  <span className="tag">{ind.tag}</span>
                  <h3>{ind.title}</h3>
                  <p>{ind.text}</p>
                  <div className="chips">
                    {ind.chips.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Your sector, our expertise"
        title="Let's solve your industry's engineering challenge."
        text="We adapt our machining, fabrication and electrical capability to your exact application."
        actions={[
          { label: "Get a Quote", href: "/contact#quote", variant: "primary" },
          { label: "See Our Clients", href: "/clients", variant: "ghost" },
        ]}
      />
    </>
  );
}
