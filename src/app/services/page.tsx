import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Settings,
  Ruler,
  LayoutGrid,
  Layers,
  Container,
  Disc3,
  Magnet,
  Server,
  Columns3,
  Activity,
  Cpu,
  Gauge,
  Factory,
  Zap,
  Cable,
  type LucideIcon,
} from "lucide-react";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Services — CNC Machining, Fabrication, Winding & Electrical Panels",
  description:
    "MPEW services: CNC machining, precision job work, SPM, heavy fabrication, conveyors, motor winding, pump stators, PCC/MCC/APFC panels, HT & LT electrical works.",
  alternates: { canonical: "/services" },
};

type Service = { Icon: LucideIcon; title: string; text: string };
type Category = { n: string; title: string; count: string; services: Service[] };

const CATEGORIES: Category[] = [
  {
    n: "01",
    title: "Mechanical Services",
    count: "7 Services",
    services: [
      { Icon: Settings, title: "CNC Machining Services", text: "Precision CNC turning and machining in multiple materials to tight tolerances." },
      { Icon: Ruler, title: "Precision Job Work", text: "Machining job work for automobile, motor and pump industries with measured accuracy." },
      { Icon: LayoutGrid, title: "Special Purpose Machines", text: "Custom SPM design and manufacturing by a skilled, highly capable engineering team." },
      { Icon: Layers, title: "Heavy Fabrication", text: "Heavy structures and customised fabrication services for esteemed customers." },
      { Icon: Container, title: "Conveyor Manufacturing", text: "Material conveyors, trolleys and handling systems built to spec." },
      { Icon: Disc3, title: "Pump Stator Manufacturing", text: "Wound stators for solar, agriculture and domestic pump motors." },
      { Icon: Magnet, title: "Motor Winding Services", text: "25+ years of winding expertise across induction and special motors." },
    ],
  },
  {
    n: "02",
    title: "Electrical Panels",
    count: "5 Services",
    services: [
      { Icon: Server, title: "PCC Panels", text: "Power control centre panels for reliable power distribution." },
      { Icon: Columns3, title: "MCC Panels", text: "Motor control centre panels engineered for industrial loads." },
      { Icon: Activity, title: "APFC Panels", text: "Automatic power factor correction for energy efficiency." },
      { Icon: Cpu, title: "Control & Automation Panels", text: "RTU, metering, control and automation panels for modern plants." },
      { Icon: Gauge, title: "Metering & Distribution Panels", text: "Accurate metering and distribution panels for industrial & renewable use." },
    ],
  },
  {
    n: "03",
    title: "HT & LT Electrical Works",
    count: "3 Services",
    services: [
      { Icon: Factory, title: "Substation Installation", text: "33/11 KV substation installation with legal & liaison support." },
      { Icon: Zap, title: "Transmission Line Execution", text: "Transmission line execution and street-light installation projects." },
      { Icon: Cable, title: "Cable Laying & Termination", text: "HT cable laying, termination and complete metering-yard erection." },
    ],
  },
];

const FEATURED_POINTS = [
  "CNC turning & lathe work",
  "Drilling, tapping & threading",
  "0.001 mm measured accuracy",
  "Material: MS, CI, SS, Al, EN8",
];

export default function ServicesPage() {
  return (
    <>
      <Banner
        current="Services"
        title="One partner. Complete electrical & mechanical capability."
        description="From precision CNC machining and heavy fabrication to motor winding and complete electrical panel solutions — explore the full range of services MPEW delivers under one roof."
      />

      {/* FEATURED SERVICE */}
      <section className="section" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <Reveal className="feature-svc">
            <div className="fimg">
              <Image src="/images/cnc-machine.jpg" alt="CNC turning center" fill sizes="(max-width: 860px) 100vw, 55vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="fbd">
              <span className="tag">Flagship Capability</span>
              <h3>CNC Machining &amp; Precision Job Work</h3>
              <p>
                We provide highly precise machining job-work facilities to the automobile, motor and
                pump-sector industries in MS, CI, SS, Aluminium and EN8 — delivering accuracy exactly
                as per customer requirement.
              </p>
              <ul>
                {FEATURED_POINTS.map((p) => (
                  <li key={p}>
                    <Check /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          {CATEGORIES.map((cat) => (
            <div className="cat" key={cat.n}>
              <Reveal className="cat-head">
                <span className="n">{cat.n}</span>
                <h2>{cat.title}</h2>
                <span className="rule" />
                <span className="count">{cat.count}</span>
              </Reveal>
              <div className="svc-grid">
                {cat.services.map(({ Icon, title, text }, i) => (
                  <Reveal className="svc" key={title} d={i % 3}>
                    <div className="ico">
                      <Icon />
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="more">
                      Learn more <ArrowRight />
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Tell us what you need"
        title="Not sure which service fits? Let's talk it through."
        text="Share your drawing, spec or requirement and we'll recommend the right approach."
        actions={[
          { label: "Request a Quote", href: "/contact#quote", variant: "primary" },
          { label: "Our Infrastructure", href: "/infrastructure", variant: "ghost" },
        ]}
      />
    </>
  );
}
