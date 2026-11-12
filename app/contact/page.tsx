import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — email us or send a service request in ${site.serviceAreaSummary} and we'll get right back with you.`,
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact</h1>
          <p>
            Contact us and we&apos;ll get right back with you — email or send a
            service request and we&apos;ll follow up promptly.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            <article className="card">
              <div className="icon">✉</div>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Email us anytime and we&apos;ll get back to you promptly.
              </p>
            </article>
            <article className="card">
              <div className="icon">📋</div>
              <h3>Service request</h3>
              <p>
                Contact us and we&apos;ll get right back with you. Include tank
                details, location, and preferred timing.
              </p>
              <Link href="/book" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                Service request form
              </Link>
            </article>
          </div>

          <p style={{ marginTop: "2rem", color: "var(--text-muted)" }}>
            Service areas: {site.serviceAreaSummary}
          </p>
        </div>
      </section>
    </>
  );
}
