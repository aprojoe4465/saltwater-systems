import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Service",
  description:
    `Request aquarium service from ${site.name} — installation, maintenance, cleaning, water testing, or livestock and coral help.`,
};

export default function BookPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Schedule</span>
          <h1>Request service</h1>
          <p>
            Fill out the form below. Contact us and we&apos;ll get right back
            with you to confirm timing.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
