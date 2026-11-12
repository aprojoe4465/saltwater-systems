import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { photoServices } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Services",
  description:
    `Aquarium installation, maintenance plans, cleaning, water testing, and livestock or coral help from ${site.name} throughout ${site.serviceAreaSummary}.`,
};

const services = [
  {
    title: "Installation & setup",
    body: "New aquarium installation and system setup for saltwater and freshwater tanks. We help plan filtration, lighting, and equipment around the space you have and the livestock you want to keep.",
  },
  {
    title: "Maintenance plans",
    body: "Regular visits for ongoing care. Frequency, what’s included, and pricing are set with you after we see the tank. Plan details are [Maintenance plan details TBD], and pricing is [Price TBD].",
  },
  {
    title: "Cleaning",
    body: "Glass, substrate, filter, and water-change work to keep the display clean and the system running. Scope depends on tank size, condition, and access.",
  },
  {
    title: "Water testing",
    body: "Testing of key aquarium water parameters, with a straightforward readout of what we find and what we recommend next. We do not publish a fixed test menu or prices here.",
  },
  {
    title: "Livestock & coral help",
    body: "Help with fish, invertebrates, and coral — from compatibility questions to hands-on support. Availability and any livestock or coral work are confirmed case by case. We do not list animals, coral, or prices on this site.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">What we offer</span>
          <h1>Aquarium services</h1>
          <p>
            Installation, maintenance, cleaning, water testing, and livestock or
            coral help for saltwater and freshwater tanks throughout{" "}
            {site.serviceAreaSummary}.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container services-spotlight">
          <figure className="services-photo">
            <Image
              src={photoServices.src}
              alt={photoServices.alt}
              width={photoServices.width}
              height={photoServices.height}
              className="services-photo-img"
            />
            <figcaption className="photo-caption">
              Stock photo: {photoServices.credit}. Illustrative, not a customer tank.
            </figcaption>
          </figure>
          <div>
            <div className="section-head">
              <h2>Care for saltwater and freshwater tanks</h2>
              <p>
                The list below is a starting point. Tell us about your tank when
                you request service, including photos if you have them. Pricing
                is quoted after we understand the work — {site.placeholders.price}.
              </p>
            </div>
            <div className="card-grid">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>How a service request works</h2>
            <p>
              Send a request with your tank type, location, and what you need.
              Contact us and we&apos;ll get right back with you to confirm timing
              and next steps.
            </p>
          </div>
          <div className="cta-row">
            <Link href="/book" className="btn btn-primary">
              Request service
            </Link>
            <Link href="/book" className="btn btn-chrome">
              Contact us and we&apos;ll get right back with you.
            </Link>
            <Link href="/faq" className="btn btn-ghost">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
