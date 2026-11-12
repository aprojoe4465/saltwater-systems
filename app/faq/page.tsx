import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${site.name} aquarium service in ${site.serviceAreaSummary}.`,
};

const faqs = [
  {
    q: "What kinds of aquariums do you service?",
    a: "Saltwater and freshwater tanks, including reef systems and planted freshwater aquariums, in homes, offices, and businesses.",
  },
  {
    q: "Where do you work?",
    a: `We serve ${site.serviceAreaSummary}. If you are just outside that area, still send a request — we may be able to help depending on scheduling.`,
  },
  {
    q: "How do I request service?",
    a: "Use the service request form or email us. Contact us and we'll get right back with you to confirm timing.",
  },
  {
    q: "What should I include in a request?",
    a: "Tank type and size, whether it is saltwater or freshwater, your city or address, what you need, and photos of the tank if you have them. Water-test numbers are helpful if you already have them.",
  },
  {
    q: "Do you offer maintenance plans?",
    a: `Yes. Plan frequency, what's included, and pricing are confirmed after we review the tank. ${site.placeholders.planDetails} Pricing is ${site.placeholders.price}.`,
  },
  {
    q: "Do you sell fish or coral?",
    a: "We can help with livestock and coral questions and with work that is a good fit for your system. Availability is confirmed case by case. We do not publish a livestock list or prices on this site.",
  },
  {
    q: "How is pricing handled?",
    a: `We quote after we understand the tank, location, and work needed. ${site.placeholders.price} until we confirm details with you.`,
  },
  {
    q: "Is Saltwater Systems a separate company?",
    a: site.fictitiousNameNotice,
  },
];

export default function FaqPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Questions</span>
          <h1>Frequently asked questions</h1>
          <p>
            General answers about {site.name}. If you don&apos;t see what you
            need, contact us and we&apos;ll get right back with you.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((item) => (
              <article key={item.q} className="faq-item">
                <h2>{item.q}</h2>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
          <div className="cta-row" style={{ marginTop: "2rem" }}>
            <Link href="/book" className="btn btn-primary">
              Request service
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
