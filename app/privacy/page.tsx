import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Your privacy</span>
          <h1>Privacy Policy</h1>
          <p>How {site.name} handles information submitted through this website.</p>
        </div>
      </div>

      <section className="section">
        <div className="container prose" style={{ maxWidth: 720 }}>
          <p className="legal-note">{site.fictitiousNameNotice}</p>

          <h2>Information we collect</h2>
          <p>
            When you contact us or submit a service request, we may collect your
            name, phone number, email address, and tank and location details,
            plus any photos you attach.
          </p>

          <h2>How we use it</h2>
          <p>
            We use this information to respond to service requests, communicate
            with you, and schedule aquarium work. We do not sell your personal
            information.
          </p>

          <h2>Payments</h2>
          <p>
            If payment is collected through this site, Stripe or another payment
            processor may process payment data according to its own privacy
            policy. We do not need your full payment details to schedule service.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Contact {site.name} at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
