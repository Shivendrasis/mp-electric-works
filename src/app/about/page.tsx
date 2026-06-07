import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About Us — Engineering Trust Since 2008",
  description:
    "Since 2008, MP Electric Works has delivered electrical & mechanical engineering solutions from Dewas, Madhya Pradesh. Learn our story, mission, vision and values.",
  alternates: { canonical: "/about" },
};

const JOURNEY = [
  { year: "2008", title: "The beginning", text: "MP Electric Works is founded in Dewas with three employees and a passion for electrical & mechanical engineering." },
  { year: "2012", title: "Winding expertise", text: "Expanded wound-stator capability for solar, agriculture and domestic pump motors, building on decades of winding experience." },
  { year: "2016", title: "Machining & fabrication scale-up", text: "Added CNC turning, fabrication and special purpose machine capability to serve automobile and pump-sector industries." },
  { year: "2020", title: "Electrical panels & HT/LT works", text: "Broadened into PCC, MCC, APFC panels and 33/11 KV substation, transmission and cable works for industrial & renewable segments." },
  { year: "Today", title: "30+ team · 8000 sq ft · 50+ clients", text: "A complete engineering partner trusted by leading manufacturers across Madhya Pradesh, Gujarat, U.P. and beyond." },
];

export default function AboutPage() {
  return (
    <>
      <Banner
        current="About Us"
        title="Engineering trust since 2008"
        description="From three employees to a 30+ strong team, MPEW has grown into a complete electrical & mechanical solutions partner — driven by innovation and an uncompromising commitment to quality."
      />

      {/* STORY */}
      <section className="section">
        <div className="wrap story">
          <Reveal className="story-media">
            <Image src="/images/factory-exterior.jpg" alt="MPEW facility in Dewas" width={620} height={500} />
            <div className="tagbox">
              <b>Our Workshop · Dewas, M.P.</b>
              <p>8000 sq ft of manufacturing, machining, fabrication and winding capability.</p>
            </div>
          </Reveal>
          <Reveal d={1}>
            <span className="eyebrow">Our Story</span>
            <h2 style={{ fontSize: 38, marginTop: 16 }}>
              A company built on rich industrial experience and a unique passion.
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              MP Electric Works was set up in 2008. Owing to rich industrial experience, we are
              involved in providing electrical &amp; mechanical solutions to our customers —
              dedicated with a strong ability to innovate, design, assemble and deliver all
              equipment with a unique passion.
            </p>
            <p style={{ marginTop: 16, color: "var(--slate-600)", fontSize: 16, lineHeight: 1.7 }}>
              MPEW has grown from its original three employees to a company that today has more than
              30 employees. We now operate an 8000 sq ft manufacturing workshop in Dewas equipped
              with the best machines — and we have worked hard, embracing every opportunity, to get
              where we are today.
            </p>
            <div style={{ display: "flex", gap: 36, marginTop: 32, flexWrap: "wrap" }}>
              {[
                { v: 15, s: "+", l: "Years" },
                { v: 30, s: "+", l: "Employees" },
                { v: 8000, s: "", l: "Sq Ft" },
              ].map((x) => (
                <div key={x.l}>
                  <div className="num" style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 38, color: "var(--navy-800)" }}>
                    <Counter value={x.v} />
                    {x.s && <span style={{ color: "var(--orange-500)" }}>{x.s}</span>}
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--slate-500)" }}>
                    {x.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="section" style={{ background: "var(--mist)", paddingTop: 80, paddingBottom: 80 }}>
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow center">What Drives Us</span>
            <h2>Our mission &amp; vision</h2>
          </Reveal>
          <div className="vm-grid">
            <Reveal className="vm mission">
              <div className="vico">
                <Target />
              </div>
              <h3>Our Mission</h3>
              <p>
                To continuously achieve economic value by optimizing resources through operational
                excellence — enabled by technology and driven by innovation. We empower our workforce
                to deliver services that exceed customer expectations, providing value for money while
                ensuring strong returns to our employees and shareholders.
              </p>
            </Reveal>
            <Reveal className="vm vision" d={1}>
              <div className="vico">
                <Eye />
              </div>
              <h3>Our Vision</h3>
              <p>
                To achieve global benchmarking, fulfil our commitments, and create lasting customer
                growth value — all while empowering our people. We strive to be an organization
                recognised for reliability, precision and engineering integrity across every industry
                we serve.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section">
        <div className="wrap journey-grid" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 56 }}>
          <Reveal>
            <span className="eyebrow">Milestones</span>
            <h2 style={{ fontSize: 38, marginTop: 16 }}>Our journey of growth</h2>
            <p style={{ marginTop: 16, color: "var(--slate-600)", fontSize: 16, lineHeight: 1.7 }}>
              Every step forward has been earned through hard work and a willingness to embrace
              opportunity — building capability, capacity and trust year after year.
            </p>
          </Reveal>
          <Reveal className="journey" d={1}>
            {JOURNEY.map((j, i) => (
              <div className="j-item" key={j.year} style={i === JOURNEY.length - 1 ? { paddingBottom: 0 } : undefined}>
                <div className="yr">{j.year}</div>
                <h4>{j.title}</h4>
                <p>{j.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section" style={{ background: "var(--mist)" }}>
        <div className="wrap">
          <Reveal className="sec-head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Leadership</span>
            <h2 style={{ fontSize: 38 }}>Guided by hands-on engineering experience</h2>
          </Reveal>
          <Reveal className="leader">
            <div className="portrait">
              <div className="ph-slot">
                <div className="mono">MP</div>
                <span>
                  Founder portrait
                  <br />
                  — add photo —
                </span>
              </div>
            </div>
            <div className="lc">
              <div className="qmark">&ldquo;</div>
              <blockquote>
                We have worked hard to get where we are today, and we embrace every opportunity that
                comes our way. Our customers grow their business — and we grow with their satisfaction.
              </blockquote>
              <div className="name">Founder &amp; Managing Director</div>
              <div className="role">M.P. Electric Works</div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Partner with MPEW"
        title="Let's engineer your next project together."
        text="From a single component to a complete installation — talk to our team today."
        actions={[
          { label: "Get a Quote", href: "/contact#quote", variant: "primary" },
          { label: "Our Services", href: "/services", variant: "ghost" },
        ]}
      />
    </>
  );
}
