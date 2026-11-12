import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { photoGallery, photoHero } from "@/lib/photos";

const highlights = [
  {
    title: "Installation & setup",
    body: "New tanks and system setup for saltwater and freshwater aquariums, planned around your space and the livestock you want to keep.",
  },
  {
    title: "Maintenance plans",
    body: "Regular care so filters, water quality, and the display stay on track. Plan frequency and pricing are confirmed with you — [Price TBD].",
  },
  {
    title: "Cleaning & water testing",
    body: "Scheduled cleaning, water changes, and testing so you know where the tank stands before we recommend the next step.",
  },
  {
    title: "Livestock & coral help",
    body: "Advice and hands-on help with fish, invertebrates, and coral, confirmed case by case. We do not list livestock or prices here.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero-with-photo">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Florida aquarium service</span>
            <h1>
              Saltwater and freshwater <span>aquarium care</span>
            </h1>
            <p className="lead">
              {site.name} provides aquarium service, installation, and
              maintenance throughout {site.serviceAreaSummary}. Contact us and
              we&apos;ll get right back with you.
            </p>
            <div className="cta-row">
              <Link href="/book" className="btn btn-primary">
                Request service
              </Link>
              <Link href="/book" className="btn btn-chrome">
                Contact us and we&apos;ll get right back with you.
              </Link>
              <Link href="/services" className="btn btn-ghost">
                View services
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <figure className="hero-photo">
              <Image
                src={photoHero.src}
                alt={photoHero.alt}
                width={photoHero.width}
                height={photoHero.height}
                priority
                className="hero-photo-img"
              />
            </figure>
            <p className="photo-caption">
              Stock photo: {photoHero.credit}. Illustrative, not a customer tank.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What we help with</h2>
            <p>
              Service for home, office, and business aquariums — saltwater reef
              systems and freshwater tanks. Details and pricing are confirmed
              after we review your request. {site.placeholders.price}
            </p>
          </div>
          <div className="card-grid">
            {highlights.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="gallery">
        <div className="container">
          <div className="section-head">
            <h2>Saltwater and freshwater aquariums</h2>
            <p>
              Free-license stock photos of aquarium environments like the tanks
              we service. These are not photographs of {site.name} customer
              systems.
            </p>
          </div>
          <div className="boat-gallery">
            {photoGallery.map((img) => (
              <figure key={img.src} className="boat-card">
                <div className="boat-card-frame">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="boat-card-img"
                  />
                </div>
                <figcaption className="photo-caption">
                  {img.credit}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Service area</h2>
            <p>
              We currently serve {site.serviceAreaSummary}. If you are just
              outside these counties, still reach out — we may be able to help
              depending on scheduling.
            </p>
          </div>
          <div className="cta-row">
            <Link href="/book" className="btn btn-primary">
              Request service
            </Link>
            <Link href="/service-area" className="btn btn-ghost">
              View service area
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
