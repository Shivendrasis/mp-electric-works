import type { Metadata } from "next";
import { MapPin, Mail, MessageCircle, Clock } from "lucide-react";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote",
  description:
    "Contact MP Electric Works, Dewas. Factory: 5-1/B Industrial Area No.1, A.B. Road, Dewas 455001, M.P. Email: mp.elect.w@gmail.com. Request a quote today.",
  alternates: { canonical: "/contact" },
};

const MAP_SRC =
  "https://maps.google.com/maps?q=Industrial%20Area%20No%201%20A.B.%20Road%20Dewas%20455001%20Madhya%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed";

export default function ContactPage() {
  const { address } = SITE;
  return (
    <>
      <Banner
        current="Contact Us"
        title="Let's talk about your project"
        description="Share your requirement, drawing or specification and our team will get back to you with a tailored quotation. We're based in Dewas and serve clients across India."
      />

      <section className="section" id="quote">
        <div className="wrap contact-grid">
          {/* INFO */}
          <Reveal>
            <span className="eyebrow">Get in Touch</span>
            <h2 style={{ fontSize: 32, marginTop: 14 }}>Reach MP Electric Works</h2>
            <p style={{ color: "var(--slate-600)", fontSize: 16, marginTop: 14, lineHeight: 1.7 }}>
              We&apos;re happy to discuss machining, fabrication, winding or electrical panel
              requirements — and to welcome you to our facility.
            </p>
            <div className="info-stack" style={{ marginTop: 30 }}>
              <div className="info-card">
                <div className="ici">
                  <MapPin />
                </div>
                <div>
                  <h4>Factory Address</h4>
                  <p>
                    {address.line1},<br />
                    {address.line2}, {address.city} &ndash; {address.postalCode},<br />
                    {address.region}, {address.country}
                  </p>
                </div>
              </div>
              <div className="info-card">
                <div className="ici">
                  <Mail />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>
              <div className="info-card">
                <div className="ici">
                  <MessageCircle />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                    {SITE.phone} — chat with us
                  </a>
                </div>
              </div>
              <div className="info-card">
                <div className="ici">
                  <Clock />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>
                    Monday &ndash; Saturday
                    <br />
                    9:30 AM &ndash; 6:30 PM
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal d={1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="sec-head" style={{ marginBottom: 28 }}>
            <span className="eyebrow">Find Us</span>
            <h2 style={{ fontSize: 30 }}>Our location in Dewas</h2>
          </Reveal>
          <Reveal className="map-wrap">
            <iframe
              title="MP Electric Works location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={MAP_SRC}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
