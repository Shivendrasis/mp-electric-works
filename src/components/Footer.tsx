import Link from "next/link";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { NAV, FOOTER_SERVICES, SITE, WHATSAPP_URL } from "@/lib/site";
import Brand from "./Brand";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const year = 2026; // build-time constant — avoids hydration drift
  const { address } = SITE;

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <Brand closeLabel />
            <p className="fdesc">
              Engineering excellence in electrical &amp; mechanical solutions
              since 2008. Your trusted manufacturing, machining, fabrication and
              winding partner in Dewas, M.P.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Email">
                <Mail />
              </a>
              <a href={WHATSAPP_URL} aria-label="WhatsApp" target="_blank" rel="noopener">
                <MessageCircle />
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.key}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link href="/services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <div className="contact-row">
              <MapPin />
              <span>
                {address.line1},<br />
                {address.line2}, {address.city} &ndash; {address.postalCode},
                <br />
                {address.region}, {address.country}
              </span>
            </div>
            <div className="contact-row">
              <Mail />
              <span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </span>
            </div>
            <div className="contact-row">
              <Clock />
              <span>{SITE.hours}</span>
            </div>
            <Link className="btn btn-primary" href="/contact#quote" style={{ marginTop: 8 }}>
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="legal">
          <span>&copy; {year} M.P. Electric Works. All rights reserved.</span>
          <span style={{ fontFamily: "var(--mono)", fontSize: "11.5px", letterSpacing: ".06em" }}>
            EST. 2008 &middot; DEWAS &middot; MADHYA PRADESH
          </span>
        </div>
      </div>
    </footer>
  );
}
