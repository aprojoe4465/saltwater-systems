import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Service terms</span>
          <h1>Terms of Service</h1>
          <p>Practical terms for aquarium service from {site.name}.</p>
        </div>
      </div>

      <section className="section">
        <div className="container prose" style={{ maxWidth: 720 }}>
          <p className="legal-note">{site.fictitiousNameNotice}</p>

          <h2>Estimates and service</h2>
          <p>
            Estimates are based on the information available and, when applicable,
            an on-site review. They are not guarantees of the final cost, time, or
            outcome. Additional work will be discussed as needed before it is
            performed.
          </p>

          <h2>Scheduling and travel</h2>
          <p>
            Appointments depend on availability, location, and safe access to the
            aquarium. Any applicable travel fees will be communicated before
            service is scheduled.
          </p>

          <h2>Payment</h2>
          <p>
            Payment is due according to the terms agreed for the service. Customers
            are responsible for approved work, supplies, travel fees, and other
            charges disclosed during scheduling or service. Pricing is confirmed
            before work begins and may be listed as [Price TBD] until then.
          </p>

          <h2>Customer responsibilities</h2>
          <p>
            Please provide accurate tank, location, and contact information and
            make sure we have timely access to the aquarium and a reasonably safe
            workspace. You are responsible for noting any special conditions,
            livestock concerns, or access limits before a visit.
          </p>

          <h2>Aquarium work and liability</h2>
          <p>
            Aquarium systems and livestock can have hidden conditions. While we
            use reasonable care, {site.name} is not responsible for pre-existing
            conditions, concealed problems, or issues outside the agreed scope of
            work. To the extent permitted by law, liability for a service is
            limited to the amount paid for that service, and we are not liable
            for indirect or consequential losses, including livestock loss outside
            the agreed scope of work.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact {site.name} at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
