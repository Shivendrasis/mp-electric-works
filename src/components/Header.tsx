"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import Brand from "./Brand";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = !isHome || scrolled;

  return (
    <>
      <header className={`site-header ${solid ? "solid" : "transparent"}`}>
        <div className="wrap">
          <Brand />
          <nav className="nav-links" aria-label="Primary">
            {NAV.map((n) => (
              <Link
                key={n.key}
                href={n.href}
                className={`nav-link${isActive(n.href) ? " active" : ""}`}
                aria-current={isActive(n.href) ? "page" : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            className="btn btn-primary nav-cta"
            href="/contact#quote"
            style={{ padding: "11px 20px" }}
          >
            Get Quote
          </Link>
          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? " open" : ""}`}>
        <div className="md-top">
          <Brand closeLabel />
          <button
            className="md-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        {NAV.map((n) => (
          <Link
            key={n.key}
            href={n.href}
            className={`m-link${isActive(n.href) ? " active" : ""}`}
            onClick={() => setOpen(false)}
          >
            {n.label}
            <span style={{ opacity: 0.4 }}>&rsaquo;</span>
          </Link>
        ))}
        <Link
          className="btn btn-primary btn-lg md-cta"
          href="/contact#quote"
          onClick={() => setOpen(false)}
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}
