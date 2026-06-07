import type { Metadata } from "next";
import { CircleAlert } from "lucide-react";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import StatStrip from "@/components/StatStrip";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Clients & Testimonials — Trusted by Leading Manufacturers",
  description:
    "MPEW is trusted by 50+ industrial clients including Mangla Engineering, WAA Motors (Waaree Group), Linamar India, Gabriel India and many more across India.",
  alternates: { canonical: "/clients" },
};

const STATS = [
  { value: 50, suffix: "+", label: "Industrial Clients" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years of Trust" },
  { value: 4, label: "States Served" },
  { value: 95, suffix: "%", label: "Repeat Business" },
];

const CLIENTS = [
  ["Mangla Engineering Ltd.", "Dewas · Wound stators & CI machining"],
  ["WAA Motors & Pumps", "Waaree Group, Vapi · Solar motors"],
  ["Linamar India Pvt. Ltd.", "Dewas · Platforms, baskets, trolleys"],
  ["WID World India Ltd.", "Metering yard & HT cable"],
  ["Gabriel India Ltd.", "Dewas · Conveyor trolleys, fabrication"],
  ["Avirat Techno Industries", "Dewas · Hydraulic press & fabrication"],
  ["Aerotech Industries", "Dewas · Electrical & fabrication"],
  ["Baerlocher India Additives", "Dewas · Machined components"],
  ["Dewas Techno Products", "Dewas · Panels & fabrication"],
  ["Ascent Powertech", "Dewas · Panels, 4-pole structures, CTs"],
  ["Dhawal Engineering", "Dewas · Automobile components"],
  ["Pragatisheel Engineering", "Dewas · Control panels"],
  ["Agrophos Pvt. Ltd.", "Dewas · Starter panels"],
  ["Mechno Tech Industries", "Dewas · Panels & power packs"],
  ["Bhajan Engineering", "Dewas · Scrap bundling machine"],
  ["Devendra Techno Industries", "Dewas · Panels & fabrication"],
  ["Jayson Industries", "Rajkot · Flour-mill motor stators"],
  ["J.P. Industries", "Gwalior · Self-priming pump stators"],
  ["Prakash Agricultural Ind.", "Agra · Pump stators"],
  ["Vakasa Electricals", "Bakul Casting, Dewas · Stators"],
];

const TESTIMONIALS = [
  {
    av: "PM",
    text: "MPEW has been a dependable partner for our wound-stator requirements. The winding quality is consistent and deliveries are always on schedule.",
    name: "Procurement Manager",
    role: "Pump Manufacturer · Dewas",
  },
  {
    av: "QH",
    text: "Their machining accuracy and finish are excellent. We rely on MPEW for components that must meet tight tolerances every single time.",
    name: "Quality Head",
    role: "Automobile Components · Dewas",
  },
  {
    av: "PE",
    text: "From panels to fabrication, MPEW handles a wide scope with one point of contact. A genuinely reliable engineering partner.",
    name: "Project Engineer",
    role: "Renewable Energy · Gujarat",
  },
];

export default function ClientsPage() {
  return (
    <>
      <Banner
        current="Clients"
        title="Trusted by manufacturers across India"
        description="From pump and motor makers to automobile, panel and renewable companies — MPEW is a long-term engineering partner to a growing base of 50+ industrial clients."
      />

      <section className="section-sm" style={{ borderBottom: "1px solid var(--line)" }}>
        <Reveal>
          <StatStrip stats={STATS} />
        </Reveal>
      </section>

      {/* CLIENT LOGOS */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Customers We Serve</span>
            <h2 style={{ fontSize: 36 }}>A few of the companies that trust MPEW</h2>
          </Reveal>
          <Reveal className="logos" style={{ marginTop: 40 }}>
            {CLIENTS.map(([name, desc]) => (
              <div className="logo-cell" key={name}>
                <b>{name}</b>
                <span>{desc}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">In Their Words</span>
            <h2 style={{ fontSize: 36 }}>What our customers say</h2>
          </Reveal>
          <div className="quotes-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal className="quote" key={t.av} d={i}>
                <div className="mark">&ldquo;</div>
                <p>{t.text}</p>
                <div className="who">
                  <div className="av">{t.av}</div>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" className="note">
            <CircleAlert />
            Placeholder testimonials — share real client quotes &amp; names and we&apos;ll drop them in.
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Join our client family"
        title="Let's build a long-term partnership."
        text="Tell us your requirement — we'd be glad to earn your trust."
        actions={[
          { label: "Get a Quote", href: "/contact#quote", variant: "primary" },
          { label: "About MPEW", href: "/about", variant: "ghost" },
        ]}
      />
    </>
  );
}
