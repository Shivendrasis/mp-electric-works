"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Item = { img: string; cat: string; label: string };

const ITEMS: Item[] = [
  { img: "/images/cnc-machine.jpg", cat: "machining", label: "CNC Turning Center" },
  { img: "/images/cnc-shop.jpg", cat: "machining", label: "CNC Machine Shop" },
  { img: "/images/parts-turned.jpg", cat: "components", label: "Turned Components" },
  { img: "/images/winding-2.jpg", cat: "winding", label: "Winding Shop" },
  { img: "/images/panel-1.jpg", cat: "panels", label: "Electrical Panel" },
  { img: "/images/lathe-1.jpg", cat: "machining", label: "Lathe Machine" },
  { img: "/images/parts-shafts.jpg", cat: "components", label: "Machined Shafts" },
  { img: "/images/factory-exterior.jpg", cat: "facility", label: "Our Facility · Dewas" },
  { img: "/images/parts-housings.jpg", cat: "components", label: "Pump Housings" },
  { img: "/images/fab-structure.jpg", cat: "fabrication", label: "Fabricated Structure" },
  { img: "/images/stators-1.jpg", cat: "winding", label: "Wound Stators" },
  { img: "/images/lathe-work.jpg", cat: "machining", label: "Precision Turning" },
  { img: "/images/panel-4.jpg", cat: "panels", label: "Control Panel" },
  { img: "/images/parts-rings1.jpg", cat: "components", label: "Machined Rings" },
  { img: "/images/motors-crate.jpg", cat: "fabrication", label: "Motor Assemblies" },
  { img: "/images/winding-1.jpg", cat: "winding", label: "Coil Winding" },
  { img: "/images/drill-press.jpg", cat: "machining", label: "Drill Machine" },
  { img: "/images/panels-outdoor.jpg", cat: "panels", label: "Panel Installation" },
  { img: "/images/bench-center.jpg", cat: "components", label: "Bench Centre Inspection" },
  { img: "/images/fab-1.jpg", cat: "fabrication", label: "Fabricated Components" },
  { img: "/images/oven.jpg", cat: "facility", label: "Baking Oven" },
  { img: "/images/winding-test.jpg", cat: "winding", label: "Stator Assembly" },
  { img: "/images/panel-2.jpg", cat: "panels", label: "Panel Wiring" },
  { img: "/images/substation-sunset.jpg", cat: "facility", label: "HT/LT Substation" },
  { img: "/images/lathe-2.jpg", cat: "machining", label: "Lathe Operation" },
  { img: "/images/parts-rings3.jpg", cat: "components", label: "Stator Housings" },
  { img: "/images/spm-machine.jpg", cat: "fabrication", label: "Special Purpose Machine" },
  { img: "/images/panel-control.jpg", cat: "panels", label: "Automation Panel" },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "machining", label: "Machining" },
  { key: "components", label: "Components" },
  { key: "fabrication", label: "Fabrication" },
  { key: "winding", label: "Winding" },
  { key: "panels", label: "Panels" },
  { key: "facility", label: "Facility" },
];

export default function GalleryClient() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = ITEMS.filter((it) => filter === "all" || it.cat === filter);

  const move = useCallback(
    (dir: number) => {
      setLightbox((cur) => {
        if (cur === null) return cur;
        return (cur + dir + visible.length) % visible.length;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, move]);

  const active = lightbox !== null ? visible[lightbox] : null;

  return (
    <>
      <div className="filters">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${filter === f.key ? " active" : ""}`}
            onClick={() => {
              setFilter(f.key);
              setLightbox(null);
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="masonry">
        {visible.map((it, i) => (
          <div
            className="m-item"
            key={it.img}
            onClick={() => setLightbox(i)}
            role="button"
            tabIndex={0}
            aria-label={`View ${it.label}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightbox(i);
              }
            }}
          >
            <Image src={it.img} alt={it.label} width={440} height={330} sizes="(max-width: 560px) 100vw, (max-width: 1080px) 50vw, 33vw" />
            <div className="ov">
              <span>{it.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <div
        className={`lightbox${active ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setLightbox(null);
        }}
      >
        {active && (
          <>
            <button className="lb-close" aria-label="Close" onClick={() => setLightbox(null)}>
              &times;
            </button>
            <button className="lb-nav lb-prev" aria-label="Previous" onClick={() => move(-1)}>
              &lsaquo;
            </button>
            <div className="lb-inner">
              <Image src={active.img} alt={active.label} width={1400} height={1000} style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "86vh" }} />
            </div>
            <button className="lb-nav lb-next" aria-label="Next" onClick={() => move(1)}>
              &rsaquo;
            </button>
          </>
        )}
      </div>
    </>
  );
}
