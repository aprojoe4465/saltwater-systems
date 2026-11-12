import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, a fictitious name of ${site.legalName}, providing aquarium service throughout ${site.serviceAreaSummary}.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Our company</span>
          <h1>About {site.name}</h1>
          <p>
            Aquarium service, installation, and maintenance for saltwater and
            freshwater tanks — a fictitious name of {site.legalName}.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container prose" style={{ maxWidth: 720 }}>
          <h2>Who we are</h2>
          <p>
            {site.fictitiousNameNotice} We provide aquarium service throughout{" "}
            {site.serviceAreaSummary}, including installation, maintenance,
            cleaning, water testing, and livestock or coral help.
          </p>
          <p>
            Whether you have a reef tank, a planted freshwater aquarium, or a
            display at home or at a business, we focus on clear communication
            and practical care for the system you already have — or the one you
            want to set up.
          </p>

          <h2>What matters to us</h2>
          <ul>
            <li>Honest assessments before work begins</li>
            <li>Careful handling of your tank, livestock, and space</li>
            <li>Straightforward follow-up after you contact us</li>
          </ul>

          <h2>Related businesses</h2>
          <p>
            {site.name} is part of the same company as{" "}
            {site.sisterBrands.map((brand, index) => (
              <span key={brand.url}>
                {index > 0 ? " and " : ""}
                <a href={brand.url} rel="noopener noreferrer">
                  {brand.name}
                </a>{" "}
                ({brand.note})
              </span>
            ))}
            .
          </p>

          <p>
            Have questions?{" "}
            <Link href="/contact">Contact us</Link> or{" "}
            <Link href="/book">send a service request</Link>. Contact us and
            we&apos;ll get right back with you.
          </p>

          <div className="cta-row" style={{ marginTop: "1.5rem" }}>
            <Link href="/book" className="btn btn-primary">
              Request service
            </Link>
            <Link href="/book" className="btn btn-chrome">
              Contact us and we&apos;ll get right back with you.
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
