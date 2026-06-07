/* ============================================================
   MP ELECTRIC WORKS — central site configuration & content
   ============================================================ */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.mpelectricworks.com";

export const SITE = {
  name: "MP Electric Works",
  shortName: "MPEW",
  legalName: "M.P. Electric Works",
  established: 2008,
  url: SITE_URL,
  email: "mp.elect.w@gmail.com",
  phone: "+91 9009926010",
  phoneRaw: "+919009926010",
  whatsapp: "919009926010",
  whatsappText: "Hello MP Electric Works, I am interested in your services.",
  hours: "Mon–Sat, 9:30 AM – 6:30 PM",
  address: {
    line1: "5-1/B, Industrial Area No. 1",
    line2: "A.B. Road",
    city: "Dewas",
    postalCode: "455001",
    region: "Madhya Pradesh",
    country: "India",
  },
  geo: { lat: 22.9676, lng: 76.0534 },
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  SITE.whatsappText,
)}`;

export const NAV = [
  { label: "Home", href: "/", key: "home" },
  { label: "About Us", href: "/about", key: "about" },
  { label: "Services", href: "/services", key: "services" },
  { label: "Industries", href: "/industries", key: "industries" },
  { label: "Infrastructure", href: "/infrastructure", key: "infrastructure" },
  { label: "Clients", href: "/clients", key: "clients" },
  { label: "Gallery", href: "/gallery", key: "gallery" },
  { label: "Contact Us", href: "/contact", key: "contact" },
] as const;

export const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Employees" },
  { value: 8000, suffix: "", label: "Sq Ft Facility" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Industrial Clients" },
] as const;

export const FOOTER_SERVICES = [
  "CNC Machining",
  "Heavy Fabrication",
  "Motor & Stator Winding",
  "Electrical Panels",
  "HT & LT Works",
  "Special Purpose Machines",
] as const;

/* Contact form — service options */
export const SERVICE_OPTIONS = [
  "CNC Machining & Job Work",
  "Special Purpose Machines (SPM)",
  "Heavy Fabrication & Conveyors",
  "Motor Winding & Pump Stators",
  "Electrical Panels (PCC / MCC / APFC)",
  "Control & Automation Panels",
  "HT & LT Electrical Works",
  "Substation / Cable Laying",
  "Other / Not sure",
] as const;
