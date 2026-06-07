import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Workshop, Machining, Winding & Panels",
  description:
    "A visual tour of MP Electric Works — CNC machining, precision components, fabrication, motor winding and electrical panels from our Dewas workshop.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Banner
        current="Gallery"
        title="Inside MP Electric Works"
        description="A visual tour of our people, machines and the precision components we deliver every day. Click any image to view it larger."
      />

      <section className="section">
        <div className="wrap">
          <GalleryClient />
        </div>
      </section>

      <Reveal>
        <CTABand
          eyebrow="Like what you see?"
          title="Let's add your project to our gallery."
          text="Reach out and let's discuss how we can help."
          actions={[
            { label: "Get a Quote", href: "/contact#quote", variant: "primary" },
            { label: "Our Services", href: "/services", variant: "ghost" },
          ]}
        />
      </Reveal>
    </>
  );
}
